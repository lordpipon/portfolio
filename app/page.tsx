"use client";

import { motion } from "framer-motion";
import {
  Cloud,
  Github,
  Mail,
  MessageCircle,
  Music2,
  Youtube,
} from "lucide-react";

import { Topbar } from "@/components/topbar";
import { TypewriterHero } from "@/components/typewriter-hero";
import { ProjectCard, MinecraftCard } from "@/components/project-card";

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
    name: "Email",
    handle: "lordpipon@gmail.com",
    href: "mailto:lordpipon@gmail.com",
    icon: Mail,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

export default function Home() {
  return (
    <>
      <Topbar />

      <main className="mx-auto w-full max-w-xl px-4 pt-24 pb-20 sm:px-6">
        {/* Hero */}
        <section id="hero" className="flex flex-col items-center pt-8">
          <TypewriterHero />
        </section>

        {/* Socials */}
        <section id="socials" className="mt-16">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-sm font-semibold tracking-widest text-muted-foreground uppercase"
          >
            Socials
          </motion.h2>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-6 flex flex-wrap items-center justify-center gap-2"
          >
            {socials.map((social) => {
              const external = social.href.startsWith("http");
              return (
                <motion.a
                  key={`${social.name}-${social.handle}`}
                  variants={item}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  href={social.href}
                  title={social.name}
                  className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-foreground/25 hover:text-foreground"
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  <social.icon className="size-4" />
                  {social.handle}
                </motion.a>
              );
            })}
          </motion.div>
        </section>

        {/* Projects */}
        <section id="projects" className="mt-16">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-sm font-semibold tracking-widest text-muted-foreground uppercase"
          >
            Projects
          </motion.h2>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="mt-6 grid gap-3"
          >
            <motion.div variants={item}>
              <ProjectCard
                title="Server Sway Dotfiles"
                description="My personal Sway window manager configuration and dotfiles for a minimal, tiling-based Linux setup."
                href="https://github.com/lordpipon/server-swaydots"
                liveHref="https://lordpipon.github.io/serverswaydots/"
                tags={["Sway", "Linux", "Dotfiles"]}
              />
            </motion.div>

            <motion.div variants={item}>
              <ProjectCard
                title="Dingoplay"
                description="A project by lordpipon."
                href="https://github.com/lordpipon/dingoplay"
                tags={["Project"]}
              />
            </motion.div>

            <motion.div variants={item}>
              <ProjectCard
                title="Darkian Linux"
                description="An organization for Darkian Linux and related projects."
                href="https://github.com/Darkian-Linux/"
                tags={["Linux", "Organization"]}
              />
            </motion.div>

            <motion.div variants={item}>
              <ProjectCard
                title="Darkian Search"
                description="A search engine by Darkian Linux."
                href="https://github.com/Darkian-Linux/DarkianSearch"
                liveHref="https://search.darkian.xyz"
                tags={["Search", "Web"]}
              />
            </motion.div>

            <motion.div variants={item}>
              <MinecraftCard />
            </motion.div>
          </motion.div>
        </section>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 border-t border-border/50 pt-8 text-center text-xs text-muted-foreground"
        >
          built by lordpipon
        </motion.footer>
      </main>
    </>
  );
}
