"use client";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Hero() {
  const words = ["자동으로", "빠르게", "스마트하게"].filter(word => word && word.trim() !== "");
  const [currentIndex, setCurrentIndex] = useState(0);
  const duration = 3000;

  useEffect(() => {
    if (words.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className="min-h-[40rem] pt-24 pb-24 flex flex-col items-center justify-center bg-neutral-950 w-full gap-4 px-4">
      <motion.div className="relative mx-4 my-4 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-2 text-center">
        <motion.span
          layout
          className="text-4xl md:text-6xl font-bold tracking-tight drop-shadow-lg text-white"
        >
          단골손님
        </motion.span>
        <motion.span
          layout
          className="relative w-fit overflow-hidden rounded-md border border-transparent px-4 py-2 font-sans text-4xl md:text-6xl font-bold tracking-tight text-[#38b6f5] shadow-sm ring shadow-black/10 ring-black/10 drop-shadow-lg dark:bg-[#202028] dark:text-white dark:shadow-sm dark:ring-1 dark:shadow-white/10 dark:ring-white/10"
          style={{ backgroundColor: 'rgba(22, 35, 50, 1)', borderColor: 'rgba(3, 3, 3, 0)' }}
        >
          <AnimatePresence mode="popLayout">
            <motion.span
              key={currentIndex}
              initial={{ y: -40, filter: "blur(10px)" }}
              animate={{
                y: 0,
                filter: "blur(0px)",
              }}
              exit={{ y: 50, filter: "blur(10px)", opacity: 0 }}
              transition={{
                duration: 0.5,
              }}
              className={cn("inline-block whitespace-nowrap")}
            >
              {words[currentIndex] || ""}
            </motion.span>
          </AnimatePresence>
        </motion.span>
        <motion.span
          layout
          className="text-4xl md:text-6xl font-bold tracking-tight drop-shadow-lg text-white"
        >
          만들어드립니다
        </motion.span>
      </motion.div>
      <p className="mt-4 text-center text-base text-neutral-400" style={{ fontSize: '15px' }}>
        포인트 적립부터 리뷰 요청, 재방문 알림까지 — 한 번에 끝
      </p>

      {/* 추가 요소들 */}
      <div className="flex flex-col items-center gap-8 mt-10 w-full max-w-2xl">
        {/* A. 메인 CTA 버튼 */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-black font-bold px-8 py-4 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all duration-300"
        >
          월 0원으로 시작하기
        </motion.button>

        {/* B. 이벤트 안내 카드 */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 w-[360px] text-left">
          <div className="space-y-3 mb-4">
            <div className="flex items-center gap-2 text-white">
              <span className="text-green-400">✓</span>
              <span>월 구독료 0원 <span className="text-green-400">(정가 33,000원)</span></span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <span className="text-green-400">✓</span>
              <span>설치 필요 없음</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <span className="text-green-400">✓</span>
              <span>언제든 해지 가능</span>
            </div>
          </div>
          <p className="text-neutral-500 text-xs mt-4">
            월 0원 이벤트는 조기종료 될 수 있습니다.
          </p>
        </div>
      </div>

      {/* 정적 제품 이미지 */}
      <div className="max-w-5xl mx-auto mt-12 px-4">
        <Image
          src="/crm-dashboard.png"
          alt="CRM Dashboard Preview"
          width={1200}
          height={800}
          className="w-full h-auto rounded-2xl border border-white/10 shadow-2xl shadow-black/50"
          priority
        />
      </div>

      {/* 신뢰 지표 (Infinite Logo Marquee) */}
      <div className="flex flex-col items-center gap-8 mt-10 w-full">
        <div className="w-full overflow-hidden relative mt-4">
          <div 
            className="flex gap-8"
            style={{
              maskImage: 'linear-gradient(to right, transparent, black 44%, black 56%, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 44%, black 56%, transparent)',
            }}
          >
            <motion.div
              className="flex gap-8 items-center"
              animate={{
                x: [0, -3168],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 52.5,
                  ease: "linear",
                },
              }}
            >
              {Array.from({ length: 24 }, (_, i) => i + 1).concat(Array.from({ length: 24 }, (_, i) => i + 1)).map((logoNum, index) => (
                <div key={index} className="flex-shrink-0 h-[100px] w-[100px] opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all">
                  <Image
                    src={`/logo/logo${String(logoNum).padStart(2, '0')}.png`}
                    alt={`Logo ${logoNum}`}
                    width={100}
                    height={100}
                    className="h-[100px] w-[100px] object-contain"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
