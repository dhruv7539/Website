"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, BookOpen, Briefcase, Zap } from "lucide-react";

const currentItems = [
  {
    icon: <Briefcase className="h-4 w-4" />,
    label: "Working at",
    value: "USC Norman Lear Center",
    color: "#7c3aed",
  },
  {
    icon: <BookOpen className="h-4 w-4" />,
    label: "Studying",
    value: "NLP & Information Retrieval @ USC",
    color: "#2563eb",
  },
  {
    icon: <Zap className="h-4 w-4" />,
    label: "Building",
    value: "AI-powered platforms & distributed systems",
    color: "#059669",
  },
  {
    icon: <MapPin className="h-4 w-4" />,
    label: "Based in",
    value: "Los Angeles, CA",
    color: "#dc2626",
  },
];

export default function CurrentlyWidget() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="py-12 px-6">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-border bg-card/50 p-6 sm:p-8"
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
            </span>
            <h3 className="text-lg font-semibold">Currently</h3>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {currentItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                className="flex items-start gap-3"
              >
                <div
                  className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg"
                  style={{ backgroundColor: `${item.color}15`, color: item.color }}
                >
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {item.label}
                  </p>
                  <p className="text-sm font-medium text-foreground">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
