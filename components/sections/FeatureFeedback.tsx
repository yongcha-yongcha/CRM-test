"use client";

import AnimatedSection from "@/components/layout/AnimatedSection";
import Container from "@/components/layout/Container";
import { motion } from "framer-motion";
import Image from "next/image";

export default function FeatureFeedback() {
  return (
    <AnimatedSection className="py-5 bg-white">
      <Container>
        {/* 콘텐츠: 이미지 카드 + 텍스트 카드 (5:5 레이아웃) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-4 items-stretch">
          {/* 좌측: UI 이미지 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1 lg:flex lg:justify-center"
          >
            <div className="relative rounded-b-2xl lg:rounded-2xl overflow-hidden bg-black/20 w-full lg:max-w-xl aspect-square">
              <Image
                src="/feedback.png"
                alt="고객 피드백 수집 UI"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* 우측: 텍스트 카드 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="order-1 lg:order-2"
          >
            <div className="h-full rounded-t-2xl lg:rounded-2xl bg-neutral-900 border border-b-0 border-neutral-800 lg:border-b p-8 md:p-10 flex flex-col gap-6">
              <div>
                <h3 className="text-[32px] font-bold text-white mb-4 leading-[1.2]">
                  매장에서만 확인 가능한
                  <br />
                  고객의 진실한 피드백
                </h3>
                <p className="text-neutral-300 text-lg">
                  외부에 노출되지 않고 프랜차이즈 본사와 가맹점에서만 확인이 가능한 고객 피드백을 수집해드려요.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </AnimatedSection>
  );
}
