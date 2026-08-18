"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const FULL_TEXT = "Hi, i am ";
const NAME_TEXT = "lordpipon";

export function TypewriterHero() {
  const [greetingDone, setGreetingDone] = useState(false);
  const [nameDone, setNameDone] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setGreetingDone(true), 600 + FULL_TEXT.length * 80);
    return () => clearTimeout(t1);
  }, []);

  useEffect(() => {
    if (!greetingDone) return;
    const t2 = setTimeout(() => setNameDone(true), 400 + NAME_TEXT.length * 80);
    return () => clearTimeout(t2);
  }, [greetingDone]);

  return (
    <div className="flex flex-col items-center text-center">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "backOut" }}
      >
        <Image
          src="/pfp.png"
          alt="lordpipon"
          width={112}
          height={112}
          priority
          className="size-28 rounded-full object-cover ring-2 ring-border animate-float"
        />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mt-8 text-3xl font-bold tracking-tight sm:text-4xl"
      >
        <Typewriter text={FULL_TEXT} onComplete={() => setGreetingDone(true)} />
        <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          <Typewriter
            text={NAME_TEXT}
            delay={greetingDone ? 0 : 99999}
            onComplete={() => setNameDone(true)}
          />
        </span>
        {!nameDone && <Cursor />}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: nameDone ? 1 : 0 }}
        transition={{ duration: 0.6 }}
        className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground"
      >
        Minecraft server owner, Linux tinkerer and builder of small things.
      </motion.p>
    </div>
  );
}

function Typewriter({
  text,
  delay = 0,
  speed = 80,
  onComplete,
}: {
  text: string;
  delay?: number;
  speed?: number;
  onComplete?: () => void;
}) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    if (displayed.length >= text.length) {
      onComplete?.();
      return;
    }
    const t = setTimeout(() => setDisplayed(text.slice(0, displayed.length + 1)), speed);
    return () => clearTimeout(t);
  }, [started, displayed, text, speed, onComplete]);

  return (
    <span>
      {displayed}
      {started && displayed.length < text.length && <Cursor />}
    </span>
  );
}

function Cursor() {
  return <span className="animate-blink ml-0.5 inline-block h-[1.1em] w-[2px] translate-y-[1px] bg-foreground" />;
}
