"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  MapPin,
  GraduationCap,
  Briefcase,
} from "lucide-react";
import { socialLinks, education, siteConfig } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  github: <Github className="h-5 w-5" />,
  linkedin: <Linkedin className="h-5 w-5" />,
  mail: <Mail className="h-5 w-5" />,
  medium: <ExternalLink className="h-5 w-5" />,
};

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-6">
      <div ref={ref} className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-2 font-mono text-sm text-primary">01.</h2>
          <h3 className="mb-12 text-3xl font-bold sm:text-4xl">
            About <span className="text-gradient">Me</span>
          </h3>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 space-y-6"
          >
            <p className="text-lg leading-relaxed text-muted-foreground">
              I&apos;m a Software Engineer pursuing my{" "}
              <span className="text-foreground font-medium">
                Master&apos;s in Computer Science at USC (3.85 GPA)
              </span>
              , with a B.Tech in CS from Pandit Deendayal Energy University
              (3.88 GPA). I specialize in building production-grade distributed
              systems, scalable APIs, and cloud-native applications.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              My expertise spans the full stack — from React and Next.js
              frontends to Node.js/Django microservices, gRPC APIs, and Kafka
              event pipelines. I&apos;ve deployed on AWS with Docker and
              Kubernetes, automated CI/CD with GitHub Actions, and built
              AI-powered platforms using LLM agents like Claude 3.5 and Letta AI.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Currently studying Analysis of Algorithms, NLP, Information
              Retrieval, and Web Technologies at USC while interning at the{" "}
              <span className="text-foreground font-medium">
                USC Norman Lear Center
              </span>
              , where I&apos;ve boosted API throughput by 42% and cut deployment
              errors with automated pipelines.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  {iconMap[link.icon]}
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="rounded-xl border border-border bg-card/50 p-6 space-y-4">
              <div className="flex items-center gap-3 text-foreground">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="font-medium">{siteConfig.location}</span>
              </div>
              <div className="flex items-center gap-3 text-foreground">
                <Briefcase className="h-5 w-5 text-primary" />
                <span className="font-medium">Open to Opportunities</span>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="flex items-center gap-2 text-lg font-semibold">
                <GraduationCap className="h-5 w-5 text-primary" />
                Education
              </h4>
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.15 }}
                  className="rounded-xl border border-border bg-card/50 p-4 space-y-1"
                >
                  <h5 className="font-semibold text-foreground">
                    {edu.school}
                  </h5>
                  <p className="text-sm text-muted-foreground">{edu.degree}</p>
                  <p className="font-mono text-xs text-primary">{edu.date}</p>
                  {edu.courses && (
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {edu.courses.map((c) => (
                        <span
                          key={c}
                          className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs text-primary"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
