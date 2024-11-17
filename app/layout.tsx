import type { Metadata } from "next";
import { Fira_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/navbar";

const firaSans = Fira_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--firaSans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${firaSans.className} mt-2`}>
        <Navbar />
        <main className="max-w-screen-2xl mx-5 2xl:mx-auto">{children}</main>
      </body>
    </html>
  );
}
