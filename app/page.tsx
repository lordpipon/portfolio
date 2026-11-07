"use client";
import { motion, useReducedMotion } from "framer-motion";
import {
  Github,
  ArrowUpRight,
  ArrowDown,
  ArrowUp,
  Search,
  Terminal,
  Gamepad2,
  Monitor,
  Clapperboard,
  Youtube,
  Music2,
  MapPin,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Topbar } from "@/components/topbar";
import { StudioCallout } from "@/components/studio-callout";

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
    visual: "sway",
  },
  {
    num: "02",
    title: "Catplay",
    description: "A fork of outpoot/rugplay.",
    tags: ["Project"],
    href: "https://github.com/lordpipon/catplay",
    liveHref: "https://catplay.org",
    visual: "cat",
  },
  {
    num: "catmash",
    title: "Catmash",
    description:
      "A multiplayer video editor where players create videos together on a shared timeline.",
    tags: ["Video", "Multiplayer", "Web"],
    href: "https://github.com/lordpipon/catmash",
    visual: "film",
  },
  {
    num: "03",
    title: "GoDucky",
    description: "An open-source command-line tool.",
    tags: ["CLI", "Tool"],
    href: "https://github.com/go-ducky/cli",
    liveHref: "https://goducky.lordpipon.com",
    visual: "terminal",
  },
  {
    num: "04",
    title: "Darkian Linux",
    description: "An organization for Darkian Linux and related projects.",
    tags: ["Linux", "Organization"],
    href: "https://github.com/Darkian-Linux/",
    liveHref: "https://darkian.xyz",
    visual: "computer",
  },
  {
    num: "05",
    title: "Darkian Search",
    description: "A search engine by Darkian Linux.",
    tags: ["Search", "Web"],
    href: "https://github.com/Darkian-Linux/DarkianSearch",
    liveHref: "https://search.darkian.xyz",
    visual: "search",
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
  const reduced = useReducedMotion();
  const reveal = {
    initial: reduced ? (false as const) : { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.12 },
    transition: { duration: 0.6 },
  };
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Topbar />
      <main id="main" className="portfolio-shell">
        <section id="home" className="hero">
          <p className="hero-location">
            <MapPin size={14} /> Based in Czech Republic
          </p>
          <div className="hero-masthead">
            <h1>
              lordpipon<span>.</span>
            </h1>
          </div>
          <div className="hero-composition">
            <div className="hero-copy">
              <h2>
                minecraft servers.
                <br />
                linux.
                <br />
                <span>small tools.</span>
              </h2>
              <p>
                I build servers, write configs, and make things I want to use.
              </p>
              <div className="hero-actions">
                <a className="action-button" href="#projects">
                  selected work <ArrowDown size={17} />
                </a>
                <Link className="text-link" href="/contact">
                  contact <ArrowUpRight size={17} />
                </Link>
              </div>
              <div className="identity-note">
                <Image
                  src="/pfp.png"
                  alt="lordpipon's cat avatar"
                  width={34}
                  height={34}
                />
                <span>
                  Linux user.
                  <br />
                  Minecraft server developer.
                </span>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="work-section">
          <div className="section-heading">
            <div className="work-heading">
              <h2>
                selected work
                <span> / {String(projects.length).padStart(2, "0")}</span>
              </h2>
              <p>my projects</p>
            </div>
            <a
              className="text-link"
              href="https://github.com/lordpipon"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub <ArrowUpRight size={15} />
            </a>
          </div>
          {projects.map((project, i) => (
            <motion.article
              key={project.num}
              {...reveal}
              className={`work-item work-item-${i}`}
            >
              <span className="work-number">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="work-visual" aria-hidden="true">
                {project.visual === "sway" ? (
                  <div className="sway-layout">
                    <div />
                    <div />
                    <div />
                  </div>
                ) : project.visual === "cat" ? (
                  <div className="pixel-cat">
                    <i />
                    <i />
                    <b />
                    <b />
                  </div>
                ) : project.visual === "terminal" ? (
                  <Terminal size={62} strokeWidth={1} />
                ) : project.visual === "computer" ? (
                  <Monitor size={76} strokeWidth={1} />
                ) : project.visual === "film" ? (
                  <Clapperboard size={70} strokeWidth={1} />
                ) : (
                  <Search size={70} strokeWidth={1} />
                )}
              </div>
              <div className="work-info">
                <div className="work-tags">{project.tags.join(" / ")}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="work-links">
                  {project.liveHref && (
                    <a
                      href={project.liveHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${project.title}`}
                    >
                      {project.liveLabel ?? "Visit project"}{" "}
                      <ArrowUpRight size={16} />
                    </a>
                  )}
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} source code`}
                  >
                    <Github size={14} /> source
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
          <a
            className="more-projects"
            href="https://github.com/lordpipon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>more projects on github</span>
            <ArrowUpRight size={24} />
          </a>
        </section>

        <motion.section {...reveal} id="about" className="about-section">
          <div className="section-heading">
            <h2>about</h2>
          </div>
          <div className="about-body">
            <p>
              I run Minecraft servers,
              <br />
              tinker with Linux,
              <br />
              and build small tools.
            </p>
            <div>
              <p>
                I’m a developer based in the Czech Republic. I work on Minecraft
                servers, Linux setups, and web projects. My GitHub includes Sway
                dotfiles, command-line tools, and projects from Darkian Linux. I
                also make videos for YouTube and TikTok.
              </p>
              <Link className="text-link" href="/contact">
                Find me elsewhere <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </motion.section>

        <section className="videos-section" aria-labelledby="videos-heading">
          <div className="section-heading">
            <h2 id="videos-heading">videos, too.</h2>
          </div>
          <div className="video-links">
            <a
              href="https://www.youtube.com/@lordpipon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Youtube size={30} strokeWidth={1.2} />
              <span>
                YouTube<small>@lordpipon</small>
              </span>
              <ArrowUpRight size={22} />
            </a>
            <a
              href="https://www.tiktok.com/@lordpipon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Music2 size={28} strokeWidth={1.2} />
              <span>
                TikTok<small>@lordpipon</small>
              </span>
              <ArrowUpRight size={22} />
            </a>
          </div>
        </section>

        <section id="skills" className="skills-section">
          <div className="section-heading">
            <h2>tools I use</h2>
            <a
              className="text-link"
              href="https://github.com/lordpipon"
              target="_blank"
              rel="noopener noreferrer"
            >
              On GitHub <ArrowUpRight size={15} />
            </a>
          </div>
          <div className="skills-grid">
            {[
              {
                title: "Frontend",
                description: "Interfaces and web projects.",
                tools: [
                  "HTML",
                  "CSS",
                  "TypeScript",
                  "React",
                  "Next.js",
                  "Tailwind CSS",
                ],
              },
              {
                title: "Programming & Linux",
                description: "Tools, configs, and daily development.",
                tools: ["Python", "C++", "Linux", "Sway", "Git", "GitHub"],
              },
              {
                title: "Servers & deployment",
                description: "Running the things I build.",
                tools: [
                  "Docker",
                  "Podman",
                  "Nginx",
                  "Apache",
                  "Minecraft servers",
                ],
              },
            ].map((group) => (
              <div className="skill-group" key={group.title}>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
                <ul>
                  {group.tools.map((tool) => (
                    <li key={tool}>{tool}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="servers" className="servers-section">
          <div className="section-heading">
            <h2>minecraft servers</h2>
            <span>2023 — 2026</span>
          </div>
          <div className="server-intro">
            <Gamepad2 size={24} strokeWidth={1.3} />
            <p>The servers I’ve worked on over the years.</p>
          </div>
          <div className="timeline">
            {minecraftTimeline.map((entry) => (
              <motion.div key={entry.year} {...reveal} className="timeline-row">
                <span>{entry.year}</span>
                <div>
                  {entry.servers.map((server) => (
                    <span key={server}>{server}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
        <StudioCallout />
        <footer>
          <Link href="/" className="wordmark">
            lordpipon.
          </Link>
          <a href="#home" className="text-link">
            Back to top <ArrowUp size={15} />
          </a>
        </footer>
      </main>
    </>
  );
}
