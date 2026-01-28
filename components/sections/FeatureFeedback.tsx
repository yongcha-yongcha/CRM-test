"use client";

import AnimatedSection from "@/components/layout/AnimatedSection";
import Container from "@/components/layout/Container";
import { motion } from "framer-motion";
import { MessageSquare, Star } from "lucide-react";
import Image from "next/image";

export default function FeatureFeedback() {
  const reviews = [
    { rating: 5, text: "다른 고깃집과 달리 솥뚜껑이라는 부위가 있습니다. 완전 육질이 끝내줘요" },
    { rating: 5, text: "대박 찐찐찐 맛집. 주위사람 다 데려오고싶음" },
    { rating: 5, text: "존맛입니다..👍" },
  ];

  return (
    <AnimatedSection className="py-24 bg-neutral-950">
      <Container>
        {/* 콘텐츠: 이미지 왼쪽 (3), 텍스트 오른쪽 (2) */}
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          {/* 좌측: UI 이미지 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 relative rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/feedback.png"
              alt="고객 피드백 수집 UI"
              width={1200}
              height={800}
              className="w-full h-auto"
            />
          </motion.div>

          {/* 우측: 텍스트 콘텐츠 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 bg-[#3B82F6]/20 rounded-xl flex items-center justify-center">
                <MessageSquare className="w-7 h-7 text-[#3B82F6]" />
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              매장에서만 확인 가능한
              <br />
              고객의 진실한 피드백
            </h3>
            <p className="text-neutral-400 text-lg mb-8">
              외부에 노출되지 않고 프랜차이즈 본사와 가맹점에서만 확인이 가능한 고객 피드백을 수집해드려요.
            </p>

            {/* 피드백 예시 카드들 */}
            <div className="space-y-3">
              {reviews.map((review, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-4"
                >
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-white/80 text-sm">{review.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </AnimatedSection>
  );
}
