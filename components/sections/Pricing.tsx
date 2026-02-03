"use client";

import Container from "@/components/layout/Container";
import AnimatedSection from "@/components/layout/AnimatedSection";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function Pricing() {
  const benefits = [
    "고객 DB 무제한 저장",
    "방문경로 수집 기능",
    "매출/방문 분석 대시보드",
  ];

  const messagePricing = [
    { name: "알림톡", description: "정보성 메시지", price: "20원" },
    { name: "SMS / LMS", description: "단문/장문 문자", price: "50원" },
    { name: "MMS", description: "이미지 포함", price: "120원" },
    { name: "신규 고객 찾기", description: "Premium 타겟팅", price: "200원", highlight: true },
  ];

  return (
    <AnimatedSection id="pricing" className="py-24 bg-slate-50">
      <Container>
        <div className="text-center mb-12">
          <span className="text-[#3B82F6] font-medium tracking-wide uppercase text-sm">
            PRICING PLAN
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-2 leading-[1.2]">
            합리적인 요금, <span className="text-[#3B82F6]">쓴 만큼만</span>
          </h2>
          <p className="text-neutral-600 mt-3">
            월 이용료 0원, 마케팅 비용은 성과에 맞춰 조절하세요.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {/* 좌측: 기본 월 구독료 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl border border-neutral-200 p-8"
          >
            <div className="inline-block bg-neutral-900 text-white text-xs font-medium px-3 py-1 rounded-full mb-4">
              LIMITED OFFER
            </div>

            <h3 className="text-xl font-bold text-neutral-900 mb-1">기본 월 구독료</h3>
            <p className="text-neutral-500 text-sm mb-6">CRM 솔루션 이용료</p>

            <div className="mb-6">
              <p className="text-neutral-400 line-through text-lg">₩33,000</p>
              <div className="flex items-baseline gap-2">
                <span className="text-[#3B82F6] text-sm font-medium">100% OFF (프로모션)</span>
              </div>
              <div className="flex items-baseline gap-2 mt-2">
                <span className="text-5xl font-bold text-neutral-900">0</span>
                <span className="text-2xl font-bold text-neutral-900">원</span>
                <span className="text-neutral-500">/ 월</span>
              </div>
              <p className="text-[#3B82F6] text-sm mt-2 underline">
                프로모션 기간 내 신청시 평생 무료
              </p>
            </div>

            <ul className="space-y-3 mb-6">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-2 text-neutral-700">
                  <Check className="w-5 h-5 text-neutral-900" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <p className="text-xs text-neutral-400">
              * NFC/QR 태그는 별도 도입 비용 발생
            </p>
          </motion.div>

          {/* 우측: 메시지 단가 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-2xl border border-neutral-200 p-8"
          >
            <h3 className="text-xl font-bold text-neutral-900 mb-1">메시지 단가</h3>
            <p className="text-neutral-500 text-sm mb-6">충전 후 차감 (VAT 별도)</p>

            <div className="space-y-4">
              {messagePricing.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between py-4 ${
                    index !== messagePricing.length - 1 ? "border-b border-neutral-100" : ""
                  }`}
                >
                  <div>
                    <p className={`font-medium ${item.highlight ? "text-[#3B82F6]" : "text-neutral-900"}`}>
                      {item.name}
                    </p>
                    <p className="text-sm text-neutral-500">{item.description}</p>
                  </div>
                  <p className={`text-xl font-bold ${item.highlight ? "text-[#3B82F6]" : "text-neutral-900"}`}>
                    {item.price}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </AnimatedSection>
  );
}
