"use client";

import Image from "next/image";
import { motion } from "motion/react";
import Container from "@/components/layout/Container";
import AnimatedSection from "@/components/layout/AnimatedSection";

export default function IntroOptions() {
  return (
    <AnimatedSection className="py-24 md:py-28 bg-muted">
      <Container>
        {/* 섹션 타이틀 */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            우리 매장에 맞는 방식으로 시작하세요
          </h2>
          <p className="text-lg text-foreground/60">
            어떤 방식이든 월 구독료는 무료입니다.
          </p>
        </div>

        {/* 지그재그: Row 1 (A) → Row 2 (B), 행 간격 120px */}
        <div className="flex flex-col gap-[7.5rem]">
          {/* Row 1 (A): [이미지 왼쪽] - [텍스트 오른쪽]. 모바일: 이미지 위 → 텍스트 아래 */}
          <div className="flex flex-col md:grid md:grid-cols-5 gap-8 md:gap-10 lg:gap-12 items-center">
            <div className="w-full md:col-span-3 order-1">
              <div className="relative w-full overflow-hidden rounded-2xl aspect-[4/3] md:aspect-[5/4] bg-muted-foreground/5">
                <Image
                  src="/solution-1.png"
                  alt="태그히어 오더와 함께 매장 관리"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 60vw"
                />
              </div>
            </div>
            <div className="w-full md:col-span-2 flex flex-col justify-center order-2">
              <div className="space-y-2">
                <span className="inline-flex items-center bg-blue-600 text-white text-xs font-bold px-2.5 py-1 rounded-md w-fit">
                  BEST
                </span>
                <h3 className="text-2xl font-bold text-foreground">
                  A. 태그히어 오더와 함께 사용
                </h3>
                <p className="text-base text-foreground/70 leading-relaxed">
                  주문 데이터 연동으로 포인트 자동 적립, 메뉴·결제 금액 입력 없이 원클릭 관리, 별도 기기 구매 없이 바로 사용할 수 있습니다.
                </p>
              </div>
            </div>
          </div>

          {/* Row 2 (B): [텍스트 왼쪽] - [이미지 오른쪽]. 모바일: 이미지 위 → 텍스트 아래 (flex-col-reverse) */}
          <div className="flex flex-col-reverse md:grid md:grid-cols-5 gap-8 md:gap-10 lg:gap-12 items-center">
            <div className="w-full md:col-span-2 flex flex-col justify-center">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-foreground">
                  B. 이미 보유중인 태블릿으로 사용
                </h3>
                <p className="text-base text-foreground/70 leading-relaxed">
                  기존 POS를 유지한 채 휴대폰·태블릿·PC 어디서든 사용 가능하며, 전용 태블릿 구매는 선택 사항입니다.
                </p>
              </div>
            </div>
            <div className="w-full md:col-span-3">
              <div className="relative w-full overflow-hidden rounded-2xl aspect-[4/3] md:aspect-[5/4] bg-muted-foreground/5">
                <video
                  src="/solution-2.mp4"
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  style={{ position: 'absolute', width: '100%', height: '100%' }}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  onError={(e) => {
                    console.error("비디오 로드 실패:", e);
                  }}
                  onLoadedData={() => {
                    console.log("비디오 로드 완료");
                  }}
                  aria-label="태블릿으로 카페·매장에서 CRM 사용"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 하단 CTA 및 안내 문구 */}
        <div className="flex flex-col items-center gap-4 mt-12 md:mt-14">
          <motion.a
            href="#pricing"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black text-white font-bold px-8 py-4 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all duration-300 inline-block text-center cursor-pointer"
          >
            지금 바로 시작하기
          </motion.a>
          <p className="text-center text-sm text-foreground/50">
            부담 없이 시작해보세요. (무료 이벤트 조기 종료 가능)
          </p>
        </div>
      </Container>
    </AnimatedSection>
  );
}
