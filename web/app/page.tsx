"use client"

import { useState } from "react";
import RebootProseMirror from "./RebootProseMirror";
import { DOC_ID } from "@monorepo/common/constants";


export default function Home() {
  const [mount, setMount] = useState<HTMLElement | null>(null);
  
  return (
    <>
    <RebootProseMirror id={DOC_ID} mount={mount}>
      <div className="h-20 bg-black" ref={setMount} />
    </RebootProseMirror>
    </>
  );
}
