"use client";

import { useState } from "react";
import { ArrowUpRight, Check, Copy, MessageCircle } from "lucide-react";

export function StudioCallout() {
  const [status, setStatus] = useState("");
  const copyHandle = async () => {
    try {
      await navigator.clipboard.writeText("@piponidlo");
      setStatus("Discord username copied.");
    } catch {
      setStatus("Copy this username: @piponidlo");
    }
  };
  return (
    <section className="studio-callout" aria-labelledby="studio-title">
      <div className="studio-intro">
        <span>Work with me</span>
        <h2 id="studio-title">
          Need help
          <br />
          creating something?
        </h2>
      </div>
      <div className="studio-options">
        <a
          className="studio-link"
          href="https://studio.lordpipon.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>
            Visit my studio<small>studio.lordpipon.com</small>
          </span>
          <ArrowUpRight size={32} />
        </a>
        <button
          type="button"
          className="discord-copy"
          onClick={copyHandle}
          aria-label="Copy Discord username @piponidlo"
        >
          <MessageCircle size={18} />
          <span>
            Discord <strong>@piponidlo</strong>
          </span>
          {status === "Discord username copied." ? (
            <Check size={16} />
          ) : (
            <Copy size={16} />
          )}
        </button>
        <p className="copy-status" role="status">
          {status}
        </p>
      </div>
    </section>
  );
}
