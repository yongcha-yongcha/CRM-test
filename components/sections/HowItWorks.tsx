"use client";

import Container from "@/components/layout/Container";
import AnimatedSection from "@/components/layout/AnimatedSection";
import { motion } from "framer-motion";
import { Tag, Smartphone, MessageCircle, Gift, Bell } from "lucide-react";
import Image from "next/image";

export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      icon: Tag,
      title: "매장 테이블에 태그 설치",
      description: "계산대나 테이블에 NFC/QR 태그 부착",
    },
    {
      number: "2",
      icon: Smartphone,
      title: "NFC/QR 스캔 - 메뉴 주문 또는 스탬프 적립",
      description: "고객이 본인의 스마트폰을 통해 NFC/QR을 스캔",
    },
    {
      number: "3",
      icon: MessageCircle,
      title: "카카오톡 앱에서 이름, 연락처, 성별, 연령 정보 연동",
      description: "별도 앱 설치 없이 카카오톡으로 연동.",
      note: "(최초 1회)",
    },
    {
      number: "4",
      icon: Gift,
      title: "포인트/스탬프 자동 적립",
      description: "적립 내역 카카오톡 알림톡으로 전송.",
    },
    {
      number: "5",
      icon: Bell,
      title: "네이버 리뷰 자동 요청",
      description: "적립내역, 사용내역, 보상, 네이버 리뷰 요청까지 알림톡으로 한 번에 발송",
    },
  ];

  return (
    <AnimatedSection className="py-24 bg-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-2">
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
          className="mb-16"
        >
          <Image
            src="/태그 방식.png"
            alt="태그히어 주문/결제 및 스탬프 적립 방식"
            width={1200}
            height={800}
            className="w-full h-auto rounded-2xl"
          />
        </motion.div>

        <div className="relative">
          {/* 연결선 (데스크톱에서만 보임) */}
          <div className="hidden md:block absolute top-[4.5rem] left-0 right-0 h-0.5 bg-neutral-200 z-0" />

          {/* 스텝들 */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                {/* 원형 아이콘 */}
                <div className="w-[4.5rem] h-[4.5rem] rounded-full bg-[#3B82F6] flex items-center justify-center mb-4 shadow-lg shadow-blue-500/25">
                  <step.icon className="w-7 h-7 text-white" />
                </div>

                {/* 단계 번호 */}
                <span className="text-[#3B82F6] font-bold text-sm mb-2">
                  {step.number}
                </span>

                {/* 제목 */}
                <h3 className="text-lg font-bold text-neutral-900 mb-2">
                  {step.title}
                  {step.note && (
                    <span className="text-neutral-400 font-normal text-sm ml-1">
                      {step.note}
                    </span>
                  )}
                </h3>

                {/* 설명 */}
                <p className="text-sm text-neutral-600 whitespace-pre-line">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </AnimatedSection>
  );
}
