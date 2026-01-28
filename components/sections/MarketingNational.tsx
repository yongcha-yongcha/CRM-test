"use client";

import AnimatedSection from "@/components/layout/AnimatedSection";
import Container from "@/components/layout/Container";
import { motion } from "framer-motion";
import Image from "next/image";

export default function MarketingNational() {
  return (
    <AnimatedSection className="py-24 bg-neutral-950">
      <Container>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-[#3B82F6] font-medium">[마케팅]</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          전국에서 모은 고객 DB를 활용해 신규 고객을 유치
        </h2>
        <p className="text-neutral-400 mb-12">
          시/군/구, 선호 업종별 고객에게 카카오톡/메시지 발송을 통해 매장에 신규 고객을 유치해 보세요.
        </p>

        {/* UI 스크린샷 이미지 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-2xl overflow-hidden shadow-2xl"
        >
          <Image
            src="/new_customer_message.png"
            alt="전국 고객 DB 활용 신규 고객 유치 UI"
            width={1600}
            height={900}
            className="w-full h-auto"
          />
        </motion.div>
      </Container>
    </AnimatedSection>
  );
}
