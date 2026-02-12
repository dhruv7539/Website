"use client";

import { useEffect, useState } from "react";
import { Command } from "cmdk";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import {
  Search,
  User,
  Code2,
  Briefcase,
  FolderGit2,
  Award,
  Mail,
  FileDown,
  Sun,
  Moon,
  Github,
  Linkedin,
  ExternalLink,
} from "lucide-react";
import { navItems, siteConfig, socialLinks } from "@/lib/data";

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const iconMap: Record<string, React.ReactNode> = {
    "#about": <User className="h-4 w-4" />,
    "#skills": <Code2 className="h-4 w-4" />,
    "#experience": <Briefcase className="h-4 w-4" />,
    "#projects": <FolderGit2 className="h-4 w-4" />,
    "#certifications": <Award className="h-4 w-4" />,
    "#contact": <Mail className="h-4 w-4" />,
  };

  const runAction = (action: () => void) => {
    setOpen(false);
    action();
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="hidden items-center gap-2 rounded-lg border border-border bg-secondary/50 px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground md:flex"
      >
        <Search className="h-3.5 w-3.5" />
        <span>Search...</span>
        <kbd className="ml-2 rounded border border-border bg-background px-1.5 py-0.5 text-[10px] font-mono">
          ⌘K
        </kbd>
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.15 }}
              className="fixed left-1/2 top-[20%] z-50 w-full max-w-lg -translate-x-1/2"
            >
              <Command className="rounded-xl border border-border bg-card shadow-2xl overflow-hidden">
                <Command.Input
                  placeholder="Type a command or search..."
                  className="w-full border-b border-border bg-transparent px-4 py-3 text-foreground outline-none placeholder:text-muted-foreground"
                />
                <Command.List className="max-h-80 overflow-y-auto p-2">
                  <Command.Empty className="py-6 text-center text-sm text-muted-foreground">
                    No results found.
                  </Command.Empty>

                  <Command.Group
                    heading="Navigation"
                    className="px-2 py-1.5 text-xs font-semibold text-muted-foreground"
                  >
                    {navItems.map((item) => (
                      <Command.Item
                        key={item.href}
                        onSelect={() =>
                          runAction(() => {
                            document
                              .querySelector(item.href)
                              ?.scrollIntoView({ behavior: "smooth" });
                          })
                        }
                        className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-secondary aria-selected:bg-secondary"
                      >
                        {iconMap[item.href] || (
                          <ExternalLink className="h-4 w-4" />
                        )}
                        {item.name}
                      </Command.Item>
                    ))}
                  </Command.Group>

                  <Command.Separator className="my-1 h-px bg-border" />

                  <Command.Group
                    heading="Actions"
                    className="px-2 py-1.5 text-xs font-semibold text-muted-foreground"
                  >
                    <Command.Item
                      onSelect={() =>
                        runAction(() =>
                          window.open(siteConfig.resumeUrl, "_blank")
                        )
                      }
                      className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-secondary aria-selected:bg-secondary"
                    >
                      <FileDown className="h-4 w-4" />
                      Download Resume
                    </Command.Item>
                    <Command.Item
                      onSelect={() =>
                        runAction(() =>
                          setTheme(
                            resolvedTheme === "dark" ? "light" : "dark"
                          )
                        )
                      }
                      className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-secondary aria-selected:bg-secondary"
                    >
                      {resolvedTheme === "dark" ? (
                        <Sun className="h-4 w-4" />
                      ) : (
                        <Moon className="h-4 w-4" />
                      )}
                      Toggle Theme
                    </Command.Item>
                  </Command.Group>

                  <Command.Separator className="my-1 h-px bg-border" />

                  <Command.Group
                    heading="Links"
                    className="px-2 py-1.5 text-xs font-semibold text-muted-foreground"
                  >
                    {socialLinks.map((link) => (
                      <Command.Item
                        key={link.name}
                        onSelect={() =>
                          runAction(() => window.open(link.url, "_blank"))
                        }
                        className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-secondary aria-selected:bg-secondary"
                      >
                        {link.icon === "github" && (
                          <Github className="h-4 w-4" />
                        )}
                        {link.icon === "linkedin" && (
                          <Linkedin className="h-4 w-4" />
                        )}
                        {link.icon === "mail" && (
                          <Mail className="h-4 w-4" />
                        )}
                        {link.icon === "medium" && (
                          <ExternalLink className="h-4 w-4" />
                        )}
                        {link.name}
                      </Command.Item>
                    ))}
                  </Command.Group>
                </Command.List>
              </Command>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
