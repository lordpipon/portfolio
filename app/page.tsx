import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Cloud, Github, Mail, MessageCircle, Music2, Youtube } from "lucide-react";

import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "@/components/theme-toggle";

export const metadata: Metadata = {
  title: "Portfolio",
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
    handle: "@piponidlo",
    href: "https://www.tiktok.com/@piponidlo",
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
    name: "Email",
    handle: "lordpipon@gmail.com",
    href: "mailto:lordpipon@gmail.com",
    icon: Mail,
  },
];

const projects = [
  {
    year: "2023",
    items: [{ label: "Minecraft server — pipoooonio" }],
  },
  {
    year: "2024",
    items: [{ label: "Minecraft server — minefishing" }],
  },
  {
    year: "2025",
    items: [{ label: "Minecraft servers — ForgeSMP, SentinelSMP" }],
  },
  {
    year: "2026",
    items: [
      { label: "Minecraft servers — FishieSMP, PrismPractice" },
      {
        label: "Darkian Linux, Darkian “the company”, DarkianSearch, Aetherlyn Hosting",
      },
      {
        label: "Server Sway Dotfiles",
        href: "https://github.com/lordpipon/server-swaydots",
      },
      {
        label: "Prebuilt OpenCore EFI files for ThinkPad E14 Gen 3",
        href: "https://github.com/lordpipon/thinkpad-e14-gen3-opencore-efifiles",
      },
    ],
  },
];

export default function Home() {
  return (
    <main className="relative mx-auto w-full max-w-xl px-4 py-20 sm:px-6">
      <div className="absolute top-4 right-0 sm:top-6 sm:right-2">
        <ThemeToggle />
      </div>

      <section className="flex flex-col items-center pt-8 text-center">
        <Image
          src="/pfp.png"
          alt="lordpipon"
          width={112}
          height={112}
          priority
          className="size-28 rounded-full object-cover ring-1 ring-border"
        />
        <h1 className="mt-6 text-3xl font-bold tracking-tight">lordpipon</h1>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          {socials.map((social) => {
            const external = social.href.startsWith("http");
            return (
              <a
                key={social.name}
                href={social.href}
                title={social.name}
                className="inline-flex items-center gap-2 rounded-full border bg-card px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-foreground/25 hover:text-foreground"
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                <social.icon className="size-4" />
                {social.handle}
              </a>
            );
          })}
        </div>
      </section>

      <Separator className="my-12" />

      <section>
        <h2 className="text-sm font-semibold tracking-widest text-muted-foreground uppercase">
          My Projects
        </h2>
        <div className="mt-6 space-y-0">
          {projects.map((group) => (
            <div key={`${group.year}-${group.items[0].label}`}>
              <Separator />
              <div className="flex gap-6 py-5">
                <div className="w-12 shrink-0 text-sm font-medium text-muted-foreground tabular-nums">
                  {group.year}
                </div>
                <div className="space-y-2">
                  {group.items.map((item) =>
                    item.href ? (
                      <Link
                        key={item.label}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-start gap-1 text-sm hover:text-foreground"
                      >
                        <span className="underline decoration-muted-foreground/40 underline-offset-4 transition-colors group-hover:decoration-foreground">
                          {item.label}
                        </span>
                        <ArrowUpRight className="size-3.5 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground" />
                      </Link>
                    ) : (
                      <p key={item.label} className="text-sm">
                        {item.label}
                      </p>
                    ),
                  )}
                </div>
              </div>
            </div>
          ))}
          <Separator />
        </div>
      </section>
    </main>
  );
}
