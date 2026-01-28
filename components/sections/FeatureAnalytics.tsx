"use client";

import AnimatedSection from "@/components/layout/AnimatedSection";
import Container from "@/components/layout/Container";
import { motion } from "framer-motion";
import { BarChart3 } from "lucide-react";
import Image from "next/image";

export default function FeatureAnalytics() {
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
                <BarChart3 className="w-7 h-7 text-[#3B82F6]" />
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-2">
              매장 방문 통계 집계도
              <br />
              자동으로
            </h3>
            <p className="text-[#3B82F6] font-medium mb-4">
              (방문경로, 재방문율, 성별, 연령대 분포)
            </p>
            <p className="text-neutral-600 text-lg mb-8">
              매장에 자주 오는 고객을 구분하고 방문경로를 통해 마케팅 효율성을 높일 수 있어요.
            </p>

            {/* 통계 카드들 */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-neutral-50 rounded-2xl p-5 text-center">
                <p className="text-neutral-500 text-sm mb-2">7일 재방문율</p>
                <p className="text-4xl font-bold text-[#3B82F6]">75%</p>
              </div>
              <div className="bg-neutral-50 rounded-2xl p-5 text-center">
                <p className="text-neutral-500 text-sm mb-2">30일 재방문율</p>
                <p className="text-4xl font-bold text-[#3B82F6]">73%</p>
              </div>
              <div className="bg-neutral-50 rounded-2xl p-5 text-center">
                <p className="text-neutral-500 text-sm mb-2">남성 비율</p>
                <p className="text-4xl font-bold text-neutral-900">56%</p>
              </div>
              <div className="bg-neutral-50 rounded-2xl p-5 text-center">
                <p className="text-neutral-500 text-sm mb-2">여성 비율</p>
                <p className="text-4xl font-bold text-neutral-900">44%</p>
              </div>
            </div>
          </motion.div>

          {/* 우측: UI 이미지 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3 relative rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/customer_analytics.png"
              alt="고객 분석 대시보드"
              width={1200}
              height={800}
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </Container>
    </AnimatedSection>
  );
}
