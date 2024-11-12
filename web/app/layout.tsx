import RebootContext from "./RebootContext.js";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <RebootContext>{children}</RebootContext>
      </body>
    </html>
  );
}
