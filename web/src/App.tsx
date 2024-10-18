import { ProseMirror, useEditorEffect } from "@nytimes/react-prosemirror";
import { collab, getVersion, sendableSteps, receiveTransaction } from "prosemirror-collab";
import { EditorState } from "prosemirror-state";
import { Step } from "prosemirror-transform"
import { MutableRefObject, ReactNode, useEffect, useRef, useState } from "react";
import { useDoc } from "./api/docs/v1/docs_rbt_react";
import { SCHEMA, INITIAL_DOC, DOC_ID } from "../../constants";

function RebootProseMirrorUseSteps({
  waitingForVersion,
  children
}: {
  waitingForVersion: MutableRefObject<undefined | number>,
  children: ReactNode
}) {
  // NOTE: while we could also drill `doc` in as a prop the Reboot
  // React library and generated code will ensure there is only
  // one instance of `doc` so it's not actually necessary.
  const doc = useDoc({ id: DOC_ID });

  const [sinceVersion, setSinceVersion] = useState(0);

  const { response } = doc.useSteps({ sinceVersion });

  useEditorEffect((view) => {
    if (response !== undefined) {
      const { version, steps } = response;

      // Toggle if we've received the version we're waiting for so that
      // we can resume trying to apply our transactions on the server.
      if (waitingForVersion.current === version + steps.length) {
        waitingForVersion.current = undefined;
      }

      // Get out only the steps that we haven't applied locally.
      //
      // TODO: are we misunderstanding `prosemirror` and should we
      // not need to do this?
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

  const [state, setState] = useState(() => {
    return EditorState.create({
      SCHEMA,
      // TODO: actually get the `doc` and its `version` from
      // the server rather than starting with this "initial doc".
      doc: INITIAL_DOC,
      plugins: [collab({ version: 0 })]
    });
  });

  // Ref for tracking what version we are waiting to see before we can
  // start sending the next transaction to the server.
  const waitingForVersion = useRef(undefined);

  const doc = useDoc({ id: DOC_ID });

  function dispatchTransaction(tr): void {
    setState((state) => {
      let newState = state.apply(tr);
      // TODO: use the following once we've fixed bug #2989.
      // if (doc.apply.pending.length === 0) {
      if (waitingForVersion.current === undefined) {
        let sendable = sendableSteps(newState);
        if (sendable) {
          waitingForVersion.current = sendable.version + sendable.steps.length;
          doc.apply({
            version: sendable.version,
            steps: sendable.steps.map(
              (step) => ({
                json: JSON.stringify(step.toJSON()),
                client: `${sendable.clientID}`
              })
            )
          });
        }
      }

      return newState;
    });
  }

  return (
    <>
      <ProseMirror
        mount={mount}
        state={state}
        dispatchTransaction={dispatchTransaction}
      >
        <RebootProseMirrorUseSteps waitingForVersion={waitingForVersion}>
          <div ref={setMount} />
        </RebootProseMirrorUseSteps>
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
