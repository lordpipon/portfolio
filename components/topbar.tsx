"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/theme-toggle";

const links = [
  { label: "home", href: "#home" },
  { label: "work", href: "#projects" },
  { label: "about", href: "#about" },
  { label: "contact", href: "/contact" },
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
          current = "#about";
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
    <header className="site-header">
      <nav aria-label="Main navigation" className="nav-inner">
        <div className="nav-main">
          <Link
            href={hrefFor("#home")}
            className="wordmark"
            onClick={() => setOpen(false)}
          >
            lordpipon
          </Link>
          <div className="desktop-links">
            {links.map((link) => (
              <Link
                key={link.href}
                href={hrefFor(link.href)}
                aria-current={active === link.href ? "location" : undefined}
                className="nav-link"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="nav-controls">
            <ThemeToggle />
            <button
              ref={toggleRef}
              type="button"
              className="mobile-menu-toggle"
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
                className="nav-link"
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
