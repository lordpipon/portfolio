"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import Link from "next/link";

export interface ProjectCardProps {
  title: string;
  description?: string;
  href?: string;
  liveHref?: string;
  liveLabel?: string;
  tags?: string[];
  children?: React.ReactNode;
}

export function ProjectCard({
  title,
  description,
  href,
  liveHref,
  liveLabel = "Live",
  tags,
  children,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -4, scale: 1.015 }}
      className="group relative overflow-hidden rounded-xl border border-border/60 bg-card p-5 transition-colors hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10"
    >
      <motion.div
        className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
        layoutId="card-glow"
      />
      <div className="relative flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <h3 className="text-base font-semibold tracking-tight">{title}</h3>
          {description && (
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
              {description}
            </p>
          )}
        </div>
        <div className="relative flex shrink-0 gap-1.5">
          {href && (
            <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
              <Link
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-lg border border-border/60 bg-muted/50 px-2.5 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-foreground/20 hover:text-foreground"
              >
                <ArrowUpRight className="size-3.5" />
                Code
              </Link>
            </motion.div>
          )}
          {liveHref && (
            <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
              <Link
                href={liveHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-lg border border-border/60 bg-muted/50 px-2.5 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-foreground/20 hover:text-foreground"
              >
                <ExternalLink className="size-3.5" />
                {liveLabel}
              </Link>
            </motion.div>
          )}
        </div>
      </div>
      {tags && tags.length > 0 && (
        <div className="relative mt-3 flex flex-wrap gap-1.5">
          {tags.map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.3 }}
              className="inline-block rounded-md bg-muted/80 px-2 py-0.5 text-xs text-muted-foreground"
            >
              {tag}
            </motion.span>
          ))}
        </div>
      )}
      {children && <div className="relative mt-3">{children}</div>}
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
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -4, scale: 1.015 }}
      className="group relative overflow-hidden rounded-xl border border-border/60 bg-card p-5 transition-colors hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10"
    >
      <motion.div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="relative">
        <h3 className="text-base font-semibold tracking-tight">
          Minecraft Servers
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
          A collection of Minecraft servers over the years.
        </p>
      </div>

      <div className="relative mt-4 space-y-2">
        {timeline.map((entry, gi) => (
          <motion.div
            key={entry.year}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: gi * 0.1, duration: 0.4 }}
            className="flex items-center gap-3"
          >
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
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: timeline.length * 0.1, duration: 0.4 }}
          className="flex items-center gap-3 pt-1"
        >
          <span className="w-10 shrink-0 text-xs font-medium tabular-nums text-muted-foreground">
            Soon
          </span>
          <div className="flex flex-wrap gap-1.5">
            <motion.span
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block rounded-md border border-dashed border-primary/30 bg-primary/5 px-2 py-0.5 text-xs text-primary"
            >
              PrismPractice V2
            </motion.span>
            <span className="inline-block rounded-md border border-dashed border-muted-foreground/20 bg-muted/50 px-2 py-0.5 text-xs text-muted-foreground">
              ???
            </span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
