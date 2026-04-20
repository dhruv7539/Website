"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { skills } from "@/lib/data";
import { cn } from "@/lib/utils";
import {
  Code2,
  Layout,
  Server,
  Cloud,
  Database,
  Wrench,
  Brain,
} from "lucide-react";

const categoryIcons: Record<string, React.ReactNode> = {
  Languages: <Code2 className="h-5 w-5" />,
  Frontend: <Layout className="h-5 w-5" />,
  Backend: <Server className="h-5 w-5" />,
  "Cloud & DevOps": <Cloud className="h-5 w-5" />,
  Databases: <Database className="h-5 w-5" />,
  "Databases & Messaging": <Database className="h-5 w-5" />,
  "Tools & Testing": <Wrench className="h-5 w-5" />,
  "ML / NLP / AI": <Brain className="h-5 w-5" />,
};

function SkillBar({
  name,
  level,
  delay,
  trigger,
}: {
  name: string;
  level: number;
  delay: number;
  trigger: boolean;
}) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="font-mono text-xs text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
        <div
          className="h-full rounded-full"
          style={{
            width: trigger ? `${level}%` : "0%",
            background:
              "linear-gradient(to right, hsl(var(--primary)), #c084fc)",
            transitionProperty: "width",
            transitionDuration: "1100ms",
            transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
            transitionDelay: `${delay * 1000}ms`,
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [barsTrigger, setBarsTrigger] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setBarsTrigger(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: "0px 0px -80px 0px", threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-16 sm:py-24 px-4 sm:px-6">
      <div ref={ref} className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-2 font-mono text-sm text-primary">02.</h2>
          <h3 className="mb-4 text-3xl font-bold sm:text-4xl">
            Skills & <span className="text-gradient">Technologies</span>
          </h3>
          <p className="mb-8 sm:mb-12 max-w-2xl text-base sm:text-lg text-muted-foreground">
            A comprehensive toolkit built through real-world projects and
            production systems. Hover over each category to explore.
          </p>
        </motion.div>

        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((category, catIdx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              onMouseEnter={() => setHoveredCategory(category.category)}
              onMouseLeave={() => setHoveredCategory(null)}
              className={cn(
                "group relative rounded-2xl border border-border bg-card/50 p-6 transition-all duration-300",
                hoveredCategory === category.category
                  ? "border-primary/50 bg-card shadow-lg shadow-primary/5 scale-[1.02]"
                  : hoveredCategory !== null
                  ? "opacity-60"
                  : "hover:border-primary/30 hover:bg-card"
              )}
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  {categoryIcons[category.category]}
                </div>
                <h4 className="text-lg font-semibold">{category.category}</h4>
              </div>

              <div className="space-y-3">
                {category.items.map((skill, skillIdx) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={catIdx * 0.05 + skillIdx * 0.04}
                    trigger={barsTrigger}
                  />
                ))}
              </div>

              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
