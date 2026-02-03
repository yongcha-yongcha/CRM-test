"use client";

import AnimatedSection from "@/components/layout/AnimatedSection";
import Container from "@/components/layout/Container";
import { motion } from "framer-motion";

export default function SuccessStory() {
  return (
    <AnimatedSection className="py-24 bg-white">
      <Container>
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 leading-[1.2]">
            낭비 없는 마케팅,
            <br />
            숫자가 증명합니다.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* 좌측: Comparison 리스트 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-neutral-50 rounded-2xl p-8 flex flex-col justify-between"
          >
            {/* 컬럼 헤더 */}
            <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 mb-8">
              <p className="text-sm font-semibold text-neutral-400 text-right">일반 문자</p>
              <span className="text-xs font-bold text-neutral-400 bg-white px-2 py-0.5 rounded-full">vs</span>
              <p className="text-sm font-semibold text-[#3B82F6] text-left">태그히어</p>
            </div>

            {/* 비교 항목 리스트 */}
            <div className="space-y-3 flex-1">
              {/* 발송 방식 */}
              <div className="bg-white rounded-xl px-5 py-4">
                <p className="text-xs text-neutral-400 font-medium text-center mb-3">발송 방식</p>
                <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2">
                  <p className="text-right text-neutral-400 text-sm">무작위 발송</p>
                  <div className="w-px h-5 bg-neutral-200"></div>
                  <p className="text-left text-[#3B82F6] font-semibold text-sm">관심 고객 타겟팅</p>
                </div>
              </div>

              {/* 수신 동의 */}
              <div className="bg-white rounded-xl px-5 py-4">
                <p className="text-xs text-neutral-400 font-medium text-center mb-3">수신 동의</p>
                <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2">
                  <p className="text-right text-neutral-400 text-sm">불분명 (위험)</p>
                  <div className="w-px h-5 bg-neutral-200"></div>
                  <p className="text-left text-[#3B82F6] font-semibold text-sm">100% 동의 완료</p>
                </div>
              </div>

              {/* 반응률 — 핵심 강조 행 */}
              <div className="bg-white rounded-xl px-5 py-5 border-2 border-[#3B82F6]/15">
                <p className="text-xs text-neutral-400 font-medium text-center mb-4">반응률</p>
                <div className="grid grid-cols-[1fr_auto_1fr] items-start gap-3">
                  <p className="text-right text-4xl sm:text-5xl font-bold text-neutral-300 pt-0.5">0.5%</p>
                  <div className="w-px h-full min-h-[60px] bg-neutral-200 self-stretch"></div>
                  <div className="text-left">
                    <p className="text-4xl sm:text-5xl font-bold text-[#3B82F6]">5.0%</p>
                    <span className="inline-block mt-1 bg-[#3B82F6] text-white text-xs font-bold px-2.5 py-0.5 rounded-full">
                      10배↑
                    </span>
                  </div>
                </div>
              </div>

              {/* 비용 효율 */}
              <div className="bg-white rounded-xl px-5 py-4">
                <p className="text-xs text-neutral-400 font-medium text-center mb-3">비용 효율</p>
                <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2">
                  <p className="text-right text-neutral-400 text-sm">낮음 (낭비)</p>
                  <div className="w-px h-5 bg-neutral-200"></div>
                  <p className="text-left text-[#3B82F6] font-semibold text-sm">최대 효율</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 우측: Success Story 카드 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-neutral-900 rounded-2xl p-8 flex flex-col justify-between"
          >
            {/* 상단: 배지 + 출처 */}
            <div>
              <div className="inline-block bg-white/10 text-white text-sm font-medium px-3 py-1 rounded-full mb-4">
                Success Story
              </div>
              <h3 className="text-lg font-bold text-white mb-1">서울시 프랜차이즈 본사</h3>
              <p className="text-neutral-500 text-sm">매장 마케팅 활용 사례</p>
            </div>

            {/* 중간: 과정 플로 (심플) */}
            <div className="flex items-center gap-2 my-8">
              <div className="bg-white/10 rounded-lg px-3 py-2.5 text-center flex-1">
                <p className="text-xs text-neutral-500 mb-0.5">발송</p>
                <p className="text-lg font-bold text-[#3B82F6]">1,391명</p>
              </div>
              <span className="text-neutral-600 text-sm">→</span>
              <div className="bg-white/10 rounded-lg px-3 py-2.5 text-center flex-1">
                <p className="text-xs text-neutral-500 mb-0.5">방문</p>
                <p className="text-lg font-bold text-[#3B82F6]">70명</p>
              </div>
              <span className="text-neutral-600 text-sm">→</span>
              <div className="bg-white/10 rounded-lg px-3 py-2.5 text-center flex-1">
                <p className="text-xs text-neutral-500 mb-0.5">반응율</p>
                <p className="text-lg font-bold text-white">3%</p>
              </div>
            </div>

            {/* 하단: 결과 — 압도적 강조 */}
            <div className="bg-neutral-800 rounded-2xl p-6 text-center">
              <p className="text-sm text-neutral-500 mb-3">즉각 매출 회수</p>
              <p
                className="text-3xl sm:text-5xl lg:text-6xl font-bold text-green-400"
                style={{ textShadow: "0 0 24px rgba(74,222,128,0.55), 0 0 48px rgba(74,222,128,0.2)" }}
              >
                +1,750,000원
              </p>
              <div className="mt-5 pt-4 border-t border-white/10 flex justify-center gap-6 text-sm text-neutral-500">
                <p>객단가 25,000원 기준</p>
                <p>+ 잠재 단골 확보</p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </AnimatedSection>
  );
}
