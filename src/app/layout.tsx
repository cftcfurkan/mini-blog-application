import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mini Blog",
  description: "A simple blog application built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className + " relative"}>
        <div
          className="absolute inset-0 -z-10 blur-xl"
          style={{
            backgroundImage:
              "linear-gradient(to top, #0f1020 -20%, rgb(41, 19, 85) 50%, #0f1020 80%)",
            backgroundSize: "100% 5%",
            backgroundRepeat: "repeat",
            minHeight: "100vh",
            color: "white"
          }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
