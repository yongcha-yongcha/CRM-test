"use client";

import Container from "@/components/layout/Container";
import AnimatedSection from "@/components/layout/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Smartphone, MessageCircle, Target, Star, Check, MapPin, UtensilsCrossed } from "lucide-react";

export default function Solutions() {
  return (
    <AnimatedSection className="py-24 bg-slate-900 text-white">
      <Container>
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ fontSize: '30px', lineHeight: '1.25' }}>
            사장님은 매장에만 집중하세요.<br />
            나머지는 저희가 합니다.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <Card className="bg-slate-800 p-8 rounded-3xl border border-slate-700 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <CardContent className="p-0">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-6">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white" style={{ backgroundClip: 'unset', WebkitBackgroundClip: 'unset' }}>자동으로 손님 DB / 포인트 적립</h3>
              <p className="text-primary/80 text-sm font-semibold mb-4">
                &quot;손님이 태그히어로 주문하면 끝&quot;
              </p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                전화번호 입력? 도장? 다 필요 없습니다. 주문 후 카카오 로그인 한 번이면 포인트 적립과 DB 확보가 자동으로 이루어집니다.
              </p>
            </CardContent>
          </Card>

          {/* Feature 2 */}
          <Card className="bg-slate-800 p-8 rounded-3xl border border-slate-700 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <CardContent className="p-0">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-6">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">네이버 리뷰 자동 요청</h3>
              <p className="text-green-300 text-sm font-semibold mb-4">
                &quot;주문하면 자동으로 리뷰 요청&quot;
              </p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                포인트 적립 완료 시 알림톡으로 리뷰 요청이 자동 발송됩니다. 직접 부탁하지 않아도 리뷰가 쌓이는 마법을 경험하세요.
              </p>
            </CardContent>
          </Card>

          {/* Feature 3 */}
          <Card className="bg-slate-800 p-8 rounded-3xl border border-slate-700 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <CardContent className="p-0">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">똑똑한 타겟 메시지</h3>
              <p className="text-purple-300 text-sm font-semibold mb-4">
                &quot;한 달 안 온 손님에게만 쏙&quot;
              </p>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                전체 발송보다 효과 3배! 신규, 재방문, 휴면 고객을 자동으로 분류하여 꼭 필요한 사람에게만 쿠폰을 보냅니다.
              </p>
            </CardContent>
          </Card>

          {/* Feature 4 (Highlight) */}
          <Card className="md:col-span-2 lg:col-span-3 bg-gradient-to-r from-primary/20 to-slate-800 p-10 rounded-3xl border border-primary/30 mt-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-bl-xl z-10">
              NEW FEATURE
            </div>
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <Badge className="bg-primary/20 text-primary mb-4 flex items-center gap-1.5">
                    <Star className="w-4 h-4" />
                    우리 동네 신규 고객 찾기
                  </Badge>
                  <h3 className="text-3xl font-bold mb-4 text-white">
                    내 매장 손님이 아닌,<br />
                    새로운 손님을 찾아드립니다
                  </h3>
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    우리 매장 근처(시/군/구)와 우리 업종에 관심 있는 &apos;진짜 잠재 고객&apos;에게 광고를 보내보세요.<br />
                    태그히어 데이터를 기반으로 하여 반응률이 압도적입니다.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-400">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 flex-shrink-0" />
                      오픈 초기라 단골이 없는 매장 추천
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 flex-shrink-0" />
                      광고 수신 동의 고객 타겟팅 (스팸 걱정 NO)
                    </li>
                  </ul>
                </div>
                {/* Mockup Visual */}
                <div className="bg-slate-700 rounded-xl p-6 border border-slate-600">
                  <div className="flex justify-between items-center border-b border-slate-600 pb-4 mb-4">
                    <span className="font-bold text-white">신규 고객 타겟팅</span>
                    <span className="text-primary text-sm">설정 중...</span>
                  </div>
                  <div className="space-y-3">
                    <div className="h-10 bg-slate-600 rounded flex items-center gap-2 px-4 text-sm text-slate-300">
                      <MapPin className="w-4 h-4 flex-shrink-0" />
                      서울시 성동구 성수동
                    </div>
                    <div className="h-10 bg-slate-600 rounded flex items-center gap-2 px-4 text-sm text-slate-300">
                      <UtensilsCrossed className="w-4 h-4 flex-shrink-0" />
                      양식 / 파스타 선호 고객
                    </div>
                    <div className="h-12 bg-primary rounded flex items-center justify-center font-bold text-primary-foreground mt-4 cursor-pointer hover:bg-primary/90 transition">
                      메시지 발송하기
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>
    </AnimatedSection>
  );
}
