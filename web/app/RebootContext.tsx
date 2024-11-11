"use client";

import { RebootClient, RebootClientProvider } from "@reboot-dev/reboot-react";
import { ReactNode } from "react";

export default function RebootContext({ children }: { children: ReactNode }) {
  const client = new RebootClient(
    process.env.NEXT_PUBLIC_ENDPOINT
      ? `https://${process.env.NEXT_PUBLIC_ENDPOINT}`
      : "https://dev.localhost.direct:9991"
  );

  return (
    <RebootClientProvider client={client}>
      <>{children}</>
    </RebootClientProvider>
  );
}