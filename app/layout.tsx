import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "태그히어 CRM - 단골 손님, 이제 자동으로 만들어드립니다",
  description: "포인트 적립부터 리뷰 요청, 재방문 알림까지 — 한 번에 끝",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased font-sans w-full" style={{ fontFamily: 'var(--font-pretendard, "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif)' }}>
        {children}
      </body>
    </html>
  );
}
