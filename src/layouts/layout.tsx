import React from "react";
import "../tailwind.css";

// You can use next/head or react-helmet if SSR/SPA, but since this is static, just output direct head
export type LayoutProps = {
  title?: string;
  canonical?: string;
  children: React.ReactNode;
};
const siteTitle = "freeutka";

const Layout: React.FC<LayoutProps> = ({ title = siteTitle, canonical = "/", children }) => (
  <html lang="en">
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width" />
      <link rel="icon" type="image/svg+xml" href="/fire_flat.svg" />
      <link rel="canonical" href={`https://freeutka.is-a.dev${canonical}`} />
      <meta name="generator" content="freeutka React layout" />
      <title>{title}</title>
      <meta name="description" content="Just a random person on the internet" />
      <meta name="keywords" content="freeutka,EmailThing" />
      <meta name="author" content="freeutka" />
      {/* Discord coloring etc */}
      <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#1a1a1a" />
      <meta name="theme-color" content="#FF6723" />
      <meta name="color-scheme" content="dark" />
      {/* Fancier SEO */}
      <meta property="og:title" content="freeutka" />
      <meta property="og:description" content="Just a random person on the internet" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://freeutka.is-a.dev/" />
      <meta property="og:image" content="https://freeutka.is-a.dev/fire_anim.png" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "freeutka",
          author: { "@type": "Person", name: "freeutka" },
          description: "Just a random person on the internet.",
          logo: "https://freeutka.is-a.dev/fire_anim.png",
          url: "https://freeutka.is-a.dev/"
        })
      }} />
      {/* MUST NOT REMOVE */}
      <style id="tailwind-styles">/*tailwind*/</style>
    </head>
    <body className="font-sans">
      {children}
      {process.env.EXTRA_SCRIPTS && <div dangerouslySetInnerHTML={{ __html: process.env.EXTRA_SCRIPTS }} />}
    </body>
  </html>
);

export default Layout;
