"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 20);

      // 스크롤 방향 감지: 아래로 내리면 숨김, 위로 올리면 표시
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // 메뉴 열릴 때 스크롤 방지
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-full z-50 flex justify-center"
        initial={false}
        animate={{
          y: hidden && !mobileMenuOpen ? -100 : 0,
          opacity: hidden && !mobileMenuOpen ? 0 : 1,
        }}
        transition={{
          type: "tween",
          ease: [0.4, 0, 0.2, 1],
          duration: 0.3,
        }}
      >
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

            {/* Desktop Menu */}
            <div className="hidden sm:flex items-center gap-4">
              <a
                href="#pricing"
                className="text-sm font-medium text-white/70 hover:text-white transition-colors"
              >
                요금안내
              </a>
              <motion.div layout>
                <a
                  href="https://tally.so/r/jab1oR"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
                </a>
              </motion.div>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              className="sm:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="메뉴 열기"
            >
              <motion.span
                className="block w-6 h-0.5 bg-white rounded-full"
                animate={{
                  rotate: mobileMenuOpen ? 45 : 0,
                  y: mobileMenuOpen ? 8 : 0,
                }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="block w-6 h-0.5 bg-white rounded-full"
                animate={{
                  opacity: mobileMenuOpen ? 0 : 1,
                }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="block w-6 h-0.5 bg-white rounded-full"
                animate={{
                  rotate: mobileMenuOpen ? -45 : 0,
                  y: mobileMenuOpen ? -8 : 0,
                }}
                transition={{ duration: 0.2 }}
              />
            </button>
          </div>
        </motion.nav>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-md sm:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              <a
                href="#pricing"
                className="text-2xl font-medium text-white/80 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                요금안내
              </a>
              <a
                href="https://tally.so/r/jab1oR"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Button
                  variant="default"
                  size="lg"
                  className="text-lg font-semibold px-8 py-4 bg-white text-black hover:bg-white/90 rounded-full"
                >
                  월 0원으로 시작하기
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
