"use client";

import Container from "@/components/layout/Container";
import AnimatedSection from "@/components/layout/AnimatedSection";
import { motion } from "framer-motion";
import { Gift, Coins, Phone } from "lucide-react";
import Image from "next/image";

export default function FinalCTA() {
  return (
    <AnimatedSection className="relative py-24 overflow-hidden">
      {/* 배경 이미지 */}
      <Image
        src="/taghere-crm-photo.png"
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
        priority
      />
      {/* 블랙 오버레이 */}
      <div className="absolute inset-0 bg-black/60" />

      <Container className="relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* 헤더 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-[1.2]">
              지금 바로 시작하세요
            </h2>
            <p className="text-white/75 text-lg mb-10">
              이미 어제 매장에 방문한 50명의 손님을 놓쳤어요.
              <br />
              고객 DB는 하루라도 빨리 쌓기 시작해야 합니다.
            </p>
          </motion.div>

          {/* 혜택 카드들 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4 mb-10"
          >
            {/* 혜택 1 */}
            <div className="flex items-start gap-4 p-4 bg-white/20 backdrop-blur-sm border border-white/25 rounded-xl text-left">
              <div className="w-10 h-10 bg-[#3B82F6]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Gift className="w-5 h-5 text-[#3B82F6]" />
              </div>
              <div>
                <p className="font-bold text-white">월 구독료 0원</p>
                <p className="text-sm text-white/60">프로모션 기간 한정 평생 무료</p>
              </div>
            </div>

            {/* 혜택 2 */}
            <div className="flex items-start gap-4 p-4 bg-white/20 backdrop-blur-sm border border-white/25 rounded-xl text-left">
              <div className="w-10 h-10 bg-[#3B82F6]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Coins className="w-5 h-5 text-[#3B82F6]" />
              </div>
              <div>
                <p className="font-bold text-white">매 월 리타겟 메시지 마케팅 30 크레딧 제공</p>
                <p className="text-sm text-white/60">매 달 메시지 발송 지원금 증정</p>
              </div>
            </div>
          </motion.div>

          {/* CTA 버튼 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.a
              href="https://tally.so/r/jab1oR"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full max-w-md bg-[#3B82F6] text-white font-bold py-4 rounded-xl mb-6 flex items-center justify-center gap-2 mx-auto"
            >
              월 0원으로 시작하기 →
            </motion.a>

            <div className="flex items-center justify-center gap-2 text-white/60">
              <Phone className="w-4 h-4" />
              <span className="text-sm">문의전화</span>
              <span className="font-bold text-white">070-4138-0263</span>
            </div>
          </motion.div>
        </div>

        {/* 푸터 */}
        <div className="mt-16 pt-8 border-t border-white/20 text-center">
          <p className="text-sm text-white/40">
            © 2026 TagHere Inc. All rights reserved.
          </p>
        </div>
      </Container>
    </AnimatedSection>
  );
}
