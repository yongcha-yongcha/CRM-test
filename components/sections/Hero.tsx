"use client";
import { motion } from "motion/react";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="min-h-[40rem] pt-24 pb-24 flex flex-col items-center justify-center bg-neutral-950 w-full gap-4 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative mx-4 my-4 flex flex-col items-center justify-center gap-2 text-center"
      >
        <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
          고객 데이터는{" "}
          <span className="text-[#3B82F6]">자동으로</span> 쌓고,
          <br />
          마케팅은{" "}
          <span className="relative inline-block">
            <span className="text-[#3B82F6]">필요할 때만</span>
            <motion.span
              className="absolute -bottom-1 left-0 w-full h-1 bg-[#3B82F6]"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </span>
        </motion.h1>
      </motion.div>
      <p className="mt-4 text-center text-base text-neutral-400 max-w-2xl" style={{ fontSize: '15px' }}>
        포인트 적립부터 신규 고객 발굴까지, 매장 성장을 위한 태그히어의 고객 관리 솔루션
      </p>

      {/* 추가 요소들 */}
      <div className="flex flex-col items-center gap-8 mt-10 w-full max-w-2xl">
        {/* A. 메인 CTA 버튼 */}
        <motion.a
          href="https://tally.so/r/jab1oR"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-black font-bold px-8 py-4 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all duration-300"
        >
          월 0원으로 시작하기
        </motion.a>

        {/* B. 이벤트 안내 카드 */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 w-[360px] text-left">
          <div className="space-y-3 mb-4">
            <div className="flex items-center gap-2 text-white">
              <span className="text-[#3B82F6]">✓</span>
              <span>월 구독료 0원 <span className="text-[#3B82F6]">(정가 33,000원)</span></span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <span className="text-[#3B82F6]">✓</span>
              <span>설치 필요 없음</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <span className="text-[#3B82F6]">✓</span>
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
