"use client";

import AnimatedSection from "@/components/layout/AnimatedSection";
import Container from "@/components/layout/Container";
import { motion } from "framer-motion";
import Image from "next/image";

export default function FeatureNaverReview() {
  return (
    <AnimatedSection className="pt-24 pb-5 bg-white">
      <Container>
        {/* 섹션 헤더 */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 leading-[1.2]">
            사장님은 매장에만 집중하세요.
            <br />
            <span className="text-[#3B82F6]">나머지는 저희가 합니다.</span>
          </h2>
        </div>

        {/* 콘텐츠: 이미지 왼쪽, 텍스트 오른쪽 (5:5 레이아웃) */}
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
                src="/naver-review.png"
                alt="네이버 리뷰 자동 요청 UI"
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
                  모든 고객에게 자동으로
                  <br />
                  네이버 리뷰 요청
                </h3>
                <p className="text-neutral-300 text-lg">
                  포인트/스탬프를 쌓는 고객들에게 자동으로 리뷰 혜택과 리뷰 작성 알림톡을 발송해요.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </AnimatedSection>
  );
}
