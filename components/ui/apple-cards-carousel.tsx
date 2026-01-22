"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { IconArrowNarrowLeft, IconArrowNarrowRight } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { ImageProps } from "next/image";

interface CarouselProps {
  items: JSX.Element[];
  initialScroll?: number;
}

export type Card = {
  src: string;
  video?: string;
  title: string;
  category: string;
  mainCopy: string;
  subCopy: string;
};

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full">
        <div
          className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth py-10 [scrollbar-width:none] md:py-20"
          ref={carouselRef}
          onScroll={checkScrollability}
        >
          <div
            className={cn(
              "absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l",
            )}
          ></div>

          <div
            className={cn(
              "flex flex-row justify-start gap-4 pl-4",
              "mx-auto max-w-7xl", // remove max-w-4xl if you want the carousel to span the full width of its container
            )}
          >
            {items.map((item, index) => (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.2 * index,
                  ease: "easeOut",
                }}
                key={"card" + index}
                className="rounded-3xl last:pr-[5%] md:last:pr-[33%]"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
        <div className="mr-10 flex justify-end gap-2">
          <button
            className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 disabled:opacity-50"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
          >
            <IconArrowNarrowLeft className="h-6 w-6 text-gray-500" />
          </button>
          <button
            className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 disabled:opacity-50"
            onClick={scrollRight}
            disabled={!canScrollRight}
          >
            <IconArrowNarrowRight className="h-6 w-6 text-gray-500" />
          </button>
        </div>
      </div>
  );
};

export const Card = ({ card, index }: { card: Card; index: number }) => {
  return (
    <div className="flex flex-col w-64 md:w-96">
      <motion.div
        className="relative z-10 flex h-[32rem] w-64 flex-col items-start justify-start overflow-hidden rounded-3xl bg-gray-100 md:h-[40rem] md:w-96 dark:bg-neutral-900"
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 z-30 h-full bg-gradient-to-b from-black/50 via-transparent to-transparent" />
        <div className="relative z-40 p-8">
          <p className="text-left font-sans text-sm font-medium text-white md:text-base">
            {card.category}
          </p>
          <p className="mt-2 max-w-xs text-left font-sans text-xl font-semibold [text-wrap:balance] text-white md:text-3xl">
            {card.title}
          </p>
        </div>
        <BlurMedia
          src={card.video || card.src}
          alt={card.title}
          fill
          className="absolute inset-0 z-10 object-cover"
          isVideo={!!card.video || /\.(mp4|webm|mov|ogg)$/i.test(card.src)}
        />
      </motion.div>
      <div className="mt-3 w-64 space-y-1 md:mt-4 md:w-96">
        <p className="text-sm text-[#ffffff]">{card.mainCopy}</p>
        <p className="text-xs text-zinc-400 md:text-sm">{card.subCopy}</p>
      </div>
    </div>
  );
};

type BlurMediaProps = Omit<ImageProps, "fill" | "blurDataURL"> & {
  isVideo?: boolean;
  fill?: boolean;
};

export const BlurMedia = ({
  height,
  width,
  src,
  className,
  alt,
  isVideo = false,
  fill: _fill,
  ...rest
}: BlurMediaProps) => {
  const [isLoading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  // src에 버전 파라미터 추가하여 캐시 무효화 (컴포넌트 마운트 시 한 번만 생성)
  const mediaSrc = useMemo(() => {
    if (typeof src !== 'string') return src;
    // 빌드 타임스탬프가 있으면 사용, 없으면 현재 시간 사용 (개발 환경)
    const version = process.env.NEXT_PUBLIC_BUILD_TIME || Date.now();
    return `${src}${src.includes('?') ? '&' : '?'}v=${version}`;
  }, [src]);

  // 비디오가 이미 로드된 경우 즉시 표시
  useEffect(() => {
    if (isVideo && videoRef.current) {
      const video = videoRef.current;
      // readyState 체크: HAVE_FUTURE_DATA (3) 또는 HAVE_ENOUGH_DATA (4)면 이미 로드됨
      if (video.readyState >= 3) {
        setLoading(false);
      }
    }
  }, [isVideo]);

  // 이미지가 이미 로드된 경우 즉시 표시
  useEffect(() => {
    if (!isVideo && imgRef.current) {
      const img = imgRef.current;
      // 이미지가 이미 로드되어 있으면 (complete 속성 체크)
      if (img.complete) {
        setLoading(false);
      }
    }
  }, [isVideo]);

  // 비디오인 경우
  if (isVideo) {
    return (
      <video
        ref={videoRef}
        className={cn(
          "h-full w-full transition duration-300 object-cover",
          isLoading && "opacity-0",
          className,
        )}
        src={mediaSrc as string}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        onLoadedData={() => setLoading(false)}
        onCanPlay={() => setLoading(false)}
        onError={() => {
          setHasError(true);
          setLoading(false);
          console.error("비디오 로드 실패:", src);
        }}
      />
    );
  }

  // 이미지인 경우 (opacity-0 제거: lazy/404 시 onLoad·onError 미발생으로 계속 숨겨지는 문제 방지)
  return (
    <img
      ref={imgRef}
      className={cn("h-full w-full transition duration-300", className)}
      onLoad={() => setLoading(false)}
      onError={() => {
        setHasError(true);
        setLoading(false);
        console.error("이미지 로드 실패:", src);
      }}
      src={mediaSrc as string}
      width={width}
      height={height}
      loading="eager"
      decoding="async"
      alt={alt ? alt : "Background of a beautiful view"}
      {...rest}
    />
  );
};
