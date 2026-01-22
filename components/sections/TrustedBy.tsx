"use client";

import React from "react";
import Container from "@/components/layout/Container";
import AnimatedSection from "@/components/layout/AnimatedSection";
import { Carousel, Card, type Card as CardType } from "@/components/ui/apple-cards-carousel";

// Carousel data
const carouselData: CardType[] = [
  {
    category: "자동화 솔루션",
    title: "자동으로 손님 DB / 포인트 적립",
    src: "/card-1.jpg",
    video: "/card-1.mp4",
    mainCopy: "손님이 태그히어로 주문하면 끝",
    subCopy:
      "전화번호 입력? 도장? 다 필요 없습니다. 주문 후 카카오 로그인 한 번이면 포인트 적립과 DB 확보가 자동으로 이루어집니다.",
  },
  {
    category: "리뷰 관리",
    title: "네이버 리뷰 자동 요청",
    src: "/card-2.png",
    mainCopy: "주문하면 자동으로 리뷰 요청",
    subCopy:
      "포인트 적립 완료 시 알림톡으로 리뷰 요청이 자동 발송됩니다. 직접 부탁하지 않아도 리뷰가 쌓이는 마법을 경험하세요.",
  },
  {
    category: "타겟 마케팅",
    title: "똑똑한 타겟 메시지",
    src: "/card-3.png",
    mainCopy: "한 달 안 온 손님에게만 쏙",
    subCopy:
      "전체 발송보다 효과 3배! 신규, 재방문, 휴면 고객을 자동으로 분류하여 꼭 필요한 사람에게만 쿠폰을 보냅니다.",
  },
  {
    category: "신규 고객 발굴",
    title: "우리 동네 신규 고객 찾기",
    src: "/card-4.png",
    mainCopy: "우리 가게 참 좋은데, 몰라서 못 오는 손님이 없도록.",
    subCopy:
      "전국 태그히어 매장에서 수집된 데이터를 활용해보세요. 우리 매장 근처에서 활동하는 미식가들을 찾아드립니다. 맛에는 자신 있지만 홍보가 막막했던 사장님께 최고의 파트너가 되어드릴게요.",
  },
];

export default function TrustedBy() {
  const cards = carouselData.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <AnimatedSection className="py-24 bg-black text-white">
      <Container>
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tight"
            style={{ 
              fontFamily: '"Pretendard Variable"',
              fontWeight: 700,
              fontSize: '30px',
              lineHeight: '1.25',
              letterSpacing: '-0.02em'
            }}
          >
            사장님은 매장에만 집중하세요.<br />
            나머지는 저희가 합니다.
          </h2>
        </div>

        {/* Carousel Section */}
        <Carousel items={cards} />
      </Container>
    </AnimatedSection>
  );
}
