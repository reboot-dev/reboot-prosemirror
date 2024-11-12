"use client";

import { RebootClient } from "@reboot-dev/reboot-react";

// Need to instantiate `RebootClient` in a file that has "use client",
// will update in a future release to remove this requirement.
const client = new RebootClient(
  process.env.NEXT_PUBLIC_ENDPOINT
    ? `https://${process.env.NEXT_PUBLIC_ENDPOINT}`
    : "https://dev.localhost.direct:9991"
);

export default client;
