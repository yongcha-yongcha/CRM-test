"use client";

import AnimatedSection from "@/components/layout/AnimatedSection";
import Container from "@/components/layout/Container";
import { motion } from "framer-motion";
import Image from "next/image";

export default function CoreValue() {
  return (
    <AnimatedSection className="py-24 bg-[#F2F3F4]">
      <Container>
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 leading-[1.2]">
            고객 데이터,
            <br />
            설치 하나로 완성
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* 왼쪽 카드: 자동 수집 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-8 md:p-10"
          >
            <h3 className="text-[20px] font-bold text-[#1D2022] leading-[1.3] mb-3">
              주문만 받으세요. 고객의 모든 취향이 저절로 쌓입니다.
            </h3>
            <p className="text-[#55595E] text-[16px] leading-[1.5] mb-8">
              주문이 곧 데이터가 됩니다. 이름부터 취향까지, 사장님이 신경 쓸 건 하나도 없습니다. 모든 기록은 자동입니다.
            </p>

            <div className="relative aspect-[4/3] rounded-[20px] overflow-hidden">
              <Image
                src="/data-01.png"
                alt="고객 데이터 자동 수집"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          {/* 오른쪽 카드: 타겟 마케팅 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-3xl p-8 md:p-10"
          >
            <h3 className="text-[20px] font-bold text-[#1D2022] leading-[1.3] mb-3">
              우리 가게를 좋아할 사람만 콕 집어냅니다.
            </h3>
            <p className="text-[#55595E] text-[16px] leading-[1.5] mb-8">
              아무에게나 보내지 마세요. 불특정 다수는 낭비입니다. 우리 동네에서 내 요리를 좋아할 사람, 딱 그들에게만 보냅니다.
            </p>

            <div className="relative aspect-[4/3] rounded-[20px] overflow-hidden">
              <Image
                src="/data-02.png"
                alt="타겟 마케팅"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </div>

        {/* 하단 전폭 이미지 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-6 w-full rounded-3xl overflow-hidden"
        >
          <Image
            src="/mainheader.png"
            alt="메인 헤더"
            width={1200}
            height={600}
            className="w-full h-auto"
            sizes="100vw"
          />
        </motion.div>
      </Container>
    </AnimatedSection>
  );
}
