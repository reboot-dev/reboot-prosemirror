"use client"

import { Struct } from "@bufbuild/protobuf";
import { ProseMirror, ProseMirrorProps, useEditorEffect, useEditorState } from "@nytimes/react-prosemirror";
import { collab, getVersion, sendableSteps, receiveTransaction } from "prosemirror-collab";
import { Node } from "prosemirror-model";
import { EditorState } from "prosemirror-state";
import { Step } from "prosemirror-transform"
import { ReactNode, useEffect, useMemo, useState } from "react";
import { useAuthority } from "@monorepo/api/rbt/thirdparty/prosemirror/v1/authority_rbt_react";
import { SCHEMA, DOC_ID } from "@monorepo/common/constants";

function RebootProseMirrorAdaptor({ id, children }: { id: string; children: ReactNode }) {
  // NOTE: while we could also drill `authority` in as a prop the
  // Reboot React library and generated code will ensure there is only
  // one instance of `authority` so it's not actually necessary.
  const authority = useAuthority({ id });

  // In order to send steps to the server (authority) we reactively
  // watch for updates to the state to see if we have anything
  // sendable and if we're not currently sending we send.
  const state = useEditorState();

  // Track if we're currently sending.
  const [sending, setSending] = useState(false);

  useEffect(() => {
    if (!sending) {
      let sendable = sendableSteps(state);
      if (sendable) {
        setSending(true);
        authority.apply({
          version: sendable.version,
          changes: sendable.steps.map(
            (step) => ({
              step: Struct.fromJson(step.toJSON()),
              client: `${sendable.clientID}`
            })
          )
        }).finally(() => { setSending(false); });
      }
    }
  }, [state, sending]);

  // In order to receive steps from the server (authority) we reactively
  // listen for changes via `authority.useChanges(...)` and then pass
  // those steps on to the view as a transaction.
  const [sinceVersion, setSinceVersion] = useState(0);

  const { response } = authority.useChanges({ sinceVersion });

  useEditorEffect((view) => {
    if (response !== undefined) {
      const { version, changes } = response;

      // Get out only the steps that we haven't applied locally.
      //
      // We need to do this because `authority.useChanges(...)` might get
      // another response before we've called `setSinceVersion(...)`
      // and thus we might get steps we've already applied which
      // ProseMirror can't seem to handle.
      const unappliedChanges = changes.slice(getVersion(view.state) - version);

      if (unappliedChanges.length > 0) {
        // NOTE: need to use a microtask here via
        // `Promise.resolve().then()` so that we can call
        // `view.dispatch()` which calls `flushSync` which can not be
        // called from within a React lifecycle hook like `useEffect`.
        Promise.resolve().then(() => {
          view.dispatch(
            receiveTransaction(
              view.state,
              unappliedChanges.map(
                ({ step }) => Step.fromJSON(SCHEMA, step?.toJson())
              ),
              unappliedChanges.map(({ client }) => Number(client))
            )
          );
          setSinceVersion(getVersion(view.state));
        });
      }
    }
  }, [response]);

  return <>{children}</>;
}

interface RebootProseMirrorProps extends ProseMirrorProps {
  id: string

  // Ensure that these aren't set.
  defaultState?: undefined
  state?: undefined
}

let haveLoggedAboutIncorrectUsage = false;

export default function RebootProseMirror({ id, children, ...props }: RebootProseMirrorProps) {
  // Log about incorrect usage (if we haven't done so already).
  if (
    (props.defaultState !== undefined || props.state !== undefined) &&
    !haveLoggedAboutIncorrectUsage
  ) {
    console.error(
      "Not expecting properties `defaultState` or `state` to be passed to " +
        "`RebootProseMirror` as it is responsible for fetching your state " +
        "via `id` instead",
    );
    haveLoggedAboutIncorrectUsage = true;
  }

  delete props.state;
  delete props.defaultState;

  const authority = useAuthority({ id });

  const [doc, setDoc] = useState<Node>();
  const [version, setVersion] = useState<number>();

  useEffect(() => {
    (async () => {
      const { response, aborted } = await authority.create();
      if (response) {
        setDoc(Node.fromJSON(SCHEMA, response?.doc?.toJson()));
        setVersion(response.version);
      } else {
        console.error(`Failed to get doc from authority: ${aborted.error}`);
      }
    })();
  }, []);

  const defaultState = useMemo(() => {
    if (!doc) return undefined;
    return EditorState.create({ schema: SCHEMA, doc, plugins: [collab({ version })] });
  }, [doc, version]);

  if (!doc) return <></>;

  return (
    <>
      <ProseMirror defaultState={defaultState} {...props}>
        <RebootProseMirrorAdaptor id={id}>
          {children}
        </RebootProseMirrorAdaptor>
      </ProseMirror>
    </>
  );
}
