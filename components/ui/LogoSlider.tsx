"use client";

import { useEffect, useState } from "react";

// 브랜드 로고 (HTML에서 사용한 브랜드명)
const brands = [
  "SAMSUNG",
  "LG Electronics",
  "SK telecom",
  "HYUNDAI",
  "KB Kookmin",
];

export default function LogoSlider() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <>
      <style jsx global>{`
        @keyframes logoScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .logo-scroll-container {
          animation: logoScroll 30s linear infinite;
        }
      `}</style>
      <div className="relative w-full overflow-hidden py-8">
        <div className="flex logo-scroll-container">
          {/* 첫 번째 세트 */}
          {brands.map((brand, i) => (
            <div
              key={i}
              className="flex-shrink-0 mx-8 opacity-40 grayscale font-bold text-xl text-foreground/40 hover:opacity-60 hover:grayscale-0 transition-all"
            >
              {brand}
            </div>
          ))}
          {/* 두 번째 세트 (무한 스크롤용) */}
          {brands.map((brand, i) => (
            <div
              key={`${i}-2`}
              className="flex-shrink-0 mx-8 opacity-40 grayscale font-bold text-xl text-foreground/40 hover:opacity-60 hover:grayscale-0 transition-all"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
