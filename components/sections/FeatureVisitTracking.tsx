"use client";

import AnimatedSection from "@/components/layout/AnimatedSection";
import Container from "@/components/layout/Container";
import { motion } from "framer-motion";
import Image from "next/image";

export default function FeatureVisitTracking() {
  return (
    <AnimatedSection className="py-5 bg-white">
      <Container>
        {/* 콘텐츠: 텍스트 카드 + 이미지 카드 (5:5 레이아웃) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-4 items-stretch">
          {/* 좌측: 텍스트 카드 */}
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
                  방문 경로까지
                  <br />
                  자동으로 추적
                </h3>
                <p className="text-neutral-300 text-lg">
                  고객의 화면에 주문/결제/포인트 적립 이후 방문 경로 질문을 자동으로 띄워줘요.
                </p>
              </div>
            </div>
          </motion.div>

          {/* 우측: UI 이미지 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:flex lg:justify-center"
          >
            <div className="relative rounded-b-2xl lg:rounded-2xl overflow-hidden bg-black/20 w-full lg:max-w-xl aspect-square">
              <Image
                src="/방문경로_ui.png"
                alt="방문 경로 선택 UI"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </AnimatedSection>
  );
}
