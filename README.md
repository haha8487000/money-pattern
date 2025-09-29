# 당신의 무의식 감정이 부를 결정한다 - 무의식 머니패턴 심리진단지

## 프로젝트 개요
심리학과 행동경제학을 기반으로 한 무의식 속 감정과 신념이 부와 성공에 미치는 영향을 분석하는 종합 심리 진단 시스템입니다.

## 🎯 현재 완료된 기능

### 1. 메인 홈페이지 (index.html)
- **전문적 브랜딩**: "당신의 무의식 감정이 부를 결정한다" 컨셉으로 완전 리뉴얼
- **과학적 신뢰성**: 심리학 × 행동경제학 × 인지과학 기반 강조
- **반응형 디자인**: 모바일/데스크톱 최적화
- **고품질 비주얼**: 그라데이션, 아이콘, 애니메이션 효과

### 2. 5문항 초간편 무의식 신념 진단 시스템
**진단 페이지** (ultra-belief-diagnosis.html):
- 3분 완성 초간편 진단
- 5가지 핵심 무의식 신념 측정
- 실시간 진행률 표시
- 현대적 UI/UX 디자인

**이메일 수집 페이지** (ultra-belief-email.html):
- 결과 확인 전 이메일 수집 시스템
- EmailJS 자동화 연동
- 상담 신청 옵션 제공
- 전문적이고 신뢰성 있는 디자인

**결과 페이지** (ultra-belief-results.html):
- **Chart.js 시각화**: 레이더 차트, 도넛 차트로 데이터 시각화
- **주기질/부기질 분석**: 1차, 2차 신념 패턴 상세 분석
- **오행 상생상극 다이어그램**: 동양철학 기반 5가지 패턴 관계도
- **긍정적 성장 방향**: 각 패턴별 장점과 성장 가능성 중심 설명
- **인터랙티브 요소**: 패턴 클릭 시 상세 정보 표시

### 3. 다계층 진단 시스템
- **초간편 진단**: 5문항 3분 완성
- **오행 진단**: 15문항 동양철학 기반
- **정밀 진단**: 20문항 상세 분석
- **심층 무의식**: 전문가급 심화 진단

### 4. 이메일 자동화 시스템
- **EmailJS 통합**: service_dki5pkx 연동 완료
- **자동 응답**: 관리자/고객 이중 발송
- **상담 연결**: 전화 02)848-7000, 이메일 habin0781@naver.com
- **개인정보 보호**: 안전한 데이터 처리

## 📊 기술적 구현 사항

### 프론트엔드 기술 스택
- **HTML5/CSS3**: 시맨틱 마크업, 현대적 스타일링
- **JavaScript (ES6+)**: 모듈화된 클린 코드
- **Tailwind CSS**: 유틸리티-퍼스트 CSS 프레임워크
- **Chart.js**: 데이터 시각화 라이브러리
- **Font Awesome**: 프로페셔널 아이콘
- **Google Fonts**: Noto Sans KR 한글 최적화

### 주요 JavaScript 모듈
1. **ultra-belief-diagnosis.js**: 진단 로직 및 UI 제어
2. **ultra-belief-email.js**: 이메일 수집 및 EmailJS 연동
3. **ultra-belief-results.js**: 결과 분석, 차트 생성, 오행 다이어그램

### 데이터 구조
```javascript
// 5가지 무의식 신념 유형
beliefTypes: {
  'money-pessimist': '머니 비관주의자',
  'money-optimist': '머니 낙관주의자', 
  'money-conflicted': '머니 갈등형',
  'money-neutral': '머니 중립형',
  'money-balanced': '머니 균형형'
}

// 오행 패턴 매핑
beliefPatterns: {
  'seeking': '쟁취형 (목)',
  'spending': '질러형 (화)',
  'following': '팔랑귀형 (토)',
  'showing': '나잘나형 (금)',
  'perfecting': '완벽형 (수)'
}
```

## 🎨 디자인 시스템

### 컬러 팔레트
- **Primary**: Purple-Pink 그라데이션 (#8b5cf6 → #ec4899)
- **Secondary**: Indigo-Cyan 그라데이션 (#6366f1 → #06b6d4)
- **Accent**: 각 패턴별 고유 색상 (Green, Red, Yellow, Purple, Blue)
- **Background**: 부드러운 그라데이션 배경

### 시각적 요소
- **glassmorphism**: 반투명 배경 효과
- **neumorphism**: 부드러운 그림자 효과
- **Interactive hover**: 마우스 오버 시 애니메이션
- **Responsive icons**: 상황별 아이콘 시스템

## 📧 비즈니스 연동

### EmailJS 설정
```javascript
PublicKey: 'R_oWqjQhyn1mSaaKU'
ServiceID: 'service_dki5pkx'
AdminTemplate: 'template_hdsco7h'
CustomerTemplate: 'template_dln2vl3'
```

### 연락처 정보
- **전화상담**: 02)848-7000
- **이메일**: habin0781@naver.com
- **상담시간**: 평일 9:00-18:00

## 🚀 배포 및 접근 경로

### 주요 진입점
1. **메인**: `/` - 홈페이지
2. **초간편 진단**: `/ultra-belief-diagnosis.html`
3. **이메일 수집**: `/ultra-belief-email.html`
4. **결과 확인**: `/ultra-belief-results.html`

### 완성도 및 품질
- ✅ **모바일 반응형**: 완벽 지원
- ✅ **사용자 경험**: 직관적 UI/UX
- ✅ **데이터 시각화**: Chart.js 고품질 차트
- ✅ **이메일 자동화**: EmailJS 완전 연동
- ✅ **전문성**: 과학적 근거 기반 신뢰성
- ✅ **브랜딩**: 일관된 디자인 시스템

## 🔮 미래 개선 사항
1. **AI 기반 분석**: 머신러닝 모델 도입
2. **개인화 대시보드**: 진단 이력 관리
3. **소셜 공유**: SNS 연동 기능
4. **다국어 지원**: 영어/중국어 번역
5. **전문가 상담**: 화상 상담 시스템

## 📞 지원 및 문의
- 기술 문의: habin0781@naver.com
- 전화 상담: 02)848-7000
- 사업 제휴: 별도 문의

---

**© 2024 무의식 머니패턴 심리진단지. 모든 권리 보유.**
*당신의 무의식 감정이 부를 결정한다*