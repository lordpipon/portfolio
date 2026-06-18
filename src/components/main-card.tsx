import React from "react";

const links = [
  { href: "https://github.com/lordpipon", label: "github" },
  { label: "@piponidlo", plain: true },
  { href: "mailto:lordpipon@gmail.com", label: "email" },
] as const;

export const MainCard: React.FC = () => (
  <main
    id="main-card"
    className="window w-full"
    itemScope
    itemType="https://schema.org/Person"
  >
    <div className="window-bar">
      <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" aria-hidden />
      <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" aria-hidden />
      <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" aria-hidden />
      <span className="ml-1">
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.currentScript.parentElement.textContent = window.location.host;
            `,
          }}
        />
      </span>
    </div>

    <div className="window-body">
      <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-start">
        <picture
          className="h-24 w-24 shrink-0 overflow-hidden rounded-lg border border-border bg-placeholder"
          id="avatar-container"
        >
          <source srcSet="/freeutka.png" type="image/png" />
          <img
            fetchPriority="high"
            itemProp="image"
            src="/freeutka.png"
            alt="pfp"
            height={96}
            width={96}
            className="h-full w-full object-cover"
          />
        </picture>

        <div className="min-w-0 flex-1 text-center sm:text-left">
          <h1 id="page-title" className="text-xl font-bold" itemProp="name">
            lordpipon
          </h1>
          <p className="mt-1 text-sm text-text-secondary" itemProp="description">
            Just a random backend developer
          </p>

          <nav
            className="mt-4 flex flex-wrap items-center justify-center gap-x-1 gap-y-1 text-sm sm:justify-start"
            aria-label="Social links"
          >
            {links.map((link, i) => (
              <React.Fragment key={link.href ?? link.label}>
                {i > 0 && <span className="text-text-secondary/50 select-none">·</span>}
                {"plain" in link && link.plain ? (
                  <span className="link-text">{link.label}</span>
                ) : (
                  <a
                    href={link.href}
                    className="link-text"
                    itemProp="sameAs"
                    {...(link.href!.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    {link.label}
                  </a>
                )}
              </React.Fragment>
            ))}
          </nav>
        </div>
      </div>
    </div>
  </main>
);

export default MainCard;
