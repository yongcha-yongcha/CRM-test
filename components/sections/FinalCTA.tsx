"use client";

import Container from "@/components/layout/Container";
import AnimatedSection from "@/components/layout/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function FinalCTA() {
  return (
    <AnimatedSection className="py-32 bg-slate-900 text-white text-center">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            지금 시작하면 월 구독료 무료
          </h2>
          <p className="text-xl text-slate-400 mb-12" style={{ fontSize: '16px' }}>
            최고의 브랜드들과 빠르게 변화하는 방향에 동참하세요.<br />
            태그히어를 경험한 700만+ 명이 그 증거입니다.
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-12 py-5 rounded-2xl text-xl shadow-lg transition transform hover:-translate-y-1"
          >
            월 0원으로 시작하기
          </Button>
          <div className="mt-8 flex justify-center gap-6 text-sm text-slate-500">
            <span className="flex items-center gap-1">
              <Check className="w-4 h-4" />
              설치 필요 없음
            </span>
            <span className="flex items-center gap-1">
              <Check className="w-4 h-4" />
              도입비용 무료
            </span>
            <span className="flex items-center gap-1">
              <Check className="w-4 h-4" />
              언제든 해지 가능
            </span>
          </div>
        </div>
      </Container>
    </AnimatedSection>
  );
}
