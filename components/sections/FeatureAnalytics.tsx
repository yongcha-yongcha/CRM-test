"use client";

import AnimatedSection from "@/components/layout/AnimatedSection";
import Container from "@/components/layout/Container";
import { motion } from "framer-motion";
import Image from "next/image";

export default function FeatureAnalytics() {
  return (
    <AnimatedSection className="pt-5 pb-24 bg-white">
      <Container>
        {/* 콘텐츠: 텍스트 왼쪽 (2), 이미지 오른쪽 (3) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-4 items-stretch">
          {/* 좌측: 텍스트 콘텐츠 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className=""
          >
            <div className="h-full rounded-t-2xl lg:rounded-2xl bg-neutral-900 border border-b-0 border-neutral-800 lg:border-b p-8 md:p-10 flex flex-col gap-6">
              <div>
                <h3 className="text-[32px] font-bold text-white mb-4 leading-[1.2]">
                  매장 방문 통계 집계도
                  <br />
                  자동으로
                </h3>
                <p className="text-neutral-300 text-lg">
                  매장에 자주 오는 고객을 구분하고 방문경로를 통해 마케팅 효율성을 높일 수 있어요.
                </p>
              </div>

              {/* 통계 카드들 */}
              <div className="grid grid-cols-2 gap-4 mt-auto">
                <div className="bg-white/10 rounded-2xl p-5 text-center">
                  <p className="text-neutral-400 text-sm mb-2">7일 재방문율</p>
                  <p className="text-4xl font-bold text-[#3B82F6]">75%</p>
                </div>
                <div className="bg-white/10 rounded-2xl p-5 text-center">
                  <p className="text-neutral-400 text-sm mb-2">30일 재방문율</p>
                  <p className="text-4xl font-bold text-[#3B82F6]">73%</p>
                </div>
                <div className="bg-white/10 rounded-2xl p-5 text-center">
                  <p className="text-neutral-400 text-sm mb-2">남성 비율</p>
                  <p className="text-4xl font-bold text-white">56%</p>
                </div>
                <div className="bg-white/10 rounded-2xl p-5 text-center">
                  <p className="text-neutral-400 text-sm mb-2">여성 비율</p>
                  <p className="text-4xl font-bold text-white">44%</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 우측: UI 이미지 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative rounded-b-2xl lg:rounded-2xl overflow-hidden"
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
