// 무의식 머니패턴 진단 - 이메일 수집 페이지 JavaScript

// EmailJS 설정 및 이메일 전송 기능
class UltraBeliefEmailCollector {
    constructor() {
        // EmailJS 초기화
        this.publicKey = 'R_oWqjQhyn1mSaaKU';
        this.serviceId = 'service_dki5pkx';
        this.adminTemplateId = 'template_hdsco7h';
        this.customerTemplateId = 'template_dln2vl3';
        
        this.initEmailJS();
        this.setupEmailForm();
        this.updateCompletionTime();
    }

    initEmailJS() {
        emailjs.init(this.publicKey);
        console.log('EmailJS 초기화됨 - 무의식 머니패턴 이메일 수집');
    }

    setupEmailForm() {
        const form = document.getElementById('emailForm');
        if (form) {
            form.addEventListener('submit', (e) => this.handleEmailSubmit(e));
        }
    }

    updateCompletionTime() {
        // 진단 시작 시간이 있다면 계산해서 표시
        const startTime = localStorage.getItem('diagnosisStartTime');
        if (startTime) {
            const endTime = Date.now();
            const duration = Math.round((endTime - parseInt(startTime)) / 1000 / 60 * 10) / 10; // 분 단위, 소수점 1자리
            document.getElementById('completion-time').textContent = `${duration}분`;
        }
    }

    async handleEmailSubmit(e) {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const userData = {
            user_name: formData.get('user_name'),
            user_email: formData.get('user_email'),
            user_phone: formData.get('user_phone') || '미제공',
            consultation_request: formData.get('consultation_request') ? '무의식 머니패턴 전문가 상담 희망' : '상담 불필요'
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
        
        try {
            this.showLoadingStatus();
            
            // 1. 관리자에게 이메일 전송
            await this.sendAdminEmail(userData, results);
            
            // 2. 고객에게 이메일 전송
            await this.sendCustomerEmail(userData, results);
            
            this.showSuccessStatus();
            
            // 결과 페이지 링크 업데이트
            this.updateResultsLink(results);
            
        } catch (error) {
            console.error('이메일 전송 실패:', error);
            this.showErrorStatus(error.message);
        }
    }

    getStoredResults() {
        // 머니패턴 진단 결과 확인
        const moneyPatternResults = this.getFromStorage('patternResults');
        const moneyPatternScores = this.getFromStorage('patternScores');
        
        if (moneyPatternResults && moneyPatternScores) {
            return {
                type: 'money-pattern',
                results: {
                    primaryPattern: moneyPatternResults.주기질?.name || '팔랑귀형',
                    secondaryPattern: moneyPatternResults.부기질?.name || '질러형',
                    scores: moneyPatternScores || {}
                }
            };
        }
        
        // 무의식 신념 진단 결과 확인
        const beliefResults = localStorage.getItem('ultraBeliefResults');
        if (beliefResults) {
            return {
                type: 'unconscious-belief',
                results: JSON.parse(beliefResults).results
            };
        }
        
        return null;
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
        const beliefNames = {
            'money-pessimist': '머니 비관주의자 - 돈에 대한 부정적 신념',
            'money-optimist': '머니 낙관주의자 - 돈에 대한 긍정적 신념',
            'money-conflicted': '머니 갈등형 - 돈에 대한 상반된 신념',
            'money-neutral': '머니 중립형 - 돈에 대한 실용적 신념',
            'money-balanced': '머니 균형형 - 돈에 대한 건강한 신념'
        };

        const beliefType = results?.results?.beliefType || 'money-neutral';
        const totalScore = results?.results?.totalScore || 0;
        const averageScore = results?.results?.averageScore || 0;

        const templateParams = {
            user_name: userData.user_name,
            user_email: userData.user_email,
            user_phone: userData.user_phone,
            consultation_request: userData.consultation_request,
            diagnosis_type: '무의식 머니패턴 심리진단지 (5문항)',
            primary_pattern: beliefNames[beliefType] || '데이터 없음',
            secondary_pattern: `점수: ${totalScore}/25 (평균 ${averageScore.toFixed(1)})`,
            diagnosis_time: new Date().toLocaleString('ko-KR'),
            admin_email: 'habin0781@naver.com'
        };

        console.log('관리자 이메일 전송 (무의식 머니패턴):', templateParams);
        return emailjs.send(this.serviceId, this.adminTemplateId, templateParams);
    }

    async sendCustomerEmail(userData, results) {
        const beliefData = {
            'money-pessimist': { 
                name: '머니 비관주의자', 
                desc: '돈에 대해 부정적이고 두려운 감정을 가진 무의식 패턴. 건전한 머니 마인드셋 개발과 긍정적 부의 인식 전환이 필요합니다.' 
            },
            'money-optimist': { 
                name: '머니 낙관주의자', 
                desc: '돈에 대해 긍정적이고 자신감 있는 무의식 패턴. 리스크 관리 능력 향상과 균형잡힌 투자 전략 수립이 도움됩니다.' 
            },
            'money-conflicted': { 
                name: '머니 갈등형', 
                desc: '돈에 대해 상반된 감정을 동시에 가진 복합적 무의식 패턴. 내적 갈등 해소와 일관된 경제 철학 정립이 중요합니다.' 
            },
            'money-neutral': { 
                name: '머니 중립형', 
                desc: '돈에 대해 실용적이고 현실적인 관점을 가진 안정적 무의식 패턴. 적극적 투자 마인드와 경제적 목표 설정이 성장에 도움됩니다.' 
            },
            'money-balanced': { 
                name: '머니 균형형', 
                desc: '돈에 대해 건강하고 균형잡힌 관점을 가진 이상적 무의식 패턴. 현재의 좋은 상태를 유지하면서 더 적극적인 기회 탐색이 권장됩니다.' 
            }
        };

        const beliefType = results?.results?.beliefType || 'money-neutral';
        const beliefInfo = beliefData[beliefType];
        const totalScore = results?.results?.totalScore || 0;
        const averageScore = results?.results?.averageScore || 0;
        const strength = results?.results?.strength || '보통';

        const templateParams = {
            user_name: userData.user_name,
            user_email: userData.user_email,
            primary_pattern: beliefInfo.name,
            result_summary: beliefInfo.desc,
            detailed_analysis: `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🧠 당신의 무의식 감정이 부를 결정한다
   무의식 머니패턴 심리진단 결과
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 진단 결과 요약
• 무의식 머니패턴: ${beliefInfo.name}
• 신념 점수: ${totalScore}/25점 (평균 ${averageScore.toFixed(1)})
• 패턴 강도: ${strength}
• 진단 완료일: ${new Date().toLocaleDateString('ko-KR')}

💡 패턴 분석
${beliefInfo.desc}

🎯 개선 방향
당신의 무의식 속 돈에 대한 감정과 믿음을 이해하고, 
더 건강하고 균형잡힌 머니 마인드셋을 개발하여
경제적 성공과 심리적 안정을 동시에 추구하실 수 있습니다.

📞 전문가 상담 문의: 02)848-7000
📧 추가 문의: habin0781@naver.com

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            `,
            contact_email: 'habin0781@naver.com'
        };

        console.log('고객 이메일 전송 (무의식 머니패턴):', templateParams);
        return emailjs.send(this.serviceId, this.customerTemplateId, templateParams);
    }
    
    // 진단 타입에 따른 결과 페이지 링크 업데이트
    updateResultsLink(results) {
        const resultButton = document.querySelector('button[onclick="goToResults()"]');
        if (resultButton && results) {
            if (results.type === 'money-pattern') {
                resultButton.onclick = () => window.location.href = 'results.html';
            } else {
                resultButton.onclick = () => window.location.href = 'ultra-belief-results.html';
            }
        }
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
        alert(`이메일 전송 실패: ${message}\n\n다시 시도하시거나 나중에 결과 페이지에서 이메일을 받으실 수 있습니다.`);
        document.getElementById('sendEmailBtn').disabled = false;
        
        // 에러 발생시 결과 페이지로 이동 옵션 제공
        if (confirm('결과 페이지로 바로 이동하시겠습니까?')) {
            goToResults();
        }
    }
}

// 결과 페이지로 이동 (진단 타입 자동 판별)
function goToResults() {
    // 머니패턴 진단 결과 확인
    const moneyPatternResults = localStorage.getItem('moneypattern_patternResults');
    const moneyPatternScores = localStorage.getItem('moneypattern_patternScores');
    
    if (moneyPatternResults && moneyPatternScores) {
        console.log('머니패턴 진단 결과로 이동');
        window.location.href = 'results.html';
    } else {
        console.log('무의식 신념 진단 결과로 이동');
        window.location.href = 'ultra-belief-results.html';
    }
}

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', () => {
    // 진단 시작 시간 기록 (나중에 소요 시간 계산용)
    if (!localStorage.getItem('diagnosisStartTime')) {
        localStorage.setItem('diagnosisStartTime', Date.now().toString());
    }
    
    new UltraBeliefEmailCollector(); // 이메일 서비스 초기화
});