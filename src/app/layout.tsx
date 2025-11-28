import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Advent of Code 2025",
  description: "Solutions for Advent of Code 2025 from Plut0Dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
