"use client";

import AnimatedSection from "@/components/layout/AnimatedSection";
import Container from "@/components/layout/Container";
import { motion } from "framer-motion";
import Image from "next/image";

export default function MarketingOwn() {
  return (
    <AnimatedSection className="py-24 bg-white">
      <Container>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-[#3B82F6] font-medium">[마케팅]</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
          매장에서 직접 쌓은 고객 DB를 활용한 마케팅 집행
        </h2>
        <p className="text-neutral-600 mb-12">
          연령대, 성별, 재방문 횟수 별로 고객에게 안내 메시지/카카오톡을 발송할 수 있어요.
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
            src="/retarget_message.png"
            alt="리타겟팅 마케팅 메시지 발송 UI"
            width={1600}
            height={900}
            className="w-full h-auto"
          />
        </motion.div>
      </Container>
    </AnimatedSection>
  );
}
