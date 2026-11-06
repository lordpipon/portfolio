"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Asterisk,
  Github,
  ArrowUpRight,
  ArrowDown,
  ArrowUp,
  Server,
  Globe,
  Search,
  Terminal,
  Gamepad2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Topbar } from "@/components/topbar";
import { Button } from "@/components/ui/button";

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
    title: "Catplay",
    description: "The newest and latest version. A fork of outpoot/rugplay.",
    tags: ["Project"],
    href: "https://github.com/lordpipon/catplay",
    liveHref: "https://catplay.org",
    icon: Gamepad2,
  },
  {
    num: "03",
    title: "GoDucky",
    description: "A project by lordpipon.",
    tags: ["CLI", "Tool"],
    href: "https://github.com/go-ducky/cli",
    liveHref: "https://goducky.lordpipon.com",
    icon: Terminal,
  },
  {
    num: "04",
    title: "Darkian Linux",
    description: "An organization for Darkian Linux and related projects.",
    tags: ["Linux", "Organization"],
    href: "https://github.com/Darkian-Linux/",
    liveHref: "https://darkian.xyz",
    icon: Globe,
  },
  {
    num: "05",
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
  {
    year: "2026",
    servers: ["FishieSMP", "PrismPractice", "LushVanilla", "CatplayMC"],
  },
];

export default function Home() {
  const reducedMotion = useReducedMotion();
  const reveal = {
    initial: reducedMotion ? (false as const) : { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.1 },
    transition: { duration: 0.45, ease: "easeOut" as const },
  };

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Topbar />
      <main id="main" className="portfolio-shell">
        <section id="home" className="hero">
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <div className="hero-heading">
              <h1>
                Hey, I’m
                <br />
                <span>lordpipon</span>
                <span className="hero-period">.</span>
              </h1>
              <div className="avatar-frame">
                <Image
                  src="/pfp.png"
                  alt="lordpipon's avatar"
                  width={128}
                  height={128}
                  priority
                />
                <span className="avatar-label">
                  <Terminal size={13} /> hello, world
                </span>
              </div>
            </div>
            <p className="hero-description">
              Minecraft server developer. Linux enthusiast.
              <br className="hidden sm:block" /> Building things that work, one
              config file at a time.
            </p>
            <div className="hero-actions">
              <Button asChild size="lg">
                <a href="#projects">
                  Explore my work <ArrowDown />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">
                  Let’s talk <ArrowUpRight />
                </Link>
              </Button>
            </div>
          </motion.div>
          <div className="hero-bottom">
            <span>PERSONAL PORTFOLIO / 2026</span>
            <a href="#about">
              SCROLL TO EXPLORE <ArrowDown size={14} />
            </a>
          </div>
        </section>

        <motion.section id="about" className="content-section" {...reveal}>
          <div className="section-heading">
            <span className="section-index">01 / ABOUT</span>
            <h2>Curiosity → creation.</h2>
          </div>
          <div className="about-grid">
            <p>
              I run Minecraft servers, tinker with Linux, and build small tools
              that solve real problems. Most of my work lives on GitHub — open
              source, documented, and built to last.
            </p>
            <div className="about-note">
              <Terminal size={20} />
              <span>
                Always tinkering.
                <br />
                <strong>Always learning.</strong>
              </span>
            </div>
          </div>
          <div className="stats-grid">
            {[
              { value: "10+", label: "Projects" },
              { value: "8", label: "Minecraft servers" },
              { value: "4", label: "Years active" },
              { value: "20+", label: "GitHub repos" },
            ].map((stat) => (
              <div key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.section>

        <section id="projects" className="content-section">
          <div className="section-heading">
            <span className="section-index">02 / SELECTED WORK</span>
            <div className="section-title-row">
              <h2>Things I’ve built.</h2>
              <a
                className="text-link"
                href="https://github.com/lordpipon"
                target="_blank"
                rel="noopener noreferrer"
              >
                All on GitHub <ArrowUpRight size={16} />
              </a>
            </div>
            <p>A collection of experiments, tools, and things I care about.</p>
          </div>
          <div className="projects-grid">
            {projects.map((project, i) => (
              <motion.article
                key={project.num}
                {...reveal}
                className={`project-card ${i === 0 ? "featured-project" : ""}`}
              >
                <div className="project-top">
                  <div className="project-icon">
                    <project.icon size={23} />
                  </div>
                  <span className="project-number">
                    {i === 0 ? "FEATURED / " : ""}
                    {project.num}
                  </span>
                </div>
                <div className="project-copy">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <div className="project-actions">
                  <Button asChild variant="outline" size="sm">
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} source code`}
                    >
                      <Github /> Source
                    </a>
                  </Button>
                  <Button asChild variant="ghost" size="sm">
                    <a
                      href={project.liveHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${project.title}`}
                    >
                      {project.liveLabel ?? "Visit project"}
                      <ArrowUpRight />
                    </a>
                  </Button>
                </div>
                {i === 0 && (
                  <div className="terminal-art" aria-hidden="true">
                    <div>
                      <i />
                      <i />
                      <i />
                      <span>~/dotfiles</span>
                    </div>
                    <p>
                      <b>❯</b> whoami
                      <br />
                      <span>lordpipon</span>
                    </p>
                    <p>
                      <b>❯</b> cat philosophy.txt
                      <br />
                      <span>
                        less clutter.
                        <br />
                        more possibility.
                      </span>
                    </p>
                    <p>
                      <b>❯</b> <span className="terminal-caret">_</span>
                    </p>
                  </div>
                )}
              </motion.article>
            ))}
          </div>
        </section>

        <section id="servers" className="content-section">
          <div className="section-heading">
            <span className="section-index">03 / MINECRAFT</span>
            <h2>More than just blocks.</h2>
            <p>
              Building servers and communities since 2023.
              <br />
              Each one a different experiment in gameplay.
            </p>
          </div>
          <div className="timeline">
            {minecraftTimeline.map((entry) => (
              <motion.div className="timeline-row" key={entry.year} {...reveal}>
                <span className="timeline-year">{entry.year}</span>
                <div>
                  {entry.servers.map((server) => (
                    <span className="server-chip" key={server}>
                      <Gamepad2 size={15} />
                      {server}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <footer>
          <a href="#home" className="wordmark">
            lordpipon
            <Asterisk aria-hidden="true" size={24} />
          </a>
          <p>Built with care. Always a work in progress.</p>
          <a href="#home" className="text-link">
            Back to top <ArrowUp size={15} />
          </a>
        </footer>
      </main>
    </>
  );
}
