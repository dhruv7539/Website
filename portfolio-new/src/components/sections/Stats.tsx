"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Code2, FolderGit2, Coffee, GitCommit, Calendar, Award } from "lucide-react";

interface StatItemProps {
  icon: React.ReactNode;
  value: number;
  suffix?: string;
  label: string;
  delay: number;
  color: string;
}

function AnimatedCounter({ value, suffix = "", delay }: { value: number; suffix?: string; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const isDecimal = value % 1 !== 0;
  const rounded = useTransform(count, (latest) =>
    isDecimal ? parseFloat(latest.toFixed(1)) : Math.round(latest)
  );
  const [display, setDisplay] = useState<number>(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 2,
        delay,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, value, delay, count]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => setDisplay(v));
    return unsubscribe;
  }, [rounded]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}{suffix}
    </span>
  );
}

function StatItem({ icon, value, suffix, label, delay, color }: StatItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -4, scale: 1.02 }}
      className="group relative flex flex-col items-center gap-3 rounded-2xl border border-border bg-card/50 p-6 text-center transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
    >
      <div
        className="flex h-14 w-14 items-center justify-center rounded-xl transition-colors duration-300"
        style={{ backgroundColor: `${color}15` }}
      >
        <div style={{ color }} className="transition-transform duration-300 group-hover:scale-110">
          {icon}
        </div>
      </div>
      <div className="text-3xl font-bold text-foreground">
        <AnimatedCounter value={value} suffix={suffix} delay={delay} />
      </div>
      <p className="text-sm text-muted-foreground">{label}</p>
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100 pointer-events-none" />
    </motion.div>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { icon: <Calendar className="h-6 w-6" />, value: 1.5, suffix: "+", label: "Years of Experience", color: "#7c3aed" },
    { icon: <FolderGit2 className="h-6 w-6" />, value: 15, suffix: "+", label: "Projects Completed", color: "#2563eb" },
    { icon: <Code2 className="h-6 w-6" />, value: 12, suffix: "+", label: "Technologies Mastered", color: "#059669" },
    { icon: <GitCommit className="h-6 w-6" />, value: 500, suffix: "+", label: "GitHub Contributions", color: "#d97706" },
    { icon: <Coffee className="h-6 w-6" />, value: 1000, suffix: "+", label: "Cups of Coffee", color: "#dc2626" },
    { icon: <Award className="h-6 w-6" />, value: 3, suffix: "", label: "Certifications", color: "#0891b2" },
  ];

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6">
      <div ref={ref} className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <p className="font-mono text-sm text-primary mb-2">By the numbers</p>
          <h3 className="text-2xl font-bold sm:text-3xl">
            Impact in <span className="text-gradient">Numbers</span>
          </h3>
        </motion.div>
        <div className="grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {stats.map((stat, i) => (
            <StatItem key={stat.label} {...stat} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
