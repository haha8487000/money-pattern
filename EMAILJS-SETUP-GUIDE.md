# 📧 EmailJS 설정 가이드 (왕초보용)

## 🎯 목표
진단 완료 후 고객 정보 입력 → 자동으로 2개 이메일 전송:
1. **관리자(habin0781@naver.com)**에게: 고객 정보 + 진단 결과
2. **고객**에게: 진단 결과 요약 + 상담 안내

---

## 📋 **1단계: EmailJS 회원가입** (5분)

1. **https://www.emailjs.com** 접속
2. **"Get Started"** 또는 **"Sign Up"** 클릭
3. **Gmail 계정**으로 가입 (추천)
4. 이메일 인증 완료

---

## ⚙️ **2단계: Gmail 서비스 연결** (3분)

### 2-1. 서비스 추가
1. EmailJS 대시보드에서 **"Email Services"** 클릭
2. **"Add Service"** 클릭
3. **"Gmail"** 선택

### 2-2. Gmail 연결
1. **"Connect Account"** 클릭
2. Google 로그인 창에서 **habin0781@naver.com** 계정 선택
3. EmailJS 권한 허용
4. **Service ID** 복사 (예: `service_abc123`)
5. 메모장에 저장: `SERVICE_ID: service_abc123`

---

## 📝 **3단계: 이메일 템플릿 만들기** (10분)

### 3-1. 관리자용 템플릿 (우리가 받을 이메일)
1. **"Email Templates"** → **"Create New Template"**
2. **Template Name**: `Admin Notification`

**제목 (Subject):**
```
[머니패턴] 새로운 진단 완료 - {{user_name}}님
```

**내용 (Body):**
```
머니패턴 진단이 완료되었습니다.

===== 고객 정보 =====
• 이름: {{user_name}}
• 이메일: {{user_email}}
• 연락처: {{user_phone}}
• 상담 희망: {{consultation_request}}

===== 진단 결과 =====
• 진단 유형: {{diagnosis_type}}
• 주기질: {{primary_pattern}}
• 부기질: {{secondary_pattern}}
• 진단 시간: {{diagnosis_time}}

상담이 필요한 고객입니다.
```

3. **Save** 클릭
4. **Template ID** 복사 (예: `template_admin123`)
5. 메모장에 저장: `ADMIN_TEMPLATE_ID: template_admin123`

### 3-2. 고객용 템플릿
1. **"Create New Template"** 다시 클릭
2. **Template Name**: `Customer Results`

**제목:**
```
{{user_name}}님의 머니패턴 진단 결과가 완성되었습니다! 🎯
```

**내용:**
```
안녕하세요 {{user_name}}님,

머니패턴 진단을 완료해주셔서 감사합니다! 

🎯 **당신의 머니패턴**
{{primary_pattern}}

📊 **결과 요약**
{{result_summary}}

💡 **더 자세한 분석을 원하신다면?**
전문가 1:1 상담을 통해 맞춤형 투자 전략을 받아보세요.

📞 **상담 문의**
이메일: habin0781@naver.com  
전화: 02)848-7000

감사합니다.
머니패턴 팀 드림
```

3. **Save** 클릭
4. **Template ID** 복사 (예: `template_customer456`)
5. 메모장에 저장: `CUSTOMER_TEMPLATE_ID: template_customer456`

---

## 🔑 **4단계: Public Key 확인** (2분)

1. **"Account"** → **"General"** 탭
2. **"Public Key"** 복사 (예: `user_abc123xyz`)
3. 메모장에 저장: `PUBLIC_KEY: user_abc123xyz`

---

## 💻 **5단계: 코드에 정보 입력** (3분)

### 5-1. `js/simple-results.js` 파일 수정
파일에서 다음 부분을 찾아서 메모장에 저장한 정보로 교체:

```javascript
// ✅ 코드 입력 완료!
this.publicKey = 'R_oWqjQhyn1mSaaKU'; // ✅ 실제 Public Key 입력완료
this.serviceId = 'service_dki5pkx'; // ✅ 실제 Service ID 입력완료  
this.adminTemplateId = 'template_hdsco7h'; // ✅ 관리자 템플릿 ID 입력완료
this.customerTemplateId = 'template_dln2vl3'; // ✅ 고객 템플릿 ID 입력완료
```

**예시:**
```javascript
this.publicKey = 'user_abc123xyz';
this.serviceId = 'service_abc123'; 
this.adminTemplateId = 'template_admin123';
this.customerTemplateId = 'template_customer456';
```

### 5-2. EmailJS 초기화 코드 활성화
다음 부분에서 주석 제거:

**변경 전:**
```javascript
// emailjs.init(this.publicKey);
```

**변경 후:**
```javascript
emailjs.init(this.publicKey);
```

**변경 전:**
```javascript
// return emailjs.send(this.serviceId, this.adminTemplateId, templateParams);
// return emailjs.send(this.serviceId, this.customerTemplateId, templateParams);
```

**변경 후:**
```javascript
return emailjs.send(this.serviceId, this.adminTemplateId, templateParams);
return emailjs.send(this.serviceId, this.customerTemplateId, templateParams);
```

---

## ✅ **6단계: 테스트** (5분)

1. 웹사이트에서 진단 완료
2. 결과 페이지에서 정보 입력:
   - 이름: 테스트용 이름
   - 이메일: 본인 이메일 (테스트용)
   - 개인정보 동의 체크
3. **"결과 이메일로 받기"** 클릭
4. 이메일 2개 확인:
   - `habin0781@naver.com`에 관리자 알림 이메일
   - 입력한 이메일에 결과 이메일

---

## 🎯 **완료 후 결과**

### ✅ 관리자가 받는 이메일:
- 고객의 이름, 이메일, 연락처
- 진단 결과 (주기질, 부기질)
- 상담 희망 여부
- 진단 시간

### ✅ 고객이 받는 이메일:
- 개인별 맞춤 결과 요약
- 상담 안내 정보
- 연락처 정보

---

## 🚨 **주의사항**

1. **무료 플랜 한계**: 월 200건까지 무료
2. **스팸 방지**: 너무 자주 테스트하지 말기
3. **보안**: Public Key는 공개해도 안전함
4. **백업**: 설정 정보는 메모장에 저장해두기

---

## 💡 **문제 해결**

### Q: 이메일이 오지 않아요
- Gmail 스팸함 확인
- EmailJS 대시보드에서 로그 확인
- 브라우저 개발자 도구 콘솔 에러 확인

### Q: 권한 오류가 나요
- Gmail 계정 재연결 시도
- 2단계 인증 비활성화 후 재시도

### Q: 템플릿 변수가 안 보여요
- 변수명 확인 (대소문자 구분)
- 중괄호 확인 `{{variable_name}}`

---

## 📞 **추가 도움**

더 자세한 설명이나 설정 도움이 필요하면:
- EmailJS 공식 문서: https://www.emailjs.com/docs/
- 또는 구체적인 오류 메시지와 함께 문의