"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function SplashScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 2200);
    document.body.style.overflow = show ? "hidden" : "auto";
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="fixed inset-0 z-[9998] flex items-center justify-center bg-background"
        >
          <div className="flex flex-col items-center gap-6">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
              className="relative"
            >
              <motion.div
                className="flex h-24 w-24 items-center justify-center rounded-2xl border-2 border-primary bg-primary/10"
                animate={{ borderColor: ["hsl(var(--primary))", "hsl(270,80%,60%)", "hsl(var(--primary))"] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="font-mono text-3xl font-bold text-gradient">DB</span>
              </motion.div>
              <motion.div
                className="absolute -inset-2 rounded-2xl border border-primary/30"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1.1, opacity: [0, 0.5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-1"
            >
              {["L", "o", "a", "d", "i", "n", "g"].map((char, i) => (
                <motion.span
                  key={i}
                  className="font-mono text-sm text-muted-foreground"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.1 }}
                >
                  {char}
                </motion.span>
              ))}
              <motion.span
                className="font-mono text-sm text-muted-foreground"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              >
                _
              </motion.span>
            </motion.div>

            <motion.div
              className="h-0.5 w-32 overflow-hidden rounded-full bg-secondary"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-primary to-purple-500"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, delay: 0.6, ease: "easeInOut" }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
