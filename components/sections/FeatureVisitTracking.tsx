"use client";

import AnimatedSection from "@/components/layout/AnimatedSection";
import Container from "@/components/layout/Container";
import { motion } from "framer-motion";
import { Navigation } from "lucide-react";
import Image from "next/image";

export default function FeatureVisitTracking() {
  const visitOptions = [
    "단순 재방문",
    "지인 추천",
    "네이버",
    "유튜브",
    "당근",
    "인스타그램",
    "문자",
    "카카오톡",
    "지나가다 방문",
  ];

  return (
    <AnimatedSection className="py-24 bg-white">
      <Container>
        {/* 콘텐츠: 텍스트 왼쪽 (2), 이미지 오른쪽 (3) */}
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          {/* 좌측: 텍스트 콘텐츠 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 bg-[#3B82F6]/10 rounded-xl flex items-center justify-center">
                <Navigation className="w-7 h-7 text-[#3B82F6]" />
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
              방문 경로까지
              <br />
              자동으로 추적
            </h3>
            <p className="text-neutral-600 text-lg mb-8">
              고객의 화면에 주문/결제/포인트 적립 이후 방문 경로 질문을 자동으로 띄워줘요.
            </p>

            {/* 방문 경로 옵션들 */}
            <div className="bg-neutral-50 rounded-2xl p-6">
              <p className="text-neutral-700 font-medium mb-4">방문 경로 선택지</p>
              <div className="flex flex-wrap gap-2">
                {visitOptions.map((option, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-white border border-neutral-200 rounded-full text-sm text-neutral-700 hover:border-[#3B82F6] hover:text-[#3B82F6] transition-colors"
                  >
                    {option}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* 우측: UI 이미지 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3 flex justify-center"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl max-w-md">
              <Image
                src="/방문경로_ui.png"
                alt="방문 경로 선택 UI"
                width={600}
                height={900}
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </AnimatedSection>
  );
}
