"use client";

import { RebootClient } from "@reboot-dev/reboot-react";

// Need to instantiate `RebootClient` in a file that has "use client",
// will update in a future release to remove this requirement.
const client = new RebootClient("http://localhost:9991");

export default client;
