"use client";

import { useEffect, useRef, useState } from "react";
import { Asterisk, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/theme-toggle";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Contact", href: "/contact" },
];

export function Topbar() {
  const pathname = usePathname();
  const hrefFor = (href: string) =>
    href.startsWith("#") && pathname !== "/" ? `/${href}` : href;
  const [active, setActive] = useState("#home");
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (pathname !== "/") {
          setActive(pathname);
          return;
        }
        let current = "#home";
        for (const link of links) {
          if (!link.href.startsWith("#")) continue;
          const section = document.querySelector(link.href);
          if (section && section.getBoundingClientRect().top <= 180)
            current = link.href;
        }
        if (
          window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 4
        )
          current = "#projects";
        setActive(current);
      });
    };
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        if (toggleRef.current?.getAttribute("aria-expanded") === "true")
          toggleRef.current.focus();
      }
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    window.addEventListener("keydown", escape);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      window.removeEventListener("keydown", escape);
    };
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-4 z-50 mx-auto max-w-[1056px] px-4 sm:px-10">
      <nav
        aria-label="Main navigation"
        className="rounded-2xl border border-border bg-background/90 px-4 shadow-lg shadow-black/5 backdrop-blur-xl sm:px-5"
      >
        <div className="flex h-16 items-center justify-between gap-3">
          <Link
            href={hrefFor("#home")}
            className="wordmark"
            onClick={() => setOpen(false)}
          >
            lordpipon
            <Asterisk aria-hidden="true" size={24} />
          </Link>
          <div className="hidden items-center gap-1 sm:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={hrefFor(link.href)}
                aria-current={active === link.href ? "location" : undefined}
                className={`rounded-lg px-4 py-2.5 text-xs transition-colors ${active === link.href ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted hover:text-foreground"}`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              ref={toggleRef}
              type="button"
              className="grid size-11 place-items-center rounded-xl border border-border hover:bg-muted sm:hidden"
              aria-expanded={open}
              aria-controls="mobile-navigation"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </div>
        {open && (
          <div
            id="mobile-navigation"
            className="grid gap-1 border-t border-border py-3 sm:hidden"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={hrefFor(link.href)}
                aria-current={active === link.href ? "location" : undefined}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-4 py-3 text-sm ${active === link.href ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted"}`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
