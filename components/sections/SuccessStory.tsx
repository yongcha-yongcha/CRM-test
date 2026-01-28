"use client";

import AnimatedSection from "@/components/layout/AnimatedSection";
import Container from "@/components/layout/Container";
import { motion } from "framer-motion";
import { TrendingUp, Check, X, Minus } from "lucide-react";

export default function SuccessStory() {
  return (
    <AnimatedSection className="py-24 bg-white">
      <Container>
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="w-5 h-5 text-[#3B82F6]" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
          신규 고객 마케팅, 확실한 효과
        </h2>
        <p className="text-neutral-600 mb-12">
          불특정 다수가 아닌, 관심 고객에게만 보내면 결과가 다릅니다.
        </p>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* 좌측: 비교표 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl border border-neutral-200 overflow-hidden"
          >
            <table className="w-full">
              <thead>
                <tr className="border-b border-neutral-200">
                  <th className="p-4 text-left text-neutral-600 font-medium">구분</th>
                  <th className="p-4 text-left text-neutral-600 font-medium">일반 문자 광고</th>
                  <th className="p-4 text-left text-[#3B82F6] font-bold">TagHere 타겟팅</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-100">
                  <td className="p-4 text-neutral-700">발송 대상</td>
                  <td className="p-4">
                    <span className="flex items-center gap-2 text-neutral-500">
                      <X className="w-4 h-4 text-red-500" />
                      무작위 번호 DB
                    </span>
                  </td>
                  <td className="p-4">
                    <span className="flex items-center gap-2 text-neutral-900">
                      <Check className="w-4 h-4 text-[#3B82F6]" />
                      관심 업종 고객
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="p-4 text-neutral-700">마케팅 수신 동의</td>
                  <td className="p-4">
                    <span className="flex items-center gap-2 text-neutral-500">
                      <X className="w-4 h-4 text-red-500" />
                      불분명 (위험)
                    </span>
                  </td>
                  <td className="p-4">
                    <span className="flex items-center gap-2 text-neutral-900">
                      <Check className="w-4 h-4 text-[#3B82F6]" />
                      100% 동의 완료
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="p-4 text-neutral-700">반응률</td>
                  <td className="p-4">
                    <span className="flex items-center gap-2 text-neutral-500">
                      <X className="w-4 h-4 text-red-500" />
                      0.5% 미만
                    </span>
                  </td>
                  <td className="p-4">
                    <span className="flex items-center gap-2 text-neutral-900">
                      <Check className="w-4 h-4 text-[#3B82F6]" />
                      2 ~ 5% (10배↑)
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="p-4 text-neutral-700">비용 효율</td>
                  <td className="p-4">
                    <span className="flex items-center gap-2 text-neutral-500">
                      <Minus className="w-4 h-4 text-neutral-400" />
                      낮음 (낭비)
                    </span>
                  </td>
                  <td className="p-4">
                    <span className="flex items-center gap-2 text-neutral-900">
                      <Check className="w-4 h-4 text-[#3B82F6]" />
                      매우 높음
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </motion.div>

          {/* 우측: Success Story */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-neutral-50 rounded-2xl p-8 border border-neutral-200"
          >
            <div className="inline-block bg-neutral-900 text-white text-sm font-medium px-3 py-1 rounded-full mb-4">
              Success Story
            </div>
            <h3 className="text-lg font-bold text-neutral-900 mb-1">서울시 프랜차이즈 본사</h3>
            <p className="text-neutral-600 text-sm mb-8">매장 마케팅 활용 사례</p>

            <div className="space-y-6">
              {/* Step 1 */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-neutral-500">Step 1. 타겟 마케팅</p>
                  <p className="font-medium text-neutral-900">지역+관심사 타겟 발송</p>
                  <p className="text-sm text-neutral-500">비용: 208,650원 (건당 150원)</p>
                </div>
                <div className="text-2xl font-bold text-[#3B82F6]">1,391명</div>
              </div>

              <div className="flex justify-center">
                <div className="w-px h-8 bg-neutral-300"></div>
              </div>

              {/* Step 2 */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-neutral-500">Step 2. 실제 반응</p>
                  <p className="font-medium text-neutral-900">실제 매장 방문 (3%)</p>
                </div>
                <div className="text-2xl font-bold text-[#3B82F6]">70명</div>
              </div>

              <div className="flex justify-center">
                <div className="w-px h-8 bg-neutral-300"></div>
              </div>

              {/* Result */}
              <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                <p className="text-sm text-green-700 font-medium mb-1">성과 분석</p>
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-sm text-neutral-600">즉각 매출 회수</p>
                    <p className="text-3xl font-bold text-green-600">+1,750,000원</p>
                  </div>
                  <div className="text-right text-sm text-neutral-600">
                    <p>객단가 25,000원 기준</p>
                    <p>+ 잠재 단골 확보</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </AnimatedSection>
  );
}
