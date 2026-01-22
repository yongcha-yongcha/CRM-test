"use client";

import Container from "@/components/layout/Container";
import AnimatedSection from "@/components/layout/AnimatedSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

export default function FAQ() {
  return (
    <AnimatedSection className="py-24 bg-white">
      <Container>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">자주 묻는 질문</h2>

          <Card className="border-border rounded-xl">
            <CardContent className="p-0">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-b border-border">
                  <AccordionTrigger className="text-lg font-bold text-left px-6 py-6 hover:no-underline">
                    Q. 태그히어 오더 서비스를 사용해야만 쓸 수 있나요?
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="px-6 pb-6 text-foreground/70 leading-relaxed text-sm pl-10">
                      아니요. TagHere CRM은 독립적으로도 사용 가능합니다. 태그히어 오더가 없어도 태블릿만 별도 구매(또는 보유 기기 활용)하시면 모든 기능을 사용하실 수 있습니다.
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border-b border-border">
                  <AccordionTrigger className="text-lg font-bold text-left px-6 py-6 hover:no-underline">
                    Q. 태블릿은 어떻게 구하나요?
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="px-6 pb-6 text-foreground/70 leading-relaxed text-sm pl-10">
                      두 가지 방법이 있습니다.<br />
                      1. 태그히어에서 포인트 적립 전용 태블릿을 구매 (250,000원)<br />
                      2. 이미 가지고 계신 태블릿이나 별도로 구매한 기기에 앱을 설치하여 사용
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border-b border-border">
                  <AccordionTrigger className="text-lg font-bold text-left px-6 py-6 hover:no-underline">
                    Q. 정말 월 구독료가 무료인가요?
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="px-6 pb-6 text-foreground/70 leading-relaxed text-sm pl-10">
                      네, 맞습니다. 단, 고객에게 발송하는 메시지(알림톡, SMS) 비용은 사용하신 만큼만 건당 발생합니다.
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border-b border-border">
                  <AccordionTrigger className="text-lg font-bold text-left px-6 py-6 hover:no-underline">
                    Q. 기존 손님 정보를 옮길 수 있나요?
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="px-6 pb-6 text-foreground/70 leading-relaxed text-sm pl-10">
                      네, 엑셀 파일로 일괄 등록이 가능합니다. 어려우시면 고객센터에서 무료로 도와드리고 있습니다.
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </Container>
    </AnimatedSection>
  );
}
