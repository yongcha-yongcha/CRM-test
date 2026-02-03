"use client";

import AnimatedSection from "@/components/layout/AnimatedSection";
import Container from "@/components/layout/Container";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function CompetitorComparison() {
  const rows = [
    { label: "비용", competitor: "월 3~5만원", taghere: "평생 0원", emphasis: true },
    { label: "수집 방식", competitor: "손님이 직접 입력 (불편)", taghere: "결제 시 100% 자동 저장" },
    { label: "데이터 수준", competitor: "단순 전화번호", taghere: "주문 메뉴 + 취향 분석" },
    { label: "확장성", competitor: "기존 고객 관리만", taghere: "신규 고객 타겟팅까지" },
  ];

  const competitors = [
    { name: "A사", subtitle: "문자 마케팅", order: "order-2 md:order-1", delay: 0 },
    { name: "B사", subtitle: "포인트 적립", order: "order-3 md:order-3", delay: 0.2 },
  ];

  return (
    <AnimatedSection className="py-24 bg-neutral-50">
      <style>{`
        @keyframes badgeFlow {
          0%   { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
      `}</style>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* 헤드라인 */}
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 leading-[1.2]">
              왜 <span className="text-[#3B82F6]">태그히어</span>여야 할까요?
            </h2>
            <p className="text-neutral-500 mt-3 text-lg">
              기능은 더 많은데, 비용은 0원입니다.
            </p>
          </div>

          {/* 3단 카드 그리드 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 max-w-4xl mx-auto">

            {/* 경쟁사 카드 (A사 · B사) */}
            {competitors.map((comp) => (
              <motion.div
                key={comp.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: comp.delay }}
                className={comp.order}
              >
                <Card className="bg-gray-50 border-neutral-200 rounded-2xl shadow-none overflow-hidden h-full">
                  <CardHeader className="text-center space-y-0 pt-7 pb-5">
                    <p className="text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-2">경쟁사</p>
                    <h3 className="text-xl font-bold text-neutral-700">{comp.name}</h3>
                    <p className="text-xs text-neutral-400 mt-1">{comp.subtitle}</p>
                  </CardHeader>

                  <CardContent className="px-6 pb-8 flex flex-col">
                    {rows.map((row, i) => (
                      <div key={i} className={`text-center py-4 ${i > 0 ? "border-t border-neutral-200" : ""}`}>
                        <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wide mb-1.5">{row.label}</p>
                        <p className="text-sm text-neutral-400">— {row.competitor}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            {/* TagHere CRM 카드 — 중앙 강조 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="order-1 md:order-2 relative z-10 md:-mt-5 md:-mb-5"
            >
              <Card className="bg-white border-2 border-[#3B82F6] rounded-2xl shadow-xl overflow-hidden h-full flex flex-col">
                {/* 블루 헤더 */}
                <CardHeader className="bg-[#3B82F6] text-center space-y-0 pt-6 pb-5">
                  <span
                    className="self-center w-fit mb-2 block text-white text-xs font-bold px-3 py-0.5 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)]"
                    style={{
                      background: "linear-gradient(90deg, #7c3aed, #a855f7, #c084fc, #a855f7, #7c3aed)",
                      backgroundSize: "200% 100%",
                      animation: "badgeFlow 2.5s linear infinite",
                    }}
                  >
                    BEST CHOICE
                  </span>
                  <h3 className="text-xl font-bold text-white">TagHere CRM</h3>
                </CardHeader>

                {/* 비교 행 */}
                <CardContent className="px-6 pt-4 pb-4 flex-1 flex flex-col">
                  {rows.map((row, i) => (
                    <div key={i} className={`text-center py-4 ${i > 0 ? "border-t border-neutral-100" : ""}`}>
                      <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wide mb-1.5">{row.label}</p>
                      <div className="flex items-center justify-center gap-1.5">
                        <Check className="w-5 h-5 text-green-500 shrink-0" />
                        <p className={`font-semibold ${row.emphasis ? "text-xl text-[#3B82F6]" : "text-sm text-neutral-800"}`}>
                          {row.taghere}
                        </p>
                      </div>
                    </div>
                  ))}
                </CardContent>

                {/* CTA 버튼 */}
                <CardFooter className="px-6 pb-6 pt-2">
                  <button className="w-full bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold py-3 rounded-xl transition-colors text-sm">
                    무료로 시작하기
                  </button>
                </CardFooter>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </AnimatedSection>
  );
}
