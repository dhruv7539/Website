"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const KONAMI_CODE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

export default function KonamiCode() {
  const [input, setInput] = useState<string[]>([]);
  const [activated, setActivated] = useState(false);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      const newInput = [...input, e.key];
      if (newInput.length > KONAMI_CODE.length) {
        newInput.shift();
      }
      setInput(newInput);

      if (
        newInput.length === KONAMI_CODE.length &&
        newInput.every((key, i) => key === KONAMI_CODE[i])
      ) {
        setActivated(true);
        setInput([]);
        setTimeout(() => setActivated(false), 5000);
      }
    },
    [input]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <AnimatePresence>
      {activated && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none"
        >
          <motion.div
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            className="rounded-2xl border border-primary bg-card p-8 shadow-2xl shadow-primary/20 text-center pointer-events-auto"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 10, 0] }}
              transition={{ duration: 0.5, repeat: 2 }}
              className="mb-4 text-6xl"
            >
              🎮
            </motion.div>
            <h3 className="mb-2 text-2xl font-bold text-gradient">
              Achievement Unlocked!
            </h3>
            <p className="text-muted-foreground">
              You found the secret Konami Code! You&apos;re clearly a person of
              culture. 🕹️
            </p>
            <div className="mt-4 flex justify-center gap-1">
              {["⬆️", "⬆️", "⬇️", "⬇️", "⬅️", "➡️", "⬅️", "➡️", "🅱️", "🅰️"].map(
                (emoji, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="text-lg"
                  >
                    {emoji}
                  </motion.span>
                )
              )}
            </div>
          </motion.div>

          {/* Confetti-like particles */}
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{
                x: 0,
                y: 0,
                scale: 0,
              }}
              animate={{
                x: (Math.random() - 0.5) * 600,
                y: (Math.random() - 0.5) * 600,
                scale: [0, 1, 0],
                rotate: Math.random() * 720,
              }}
              transition={{
                duration: 2,
                delay: Math.random() * 0.5,
                ease: "easeOut",
              }}
              className="absolute h-3 w-3 rounded-full"
              style={{
                backgroundColor: `hsl(${Math.random() * 360}, 80%, 60%)`,
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
