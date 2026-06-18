import React from "react";
import { minify } from "../tools/minify.macro";
import ProjectInfo from "./project-info";
import projectsData from "../data/projects.json";

export default function Projects() {
  return (
    <div className="flex flex-col gap-6">
      {projectsData.map((group) => (
        <section key={group.title}>
          <h3 className="group-label">{group.title}</h3>
          <div className="flex flex-col gap-3">
            {group.projects.map((project) => (
              <ProjectInfo
                key={project.name}
                name={project.name}
                icon={project.icon}
                links={project.links as any}
                description={project.description}
              />
            ))}
          </div>
        </section>
      ))}

      <p className="pt-2 text-center">
        <a
          href="https://github.com/lordpipon"
          target="_blank"
          rel="noopener noreferrer"
          className="muted-link hover:underline"
        >
          View more on my GitHub →
        </a>
      </p>

      <script dangerouslySetInnerHTML={{ __html: obfuscateScript }} />
    </div>
  );
}

const obfuscateScript = minify(/* js */`
  document.querySelectorAll("a[data-obfuscated]").forEach((link) => {
    const reveal = function () {
      var encoded = link?.getAttribute("data-obfuscated")?.split("").reverse().join("") || "";
      if (!encoded) return;
      var decoded = decodeURIComponent(escape(atob(encoded)));
      link?.setAttribute("href", decoded);
      link?.removeAttribute("data-obfuscated");
      link?.removeEventListener("mouseover", reveal);
      link?.removeEventListener("focus", reveal);
      link?.removeEventListener("click", reveal);
    };
    link?.addEventListener("mouseover", reveal);
    link?.addEventListener("focus", reveal);
    link?.addEventListener("click", reveal);
  });
`);
