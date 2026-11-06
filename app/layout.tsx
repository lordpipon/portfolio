import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "lordpipon",
    template: "%s | lordpipon",
  },
  description: "A minecraft server developer, linux user and a developer.",
  icons: {
    icon: "/pfp.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} min-h-screen bg-background font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="ambient-background" aria-hidden="true">
            <div className="ambient-grid" />
            <div className="ambient-glow ambient-glow-one" />
            <div className="ambient-glow ambient-glow-two" />
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
