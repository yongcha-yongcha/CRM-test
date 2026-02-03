"use client";

import Container from "@/components/layout/Container";
import AnimatedSection from "@/components/layout/AnimatedSection";
import { motion } from "framer-motion";
import Image from "next/image";

const stepNumbers = ["①", "②", "③", "④", "⑤"];

export default function HowItWorks() {
  const steps = [
    {
      title: "태그 설치",
      description: "원하는 곳에 스티커만 붙이면 준비 끝",
    },
    {
      title: "간편한 스캔",
      description: "앱 설치 없이, NFC/QR로 휴대폰만 갖다 대면 인식",
    },
    {
      title: "고객 정보 연동",
      description: "카카오톡 프로필 정보를 자동으로 수집",
    },
    {
      title: "포인트/스탬프 자동 적립",
      description: "적립 내역이 알림톡으로 즉시 전송",
    },
    {
      title: "네이버 리뷰 요청",
      description: "알림톡 안에서 리뷰 작성까지 유도",
    },
  ];

  return (
    <AnimatedSection className="py-24 bg-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-2 leading-[1.2]">
            태그히어를 통해 고객 DB를 쌓는 방법
          </h2>
          <p className="text-neutral-600 mt-3">
            복잡한 설치 없이 태그만 설치해두면 알아서 쌓여요.
          </p>
        </div>

        {/* 태그 방식 이미지 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <Image
            src="/DB-How.png?v=2"
            alt="DB 활용 방식"
            width={1200}
            height={800}
            className="w-full h-auto rounded-2xl"
          />
        </motion.div>

        {/* 스텝 카드 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="flex flex-col items-start text-left rounded-2xl bg-neutral-900 border border-neutral-800 p-4 md:p-6 sm:min-h-[200px]"
              >
                {/* 스텝 번호 */}
                <span className="text-white font-bold text-2xl mb-4 block">
                  {stepNumbers[index]}
                </span>

                {/* 제목 */}
                <h3 className="text-base md:text-lg font-bold text-white mb-2 leading-snug">
                  {step.title}
                </h3>

                {/* 설명 */}
                <p className="text-sm text-slate-300 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
        </div>
      </Container>
    </AnimatedSection>
  );
}
