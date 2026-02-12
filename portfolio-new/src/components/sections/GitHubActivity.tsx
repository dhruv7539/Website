"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink } from "lucide-react";
import { useTheme } from "next-themes";

const repos = [
  {
    name: "BigBrain",
    description: "AI-powered interactive learning platform with real-time knowledge sharing.",
    url: "https://github.com/dhruv7539/BigBrain",
    language: "TypeScript",
    languageColor: "#3178c6",
  },
  {
    name: "PixMod",
    description: "AI SaaS for image restoration, recoloring, object removal & background removal.",
    url: "https://github.com/dhruv7539/PixMod",
    language: "TypeScript",
    languageColor: "#3178c6",
  },
  {
    name: "Hospital-Management",
    description: "Healthcare patient management system with appointment booking & SMS notifications.",
    url: "https://github.com/dhruv7539/Hospital-Management",
    language: "TypeScript",
    languageColor: "#3178c6",
  },
  {
    name: "Fin-Nexus",
    description: "FinTech SaaS platform with Plaid/Dwolla APIs for KYC and ACH transfers.",
    url: "https://github.com/dhruv7539/Fin-Nexus",
    language: "TypeScript",
    languageColor: "#3178c6",
  },
];

export default function GitHubActivity() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { resolvedTheme } = useTheme();

  const graphTheme = resolvedTheme === "dark" ? "github-dark" : "default";

  return (
    <section className="py-16 px-6">
      <div ref={ref} className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="font-mono text-sm text-primary mb-2">Open Source</p>
          <h3 className="mb-4 text-2xl font-bold sm:text-3xl">
            GitHub <span className="text-gradient">Activity</span>
          </h3>
          <p className="max-w-2xl text-muted-foreground">
            My contribution graph and featured repositories.
          </p>
        </motion.div>

        {/* GitHub Contribution Graph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8 overflow-hidden rounded-2xl border border-border bg-card/50 p-6"
        >
          <div className="mb-4 flex items-center gap-3">
            <Github className="h-5 w-5 text-primary" />
            <h4 className="font-semibold">Contribution Graph</h4>
          </div>
          {/* GitHub contribution chart via ghchart.rshah.org */}
          <div className="overflow-x-auto">
            <img
              src={`https://ghchart.rshah.org/7c3aed/dhruv7539`}
              alt="Dhruv's GitHub Contribution Graph"
              className="w-full min-w-[700px] rounded-lg"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* GitHub Stats Cards via github-readme-stats */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="overflow-hidden rounded-2xl border border-border bg-card/50 p-4 flex items-center justify-center"
          >
            <img
              src={`https://github-readme-stats.vercel.app/api?username=dhruv7539&show_icons=true&theme=${graphTheme}&hide_border=true&bg_color=00000000&title_color=7c3aed&icon_color=7c3aed&text_color=888888&ring_color=7c3aed`}
              alt="GitHub Stats"
              className="w-full max-w-md"
              loading="lazy"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="overflow-hidden rounded-2xl border border-border bg-card/50 p-4 flex items-center justify-center"
          >
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=dhruv7539&layout=compact&theme=${graphTheme}&hide_border=true&bg_color=00000000&title_color=7c3aed&text_color=888888`}
              alt="Top Languages"
              className="w-full max-w-md"
              loading="lazy"
            />
          </motion.div>
        </div>

        {/* Featured Repos */}
        <div className="grid gap-4 sm:grid-cols-2">
          {repos.map((repo, i) => (
            <motion.a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
              whileHover={{ y: -3 }}
              className="group flex items-start gap-4 rounded-xl border border-border bg-card/50 p-5 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Github className="h-5 w-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h4 className="truncate font-semibold text-foreground group-hover:text-primary transition-colors">
                    {repo.name}
                  </h4>
                  <ExternalLink className="h-3.5 w-3.5 flex-shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                  {repo.description}
                </p>
                <div className="mt-2 flex items-center gap-1.5">
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ backgroundColor: repo.languageColor }}
                  />
                  <span className="text-xs text-muted-foreground">{repo.language}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.9 }}
          className="mt-8 text-center"
        >
          <a
            href="https://github.com/dhruv7539"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-2.5 text-sm font-medium text-muted-foreground transition-all hover:border-primary hover:text-primary"
          >
            <Github className="h-4 w-4" />
            View Full Profile on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
