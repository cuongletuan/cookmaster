import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import TanStackClient from "@/provider/tanStackClient";
import Head from "next/head";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

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
      <body className={`${poppins.variable}`}>
        <TanStackClient>
          {" "}
          <Head>
            <base href="/cookmaster/" />
          </Head>
          {children}
        </TanStackClient>
      </body>
    </html>
  );
}
