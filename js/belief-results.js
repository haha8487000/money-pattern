// 무의식 신념 결과 페이지 JavaScript

// 신념 유형별 정의
const beliefTypes = {
    'money-pessimist': {
        name: '머니 비관주의자',
        emoji: '😰',
        description: '돈에 대해 부정적이고 두려운 감정을 가지고 있습니다. 돈이 가져올 수 있는 문제점들을 과도하게 우려하며, 부에 대한 죄책감을 느낄 수 있습니다.',
        color: '#ef4444',
        gradient: 'from-red-500 to-pink-500'
    },
    'money-optimist': {
        name: '머니 낙관주의자', 
        emoji: '🤑',
        description: '돈에 대해 긍정적이고 자신감 있는 태도를 가지고 있습니다. 돈이 가져다줄 수 있는 기회와 가능성을 믿으며, 부를 추구하는 것에 거리낌이 없습니다.',
        color: '#10b981',
        gradient: 'from-green-500 to-emerald-500'
    },
    'money-conflicted': {
        name: '머니 갈등형',
        emoji: '😕',
        description: '돈에 대해 상반된 감정을 동시에 가지고 있습니다. 돈의 필요성을 인정하면서도 그에 대한 부정적 감정도 함께 존재하여 내적 갈등을 경험합니다.',
        color: '#f59e0b',
        gradient: 'from-yellow-500 to-orange-500'
    },
    'money-neutral': {
        name: '머니 중립형',
        emoji: '😐',
        description: '돈에 대해 특별한 감정이나 신념이 강하지 않습니다. 현실적이고 실용적인 관점에서 돈을 도구로 인식하는 경향이 있습니다.',
        color: '#6b7280',
        gradient: 'from-gray-500 to-slate-500'
    },
    'money-balanced': {
        name: '머니 균형형',
        emoji: '😊',
        description: '돈에 대해 건강하고 균형잡힌 관점을 가지고 있습니다. 돈의 긍정적 측면과 주의해야 할 점들을 모두 인식하고 있어 현명한 재정 관리가 가능합니다.',
        color: '#3b82f6',
        gradient: 'from-blue-500 to-indigo-500'
    }
};

// 신념별 개선방향
const beliefImprovements = {
    'money-pessimist': {
        title: '건강한 머니 마인드셋 개발하기',
        suggestions: [
            '💭 **긍정적 부의 롤모델 찾기**: 존경할 만한 부자들의 이야기를 읽고 돈의 긍정적 활용 사례 학습',
            '📚 **재정 교육 받기**: 올바른 금융 지식을 통해 돈에 대한 두려움 해소',
            '🧘 **마음챙김 연습**: 돈에 대한 부정적 감정이 생길 때 객관적으로 바라보는 연습',
            '👥 **건전한 투자 커뮤니티 참여**: 긍정적인 머니 마인드셋을 가진 사람들과의 교류'
        ],
        action: '먼저 작은 금액부터 시작해서 돈을 긍정적으로 활용하는 경험을 쌓아보세요. 기부나 자기계발에 투자하는 것부터 시작하는 것도 좋습니다.'
    },
    'money-optimist': {
        title: '현실적 리스크 관리 능력 기르기',
        suggestions: [
            '⚖️ **균형잡힌 시각 개발**: 돈의 장점뿐 아니라 과도한 욕심이 가져올 수 있는 위험도 인식',
            '📊 **체계적 리스크 관리**: 투자 시 손실 가능성도 충분히 고려하고 대비책 마련',
            '🎯 **단계별 목표 설정**: 무리한 부의 추구보다는 실현 가능한 목표를 단계별로 설정',
            '🤝 **겸손한 태도 유지**: 성공에 취하지 않고 지속적인 학습과 성장 추구'
        ],
        action: '높은 자신감을 바탕으로 체계적인 재정 계획을 세우되, 과도한 위험은 피하는 균형잡힌 접근을 해보세요.'
    },
    'money-conflicted': {
        title: '내적 갈등 해결하고 일관성 있는 신념 개발',
        suggestions: [
            '🎭 **가치관 정리**: 자신이 진정으로 추구하는 가치가 무엇인지 명확히 하기',
            '📝 **신념 체계 재정립**: 돈에 대한 상반된 믿음들을 정리하고 일관된 철학 세우기',
            '💡 **의사결정 기준 마련**: 갈등 상황에서 판단할 수 있는 명확한 기준점 설정',
            '🧠 **전문가 상담**: 필요시 재정 상담사나 코치의 도움으로 객관적 관점 얻기'
        ],
        action: '돈에 대한 자신의 진정한 생각과 감정을 정리해보고, 일관성 있는 재정 철학을 만들어 보세요.'
    },
    'money-neutral': {
        title: '적극적 재정 관리 의식 개발',
        suggestions: [
            '🎯 **구체적 목표 설정**: 막연함을 벗어나 명확한 재정 목표와 계획 수립',
            '📈 **적극적 학습**: 수동적 태도를 벗어나 능동적으로 투자와 재정 관리 학습',
            '💪 **동기부여 찾기**: 돈을 모으고 불리는 구체적인 이유와 동기 발견',
            '🔥 **열정 개발**: 재정 관리에 대한 관심과 열정을 키워나가기'
        ],
        action: '현재의 실용적 관점을 유지하면서도 더 적극적이고 전략적인 재정 관리에 도전해보세요.'
    },
    'money-balanced': {
        title: '현재의 건강한 마인드셋 유지 및 발전',
        suggestions: [
            '🌱 **지속적 성장**: 현재의 균형잡힌 관점을 바탕으로 더 높은 수준으로 발전',
            '🎓 **리더십 개발**: 다른 사람들에게 건강한 머니 마인드셋을 전파하는 역할',
            '🔍 **세밀한 전략 개발**: 균형감을 바탕으로 더욱 정교한 투자 전략 수립',
            '🤝 **멘토링**: 자신의 경험을 바탕으로 다른 사람들을 도와주는 역할 수행'
        ],
        action: '현재의 건강한 마인드셋을 바탕으로 더욱 체계적이고 전문적인 재정 관리에 도전해보세요.'
    }
};

// 분석 결과 데이터
let beliefAnalysis = null;

// 결과 페이지 초기화
function initializeBeliefResults() {
    console.log('무의식 신념 결과 페이지 초기화 중...');
    
    // 저장된 신념 분석 결과 확인
    const analysis = MoneyPattern.Storage.get('beliefAnalysis');
    const isCompleted = MoneyPattern.Storage.get('beliefCompleted');
    
    if (!analysis || !isCompleted) {
        // 진단 결과가 없으면 진단 페이지로 리다이렉트
        alert('신념 진단 결과가 없습니다. 먼저 진단을 완료해 주세요.');
        window.location.href = 'belief-diagnosis.html';
        return;
    }
    
    console.log('저장된 신념 분석 결과:', analysis);
    
    // 분석 결과 설정
    beliefAnalysis = analysis;
    
    // 결과 표시
    displayBeliefResults(beliefAnalysis);
    
    // 차트 초기화
    setTimeout(() => {
        initializeBeliefCharts(beliefAnalysis);
    }, 500);
}

// 결과 표시
function displayBeliefResults(analysis) {
    console.log('신념 결과 표시 중...', analysis);
    
    const beliefType = beliefTypes[analysis.type];
    
    if (!beliefType) {
        console.error('신념 유형을 찾을 수 없습니다:', analysis.type);
        return;
    }
    
    // 메인 결과 카드 업데이트
    document.getElementById('belief-icon').textContent = beliefType.emoji;
    document.getElementById('belief-type').textContent = beliefType.name;
    document.getElementById('belief-description').textContent = beliefType.description;
    document.getElementById('negative-score').textContent = `${analysis.negativeBeliefs}/5.0`;
    document.getElementById('positive-score').textContent = `${analysis.positiveBeliefs}/5.0`;
    
    // 배경색 변경
    const headerCard = document.getElementById('main-belief-card');
    if (headerCard) {
        headerCard.className = `bg-gradient-to-r ${beliefType.gradient} text-white rounded-3xl p-8 md:p-12 mb-12 shadow-2xl`;
    }
    
    // 세부 분석 표시
    updateDetailedBeliefAnalysis(analysis);
    
    // 개선 방향 표시
    updateImprovementSuggestions(analysis.type);
}

// 세부 분석 업데이트
function updateDetailedBeliefAnalysis(analysis) {
    const detailsContainer = document.getElementById('belief-details');
    if (!detailsContainer) return;
    
    const details = [
        {
            title: '돈의 위험성 인식',
            score: analysis.detailed.moneyDanger,
            description: analysis.detailed.moneyDanger >= 4 ? '돈을 매우 위험한 것으로 인식' : 
                        analysis.detailed.moneyDanger <= 2 ? '돈의 위험성을 크게 우려하지 않음' : 
                        '돈의 위험성에 대해 보통 수준의 인식',
            icon: 'fas fa-exclamation-triangle',
            color: analysis.detailed.moneyDanger >= 4 ? 'text-red-600' : 
                   analysis.detailed.moneyDanger <= 2 ? 'text-green-600' : 'text-yellow-600'
        },
        {
            title: '부자에 대한 편견',
            score: analysis.detailed.richPrejudice,
            description: analysis.detailed.richPrejudice >= 4 ? '부자에 대한 부정적 편견이 강함' : 
                        analysis.detailed.richPrejudice <= 2 ? '부자에 대해 비교적 중립적 시각' : 
                        '부자에 대한 보통 수준의 인식',
            icon: 'fas fa-user-tie',
            color: analysis.detailed.richPrejudice >= 4 ? 'text-red-600' : 
                   analysis.detailed.richPrejudice <= 2 ? 'text-green-600' : 'text-yellow-600'
        },
        {
            title: '성공 가능성 믿음',
            score: analysis.detailed.successDoubt,
            description: analysis.detailed.successDoubt >= 4 ? '노력으로 성공할 수 있다는 믿음이 약함' : 
                        analysis.detailed.successDoubt <= 2 ? '노력으로 성공할 수 있다고 믿음' : 
                        '성공 가능성에 대해 보통 수준의 믿음',
            icon: 'fas fa-mountain',
            color: analysis.detailed.successDoubt >= 4 ? 'text-red-600' : 
                   analysis.detailed.successDoubt <= 2 ? 'text-green-600' : 'text-yellow-600'
        },
        {
            title: '돈의 해결책 믿음',
            score: analysis.detailed.moneySolution,
            description: analysis.detailed.moneySolution >= 4 ? '돈이 모든 문제의 해결책이라고 믿음' : 
                        analysis.detailed.moneySolution <= 2 ? '돈만으로 모든 게 해결되지 않는다고 생각' : 
                        '돈의 문제 해결 능력에 대해 보통 수준의 믿음',
            icon: 'fas fa-magic',
            color: analysis.detailed.moneySolution >= 4 ? 'text-yellow-600' : 
                   analysis.detailed.moneySolution <= 2 ? 'text-blue-600' : 'text-gray-600'
        },
        {
            title: '부의 자격감',
            score: analysis.detailed.worthiness,
            description: analysis.detailed.worthiness >= 4 ? '자신이 부자가 될 자격이 충분하다고 믿음' : 
                        analysis.detailed.worthiness <= 2 ? '부자가 될 자격에 대한 의구심이 있음' : 
                        '부의 자격감이 보통 수준',
            icon: 'fas fa-crown',
            color: analysis.detailed.worthiness >= 4 ? 'text-green-600' : 
                   analysis.detailed.worthiness <= 2 ? 'text-red-600' : 'text-yellow-600'
        }
    ];
    
    detailsContainer.innerHTML = details.map(detail => `
        <div class="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <div class="flex items-center mb-4">
                <i class="${detail.icon} text-2xl ${detail.color} mr-3"></i>
                <h5 class="font-bold text-gray-900">${detail.title}</h5>
            </div>
            <div class="mb-3">
                <div class="flex items-center justify-between mb-1">
                    <span class="text-sm text-gray-600">점수</span>
                    <span class="text-lg font-bold ${detail.color}">${detail.score}/5</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                    <div class="h-2 rounded-full ${detail.color.replace('text-', 'bg-')}" style="width: ${(detail.score / 5) * 100}%"></div>
                </div>
            </div>
            <p class="text-sm text-gray-700">${detail.description}</p>
        </div>
    `).join('');
}

// 개선 방향 업데이트
function updateImprovementSuggestions(beliefType) {
    const improvement = beliefImprovements[beliefType];
    if (!improvement) return;
    
    const improvementContent = document.getElementById('improvement-content');
    if (!improvementContent) return;
    
    improvementContent.innerHTML = `
        <div>
            <h5 class="text-xl font-bold mb-6">${improvement.title}</h5>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                ${improvement.suggestions.map(suggestion => `
                    <div class="bg-white/20 rounded-lg p-4 border border-white/20">
                        <p class="text-sm opacity-90">${suggestion}</p>
                    </div>
                `).join('')}
            </div>
            <div class="bg-white/10 rounded-xl p-6 border border-white/20">
                <h6 class="text-lg font-semibold mb-3">🎯 실행 제안</h6>
                <p class="opacity-90">${improvement.action}</p>
            </div>
        </div>
    `;
}

// 차트 초기화
function initializeBeliefCharts(analysis) {
    try {
        createBeliefRadarChart(analysis);
        createBalanceChart(analysis);
    } catch (error) {
        console.error('차트 초기화 실패:', error);
    }
}

// 신념 레이더 차트
function createBeliefRadarChart(analysis) {
    const ctx = document.getElementById('beliefChart');
    if (!ctx) return;
    
    const ctxContext = ctx.getContext('2d');
    
    const data = {
        labels: ['돈의 위험성', '부자 편견', '성공 의구심', '돈의 해결책', '부의 자격감'],
        datasets: [{
            label: '신념 점수',
            data: [
                analysis.detailed.moneyDanger,
                analysis.detailed.richPrejudice, 
                analysis.detailed.successDoubt,
                analysis.detailed.moneySolution,
                analysis.detailed.worthiness
            ],
            backgroundColor: 'rgba(139, 92, 246, 0.2)',
            borderColor: 'rgba(139, 92, 246, 1)',
            borderWidth: 2,
            pointBackgroundColor: 'rgba(139, 92, 246, 1)'
        }]
    };
    
    new Chart(ctxContext, {
        type: 'radar',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    beginAtZero: true,
                    min: 0,
                    max: 5,
                    ticks: {
                        stepSize: 1
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });
}

// 균형 차트
function createBalanceChart(analysis) {
    const ctx = document.getElementById('balanceChart');
    if (!ctx) return;
    
    const ctxContext = ctx.getContext('2d');
    
    new Chart(ctxContext, {
        type: 'doughnut',
        data: {
            labels: ['부정적 신념', '긍정적 신념'],
            datasets: [{
                data: [analysis.negativeBeliefs, analysis.positiveBeliefs],
                backgroundColor: ['#ef4444', '#10b981'],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom'
                }
            }
        }
    });
}

// 액션 함수들
function shareBeliefResults() {
    const shareText = `나의 무의식 머니 신념: ${beliefTypes[beliefAnalysis.type].name}\n${window.location.href}`;
    
    if (navigator.share) {
        navigator.share({
            title: '무의식 머니 신념 진단 결과',
            text: shareText,
            url: window.location.href
        });
    } else {
        navigator.clipboard.writeText(shareText).then(() => {
            MoneyPattern.showSuccessMessage('링크가 클립보드에 복사되었습니다!');
        }).catch(() => {
            alert('결과 공유 링크를 복사할 수 없습니다.');
        });
    }
}

function retakeBelief() {
    if (confirm('새로운 신념 진단을 시작하시겠습니까? 현재 결과가 초기화됩니다.')) {
        MoneyPattern.Storage.remove('beliefAnswers');
        MoneyPattern.Storage.remove('beliefAnalysis');
        MoneyPattern.Storage.remove('beliefCompleted');
        window.location.href = 'belief-diagnosis.html';
    }
}

function goToMainDiagnosis() {
    window.location.href = 'diagnosis.html';
}

// EmailJS 설정 및 이메일 전송 기능
class BeliefEmailService {
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
        console.log('EmailJS 초기화됨 - 신념진단');
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
            consultation_request: formData.get('consultation_request') ? '무의식 신념 개선 상담 희망' : '상담 불필요'
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
            
            // 폼 비활성화
            document.getElementById('emailForm').style.display = 'none';
            
        } catch (error) {
            console.error('이메일 전송 실패:', error);
            this.showErrorStatus(error.message);
        }
    }

    getStoredResults() {
        // 신념진단 결과 데이터 가져오기
        const beliefAnswers = MoneyPattern.Storage.get('beliefAnswers');
        const beliefAnalysisData = MoneyPattern.Storage.get('beliefAnalysis');
        
        return {
            beliefAnswers,
            beliefAnalysis: beliefAnalysisData,
            beliefType: beliefAnalysis?.type
        };
    }

    async sendAdminEmail(userData, results) {
        const beliefNames = {
            'money-pessimist': '머니 비관주의자 - 돈에 대한 부정적 신념',
            'money-optimist': '머니 낙관주의자 - 돈에 대한 긍정적 신념',
            'money-conflicted': '머니 갈등형 - 돈에 대한 상반된 신념',
            'money-neutral': '머니 중립형 - 돈에 대한 실용적 신념',
            'money-balanced': '머니 균형형 - 돈에 대한 건강한 신념'
        };

        const templateParams = {
            user_name: userData.user_name,
            user_email: userData.user_email,
            user_phone: userData.user_phone,
            consultation_request: userData.consultation_request,
            diagnosis_type: '무의식 신념 진단',
            primary_pattern: results.beliefType ? beliefNames[results.beliefType] : '데이터 없음',
            secondary_pattern: '신념진단 (단일 결과)',
            diagnosis_time: new Date().toLocaleString('ko-KR'),
            admin_email: 'habin0781@naver.com'
        };

        console.log('관리자 이메일 전송 (신념진단):', templateParams);
        return emailjs.send(this.serviceId, this.adminTemplateId, templateParams);
    }

    async sendCustomerEmail(userData, results) {
        const beliefData = {
            'money-pessimist': { name: '머니 비관주의자', desc: '돈에 대해 부정적이고 두려운 감정을 가진 신념 유형. 건전한 머니 마인드셋 개발이 필요합니다.' },
            'money-optimist': { name: '머니 낙관주의자', desc: '돈에 대해 긍정적이고 자신감 있는 태도를 가진 신념 유형. 균형잡힌 시각 개발이 도움됩니다.' },
            'money-conflicted': { name: '머니 갈등형', desc: '돈에 대해 상반된 감정을 동시에 가진 신념 유형. 내적 갈등 해소가 중요합니다.' },
            'money-neutral': { name: '머니 중립형', desc: '돈에 대해 실용적이고 현실적인 관점을 가진 신념 유형. 적극적 투자 마인드 개발이 도움됩니다.' },
            'money-balanced': { name: '머니 균형형', desc: '돈에 대해 건강하고 균형잡힌 관점을 가진 이상적 신념 유형. 현재 상태 유지가 중요합니다.' }
        };

        const beliefType = results.beliefType || 'money-neutral';
        const beliefInfo = beliefData[beliefType];

        const templateParams = {
            user_name: userData.user_name,
            user_email: userData.user_email,
            primary_pattern: beliefInfo.name,
            result_summary: beliefInfo.desc,
            detailed_analysis: `당신의 무의식 머니 신념은 ${beliefInfo.name} 유형입니다. ${beliefInfo.desc} 이러한 신념 패턴을 바탕으로 건강한 머니 마인드셋 개발을 위한 맞춤 개선 방향을 제시해드립니다.`,
            contact_email: 'habin0781@naver.com'
        };

        console.log('고객 이메일 전송 (신념진단):', templateParams);
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

// 페이지 초기화
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        initializeBeliefResults();
        new BeliefEmailService(); // EmailJS 서비스 초기화
    });
} else {
    initializeBeliefResults();
    new BeliefEmailService(); // EmailJS 서비스 초기화
}