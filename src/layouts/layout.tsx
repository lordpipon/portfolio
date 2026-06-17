import React from "react";
import "../tailwind.css";

export type LayoutProps = {
  title?: string;
  canonical?: string;
  children: React.ReactNode;
};

const siteTitle = "freeutka";
const commit = process.env.VERCEL_GIT_COMMIT_SHA?.slice(0, 7) ?? "dev";

const Layout: React.FC<LayoutProps> = ({ title = siteTitle, canonical = "/", children }) => (
  <html lang="en">
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width" />
      <link rel="canonical" href={`https://freeutka.xyz${canonical}`} />
      <meta name="generator" content="freeutka React layout" />
      <title>{title}</title>
      <meta name="description" content="Just a random backend developer" />
      <meta name="keywords" content="freeutka,EmailThing" />
      <meta name="author" content="freeutka" />
      <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#111111" />
      <meta name="theme-color" content="#111111" />
      <meta name="color-scheme" content="dark" />
      <meta property="og:title" content="freeutka" />
      <meta property="og:description" content="Just a random backend developer" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://freeutka.xyz" />
      <meta property="og:image" content="https://freeutka.xyz/freeutka.png" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "freeutka",
            author: { "@type": "Person", name: "freeutka" },
            description: "Just a random backend developer.",
            logo: "https://freeutka.xyz/freeutka.png",
            url: "https://freeutka.xyz",
          }),
        }}
      />
      <style id="tailwind-styles">/*tailwind*/</style>
    </head>
    <div className="fixed bottom-2 right-4 text-xs text-text-secondary/60">
      <a href={`https://github.com/freeutka/website/commit/${commit}`} className="underline hover:no-underline" title="Commit">
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
