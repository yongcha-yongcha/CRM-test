"use client";

import AnimatedSection from "@/components/layout/AnimatedSection";
import Container from "@/components/layout/Container";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";

export default function FeatureNaverReview() {
  return (
    <AnimatedSection className="py-24 bg-neutral-950">
      <Container>
        {/* 섹션 헤더 */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            사장님은 매장에만 집중하세요.
            <br />
            <span className="text-[#3B82F6]">나머지는 저희가 합니다.</span>
          </h2>
        </div>

        {/* 콘텐츠: 이미지 왼쪽 (3), 텍스트 오른쪽 (2) */}
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          {/* 좌측: UI 이미지 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 relative rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/naver-review.png"
              alt="네이버 리뷰 자동 요청 UI"
              width={1200}
              height={800}
              className="w-full h-auto"
            />
          </motion.div>

          {/* 우측: 텍스트 콘텐츠 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 bg-[#3B82F6]/20 rounded-xl flex items-center justify-center">
                <Star className="w-7 h-7 text-[#3B82F6]" />
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              모든 고객에게 자동으로
              <br />
              네이버 리뷰 요청
            </h3>
            <p className="text-neutral-400 text-lg mb-8">
              포인트/스탬프를 쌓는 고객들에게 자동으로 리뷰 혜택과 리뷰 작성 알림톡을 발송해요.
            </p>

            {/* 리뷰 혜택 예시 */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <p className="text-white/90 font-medium mb-3">리뷰 작성시 서비스 3중 택 1 하세요~</p>
              <ul className="space-y-2 text-white/70">
                <li className="flex items-center gap-2">
                  <span className="w-6 h-6 bg-[#3B82F6]/30 rounded-full flex items-center justify-center text-xs text-white">1</span>
                  도쿠리(냉/온) 선택 1병
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-6 h-6 bg-[#3B82F6]/30 rounded-full flex items-center justify-center text-xs text-white">2</span>
                  케로도리토스
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-6 h-6 bg-[#3B82F6]/30 rounded-full flex items-center justify-center text-xs text-white">3</span>
                  탄산음료 1캔
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </Container>
    </AnimatedSection>
  );
}
