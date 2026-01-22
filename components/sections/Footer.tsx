import Container from "@/components/layout/Container";

export default function Footer() {
  return (
    <footer className="bg-muted py-12 border-t border-border text-foreground/60 text-sm">
      <Container>
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h5 className="font-bold text-foreground mb-4 text-lg">
              (주)티엠알파운더스
            </h5>
            <p className="mb-1">대표: 김영호 | 사업자등록번호: 492-88-02374</p>
            <p className="mb-1">주소: 서울시 성동구 성수일로8길 5, 1802호</p>
            <p className="mb-1">
              연락처: 070-4138-0263 | 이메일: contact@tmr-founders.com
            </p>
          </div>
          <div className="md:text-right flex flex-col md:items-end">
            <div className="flex gap-6 mb-4">
              <a href="#" className="hover:text-foreground transition">
                회사 소개
              </a>
              <a href="#" className="hover:text-foreground transition">
                이용약관
              </a>
              <a href="#" className="font-bold hover:text-foreground transition">
                개인정보처리방침
              </a>
              <a href="#" className="hover:text-foreground transition">
                고객센터
              </a>
            </div>
            <p>&copy; 2026 TMR Founders Inc. All rights reserved.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
