"use client";

import { motion } from "framer-motion";

const techStack = [
  "Python", "Go", "TypeScript", "JavaScript", "React", "Next.js",
  "Django", "FastAPI", "Node.js", "PostgreSQL", "pgvector", "MongoDB",
  "Redis", "AWS", "Docker", "Kubernetes", "Helm", "Terraform",
  "Kafka", "gRPC", "Prometheus", "Claude API", "PyTorch", "GitHub Actions",
];

function MarqueeRow({ reverse = false, speed = 30 }: { reverse?: boolean; speed?: number }) {
  const items = [...techStack, ...techStack];

  return (
    <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <motion.div
        className="flex shrink-0 gap-4 py-2"
        animate={{ x: reverse ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {items.map((tech, i) => (
          <div
            key={`${tech}-${i}`}
            className="flex shrink-0 items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
          >
            <span className="h-2 w-2 rounded-full bg-primary/50" />
            {tech}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function TechMarquee() {
  return (
    <div className="space-y-3 py-8">
      <MarqueeRow speed={35} />
      <MarqueeRow reverse speed={40} />
    </div>
  );
}
