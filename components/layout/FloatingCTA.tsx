"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Hero 섹션을 지나면 표시 (약 600px 스크롤 후)
      setVisible(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
        >
          <motion.a
            href="https://tally.so/r/jab1oR"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-[#3B82F6] text-white font-bold px-8 py-4 rounded-full shadow-[0_4px_20px_rgba(59,130,246,0.5)] hover:shadow-[0_4px_30px_rgba(59,130,246,0.7)] transition-all duration-300"
          >
            월 0원으로 시작하기
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
