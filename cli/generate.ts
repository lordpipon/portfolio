#!/usr/bin/env bun

const WIDTH = 50;
const WEBSITE_URL = "https://lordpipon.is-not-a.dev";
const GITUHB_URL = "https://github.com/lordpipon";
const EMAIL_MAILTO = atob("bWFpbHRvOmxvcmRwaXBvbkBnbWFpbC5jb20=");

const gray = (str: string) => `\x1b[38;2;107;114;128m${str}\x1b[0m`;
const lightGray = (str: string) => `\x1b[38;2;156;163;175m${str}\x1b[0m`;
const blue = (str: string) => `\x1b[38;2;59;130;246m${str}\x1b[0m`;
const bold = (str: string) => `\x1b[1m${str}\x1b[0m`;

const link = (text: string, url: string) =>
    blue(`\x1b]8;;${url}\x1b\\${text}\x1b]8;;\x1b\\`);

function center(text: string) {
    const strippedLength = Bun.stringWidth(Bun.stripANSI(text));
    const padding = Math.floor((WIDTH - 2 - strippedLength) / 2);
    const rightPadding = WIDTH - 2 - strippedLength - padding;

    return (
        gray("│") +
        " ".repeat(padding) +
        text +
        " ".repeat(rightPadding) +
        gray("│")
    );
}

const content = `${gray("╭" + "─".repeat(WIDTH - 2) + "╮")}
${gray("│" + " ".repeat(WIDTH - 2) + "│")}
${center(bold("👨‍💻 lordpipon") + "  ")}
${gray("│" + " ".repeat(WIDTH - 2) + "│")}
${center(lightGray("Just a random backend developer"))}
${center(
    link("website", WEBSITE_URL) +
    lightGray(" | ") +
    link("github", GITUHB_URL) +
    lightGray(" | ") +
    link("email", EMAIL_MAILTO)
)}
${gray("│" + " ".repeat(WIDTH - 2) + "│")}
${gray("╰" + "─".repeat(WIDTH - 2) + "╯")}`;

if (import.meta.main) {
    await Bun.write(
        import.meta.dir + "/cli.js",
        `#!/usr/bin/env node
import { generate } from "./generate" with { type: "macro" };
console.log(generate());`
    );

    await Bun.build({
        entrypoints: [import.meta.dir + "/cli.js"],
        outdir: import.meta.dir,
        target: "bun",
        minify: true,
    });

    await Bun.file(import.meta.dir + "/cli.js").delete();
    await Bun.file(import.meta.dir + "/../public/cli.txt").write(content + "\n");

    console.log(content);
}

export const generate = () => content;