import type { Metadata } from "next";
import Link from "next/link";
import {
  Cloud,
  Github,
  Mail,
  MessageCircle,
  Music2,
  Youtube,
  Gamepad2,
  ArrowUpRight,
  ArrowLeft,
} from "lucide-react";
import { Topbar } from "@/components/topbar";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with lordpipon. Find my email and social profiles.",
};

const socials = [
  {
    name: "Discord",
    handle: "@piponidlo",
    href: "https://discord.com/users/piponidlo",
    icon: MessageCircle,
  },
  {
    name: "Bluesky",
    handle: "@lordpipon.com",
    href: "https://bsky.app/profile/lordpipon.com",
    icon: Cloud,
  },
  {
    name: "TikTok",
    handle: "@lordpipon",
    href: "https://www.tiktok.com/@lordpipon",
    icon: Music2,
  },
  {
    name: "TikTok",
    handle: "@thinkpad.sh",
    href: "https://www.tiktok.com/@thinkpad.sh",
    icon: Music2,
  },
  {
    name: "YouTube",
    handle: "@piponidlo",
    href: "https://www.youtube.com/@piponidlo",
    icon: Youtube,
  },
  {
    name: "GitHub",
    handle: "@lordpipon",
    href: "https://github.com/lordpipon",
    icon: Github,
  },
  {
    name: "Steam",
    handle: "@lordpipon",
    href: "https://steamcommunity.com/id/lordpipon/",
    icon: Gamepad2,
  },
  {
    name: "JobIndustries",
    handle: "@jobindustries",
    href: "https://steamcommunity.com/id/jobindustries/",
    icon: Gamepad2,
  },
  {
    name: "Email",
    handle: "lordpipon@gmail.com",
    href: "mailto:lordpipon@gmail.com",
    icon: Mail,
  },
];

export default function ContactPage() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Topbar />
      <main id="main" className="portfolio-shell">
        <section id="socials" className="contact-page page-enter">
          <div className="contact-banner">
            <span className="section-index">LET’S CONNECT</span>
            <h1>
              Good things start
              <br />
              with a <span>hello.</span>
            </h1>
            <p>Have a project in mind, a question, or just want to chat?</p>
            <Button asChild size="lg">
              <a href="mailto:lordpipon@gmail.com">
                <Mail /> Get in touch <ArrowUpRight />
              </a>
            </Button>
          </div>
          <div className="social-grid">
            {socials.map((social) => (
              <a
                key={social.href}
                href={social.href}
                {...(social.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="social-card"
              >
                <social.icon size={19} />
                <span>
                  <strong>{social.name}</strong>
                  <small>{social.handle}</small>
                </span>
                <ArrowUpRight size={16} className="social-arrow" />
              </a>
            ))}
          </div>
        </section>
        <footer>
          <Link href="/" className="text-link">
            <ArrowLeft size={15} /> Back to portfolio
          </Link>
          <p>Good conversations make great things.</p>
        </footer>
      </main>
    </>
  );
}
