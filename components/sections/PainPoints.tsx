"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Container from "@/components/layout/Container";
import { TrendingDown, MessageSquare, DollarSign } from "lucide-react";

export default function PainPoints() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const mobileSectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const { scrollYProgress: mobileScrollYProgress } = useScroll({
    target: mobileSectionRef,
    offset: ["start start", "end end"],
  });

  // 배경: 흰색 → 검정
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 1],
    ["#ffffff", "#111111"]
  );

  const mobileBackgroundColor = useTransform(
    mobileScrollYProgress,
    [0, 1],
    ["#ffffff", "#111111"]
  );

  // 3단 카드: 스크롤 전반에 fade out + scale down
  const cardsOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0]);
  const cardsScale = useTransform(scrollYProgress, [0, 0.45], [1, 0.9]);

  const mobileCardsOpacity = useTransform(mobileScrollYProgress, [0, 0.45], [1, 0]);
  const mobileCardsScale = useTransform(mobileScrollYProgress, [0, 0.45], [1, 0.9]);

  // 히어로 텍스트: 후반에 아래→위 등장 + fade in
  // 스크롤 진행도에 따라: 0.2 이전에는 완전히 투명, 0.2-0.75 사이에 나타남, 0.75 이후에는 완전히 보임
  const heroY = useTransform(scrollYProgress, [0.2, 0.75], [100, 0]);
  const heroOpacity = useTransform(scrollYProgress, [0.2, 0.75], [0, 1]);

  const mobileHeroY = useTransform(mobileScrollYProgress, [0.2, 0.75], [100, 0]);
  const mobileHeroOpacity = useTransform(mobileScrollYProgress, [0.2, 0.75], [0, 1]);

  return (
    <section className="relative bg-white md:bg-transparent">
      {/* 모바일: 정석 Sticky 구조 */}
      <div
        ref={mobileSectionRef}
        className="md:hidden relative h-[300vh]"
      >
        {/* Sticky Wrapper: 화면에 딱 달라붙게 */}
        <motion.div
          className="sticky top-0 h-screen flex items-center overflow-hidden"
          style={{ backgroundColor: mobileBackgroundColor }}
        >
          {/* Content: 실제 텍스트/이미지 */}
          <Container className="flex flex-col items-center gap-10 w-full relative z-10 pt-16">
            <motion.div
              className="flex w-full max-w-5xl flex-col items-center gap-10"
              style={{
                opacity: mobileCardsOpacity,
                scale: mobileCardsScale,
                willChange: "opacity, transform",
              }}
            >
              <h2 className="text-center text-3xl font-bold text-foreground pt-8 leading-[1.2]">
                혹시 이런 고민, 하고 계시지 않으세요?
              </h2>

              {/* Apple 스타일 3단 텍스트 그리드 */}
              <div className="grid w-full grid-cols-1 gap-8 py-12">
                <motion.div
                  className="flex flex-col"
                  initial={{ x: -50, filter: "blur(10px)", opacity: 0 }}
                  whileInView={{ x: 0, filter: "blur(0px)", opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <div className="mb-4">
                    <TrendingDown className="w-8 h-8 text-foreground stroke-[1.5]" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    재방문이 줄어들고 있다
                  </h3>
                  <div className="border-t border-foreground/20 mb-4"></div>
                  <p className="text-base leading-relaxed text-gray-500">
                    한 번 오고 다시 안 오는 손님이 너무 많아요. 손님 얼굴은
                    기억나는데 연락할 방법이 없어 답답하셨죠?
                  </p>
                </motion.div>

                <motion.div
                  className="flex flex-col"
                  initial={{ x: -50, filter: "blur(10px)", opacity: 0 }}
                  whileInView={{ x: 0, filter: "blur(0px)", opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <div className="mb-4">
                    <MessageSquare className="w-8 h-8 text-foreground stroke-[1.5]" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    리뷰가 안 늘어난다
                  </h3>
                  <div className="border-t border-foreground/20 mb-4"></div>
                  <p className="text-base leading-relaxed text-gray-500">
                    &quot;리뷰 부탁드려요&quot; 말하기 민망하고, 테이블에
                    안내문을 붙여놔도 손님들은 잘 써주지 않습니다.
                  </p>
                </motion.div>

                <motion.div
                  className="flex flex-col"
                  initial={{ x: -50, filter: "blur(10px)", opacity: 0 }}
                  whileInView={{ x: 0, filter: "blur(0px)", opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <div className="mb-4">
                    <DollarSign className="w-8 h-8 text-foreground stroke-[1.5]" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    마케팅, 돈만 쓰고 효과는?
                  </h3>
                  <div className="border-t border-foreground/20 mb-4"></div>
                  <p className="text-base leading-relaxed text-gray-500">
                    플레이스 광고에 돈은 쓰는데, 실제로 신규 손님이 오는지 알
                    수가 없어요. 효과 측정이 불가능합니다.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </Container>

          {/* 모바일용 히어로 텍스트: 완벽한 정중앙 배치 */}
          <motion.p
            className="absolute inset-0 flex items-center justify-center text-center text-2xl font-bold leading-tight break-keep w-full max-w-full px-6 m-0 p-0 z-20 pointer-events-none"
            style={{
              y: mobileHeroY,
              opacity: mobileHeroOpacity,
              willChange: "opacity, transform",
              color: "#67e8f5",
            }}
          >
            이 모든 걸 태그히어 CRM이 대신합니다.
          </motion.p>
        </motion.div>
      </div>

      {/* 데스크탑: 정석 Sticky 구조 */}
      <div
        ref={sectionRef}
        className="hidden md:block relative h-[300vh]"
      >
        {/* Sticky Wrapper: 화면에 딱 달라붙게 */}
        <motion.div
          className="sticky top-0 h-screen flex items-center overflow-hidden"
          style={{ backgroundColor }}
        >
          {/* Content: 실제 텍스트/이미지 */}
          <Container className="flex flex-col items-center gap-10 md:gap-16 w-full relative z-10">
            <motion.div
              className="flex w-full max-w-5xl flex-col items-center gap-10 md:gap-16"
              style={{
                opacity: cardsOpacity,
                scale: cardsScale,
                willChange: "opacity, transform",
              }}
            >
              <h2 className="text-center text-3xl font-bold text-foreground md:text-4xl leading-[1.2]">
                혹시 이런 고민, 하고 계시지 않으세요?
              </h2>

              {/* Apple 스타일 3단 텍스트 그리드 */}
              <div className="grid w-full grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 py-12 md:py-20">
                <motion.div
                  className="flex flex-col"
                  initial={{ x: -50, filter: "blur(10px)", opacity: 0 }}
                  whileInView={{ x: 0, filter: "blur(0px)", opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <div className="mb-4">
                    <TrendingDown className="w-8 h-8 text-foreground stroke-[1.5]" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                    재방문이 줄어들고 있다
                  </h3>
                  <div className="border-t border-foreground/20 mb-4"></div>
                  <p className="text-base md:text-lg leading-relaxed text-gray-500">
                    한 번 오고 다시 안 오는 손님이 너무 많아요. 손님 얼굴은
                    기억나는데 연락할 방법이 없어 답답하셨죠?
                  </p>
                </motion.div>

                <motion.div
                  className="flex flex-col"
                  initial={{ x: -50, filter: "blur(10px)", opacity: 0 }}
                  whileInView={{ x: 0, filter: "blur(0px)", opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <div className="mb-4">
                    <MessageSquare className="w-8 h-8 text-foreground stroke-[1.5]" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                    리뷰가 안 늘어난다
                  </h3>
                  <div className="border-t border-foreground/20 mb-4"></div>
                  <p className="text-base md:text-lg leading-relaxed text-gray-500">
                    &quot;리뷰 부탁드려요&quot; 말하기 민망하고, 테이블에
                    안내문을 붙여놔도 손님들은 잘 써주지 않습니다.
                  </p>
                </motion.div>

                <motion.div
                  className="flex flex-col"
                  initial={{ x: -50, filter: "blur(10px)", opacity: 0 }}
                  whileInView={{ x: 0, filter: "blur(0px)", opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <div className="mb-4">
                    <DollarSign className="w-8 h-8 text-foreground stroke-[1.5]" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                    마케팅, 돈만 쓰고 효과는?
                  </h3>
                  <div className="border-t border-foreground/20 mb-4"></div>
                  <p className="text-base md:text-lg leading-relaxed text-gray-500">
                    플레이스 광고에 돈은 쓰는데, 실제로 신규 손님이 오는지 알
                    수가 없어요. 효과 측정이 불가능합니다.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </Container>

          {/* 데스크탑용 히어로 텍스트: 완벽한 정중앙 배치 */}
          <motion.p
            className="absolute inset-0 flex items-center justify-center text-center text-3xl font-bold leading-tight break-keep w-full max-w-full px-6 lg:text-[40px] m-0 p-0 z-20 pointer-events-none"
            style={{
              y: heroY,
              opacity: heroOpacity,
              willChange: "opacity, transform",
              color: "#67e8f5",
            }}
          >
            이 모든 걸 태그히어 CRM이 대신합니다.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
