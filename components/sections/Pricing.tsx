"use client";

import Container from "@/components/layout/Container";
import AnimatedSection from "@/components/layout/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const BENEFITS = ["설치비 0원", "해지 위약금 0원", "도입 비용 0원"];

export default function Pricing() {
  return (
    <AnimatedSection id="pricing" className="py-24 bg-slate-50">
      <Container>
        <h2 className="mb-10 text-center text-3xl font-bold tracking-tight text-foreground">
          가격 걱정 없이 시작하세요
        </h2>

        <div className="mx-auto max-w-[480px]">
          <div className="text-left rounded-2xl border border-border bg-white p-10 shadow-sm">
            {/* 헤더 */}
            <h3 className="text-2xl font-bold tracking-tight text-foreground">
              태그히어 기본 플랜
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              온라인 예약과 리뷰 관리까지, 한 곳에서
            </p>

            <Separator className="my-6" />

            {/* 가격 */}
            <p className="text-sm text-muted-foreground line-through">
              정가 월 33,000원
            </p>
            <div className="mt-1 flex flex-wrap items-baseline gap-2">
              <span className="font-bold tracking-tight text-[#1d2022] text-5xl md:text-6xl">
                월 0원
              </span>
              <span className="text-base font-medium text-primary">
                이벤트 진행 중!
              </span>
            </div>

            {/* CTA */}
            <Button
              size="lg"
              className="mt-6 w-full rounded-xl py-6 text-base font-bold"
            >
              무료로 시작하기
            </Button>

            {/* 주요 혜택 (Feature List 스타일) */}
            <p className="mt-8 font-bold text-foreground">주요 혜택</p>
            <ul className="mt-3">
              {BENEFITS.map((label, i) => (
                <li key={label}>
                  <span className="text-foreground/90 py-3 block text-[15px]">
                    {label}
                  </span>
                  {i < BENEFITS.length - 1 && <Separator />}
                </li>
              ))}
            </ul>

            {/* 고지 사항 */}
            <div className="mt-8 space-y-1.5 text-left text-xs text-muted-foreground">
              <p>* 이벤트는 내부 사정에 의해 조기 마감될 수 있습니다.</p>
              <p>
                * 알림톡, SMS 등 메시지 발송 서비스 이용 시에만 건당 실비용이
                발생합니다.
              </p>
              <p>* 메시지를 발송하지 않으면 청구되는 비용은 없습니다.</p>
            </div>
          </div>
        </div>
      </Container>
    </AnimatedSection>
  );
}
