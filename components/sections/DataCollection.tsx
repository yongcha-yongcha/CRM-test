"use client";

import AnimatedSection from "@/components/layout/AnimatedSection";
import Container from "@/components/layout/Container";
import { motion } from "framer-motion";
import { User, MapPin, TrendingUp, Phone, Calendar, Utensils, Hash, CreditCard, BarChart3 } from "lucide-react";
import Image from "next/image";

export default function DataCollection() {
  const dataCategories = [
    {
      icon: User,
      title: "기본 정보",
      items: [
        { icon: User, label: "이름" },
        { icon: Phone, label: "연락처" },
        { icon: User, label: "성별" },
        { icon: Calendar, label: "연령대/생일" },
      ],
    },
    {
      icon: MapPin,
      title: "방문 경로",
      items: [
        { icon: Calendar, label: "방문 일시" },
        { icon: TrendingUp, label: "누적 방문수" },
        { icon: CreditCard, label: "결제 금액" },
        { icon: Utensils, label: "선호 메뉴" },
      ],
    },
    {
      icon: TrendingUp,
      title: "재방문율",
      items: [
        { icon: BarChart3, label: "고객 등급" },
        { icon: Hash, label: "방문 주기" },
        { icon: CreditCard, label: "객단가" },
      ],
    },
  ];

  return (
    <AnimatedSection className="py-24 bg-neutral-950">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            태그히어를 이용만 해도 쌓이는 고객 정보
          </h2>
          <p className="text-neutral-400">
            기본 정보부터 숨겨진 분석 데이터까지, 태그히어가 알아서 챙겨드릴게요.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-center">
          {/* 좌측: 데이터 카테고리 카드들 */}
          <div className="lg:col-span-2 space-y-4">
            {dataCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-[#3B82F6]/20 rounded-lg flex items-center justify-center">
                    <category.icon className="w-4 h-4 text-[#3B82F6]" />
                  </div>
                  <h3 className="text-base font-bold text-white">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {category.items.map((item, itemIndex) => (
                    <span
                      key={itemIndex}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-white/10 rounded-lg text-xs text-white/80"
                    >
                      <item.icon className="w-3 h-3 text-white/60" />
                      {item.label}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* 우측: CRM 대시보드 이미지 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3 relative rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/mainheader.png"
              alt="TagHere CRM 고객 리스트 대시보드"
              width={1000}
              height={750}
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </Container>
    </AnimatedSection>
  );
}
