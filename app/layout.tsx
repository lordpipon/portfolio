import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";
import { DepthEffects } from "@/components/depth-effects";

const mono = IBM_Plex_Mono({
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "lordpipon",
    template: "%s | lordpipon",
  },
  description: "A minecraft server developer, linux user and a developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${mono.variable} min-h-screen bg-background font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <DepthEffects />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
