"use client"

import { useState } from "react"
import RebootProseMirror from "./RebootProsemirror";
import { DOC_ID } from "@monorepo/common/constants";


export default function Home() {
  const [mount, setMount] = useState<HTMLElement | null>(null);
  
  return (
    <>
    <h1>Are we here?</h1>
    <RebootProseMirror id={DOC_ID} mount={mount}>
      <div className="h-20 bg-black" ref={setMount} />
    </RebootProseMirror>
    </>
  );
}
