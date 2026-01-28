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
            테이블에 태그만 부착하여 시작할 수 있어요
          </h2>
          <p className="text-lg text-foreground/60">
            테이블 별로 NFC/QR태그만 부착하고 고객 데이터를 쌓아보세요
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
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">
                  태그히어 주문/결제 태그
                </h3>
                <ul className="space-y-2 text-foreground/70">
                  <li className="flex items-start gap-2">
                    <span className="text-[#3B82F6] mt-1">✓</span>
                    <span>주문 데이터, 앉았던 좌석, 방문경로 추적</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#3B82F6] mt-1">✓</span>
                    <span>카카오톡 연동으로 고객 정보 수집</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#3B82F6] mt-1">✓</span>
                    <span>사용하고 있는 POS 프로그램들과 자동 연동</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Row 2 (B): [텍스트 왼쪽] - [이미지 오른쪽]. 모바일: 이미지 위 → 텍스트 아래 (flex-col-reverse) */}
          <div className="flex flex-col-reverse md:grid md:grid-cols-5 gap-8 md:gap-10 lg:gap-12 items-center">
            <div className="w-full md:col-span-2 flex flex-col justify-center">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">
                  태그히어 스탬프 적립 태그
                </h3>
                <ul className="space-y-2 text-foreground/70">
                  <li className="flex items-start gap-2">
                    <span className="text-[#3B82F6] mt-1">✓</span>
                    <span>테이블에 태그만 설치하면 준비 끝</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#3B82F6] mt-1">✓</span>
                    <span>카카오톡 연동으로 고객 정보 수집</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#3B82F6] mt-1">✓</span>
                    <span>방문 횟수, 기본 고객 정보 획득</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full md:col-span-3">
              <div className="relative w-full overflow-hidden rounded-2xl aspect-[4/3] md:aspect-[5/4] bg-muted-foreground/5">
                <Image
                  src="/stamp-tag-image.png"
                  alt="태그히어 스탬프 적립 태그"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 60vw"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 하단 CTA 및 안내 문구 */}
        <div className="flex flex-col items-center gap-4 mt-12 md:mt-14">
          <motion.a
            href="https://tally.so/r/jab1oR"
            target="_blank"
            rel="noopener noreferrer"
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
