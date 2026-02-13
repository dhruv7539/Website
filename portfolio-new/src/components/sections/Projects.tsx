"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Github, ExternalLink, FolderGit2 } from "lucide-react";
import TiltCard from "../TiltCard";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState<string>("all");

  const allTags = Array.from(new Set(projects.flatMap((p) => p.tags)));
  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.tags.includes(filter));

  return (
    <section id="projects" className="py-16 sm:py-24 px-4 sm:px-6">
      <div ref={ref} className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-2 font-mono text-sm text-primary">04.</h2>
          <h3 className="mb-4 text-3xl font-bold sm:text-4xl">
            Featured <span className="text-gradient">Projects</span>
          </h3>
          <p className="mb-8 sm:mb-12 max-w-2xl text-base sm:text-lg text-muted-foreground">
            A selection of projects I&apos;ve built. Filter by technology to
            explore.
          </p>
        </motion.div>

        {/* Filter tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-6 sm:mb-8 flex flex-wrap gap-2 overflow-x-auto pb-2"
        >
          <button
            onClick={() => setFilter("all")}
            className={cn(
              "rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200",
              filter === "all"
                ? "bg-primary text-primary-foreground shadow-md shadow-primary/25"
                : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
            )}
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setFilter(tag === filter ? "all" : tag)}
              className={cn(
                "rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200",
                filter === tag
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/25"
                  : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
              )}
            >
              {tag}
            </button>
          ))}
        </motion.div>

        {/* Project cards */}
        <motion.div layout className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, i) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
            <TiltCard
              className={cn(
                "group relative flex flex-col rounded-2xl border border-border bg-card/50 p-6 transition-all duration-300 hover:border-primary/30 hover:bg-card hover:shadow-lg hover:shadow-primary/5 h-full",
                project.featured && "sm:col-span-2 lg:col-span-1"
              )}
            >
              {project.featured && (
                <div className="absolute -top-px left-6 right-6">
                  <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
                </div>
              )}

              <div className="mb-4 flex items-center justify-between">
                <FolderGit2 className="h-8 w-8 text-primary" />
                <div className="flex items-center gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground transition-colors hover:text-primary"
                      aria-label="GitHub"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground transition-colors hover:text-primary"
                      aria-label="Live demo"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>

              <h4 className="mb-2 text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h4>

              <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <div className="mb-6 sm:mb-8 flex flex-wrap gap-2 overflow-x-auto pb-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-secondary px-2.5 py-0.5 font-mono text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100 pointer-events-none" />
            </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
