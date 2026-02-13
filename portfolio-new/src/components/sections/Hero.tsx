"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown, FileDown, Mail } from "lucide-react";
import ParticleBackground from "../ParticleBackground";
import MagneticButton from "../MagneticButton";
import { siteConfig, terminalCommands } from "@/lib/data";

function TerminalAnimation() {
  const [lines, setLines] = useState<{ type: "cmd" | "out"; text: string }[]>(
    []
  );
  const [currentCmd, setCurrentCmd] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (currentCmd >= terminalCommands.length) {
      setIsTyping(false);
      return;
    }

    const cmd = terminalCommands[currentCmd];

    if (currentChar <= cmd.command.length) {
      const timeout = setTimeout(
        () => setCurrentChar((c) => c + 1),
        30 + Math.random() * 50
      );
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      setLines((prev) => [
        ...prev,
        { type: "cmd", text: cmd.command },
        { type: "out", text: cmd.output },
      ]);
      setCurrentCmd((c) => c + 1);
      setCurrentChar(0);
    }, 300);

    return () => clearTimeout(timeout);
  }, [currentCmd, currentChar]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines, currentChar]);

  const currentCommand = terminalCommands[currentCmd];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className="w-full max-w-xl rounded-xl border border-border bg-card/80 shadow-2xl backdrop-blur-sm overflow-hidden mx-auto lg:mx-0"
    >
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <div className="h-3 w-3 rounded-full bg-red-500" />
        <div className="h-3 w-3 rounded-full bg-yellow-500" />
        <div className="h-3 w-3 rounded-full bg-green-500" />
        <span className="ml-2 font-mono text-xs text-muted-foreground">
          dhruv@portfolio ~ %
        </span>
      </div>
      <div
        ref={terminalRef}
        className="h-40 sm:h-52 overflow-y-auto p-3 sm:p-4 font-mono text-xs sm:text-sm"
      >
        {lines.map((line, i) => (
          <div key={i} className="mb-1">
            {line.type === "cmd" ? (
              <div>
                <span className="text-green-400">➜</span>{" "}
                <span className="text-primary">~</span>{" "}
                <span className="text-foreground">{line.text}</span>
              </div>
            ) : (
              <div className="text-muted-foreground pl-4">{line.text}</div>
            )}
          </div>
        ))}
        {isTyping && currentCommand && (
          <div>
            <span className="text-green-400">➜</span>{" "}
            <span className="text-primary">~</span>{" "}
            <span className="text-foreground">
              {currentCommand.command.slice(0, currentChar)}
            </span>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity }}
              className="inline-block h-4 w-2 translate-y-0.5 bg-primary"
            />
          </div>
        )}
        {!isTyping && (
          <div>
            <span className="text-green-400">➜</span>{" "}
            <span className="text-primary">~</span>{" "}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity }}
              className="inline-block h-4 w-2 translate-y-0.5 bg-primary"
            />
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 sm:px-6">
      <ParticleBackground />

      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute right-1/4 bottom-1/4 h-72 w-72 rounded-full bg-purple-500/10 blur-[120px]" />
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-8 pt-24 pb-20 sm:gap-12 sm:pt-20 lg:flex-row lg:gap-16">
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="mb-4 font-mono text-sm text-primary">
              Hi, my name is
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            <span className="text-gradient">{siteConfig.name}</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6 text-xl font-semibold text-muted-foreground sm:text-2xl md:text-3xl"
          >
            I build scalable systems & intelligent platforms.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-8 max-w-lg text-base sm:text-lg text-muted-foreground lg:max-w-none"
          >
            Software Engineer specializing in building scalable full-stack
            applications, cloud infrastructure, and high-performance systems.
            Currently pursuing MS in Computer Science at{" "}
            <span className="text-primary font-medium">USC</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 justify-center lg:justify-start"
          >
            <MagneticButton
              as="a"
              href="#contact"
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25"
            >
              <Mail className="mr-2 h-4 w-4" />
              Get in Touch
            </MagneticButton>
            <MagneticButton
              as="a"
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-border bg-background text-foreground hover:bg-secondary"
            >
              <FileDown className="mr-2 h-4 w-4" />
              Resume
            </MagneticButton>
          </motion.div>
        </div>

        <div className="flex-1">
          <TerminalAnimation />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-xs font-mono">scroll down</span>
          <ArrowDown className="h-4 w-4" />
        </motion.a>
      </motion.div>
    </section>
  );
}
