"use client";

import AnimatedSection from "@/components/layout/AnimatedSection";
import Container from "@/components/layout/Container";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

export default function CompetitorComparison() {
  const features = [
    {
      name: "월 구독료",
      competitor1: "월 3~5만원",
      competitor2: "월 2~3만원",
      taghere: "월 0원",
      taghereNote: "(프로모션 기간 내 도입시)",
    },
    {
      name: "DB 수집 방식",
      competitor1: "수기 입력 / 엑셀",
      competitor2: "결제시 태블릿에 수기 입력",
      taghere: "카카오톡 연동으로 100% 자동 수집",
    },
    {
      name: "스탬프 기능",
      competitor1: false,
      competitor2: true,
      taghere: true,
    },
    {
      name: "주문/결제 연동으로\n깊이 있는 데이터 수집",
      competitor1: false,
      competitor2: false,
      taghere: true,
    },
    {
      name: "신규 고객 찾기",
      competitor1: false,
      competitor2: false,
      taghere: "전국 타겟팅",
      taghereHighlight: true,
    },
  ];

  const renderCell = (value: string | boolean, highlight?: boolean, note?: string) => {
    if (typeof value === "boolean") {
      return value ? (
        <Check className="w-5 h-5 text-[#3B82F6]" />
      ) : (
        <X className="w-5 h-5 text-neutral-300" />
      );
    }
    return (
      <div>
        <span className={highlight ? "text-[#3B82F6] font-bold" : ""}>{value}</span>
        {note && <p className="text-xs text-neutral-500 mt-1">{note}</p>}
      </div>
    );
  };

  return (
    <AnimatedSection className="py-24 bg-neutral-50">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              왜 <span className="text-[#3B82F6]">TagHere CRM</span>인가요?
            </h2>
            <p className="text-neutral-600">
              압도적인 기능 차이, 비용은 0원으로 시작하세요.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-neutral-200 overflow-hidden overflow-x-auto">
            <table className="w-full min-w-[640px]">
              <thead>
                <tr className="border-b border-neutral-200">
                  <th className="p-4 md:p-6 text-left text-neutral-600 font-medium w-1/4">구분</th>
                  <th className="p-4 md:p-6 text-center text-neutral-600 font-medium w-1/4">
                    A사 (문자 마케팅)
                  </th>
                  <th className="p-4 md:p-6 text-center text-neutral-600 font-medium w-1/4">
                    B사 (포인트 적립)
                  </th>
                  <th className="p-4 md:p-6 text-center w-1/4 bg-blue-50">
                    <div className="inline-block bg-[#3B82F6] text-white text-xs font-medium px-2 py-1 rounded mb-2">
                      BEST CHOICE
                    </div>
                    <p className="font-bold text-neutral-900">TagHere CRM</p>
                    <div className="w-full h-1 bg-[#3B82F6] mt-2 rounded-full"></div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <tr key={index} className="border-b border-neutral-100 last:border-b-0">
                    <td className="p-4 md:p-6 text-neutral-700 font-medium whitespace-pre-line">
                      {feature.name}
                    </td>
                    <td className="p-4 md:p-6 text-center text-neutral-500">
                      <div className="flex justify-center">
                        {renderCell(feature.competitor1)}
                      </div>
                    </td>
                    <td className="p-4 md:p-6 text-center text-neutral-500">
                      <div className="flex justify-center">
                        {renderCell(feature.competitor2)}
                      </div>
                    </td>
                    <td className="p-4 md:p-6 text-center bg-blue-50/50">
                      <div className="flex justify-center">
                        {renderCell(feature.taghere, feature.taghereHighlight, feature.taghereNote)}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </Container>
    </AnimatedSection>
  );
}
