"use client"

import { useState } from "react"
import RebootProsemirror from "@reboot-dev/reboot-prosemirror-react"
import { DOC_ID } from "common"

export default function Home() {
  const [mount, setMount] = useState<HTMLElement | null>(null);
  
  return (
    <RebootProseMirror id={DOC_ID} mount={mount}>
      <div ref={setMount} />
    </RebootProseMirror>
  );
}

