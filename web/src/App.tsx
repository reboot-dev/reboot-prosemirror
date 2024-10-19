import { ProseMirror, useEditorEffect, useEditorState } from "@nytimes/react-prosemirror";
import { collab, getVersion, sendableSteps, receiveTransaction } from "prosemirror-collab";
import { EditorState } from "prosemirror-state";
import { Step } from "prosemirror-transform"
import { ReactNode, useEffect, useMemo, useState } from "react";
import { useDoc } from "./api/docs/v1/docs_rbt_react";
import { SCHEMA, INITIAL_DOC, DOC_ID } from "../../constants";

function RebootProseMirrorAdaptor({ children }: { children: ReactNode }) {
  // NOTE: while we could also drill `doc` in as a prop the Reboot
  // React library and generated code will ensure there is only
  // one instance of `doc` so it's not actually necessary.
  const doc = useDoc({ id: DOC_ID });

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
        doc.apply({
          version: sendable.version,
          steps: sendable.steps.map(
            (step) => ({
              json: JSON.stringify(step.toJSON()),
              client: `${sendable.clientID}`
            })
          )
        }).finally(() => { setSending(false); });
      }
    }
  }, [state, sending]);

  // In order to receive steps from the server (authority) we reactively
  // listen for steps via `doc.useSteps(...)` and then pass those steps
  // on to the view as a transaction.
  const [sinceVersion, setSinceVersion] = useState(0);

  const { response } = doc.useSteps({ sinceVersion });

  useEditorEffect((view) => {
    if (response !== undefined) {
      const { version, steps } = response;

      // Get out only the steps that we haven't applied locally.
      //
      // We need to do this because `doc.useSteps(...)` might get
      // another response before we've called `setSinceVersion(...)`
      // and thus we might get steps we've already applied which
      // ProseMirror can't seem to handle.
      const unappliedSteps = steps.slice(getVersion(view.state) - version);

      if (unappliedSteps.length > 0) {
        // TODO: calling `view.dispatch()` here seems to cause
        // 'Warning: flushSync was called from inside a lifecycle method';
        // what is the correct way to do this within the
        // 'react-prosemirror' library?
        view.dispatch(
          receiveTransaction(
            view.state,
            unappliedSteps.map(
              ({ json }) => Step.fromJSON(SCHEMA, JSON.parse(json))
            ),
            unappliedSteps.map(({ client }) => Number(client))
          )
        );
        setSinceVersion(getVersion(view.state));
      }
    }
  }, [response]);

  return <>{children}</>;
}

function RebootProseMirror() {
  const [mount, setMount] = useState<HTMLElement | null>(null);

  const defaultState = useMemo(() => {
    return EditorState.create({
      SCHEMA,
      // TODO: actually get the `doc` and its `version` from
      // the server rather than starting with this "initial doc".
      doc: INITIAL_DOC,
      plugins: [collab({ version: 0 })]
    });
  });

  return (
    <>
      <ProseMirror mount={mount} defaultState={defaultState}>
        <RebootProseMirrorAdaptor>
          <div ref={setMount} />
        </RebootProseMirrorAdaptor>
      </ProseMirror>
    </>
  );
}

export function App() {
  return (
    <RebootProseMirror />
  );
}

export default App;
