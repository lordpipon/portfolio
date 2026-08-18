"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import Link from "next/link";

export interface ProjectCardProps {
  title: string;
  description?: string;
  href?: string;
  liveHref?: string;
  tags?: string[];
  children?: React.ReactNode;
}

export function ProjectCard({
  title,
  description,
  href,
  liveHref,
  tags,
  children,
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative overflow-hidden rounded-xl border border-border/60 bg-card p-5 transition-colors hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <h3 className="text-base font-semibold tracking-tight">{title}</h3>
          {description && (
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
              {description}
            </p>
          )}
        </div>
        <div className="flex shrink-0 gap-1.5">
          {href && (
            <Link
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-lg border border-border/60 bg-muted/50 px-2.5 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-foreground/20 hover:text-foreground"
            >
              <ArrowUpRight className="size-3.5" />
              Code
            </Link>
          )}
          {liveHref && (
            <Link
              href={liveHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-lg border border-border/60 bg-muted/50 px-2.5 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-foreground/20 hover:text-foreground"
            >
              <ExternalLink className="size-3.5" />
              Live
            </Link>
          )}
        </div>
      </div>
      {tags && tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-block rounded-md bg-muted/80 px-2 py-0.5 text-xs text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      {children && <div className="mt-3">{children}</div>}
    </motion.div>
  );
}

export function MinecraftCard() {
  const timeline = [
    { year: "2023", servers: ["Pipoooonio"] },
    { year: "2024", servers: ["Minefishing"] },
    { year: "2025", servers: ["ForgeSMP", "SentinelSMP"] },
    { year: "2026", servers: ["FishieSMP", "PrismPractice"] },
  ];

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative overflow-hidden rounded-xl border border-border/60 bg-card p-5 transition-colors hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
    >
      <div>
        <h3 className="text-base font-semibold tracking-tight">
          Minecraft Servers
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
          A collection of Minecraft servers over the years.
        </p>
      </div>

      <div className="mt-4 space-y-2">
        {timeline.map((entry) => (
          <div key={entry.year} className="flex items-center gap-3">
            <span className="w-10 shrink-0 text-xs font-medium tabular-nums text-muted-foreground">
              {entry.year}
            </span>
            <div className="flex flex-wrap gap-1.5">
              {entry.servers.map((s) => (
                <span
                  key={s}
                  className="inline-block rounded-md bg-muted/80 px-2 py-0.5 text-xs text-muted-foreground"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
        <div className="flex items-center gap-3 pt-1">
          <span className="w-10 shrink-0 text-xs font-medium tabular-nums text-muted-foreground">
            Soon
          </span>
          <div className="flex flex-wrap gap-1.5">
            <span className="inline-block rounded-md border border-dashed border-primary/30 bg-primary/5 px-2 py-0.5 text-xs text-primary">
              PrismPractice V2
            </span>
            <span className="inline-block rounded-md border border-dashed border-muted-foreground/20 bg-muted/50 px-2 py-0.5 text-xs text-muted-foreground">
              ???
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
