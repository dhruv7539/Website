"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { experiences } from "@/lib/data";
import { cn } from "@/lib/utils";
import { ChevronDown, MapPin, Calendar } from "lucide-react";

function TimelineItem({
  experience,
  index,
  isLast,
}: {
  experience: (typeof experiences)[0];
  index: number;
  isLast: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [expanded, setExpanded] = useState(index === 0);

  return (
    <div ref={ref} className="relative flex gap-4 sm:gap-6 md:gap-10">
      {/* Timeline line + dot */}
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: index * 0.2 }}
          className={cn(
            "relative z-10 flex h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0 items-center justify-center rounded-full border-2 transition-colors duration-300",
            expanded
              ? "border-primary bg-primary text-primary-foreground"
              : "border-border bg-card text-muted-foreground"
          )}
        >
          <span className="font-mono text-sm font-bold">{index + 1}</span>
        </motion.div>
        {!isLast && (
          <motion.div
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : {}}
            transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
            className="w-px bg-gradient-to-b from-primary/50 to-border"
          />
        )}
      </div>

      {/* Content card */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.2 + 0.1 }}
        className="mb-10 flex-1 pb-2"
      >
        <motion.div
          onClick={() => setExpanded(!expanded)}
          className={cn(
            "cursor-pointer rounded-2xl border border-border bg-card/50 p-6 transition-all duration-300",
            expanded
              ? "border-primary/30 bg-card shadow-lg shadow-primary/5"
              : "hover:border-primary/20 hover:bg-card"
          )}
        >
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-1">
              <h4 className="text-xl font-bold text-foreground">
                {experience.role}
              </h4>
              <p className="text-lg font-medium text-primary">
                {experience.company}
              </p>
              <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5" />
                  {experience.date}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5" />
                  {experience.location}
                </span>
              </div>
            </div>
            <motion.div
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="mt-1 flex-shrink-0"
            >
              <ChevronDown className="h-5 w-5 text-muted-foreground" />
            </motion.div>
          </div>

          <motion.div
            initial={false}
            animate={{
              height: expanded ? "auto" : 0,
              opacity: expanded ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <ul className="mt-4 space-y-3 border-t border-border pt-4">
              {experience.bullets.map((bullet, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={expanded ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3 text-sm text-muted-foreground"
                >
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  <span className="leading-relaxed">{bullet}</span>
                </motion.li>
              ))}
            </ul>

            <div className="mt-4 flex flex-wrap gap-2">
              {experience.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-16 sm:py-24 px-4 sm:px-6">
      <div ref={ref} className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-2 font-mono text-sm text-primary">03.</h2>
          <h3 className="mb-4 text-3xl font-bold sm:text-4xl">
            Work <span className="text-gradient">Experience</span>
          </h3>
          <p className="mb-8 sm:mb-12 max-w-2xl text-base sm:text-lg text-muted-foreground">
            Building production systems at scale. Click on each role to see
            details.
          </p>
        </motion.div>

        <div>
          {experiences.map((exp, i) => (
            <TimelineItem
              key={i}
              experience={exp}
              index={i}
              isLast={i === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
