import type { Metadata } from "next";
import "./globals.css";
import TanStackClient from "@/provider/tanStackClient";

export const metadata: Metadata = {
  title: "Front end test",
  description: "Description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <base href="/cookmaster/" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <TanStackClient>{children}</TanStackClient>
      </body>
    </html>
  );
}
