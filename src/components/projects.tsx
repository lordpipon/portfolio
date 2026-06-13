import React from "react";
import { minify } from "../tools/minify.macro" with { type: "macro" };
import ProjectInfo from "./project-info";
import projectsData from "../data/projects.json";

export default function Projects() {
  const leftColumnGroups = projectsData.filter(g => g.title === "Favorite" || g.title === "Management panel");
  const rightColumnGroups = projectsData.filter(g => g.title === "Web Apps");

  return (
    <>
      <div
        id="project-group-badge"
        className="hidden fixed top-4 left-4 z-50 bg-white/5 text-sm font-semibold px-3 py-1.5 rounded-2xl text-white cursor-pointer select-none transition-opacity duration-200 drop-shadow opacity-0"
        aria-hidden
        tabIndex={-1}
      />
      <div
        id="projects"
        className="max-w-5xl mx-auto px-4 md:px-6 xl:px-8 w-full xl:grid xl:grid-cols-2 gap-10 space-y-16 md:space-y-8 lg:space-y-0 pb-10"
      >
        <div className="md:flex md:flex-col md:gap-8">
          {leftColumnGroups.map((group) => (
            <React.Fragment key={group.title}>
              <ProjectGroupTitle title={group.title} />
              {group.projects.map((project) => (
                <ProjectInfo
                  key={project.name}
                  name={project.name}
                  icon={project.icon}
                  links={project.links as any}
                  description={project.description}
                />
              ))}
            </React.Fragment>
          ))}
        </div>
        <div className="md:flex md:flex-col md:gap-8">
          {rightColumnGroups.map((group) => (
            <React.Fragment key={group.title}>
              <ProjectGroupTitle title={group.title} />
              {group.projects.map((project) => (
                <ProjectInfo
                  key={project.name}
                  name={project.name}
                  icon={project.icon}
                  links={project.links as any}
                  description={project.description}
                />
              ))}
            </React.Fragment>
          ))}
        </div>

      </div>
      <div className="project-card flex h-dvh w-full snap-center items-center justify-center md:snap-align-none md:h-auto md:-mt-10 max-md:hidden">
        <a
          href="https://github.com/freeutka"
          target="_blank"
          rel="noopener noreferrer"
          className="text-center text-text-secondary hover:text-white hover:underline font-medium transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-focus p-1 rounded-lg"
        >
          (view more on my github)
        </a>
      </div>
      <script dangerouslySetInnerHTML={{ __html: badgeScript }} />
    </>
  );
}

function ProjectGroupTitle({ title }: { title: string }) {
  return (
    <>
      <h2 className="hidden md:block max-md:-my-8 text-text-secondary font-bold -mb-6 text-center">
        {title}<span className="sr-only">:</span>
      </h2>
      <br className="hidden" />
    </>
  );
}

const badgeScript = minify(/* js */`
  {
    const fn = () => {
      const hint = document.getElementById("scroll-hint");
      const target = document.getElementById("projects");
      if (hint && target) {
        let scrollParent = document.getElementById("main");

        const onScroll = () => {
          const rect = target.getBoundingClientRect();
          const parentRect =
            scrollParent === window
              ? { top: 0, bottom: window.innerHeight }
              : scrollParent.getBoundingClientRect();
          const visible = Math.max(
            0,
            Math.min(rect.bottom, parentRect.bottom) -
              Math.max(rect.top, parentRect.top),
          );
          const ratio = Math.max(0, Math.min(1, visible / rect.height));
          hint.style.opacity = 1 - ratio;
        };

        if (scrollParent === window) {
          window.addEventListener("scroll", onScroll);
        } else {
          scrollParent.addEventListener("scroll", onScroll);
        }
        hint.classList.remove("transition-opacity", "duration-300");
        onScroll();
      }

      const cards = document.querySelectorAll(".project-card");
      const badge = document.getElementById("project-group-badge");
      if (!cards.length || !badge) return;
      badge.style.display = "none";
      badge.onclick = (e) => {
        e.preventDefault();
        document
          .getElementById("main-card")
          ?.scrollIntoView({ behavior: "smooth" });
      };
      const updateBadge = (group) => {
        badge.textContent = group;
        badge.style.display = "block";
      };
      const observer = new window.IntersectionObserver(
        (entries) => {
          let mostVisible = null;
          for (const entry of entries) {
            if (entry.intersectionRatio > 0.5) {
              mostVisible = entry;
              maxRatio = entry.intersectionRatio;
            }
          }
          badge.classList.remove("opacity-0", "opacity-100");
          if (mostVisible && mostVisible.isIntersecting) {
            /** @param {Element} card */
            function getNearestGroupHeading(card) {
              let node = card.previousElementSibling;
              while (node) {
                if (/^H[1-6]$/.test(node.tagName)) return node.textContent.replace(":", "");
                node = node.previousElementSibling;
              }
              return null;
            }
            const isMobile = window.matchMedia("(max-width: 768px)").matches;
            const group = isMobile ? getNearestGroupHeading(mostVisible.target) : null;
            updateBadge(group || "freeutka");
            badge.style.opacity = "1";
          } else {
            badge.style.opacity = "0";
          }
        },
        {
          threshold: [0.5],
          root: null,
        },
      );
      cards.forEach((card) => {
        observer.observe(card);
      });

      // just here for fun of it
      document.querySelectorAll('a[data-obfuscated]').forEach((link) => {
        const fn = function () {
          var encoded = link?.getAttribute('data-obfuscated')?.split('').reverse().join('') || '';
          if (!encoded) return

          var decoded = decodeURIComponent(escape(atob(encoded)));
          link?.setAttribute('href', decoded);
          link?.removeAttribute('data-obfuscated');

          link?.removeEventListener('mouseover', fn)
          link?.removeEventListener('focus', fn)
          link?.removeEventListener('click', fn)
        };
        link?.addEventListener('mouseover', fn);
        link?.addEventListener('focus', fn);
        link?.addEventListener('click', fn);
      });

    };
    document.addEventListener("DOMContentLoaded", fn);
    fn();
  }
`);
