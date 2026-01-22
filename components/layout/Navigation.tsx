"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center">
      <motion.nav
        className="flex items-center"
        initial={false}
        animate={{
          width: scrolled ? "90%" : "100%",
          maxWidth: scrolled ? "64rem" : "100%",
          marginTop: scrolled ? "1rem" : "0px",
          borderRadius: scrolled ? "9999px" : "0px",
          backgroundColor: scrolled
            ? "rgba(10, 10, 10, 0.8)"
            : "transparent",
          borderWidth: scrolled ? "1px" : "0px",
          borderStyle: scrolled ? "solid" : "none",
          borderColor: scrolled ? "rgba(255, 255, 255, 0.1)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          paddingTop: scrolled ? "0.75rem" : "1rem",
          paddingBottom: scrolled ? "0.75rem" : "1rem",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
        }}
        style={{
          WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
        } as React.CSSProperties}
        transition={{
          type: "tween",
          ease: [0.4, 0, 0.2, 1],
          duration: 0.6,
        }}
      >
        <div className="w-full flex items-center justify-between">
          <motion.div
            className="text-2xl font-bold tracking-tight text-white"
            layout
          >
            TagHere CRM
          </motion.div>
          <div className="flex items-center gap-4">
            <a
              href="#pricing"
              className="hidden sm:block text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              요금안내
            </a>
            <motion.div layout>
              <Button
                variant="default"
                size="lg"
                className={`text-sm font-semibold px-5 py-2.5 transition-all duration-600 ${
                  scrolled
                    ? "bg-white/10 text-white hover:bg-white/20 border border-white/20 rounded-full"
                    : "bg-white text-black hover:bg-white/90 rounded-lg"
                }`}
              >
                월 0원으로 시작하기
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.nav>
    </div>
  );
}
