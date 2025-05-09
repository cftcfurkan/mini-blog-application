import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Montserrat } from "next/font/google";
import I18nProvider from "./i18n-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mini Blog",
  description: "A simple blog application built with Next.js",
};

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${montserrat.variable}`}
    >
      <body className={inter.className + " relative"}>
        <div
          className="absolute inset-0 -z-10 blur-xl"
          style={{
            backgroundImage: `
            linear-gradient(
              to bottom,
              #0f1020 2%,
              rgb(28, 10, 65) 10%,
              #0f1020 20%,
              #0f1020 40%,
              rgb(28, 10, 65) 50%,
              #0f1020 60%,
              #0f1020 95%,
              rgb(28, 10, 65) 100%
            )
          `,
            backgroundSize: "100% 100%",
            backgroundRepeat: "repeat",
            minHeight: "100vh",
          }}
        />
        <I18nProvider>
          <Providers>{children}</Providers>
        </I18nProvider>
      </body>
    </html>
  );
}
