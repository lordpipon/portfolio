import React from "react";
// @ts-ignore
import "../tailwind.css";

export type LayoutProps = {
  title?: string;
  canonical?: string;
  children: React.ReactNode;
};

const siteTitle = "lordpipon";
const commit = process.env.VERCEL_GIT_COMMIT_SHA?.slice(0, 7) ?? "dev";

const Layout: React.FC<LayoutProps> = ({ title = siteTitle, canonical = "/", children }) => (
  <html lang="en">
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width" />
      <link rel="canonical" href={`https://lordpipon.is-not-a.dev${canonical}`} />
      <meta name="generator" content="lordpipon React layout" />
      <title>{title}</title>
      <meta name="description" content="Idk just a dev i guess..." />
      <meta name="keywords" content="lordpipon" />
      <meta name="author" content="lordpipon" />
      <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#111111" />
      <meta name="theme-color" content="#111111" />
      <meta name="color-scheme" content="dark" />
      <meta property="og:title" content="lordpipon" />
      <meta property="og:description" content="Idk just a dev i guess..." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://lordpipon.is-not-a.dev" />
      <meta property="og:image" content="https://lordpipon.is-not-a.dev/lordpipon.webp" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "lordpipon",
            author: { "@type": "Person", name: "lordpipon" },
            description: "Idk just a dev i guess...",
            logo: "https://lordpipon.is-not-a.dev/lordpipon.webp",
            url: "https://lordpipon.is-not-a.dev",
          }),
        }}
      />
      <style id="tailwind-styles">/*tailwind*/</style>
    </head>
    <div className="fixed bottom-2 right-4 text-xs text-text-secondary/60">
      <a href={`https://github.com/lordpipon/portfolio/commit/${commit}`} className="underline hover:no-underline" title="Commit">
        {commit}
      </a>
    </div>
    <body className="font-sans antialiased">
      {children}
      {process.env.EXTRA_SCRIPTS && <div dangerouslySetInnerHTML={{ __html: process.env.EXTRA_SCRIPTS }} />}
    </body>
  </html>
);

export default Layout;
