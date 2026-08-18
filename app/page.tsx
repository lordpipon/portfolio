"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Cloud,
  Github,
  Mail,
  MessageCircle,
  Music2,
  Youtube,
  ArrowUpRight,
  Server,
  Globe,
  Search,
  Gamepad2,
} from "lucide-react";
import Link from "next/link";

import { Topbar } from "@/components/topbar";

function smoothScrollTo(href: string) {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 72;
  window.scrollTo({ top: y, behavior: "smooth" });
}

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

const projects = [
  {
    num: "01",
    title: "Server Sway Dotfiles",
    description:
      "My personal Sway window manager configuration and dotfiles for a minimal, tiling-based Linux setup.",
    tags: ["Sway", "Linux", "Dotfiles"],
    href: "https://github.com/lordpipon/server-swaydots",
    liveHref: "https://lordpipon.github.io/serverswaydots/",
    liveLabel: "Docs",
    icon: Server,
  },
  {
    num: "02",
    title: "Dingoplay",
    description: "A project by lordpipon.",
    tags: ["Project"],
    href: "https://github.com/lordpipon/dingoplay",
    icon: Gamepad2,
  },
  {
    num: "03",
    title: "Darkian Linux",
    description:
      "An organization for Darkian Linux and related projects.",
    tags: ["Linux", "Organization"],
    href: "https://github.com/Darkian-Linux/",
    liveHref: "https://darkian.xyz",
    icon: Globe,
  },
  {
    num: "04",
    title: "Darkian Search",
    description: "A search engine by Darkian Linux.",
    tags: ["Search", "Web"],
    href: "https://github.com/Darkian-Linux/DarkianSearch",
    liveHref: "https://search.darkian.xyz",
    icon: Search,
  },
];

const minecraftTimeline = [
  { year: "2023", servers: ["Pipoooonio"] },
  { year: "2024", servers: ["Minefishing"] },
  { year: "2025", servers: ["ForgeSMP", "SentinelSMP"] },
  { year: "2026", servers: ["FishieSMP", "PrismPractice"] },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const slideRight = {
  hidden: { opacity: 0, x: -40 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <>
      <Topbar />

      <main className="mx-auto w-full max-w-2xl px-5 pt-28 pb-24 sm:px-8">
        {/* Hero */}
        <section id="home" ref={heroRef}>
          <motion.div
            style={{ opacity: heroOpacity, y: heroY }}
            className="flex flex-col"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-sm text-muted-foreground"
            >
              lordpipon
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6, ease: "easeOut" }}
              className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl"
            >
              Hi, i am{" "}
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                lordpipon
              </span>
              .
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.5 }}
              className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground"
            >
              A minecraft server developer, linux user and a developer.
              Building things that work, one config file at a time.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="mt-8 flex flex-wrap gap-2"
            >
              <motion.a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  smoothScrollTo("#projects");
                }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
              >
                View projects
                <ArrowUpRight className="size-4" />
              </motion.a>
              <motion.a
                href="mailto:lordpipon@gmail.com"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-full border border-border/60 px-5 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:border-foreground/25 hover:text-foreground"
              >
                Get in touch
              </motion.a>
            </motion.div>
          </motion.div>
        </section>

        {/* About */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mt-24"
        >
          <motion.div variants={fadeUp} custom={0}>
            <h2 className="text-sm font-semibold tracking-widest text-muted-foreground uppercase">
              About
            </h2>
          </motion.div>

          <motion.p
            variants={fadeUp}
            custom={1}
            className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground"
          >
            I run Minecraft servers, tinker with Linux, and build small tools
            that solve real problems. Most of my work lives on GitHub — open
            source, documented, and built to last.
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={2}
            className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4"
          >
            {[
              { label: "Projects", value: "10+" },
              { label: "Minecraft servers", value: "8" },
              { label: "Years active", value: "4" },
              { label: "GitHub repos", value: "20+" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -3 }}
                className="rounded-xl border border-border/60 bg-card p-4"
              >
                <p className="text-2xl font-bold tracking-tight">{stat.value}</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Selected Work */}
        <section id="projects" className="mt-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeUp}
              custom={0}
              className="text-sm font-semibold tracking-widest text-muted-foreground uppercase"
            >
              Selected work
            </motion.h2>
          </motion.div>

          <div className="mt-6 space-y-0">
            {projects.map((project, i) => (
              <motion.div
                key={project.num}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                variants={slideRight}
                custom={i}
              >
                <ProjectRow project={project} />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Minecraft Servers */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="mt-24"
        >
          <motion.h2
            variants={fadeUp}
            custom={0}
            className="text-sm font-semibold tracking-widest text-muted-foreground uppercase"
          >
            Minecraft servers
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={1}
            className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground"
          >
            Running and building Minecraft servers since 2023. Each one a
            different experiment in community and gameplay.
          </motion.p>

          <div className="mt-6 space-y-0">
            {minecraftTimeline.map((entry, i) => (
              <motion.div
                key={entry.year}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideRight}
                custom={i}
                className="border-b border-border/40 py-4 last:border-b-0"
              >
                <div className="flex items-center gap-6">
                  <span className="w-12 shrink-0 text-sm font-medium tabular-nums text-muted-foreground">
                    {entry.year}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {entry.servers.map((s) => (
                      <span
                        key={s}
                        className="rounded-full bg-muted/80 px-3 py-1 text-sm text-muted-foreground"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideRight}
              custom={minecraftTimeline.length}
              className="border-b border-border/40 py-4 last:border-b-0"
            >
              <div className="flex items-center gap-6">
                <span className="w-12 shrink-0 text-sm font-medium tabular-nums text-muted-foreground">
                  Soon
                </span>
                <div className="flex flex-wrap gap-2">
                  <motion.span
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="rounded-full border border-dashed border-primary/30 bg-primary/5 px-3 py-1 text-sm text-primary"
                  >
                    PrismPractice V2
                  </motion.span>
                  <span className="rounded-full border border-dashed border-muted-foreground/20 bg-muted/50 px-3 py-1 text-sm text-muted-foreground">
                    ???
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Socials */}
        <section id="socials" className="mt-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeUp}
              custom={0}
              className="text-sm font-semibold tracking-widest text-muted-foreground uppercase"
            >
              Find me online
            </motion.h2>

            <motion.div
              variants={fadeUp}
              custom={1}
              className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2"
            >
              {socials.map((social, i) => {
                const external = social.href.startsWith("http");
                return (
                  <motion.a
                    key={`${social.name}-${social.handle}`}
                    href={social.href}
                    title={social.name}
                    whileHover={{ x: 6, scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    className="group flex items-center gap-3 rounded-xl border border-border/60 bg-card px-4 py-3 transition-colors hover:border-foreground/20 hover:text-foreground"
                    {...(external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    <social.icon className="size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground" />
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium">{social.name}</p>
                      <p className="truncate text-xs text-muted-foreground">
                        {social.handle}
                      </p>
                    </div>
                    <ArrowUpRight className="size-3.5 shrink-0 text-muted-foreground opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>
        </section>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 border-t border-border/50 pt-8"
        >
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <p className="text-xs text-muted-foreground">
              built by lordpipon
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/lordpipon"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                GitHub
              </a>
              <a
                href="mailto:lordpipon@gmail.com"
                className="text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                Email
              </a>
            </div>
          </div>
        </motion.footer>
      </main>
    </>
  );
}

function ProjectRow({
  project,
}: {
  project: (typeof projects)[number];
}) {
  return (
    <div className="group border-b border-border/40 py-5 last:border-b-0">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-3">
            <span className="text-xs font-medium tabular-nums text-muted-foreground">
              {project.num}
            </span>
            <project.icon className="size-4 text-muted-foreground" />
            <h3 className="text-base font-semibold tracking-tight">
              {project.title}
            </h3>
          </div>
          <p className="mt-1.5 ml-7 text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>
          <div className="mt-2 ml-7 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-muted/80 px-2.5 py-0.5 text-xs text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="flex shrink-0 gap-1.5 pt-1">
          {project.href && (
            <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
              <Link
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-lg border border-border/60 bg-muted/50 px-2.5 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-foreground/20 hover:text-foreground"
              >
                <ArrowUpRight className="size-3.5" />
                Code
              </Link>
            </motion.div>
          )}
          {project.liveHref && (
            <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
              <Link
                href={project.liveHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-lg border border-border/60 bg-muted/50 px-2.5 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-foreground/20 hover:text-foreground"
              >
                <ArrowUpRight className="size-3.5" />
                {project.liveLabel ?? "Live"}
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
