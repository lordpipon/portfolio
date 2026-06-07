import React from "react";
import DiscordIcon from "./icons/discord-icon.svg";
import ExternalIcon from "./icons/external-icon.svg";
import GitHubIcon from "./icons/github-icon.svg";
import SocialDropdown, { DropdownLink } from "./social-dropdown";
import LinkButton from "./link-button";
import MailIcon from "./icons/mail-icon.svg";
import YouTubeIcon from "./icons/youtube-icon.svg";
import TwitterIcon from "./icons/twitter-icon.svg";
import RedditIcon from "./icons/reddit-icon.svg";
import BlueskyIcon from "./icons/bluesky-icon.svg";
import GlobeIcon from "./icons/globe-icon.svg";
import NpmIcon from "./icons/npm-icon.svg";
import WikipediaIcon from "./icons/wikipedia-icon.svg";
import { minify } from "../tools/minify.macro" with { type: "macro" };

export const MainCard: React.FC = () => (
  <main
    id="main-card"
    className="z-10 flex flex-col items-center rounded-xl bg-card p-4 shadow-md md:flex-row md:p-6 gap-5"
    itemScope itemType="https://schema.org/Person"
  >
    <picture className="h-32 w-32 rounded-xl bg-placeholder" id="avatar-container">
      {/* <source media="(max-width:600px)" srcSet="/fire_anim_small.webp" type="image/webp" /> */}
      <source srcSet="/fire_anim.avif" type="image/avif" />
      <source srcSet="/fire_anim_small.webp" type="image/webp" media="(max-width:600px)" />
      <source srcSet="/fire_anim.webp" type="image/webp" media="(min-width:600px" />
      <source srcSet="/fire_anim.png" type="image/png" />
      <img
        // loading="lazy"
        fetchPriority="high"
        itemProp="image"
        src="/fire_anim.png"
        alt="🔥 Avatar"
        height={128}
        width={128}
        title="A risky fire..."
        data-from="https://github.com/microsoft/fluentui-emoji/tree/main/assets/Fire"
        style={{ animation: "fadeInWhite 0.5s 0.5s forwards", color: "transparent" }}
        className="rounded-xl"
      />
      <style>{`@keyframes fadeInWhite{to{color:white}}`}</style>

      {/* safari is kinda broken for animated avif images: https://bugs.webkit.org/show_bug.cgi?id=275906 */}
      <script dangerouslySetInnerHTML={{
        __html: minify(`{
            const ua = navigator.userAgent;
            const isIOS = /\\b(iPad|iPhone|iPod)\\b/.test(ua);
            const hasAppleWebKit = /AppleWebKit/.test(ua);
            const hasChrome = /Chrome/.test(ua);

            if (isIOS || (hasAppleWebKit && !hasChrome)) {
              document.querySelector('#avatar-container source[type="image/avif"]')?.remove();
            }      
          };`)
      }} />
    </picture>
    <div className="flex flex-col gap-2 md:mr-2">
      <div className="text-center md:text-left">
        <h1 className="text-3xl font-bold leading-9" itemProp="name">freeutka</h1>
        <p className="text-text-secondary" itemProp="description">Just a random person on the internet</p>
      </div>
      <div className="flex flex-col md:flex-row gap-2 w-full">
        <ul className="flex flex-row gap-2 w-full *:flex-1 list-none">
          <LinkButton
            url="https://github.com/freeutka"
            text="GitHub"
            Icon={GitHubIcon}
            itemProp="sameAs"
          />
          <LinkButton
            url="https://discord.gg/2xw8hApK"
            text="Discord"
            Icon={DiscordIcon}
            itemProp="sameAs"
          />
          <LinkButton
            url="mailto:freeutka@proton.me"
            text="Email"
            //obfuscate="https://emailthing.me/@"
            Icon={MailIcon}
            itemProp="sameAs"
          />
        </ul>
        <SocialDropdown>
          <DropdownLink
            key="dropdown-github"
            url="https://github.com/freeutka"
            text="GitHub"
            Icon={GitHubIcon}
          />
          <DropdownLink
            key="dropdown-discord"
            url="https://discord.gg/2xw8hApK"
            text="Discord"
            Icon={DiscordIcon}
          />
          <DropdownLink
            key="dropdown-email"
            url="mailto:freeutka@proton.me"
            //obfuscate="https://emailthing.me/@"
            text="Email"
            Icon={MailIcon}
          />
          <DropdownLink
            key="dropdown-npm"
            url="https://www.npmjs.com/~freeutka"
            text="NPM"
            Icon={NpmIcon}
          />
          <li key="dropdown-separator" className="py-1"><hr className="border-dropdown-hover border-t" /></li>
          <DropdownLink
            key="dropdown-website"
            url="https://freeutka.is-a.dev"
            text="This Website"
            Icon={GlobeIcon}
          />
        </SocialDropdown>
      </div>
    </div>
  </main>
);

export default MainCard;
