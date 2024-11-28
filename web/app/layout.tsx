import { RebootClientProvider } from "@reboot-dev/reboot-react";
import client from "./client";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <RebootClientProvider client={client}>{children}</RebootClientProvider>
      </body>
    </html>
  );
}
