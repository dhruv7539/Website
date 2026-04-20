"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { publications } from "@/lib/data";
import { BookOpen, Quote } from "lucide-react";

export default function Publications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="publications" className="py-16 sm:py-24 px-4 sm:px-6">
      <div ref={ref} className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-2 font-mono text-sm text-primary">05.</h2>
          <h3 className="mb-4 text-3xl font-bold sm:text-4xl">
            <span className="text-gradient">Publications</span>
          </h3>
          <p className="mb-8 sm:mb-12 max-w-2xl text-base sm:text-lg text-muted-foreground">
            Peer-reviewed research published at IEEE conferences.
          </p>
        </motion.div>

        <div className="space-y-6">
          {publications.map((pub, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group relative rounded-2xl border border-border bg-card/50 p-6 transition-all duration-300 hover:border-primary/30 hover:bg-card hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <BookOpen className="h-6 w-6" />
                </div>
                <div className="flex-1 space-y-2">
                  <h4 className="text-lg font-bold text-foreground leading-snug">
                    {pub.title}
                  </h4>
                  <p className="font-mono text-sm text-primary">{pub.venue}</p>
                  <p className="text-sm text-muted-foreground">
                    {pub.authors}
                  </p>
                  {pub.highlight && (
                    <div className="flex items-center gap-2 pt-1">
                      <Quote className="h-3.5 w-3.5 text-primary" />
                      <span className="text-sm font-medium text-foreground">
                        {pub.highlight}
                      </span>
                    </div>
                  )}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {pub.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
