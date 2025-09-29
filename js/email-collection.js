// 머니패턴 진단 이메일 수집 JavaScript

// EmailJS 설정 및 이메일 전송 기능
class MoneyPatternEmailService {
    constructor() {
        // EmailJS 초기화
        this.publicKey = 'R_oWqjQhyn1mSaaKU';
        this.serviceId = 'service_dki5pkx';
        this.adminTemplateId = 'template_hdsco7h';
        this.customerTemplateId = 'template_dln2vl3';
        
        this.initEmailJS();
        this.setupEmailForm();
    }

    initEmailJS() {
        emailjs.init(this.publicKey);
        console.log('EmailJS 초기화됨 - 머니패턴 진단');
    }

    setupEmailForm() {
        const form = document.getElementById('emailForm');
        if (form) {
            form.addEventListener('submit', (e) => this.handleEmailSubmit(e));
        }
    }

    async handleEmailSubmit(e) {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const userData = {
            user_name: formData.get('user_name'),
            user_email: formData.get('user_email'),
            user_phone: formData.get('user_phone') || '미제공',
            consultation_request: formData.get('consultation_request') ? '머니패턴 전문가 상담 희망' : '상담 불필요'
        };

        // 유효성 검사
        if (!userData.user_name || !userData.user_email) {
            alert('이름과 이메일을 입력해주세요.');
            return;
        }

        if (!document.getElementById('privacyAgree').checked) {
            alert('개인정보 수집 및 이용에 동의해주세요.');
            return;
        }

        // 진단 결과 데이터 가져오기
        const results = this.getStoredResults();
        console.log('가져온 진단 결과:', results);
        
        // LocalStorage 디버깅
        console.log('LocalStorage 전체 내용:');
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key.includes('moneypattern')) {
                console.log(`${key}: `, localStorage.getItem(key));
            }
        }
        
        try {
            this.showLoadingStatus();
            
            // 1. 관리자에게 이메일 전송
            await this.sendAdminEmail(userData, results);
            
            // 2. 고객에게 이메일 전송
            await this.sendCustomerEmail(userData, results);
            
            this.showSuccessStatus();
            
            // 폼 비활성화
            document.getElementById('emailForm').style.display = 'none';
            
        } catch (error) {
            console.error('이메일 전송 실패:', error);
            this.showErrorStatus(error.message);
        }
    }

    getStoredResults() {
        // MoneyPattern.Storage에서 저장된 데이터 가져오기
        const patternResults = this.getFromStorage('patternResults');
        const patternScores = this.getFromStorage('patternScores');
        const answers = this.getFromStorage('diagnosisAnswers');
        
        if (patternResults && patternScores) {
            return {
                answers: answers || [],
                results: {
                    primaryPattern: patternResults.주기질?.name || '팔랑귀형',
                    secondaryPattern: patternResults.부기질?.name || '질러형', 
                    scores: patternScores || {}
                },
                timestamp: Date.now()
            };
        }
        
        // 기본 테스트 데이터
        return {
            answers: [],
            results: {
                primaryPattern: '팔랑귀형',
                secondaryPattern: '질러형',
                scores: { 팔랑귀: 85, 질러: 75, 나잘나: 65, 완벽형: 45, 쟁취형: 35 }
            },
            timestamp: Date.now()
        };
    }
    
    // MoneyPattern.Storage와 동일한 방식으로 데이터 가져오기
    getFromStorage(key) {
        try {
            const stored = localStorage.getItem(`moneypattern_${key}`);
            return stored ? JSON.parse(stored) : null;
        } catch (error) {
            console.error('Storage 읽기 오류:', error);
            return null;
        }
    }

    async sendAdminEmail(userData, results) {
        const primaryPattern = results?.results?.primaryPattern || '데이터 없음';
        const secondaryPattern = results?.results?.secondaryPattern || '데이터 없음';
        const scores = results?.results?.scores || {};
        
        const scoreText = Object.entries(scores)
            .map(([pattern, score]) => `${pattern}: ${score}점`)
            .join(', ');

        const templateParams = {
            user_name: userData.user_name,
            user_email: userData.user_email,
            user_phone: userData.user_phone,
            consultation_request: userData.consultation_request,
            diagnosis_type: '20문항 머니패턴 진단',
            primary_pattern: `주기질: ${primaryPattern}`,
            secondary_pattern: `부기질: ${secondaryPattern}${scoreText ? ` | 점수 내역: ${scoreText}` : ''}`,
            diagnosis_time: new Date().toLocaleString('ko-KR'),
            admin_email: 'habin0781@naver.com',
            // 추가 필드
            to_name: '관리자',
            from_name: userData.user_name,
            message: `신규 머니패턴 진단 요청\n\n진단자: ${userData.user_name}\n주기질: ${primaryPattern}\n부기질: ${secondaryPattern}\n상담요청: ${userData.consultation_request}`
        };

        console.log('관리자 이메일 전송 (머니패턴):', templateParams);
        console.log('진단 결과 데이터:', results);
        return emailjs.send(this.serviceId, this.adminTemplateId, templateParams);
    }

    async sendCustomerEmail(userData, results) {
        const primaryPattern = results?.results?.primaryPattern || '팔랑귀형';
        const secondaryPattern = results?.results?.secondaryPattern || '질러형';
        const scores = results?.results?.scores || {};
        
        const patternDescriptions = {
            '팔랑귀형': '다른 사람의 의견에 쉽게 영향받는 소통 중심형 머니패턴',
            '질러형': '감정적이고 즉흥적인 소비로 에너지를 표현하는 활동형 머니패턴',
            '나잘나형': '성취와 인정을 중시하며 체계적이고 목표 지향적인 머니패턴',
            '완벽형': '신중하고 완벽한 계획을 선호하는 안정 추구형 머니패턴',
            '쟁취형': '적극적으로 기회를 찾고 성장과 발전을 추구하는 성장형 머니패턴'
        };

        const templateParams = {
            user_name: userData.user_name,
            user_email: userData.user_email,
            primary_pattern: primaryPattern,
            result_summary: patternDescriptions[primaryPattern] || '개인별 머니패턴 분석',
            detailed_analysis: `[머니패턴 진단 결과]\n\n당신의 주요 머니패턴: ${primaryPattern}\n보조 머니패턴: ${secondaryPattern}\n\n${patternDescriptions[primaryPattern] || ''}\n\n20개 질문을 통해 팔랑귀, 질러, 나잘나, 완벽형, 쟁취형 중에서 당신의 주요 머니패턴을 분석했습니다.\n이러한 패턴을 바탕으로 건강한 머니 마인드셋 개발을 위한 맞춤 개선 방향을 제시해드립니다.\n\n더 자세한 분석과 개선 방향은 웹사이트에서 확인하실 수 있습니다.`,
            contact_email: 'habin0781@naver.com',
            // 추가 필드
            to_name: userData.user_name,
            from_name: '머니패턴 진단 시스템',
            message: `안녕하세요 ${userData.user_name}님,\n\n머니패턴 진단 결과를 보내드립니다.\n\n주요 패턴: ${primaryPattern}\n보조 패턴: ${secondaryPattern}\n\n자세한 내용은 첫 번째 메시지를 확인해주세요.`
        };

        console.log('고객 이메일 전송 (머니패턴):', templateParams);
        console.log('패턴 설명:', patternDescriptions);
        return emailjs.send(this.serviceId, this.customerTemplateId, templateParams);
    }

    showLoadingStatus() {
        document.getElementById('emailStatus').classList.remove('hidden');
        document.getElementById('emailSuccess').classList.add('hidden');
        document.getElementById('sendEmailBtn').disabled = true;
    }

    showSuccessStatus() {
        document.getElementById('emailStatus').classList.add('hidden');
        document.getElementById('emailSuccess').classList.remove('hidden');
    }

    showErrorStatus(message) {
        document.getElementById('emailStatus').classList.add('hidden');
        const errorDiv = document.createElement('div');
        errorDiv.className = 'mt-4 text-center bg-red-500/20 border border-red-300 rounded-lg p-4';
        errorDiv.innerHTML = `<i class="fas fa-exclamation-triangle mr-2"></i>전송 실패: ${message}`;
        document.getElementById('emailSuccess').parentNode.appendChild(errorDiv);
        document.getElementById('sendEmailBtn').disabled = false;
    }
}

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', () => {
    new MoneyPatternEmailService(); // EmailJS 서비스 초기화
});