"use client";

import AnimatedSection from "@/components/layout/AnimatedSection";
import Container from "@/components/layout/Container";
import { motion } from "framer-motion";
import { Database, Users, CheckCircle } from "lucide-react";

export default function CoreValue() {
  return (
    <AnimatedSection className="py-24 bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            설치만 해도 자동으로 쌓이는 고객 데이터,
            <br />
            <span className="text-[#3B82F6]">태그히어 CRM</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* 좌측: 자동 수집 시스템 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-neutral-50 rounded-2xl p-8 border border-neutral-200"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
              <Database className="w-6 h-6 text-[#3B82F6]" />
            </div>
            <h3 className="text-xl font-bold text-neutral-900 mb-3">
              이름, 성별, 연령대, 연락처, 생일까지 자동 확보
            </h3>
            <p className="text-neutral-600 mb-6">
              방문한 손님들은 태그히어를 통해 바로 매장의 고객으로 등록돼요.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#3B82F6] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-neutral-900">자동 수집 시스템 (카카오톡 연동)</p>
                  <p className="text-sm text-neutral-600">
                    태그히어 주문/결제 또는 포인트/스탬프 적립 시 매번 전화번호 입력을 하지 않아도 카카오톡 연동을 통해 고객의 정보를 동의하에 수집해요.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#3B82F6] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-neutral-900">상세 데이터 확보</p>
                  <p className="text-sm text-neutral-600">
                    이름, 연락처는 기본, 방문 경로와 선호 메뉴, 앉았던 좌석, 생일, 연령대까지 꼼꼼하게 관리됩니다.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 우측: 전국 고객 DB */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-neutral-50 rounded-2xl p-8 border border-neutral-200"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
              <Users className="w-6 h-6 text-[#3B82F6]" />
            </div>
            <h3 className="text-xl font-bold text-neutral-900 mb-3">
              전국 고객 DB로 신규 고객 찾기
            </h3>
            <p className="text-neutral-600 mb-6">
              우리 동네 잠재 고객에게 직접 마케팅
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#3B82F6] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-neutral-900">태그히어 전국 네트워크 활용</p>
                  <p className="text-sm text-neutral-600">
                    전국 태그히어 매장에서 수집된 방대한 고객 데이터를 활용하여 우리 동네 시/군/구, 선호 업종에 맞추어 카카오톡/메시지를 발송 할 수 있어요.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#3B82F6] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-neutral-900">정교한 타겟 마케팅</p>
                  <p className="text-sm text-neutral-600">
                    &quot;우리 동네 + 우리 업종&quot;에 관심 있는 마케팅 동의 고객에게만 발송합니다.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </AnimatedSection>
  );
}
