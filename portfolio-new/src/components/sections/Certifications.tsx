"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { certifications } from "@/lib/data";
import { Award, ExternalLink } from "lucide-react";

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="py-16 sm:py-24 px-4 sm:px-6">
      <div ref={ref} className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-2 font-mono text-sm text-primary">05.</h2>
          <h3 className="mb-4 text-3xl font-bold sm:text-4xl">
            Certifications & <span className="text-gradient">Achievements</span>
          </h3>
          <p className="mb-8 sm:mb-12 max-w-2xl text-base sm:text-lg text-muted-foreground">
            Professional certifications that validate my expertise.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <motion.a
              key={cert.title}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              whileHover={{ y: -4 }}
              className="group relative flex flex-col rounded-2xl border border-border bg-card/50 p-6 transition-all duration-300 hover:border-primary/30 hover:bg-card hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="absolute -top-px left-6 right-6">
                <div
                  className="h-1 rounded-b-full"
                  style={{ backgroundColor: cert.color }}
                />
              </div>

              <div className="mb-4 flex items-center justify-between">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{ backgroundColor: `${cert.color}15` }}
                >
                  <Award className="h-6 w-6" style={{ color: cert.color }} />
                </div>
                <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 transition-all group-hover:opacity-100 group-hover:text-primary" />
              </div>

              <div className="mb-1 font-mono text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {cert.issuer}
              </div>
              <h4 className="mb-3 text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                {cert.title}
              </h4>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {cert.description}
              </p>

              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100 pointer-events-none" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
