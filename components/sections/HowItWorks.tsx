"use client";

import Container from "@/components/layout/Container";
import AnimatedSection from "@/components/layout/AnimatedSection";
import { Button } from "@/components/ui/button";

export default function HowItWorks() {
  return (
    <AnimatedSection className="py-24 bg-white">
      <Container>
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-wide uppercase text-sm">
            Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">정말 간단해요</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Method 1 */}
          <div className="text-center md:text-left">
            <div className="bg-muted rounded-2xl h-64 mb-8 flex items-center justify-center text-foreground/40">
              <span className="font-medium">태그히어 주문 화면 예시</span>
            </div>
            <h3 className="text-xl font-bold mb-3">1. 태그히어로 주문 시</h3>
            <ol className="space-y-2 text-foreground/70 text-sm list-decimal list-inside">
              <li>손님이 태그히어로 메뉴 주문</li>
              <li>카카오 로그인 1초 만에 완료</li>
              <li>포인트 자동 적립 & 알림톡 발송</li>
            </ol>
          </div>

          {/* Method 2 */}
          <div className="text-center md:text-left">
            <div className="bg-muted rounded-2xl h-64 mb-8 flex items-center justify-center text-foreground/40">
              <span className="font-medium">태블릿 입력 화면 예시</span>
            </div>
            <h3 className="text-xl font-bold mb-3">2. 태블릿 직접 입력 시</h3>
            <ol className="space-y-2 text-foreground/70 text-sm list-decimal list-inside">
              <li>결제 금액 입력 후 태블릿 전송</li>
              <li>손님이 태블릿에 번호 입력</li>
              <li>포인트 자동 적립 & 알림톡 발송</li>
            </ol>
          </div>
        </div>
      </Container>
    </AnimatedSection>
  );
}
