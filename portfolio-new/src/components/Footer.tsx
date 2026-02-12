"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink, Heart } from "lucide-react";
import { socialLinks, siteConfig } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  github: <Github className="h-4 w-4" />,
  linkedin: <Linkedin className="h-4 w-4" />,
  mail: <Mail className="h-4 w-4" />,
  medium: <ExternalLink className="h-4 w-4" />,
};

export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <span>Built with</span>
          <Heart className="h-3.5 w-3.5 text-red-500 fill-red-500" />
          <span>by</span>
          <span className="font-medium text-foreground">{siteConfig.name}</span>
        </div>

        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label={link.name}
            >
              {iconMap[link.icon]}
            </motion.a>
          ))}
        </div>

        <p className="font-mono text-xs text-muted-foreground">
          Next.js + TypeScript + Tailwind
        </p>
      </div>
    </footer>
  );
}
