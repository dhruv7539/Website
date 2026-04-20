"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { openSourceContributions } from "@/lib/data";
import { GitPullRequest, ExternalLink } from "lucide-react";

export default function OpenSource() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="opensource" className="py-16 sm:py-24 px-4 sm:px-6">
      <div ref={ref} className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-2 font-mono text-sm text-primary">06.</h2>
          <h3 className="mb-4 text-3xl font-bold sm:text-4xl">
            Open Source{" "}
            <span className="text-gradient">Contributions</span>
          </h3>
          <p className="mb-8 sm:mb-12 max-w-2xl text-base sm:text-lg text-muted-foreground">
            Merged pull requests across major open-source projects.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {openSourceContributions.map((contrib, i) => (
            <motion.a
              key={i}
              href={contrib.prUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group relative flex flex-col rounded-2xl border border-border bg-card/50 p-6 transition-all duration-300 hover:border-primary/30 hover:bg-card hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mb-4 flex items-center justify-between">
                <GitPullRequest className="h-7 w-7 text-green-500" />
                <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
              </div>

              <h4 className="mb-1 text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                {contrib.project}
              </h4>
              <p className="mb-1 font-mono text-xs text-muted-foreground">
                {contrib.repo} {contrib.pr}
              </p>

              {contrib.reviewedBy && (
                <p className="mb-2 text-xs text-primary font-medium">
                  Reviewed by {contrib.reviewedBy}
                </p>
              )}

              {contrib.lines && (
                <p className="mb-2 font-mono text-xs text-muted-foreground">
                  {contrib.lines}
                </p>
              )}

              <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {contrib.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {contrib.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-secondary px-2.5 py-0.5 font-mono text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100 pointer-events-none" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
