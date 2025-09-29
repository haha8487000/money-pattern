// 15문항 오행 머니패턴 진단 결과 처리
class SimpleResults {
    constructor() {
        this.results = this.loadResults();
        this.elementData = this.initializeElementData();
        this.init();
    }

    initializeElementData() {
        return {
            wood: {
                name: '목(木)',
                icon: '🌱',
                color: 'green',
                title: '성장과 확장을 추구하는 역동적인 투자자',
                description: '새로운 기회를 빠르게 포착하고 적극적으로 도전하는 성향',
                strengths: [
                    '새로운 기회에 대한 뛰어난 직감',
                    '빠른 결정력과 실행력', 
                    '성장 지향적 투자 마인드',
                    '변화에 대한 적응력'
                ],
                weaknesses: [
                    '과도한 위험 감수 성향',
                    '충동적 투자 결정의 위험',
                    '장기적 관점 부족',
                    '인내심 부족으로 인한 조기 매도'
                ],
                investment: {
                    style: '성장주 중심 공격적 투자',
                    portfolio: '고성장주 60%, 안정주 30%, 대체투자 10%',
                    timing: '봄철 적극 투자, 새 트렌드 초기 진입'
                }
            },
            fire: {
                name: '화(火)',
                icon: '🔥',
                color: 'red',
                title: '열정과 소통을 중시하는 감성적 투자자',
                description: '직감과 감정을 바탕으로 한 열정적인 투자 스타일',
                strengths: [
                    '뛰어난 시장 감각과 트렌드 포착',
                    '네트워킹을 통한 정보 수집',
                    '열정적인 투자 추진력',
                    '창의적 투자 아이디어 발굴'
                ],
                weaknesses: [
                    '감정적 투자 결정',
                    '과도한 자신감으로 인한 위험',
                    '시장 과열 시기 과투자',
                    '단기 성과에 집착'
                ],
                investment: {
                    style: '테마주 및 화제성 종목 투자',
                    portfolio: '성장주 50%, 테마주 30%, 안정주 20%',
                    timing: '여름철 활발한 투자, SNS 트렌드 활용'
                }
            },
            earth: {
                name: '토(土)',
                icon: '🏔️',
                color: 'yellow',
                title: '안정과 신뢰를 최우선으로 하는 보수적 투자자',
                description: '장기적이고 안정적인 자산 증식을 추구하는 신중한 성향',
                strengths: [
                    '뛰어난 리스크 관리 능력',
                    '꾸준한 저축 및 투자 습관',
                    '장기적 관점의 투자 계획',
                    '신뢰도 높은 투자처 선별'
                ],
                weaknesses: [
                    '과도한 보수성으로 기회 상실',
                    '인플레이션 대응 부족',
                    '새로운 투자 기법 적응 지연',
                    '수익률 한계'
                ],
                investment: {
                    style: '안전자산 중심 장기 투자',
                    portfolio: '채권 40%, 우량주 35%, 예금 25%',
                    timing: '사계절 꾸준한 적립식 투자'
                }
            },
            metal: {
                name: '금(金)',
                icon: '💰',
                color: 'gray',
                title: '효율과 완성을 추구하는 체계적 투자자',
                description: '데이터와 분석에 기반한 논리적이고 체계적인 투자 접근',
                strengths: [
                    '철저한 분석과 계획 수립',
                    '효율적인 포트폴리오 관리',
                    '감정 배제한 객관적 판단',
                    '체계적인 투자 시스템 구축'
                ],
                weaknesses: [
                    '과도한 분석으로 기회 놓침',
                    '예상 밖 상황 대응 어려움',
                    '완벽주의로 인한 결정 지연',
                    '직감적 투자 기회 간과'
                ],
                investment: {
                    style: '데이터 기반 분산 투자',
                    portfolio: '인덱스펀드 40%, 우량주 35%, ETF 25%',
                    timing: '가을철 체계적 리밸런싱'
                }
            },
            water: {
                name: '수(水)',
                icon: '💧',
                color: 'blue',
                title: '지혜와 적응력을 발휘하는 유연한 투자자',
                description: '변화하는 시장에 유연하게 적응하는 지혜로운 투자 스타일',
                strengths: [
                    '뛰어난 시장 적응력',
                    '위기를 기회로 전환하는 능력',
                    '장기적 안목과 인내심',
                    '다양한 투자 전략 활용'
                ],
                weaknesses: [
                    '우유부단한 결정',
                    '과도한 신중함으로 기회 상실',
                    '타인 의견에 쉽게 흔들림',
                    '일관성 있는 전략 부족'
                ],
                investment: {
                    style: '상황 적응형 유연한 투자',
                    portfolio: '시장 상황에 따라 유동적 조정',
                    timing: '겨울철 가치주 위주, 시장 사이클 활용'
                }
            }
        };
    }

    loadResults() {
        const stored = localStorage.getItem('simpleTestResults');
        if (!stored) {
            // 테스트 데이터 (실제로는 진단을 완료해야 함)
            return {
                results: {
                    primaryElement: 'wood',
                    secondaryElement: 'fire',
                    scores: { wood: 25, fire: 20, earth: 15, metal: 12, water: 10 }
                }
            };
        }
        return JSON.parse(stored);
    }

    init() {
        this.displayResults();
        this.createRadarChart();
        this.createRelationshipDiagram();
    }

    displayResults() {
        const { primaryElement, secondaryElement, scores } = this.results.results;
        const primaryData = this.elementData[primaryElement];
        const secondaryData = this.elementData[secondaryElement];

        // 메인 결과 표시
        document.getElementById('primary-icon').textContent = primaryData.icon;
        document.getElementById('primary-element').textContent = primaryData.name;
        document.getElementById('primary-element').className = `text-${primaryData.color}-600`;
        document.getElementById('primary-description').textContent = primaryData.title;

        // 주기질/부기질 표시
        document.getElementById('primary-name').textContent = primaryData.name;
        document.getElementById('secondary-name').textContent = secondaryData.name;

        // 주기질 분석
        document.getElementById('primary-icon-small').textContent = primaryData.icon;
        this.updateAnalysisSection('primary-analysis', primaryData, 'primary');

        // 부기질 분석  
        document.getElementById('secondary-icon-small').textContent = secondaryData.icon;
        this.updateAnalysisSection('secondary-analysis', secondaryData, 'secondary');

        // 상생 관계 설명
        this.updateElementRelationship(primaryElement, secondaryElement);
    }

    updateAnalysisSection(sectionId, elementData, type) {
        const section = document.getElementById(sectionId);
        const colorClass = elementData.color;
        
        if (type === 'primary') {
            section.innerHTML = `
                <div class="bg-${colorClass}-50 p-4 rounded-lg">
                    <h4 class="font-semibold text-${colorClass}-800 mb-2">💪 강점</h4>
                    <ul class="text-${colorClass}-700 text-sm space-y-1">
                        ${elementData.strengths.map(strength => `<li>• ${strength}</li>`).join('')}
                    </ul>
                </div>
                <div class="bg-red-50 p-4 rounded-lg">
                    <h4 class="font-semibold text-red-800 mb-2">⚠️ 주의점</h4>
                    <ul class="text-red-700 text-sm space-y-1">
                        ${elementData.weaknesses.map(weakness => `<li>• ${weakness}</li>`).join('')}
                    </ul>
                </div>
            `;
        } else {
            section.innerHTML = `
                <div class="bg-orange-50 p-4 rounded-lg">
                    <h4 class="font-semibold text-orange-800 mb-2">🎯 보완 역할</h4>
                    <ul class="text-orange-700 text-sm space-y-1">
                        ${elementData.strengths.slice(0, 3).map(strength => `<li>• ${strength}</li>`).join('')}
                    </ul>
                </div>
                <div class="bg-purple-50 p-4 rounded-lg">
                    <h4 class="font-semibold text-purple-800 mb-2">🔄 상생 효과</h4>
                    <p class="text-purple-700 text-sm">
                        ${this.getElementRelationshipText(this.results.results.primaryElement, this.results.results.secondaryElement)}
                    </p>
                </div>
            `;
        }
    }

    getElementRelationshipText(primary, secondary) {
        const relationships = {
            'wood-fire': '목(木)의 성장 에너지가 화(火)의 열정을 더욱 활성화시켜, 역동적이고 창의적인 투자 전략을 만들어냅니다.',
            'wood-earth': '목(木)의 확장 욕구와 토(土)의 안정성이 균형을 이루어, 지속 가능한 성장 전략을 구축합니다.',
            'wood-metal': '목(木)의 직감과 금(金)의 체계성이 결합되어, 논리적이면서도 기민한 투자 판단을 가능하게 합니다.',
            'wood-water': '목(木)의 성장 욕구와 수(水)의 지혜가 만나, 장기적 관점의 성장 투자 전략을 수립합니다.',
            'fire-wood': '화(火)의 열정이 목(木)의 성장 동력을 더욱 강화시켜, 적극적인 투자 추진력을 발휘합니다.',
            'fire-earth': '화(火)의 열정과 토(土)의 신뢰성이 조화를 이루어, 열정적이면서도 안정적인 투자 접근을 만듭니다.',
            'fire-metal': '화(火)의 직감과 금(金)의 분석력이 균형을 이루어, 감각과 논리가 결합된 투자 스타일을 구현합니다.',
            'fire-water': '화(火)의 활동성과 수(水)의 적응력이 결합되어, 변화하는 시장에 민첩하게 대응하는 능력을 발휘합니다.',
            'earth-wood': '토(土)의 안정성이 목(木)의 성장 욕구를 견고하게 뒷받침하여, 지속 가능한 투자 기반을 마련합니다.',
            'earth-fire': '토(土)의 신뢰성과 화(火)의 열정이 조화를 이루어, 안전하면서도 적극적인 투자 전략을 실현합니다.',
            'earth-metal': '토(土)의 중심성과 금(金)의 완성도가 결합되어, 매우 체계적이고 안정적인 투자 시스템을 구축합니다.',
            'earth-water': '토(土)의 안정성과 수(水)의 지혜가 만나, 위험을 최소화하면서도 꾸준한 수익을 추구하는 전략을 만듭니다.',
            'metal-wood': '금(金)의 체계성이 목(木)의 성장 동력을 효율적으로 관리하여, 계획적인 성장 투자를 실현합니다.',
            'metal-fire': '금(金)의 논리성과 화(火)의 직감이 결합되어, 분석과 감각이 균형잡힌 투자 접근을 가능하게 합니다.',
            'metal-earth': '금(金)의 완벽함과 토(土)의 안전함이 결합되어, 매우 안정적이고 체계적인 투자 전략을 구현합니다.',
            'metal-water': '금(金)의 효율성과 수(水)의 적응력이 조화를 이루어, 시장 변화에 체계적으로 대응하는 능력을 발휘합니다.',
            'water-wood': '수(水)의 지혜가 목(木)의 성장 에너지에 깊이를 더해, 장기적 관점의 지혜로운 투자를 가능하게 합니다.',
            'water-fire': '수(水)의 차분함이 화(火)의 열정을 조절하여, 감정적 투자를 지혜롭게 통제하는 능력을 발휘합니다.',
            'water-earth': '수(水)의 유연성과 토(土)의 안정성이 결합되어, 변화에 적응하면서도 안전한 투자 전략을 수립합니다.',
            'water-metal': '수(水)의 적응력과 금(金)의 체계성이 조화를 이루어, 유연하면서도 체계적인 투자 관리를 실현합니다.'
        };
        
        return relationships[`${primary}-${secondary}`] || '두 원소의 조화로운 균형이 독특한 투자 스타일을 만들어냅니다.';
    }

    createRadarChart() {
        const ctx = document.getElementById('elementRadarChart').getContext('2d');
        const { scores } = this.results.results;
        
        new Chart(ctx, {
            type: 'radar',
            data: {
                labels: ['목(木)', '화(火)', '토(土)', '금(金)', '수(水)'],
                datasets: [{
                    label: '오행 균형도',
                    data: [scores.wood, scores.fire, scores.earth, scores.metal, scores.water],
                    backgroundColor: 'rgba(34, 197, 94, 0.2)',
                    borderColor: 'rgba(34, 197, 94, 0.8)',
                    borderWidth: 2,
                    pointBackgroundColor: 'rgba(34, 197, 94, 1)',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    r: {
                        beginAtZero: true,
                        max: Math.max(...Object.values(scores)) + 5,
                        ticks: {
                            display: false
                        },
                        grid: {
                            color: 'rgba(0, 0, 0, 0.1)'
                        },
                        angleLines: {
                            color: 'rgba(0, 0, 0, 0.1)'
                        }
                    }
                }
            }
        });
    }

    createRelationshipDiagram() {
        const diagram = document.getElementById('relationshipDiagram');
        const { primaryElement, secondaryElement } = this.results.results;
        
        diagram.innerHTML = `
            <div class="relative w-64 h-64">
                <!-- 오행 순환 원 -->
                <div class="absolute inset-0 border-4 border-gray-300 rounded-full"></div>
                
                <!-- 오행 요소들 -->
                <div class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4">
                    <div class="w-12 h-12 rounded-full ${primaryElement === 'fire' || secondaryElement === 'fire' ? 'bg-red-500' : 'bg-gray-300'} flex items-center justify-center text-white font-bold">화</div>
                </div>
                <div class="absolute top-16 right-4">
                    <div class="w-12 h-12 rounded-full ${primaryElement === 'earth' || secondaryElement === 'earth' ? 'bg-yellow-500' : 'bg-gray-300'} flex items-center justify-center text-white font-bold">토</div>
                </div>
                <div class="absolute bottom-16 right-4">
                    <div class="w-12 h-12 rounded-full ${primaryElement === 'metal' || secondaryElement === 'metal' ? 'bg-gray-500' : 'bg-gray-300'} flex items-center justify-center text-white font-bold">금</div>
                </div>
                <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4">
                    <div class="w-12 h-12 rounded-full ${primaryElement === 'water' || secondaryElement === 'water' ? 'bg-blue-500' : 'bg-gray-300'} flex items-center justify-center text-white font-bold">수</div>
                </div>
                <div class="absolute top-16 left-4">
                    <div class="w-12 h-12 rounded-full ${primaryElement === 'wood' || secondaryElement === 'wood' ? 'bg-green-500' : 'bg-gray-300'} flex items-center justify-center text-white font-bold">목</div>
                </div>
                
                <!-- 중앙에 상생 표시 -->
                <div class="absolute inset-0 flex items-center justify-center">
                    <div class="bg-white border-2 border-gray-300 rounded-full w-16 h-16 flex items-center justify-center">
                        <span class="text-xs font-bold text-gray-600">상생</span>
                    </div>
                </div>
            </div>
        `;
    }

    updateElementRelationship(primary, secondary) {
        // 상생상극 관계 정보 업데이트 로직
        const relationText = this.getElementRelationshipText(primary, secondary);
        const relationElement = document.querySelector('#secondary-analysis .bg-purple-50 p');
        if (relationElement) {
            relationElement.textContent = relationText;
        }
    }
}

// 전역 함수들
function downloadResults() {
    alert('PDF 다운로드 기능은 준비 중입니다.');
}

function shareResults() {
    if (navigator.share) {
        navigator.share({
            title: '내 머니패턴 진단 결과',
            text: '오행 머니패턴 진단을 받아보세요!',
            url: window.location.href
        });
    } else {
        // 폴백: 클립보드 복사
        navigator.clipboard.writeText(window.location.href).then(() => {
            alert('결과 링크가 클립보드에 복사되었습니다!');
        });
    }
}

// EmailJS 설정 및 이메일 전송 기능
class EmailService {
    constructor() {
        // EmailJS 초기화 (실제 Public Key 입력)
        this.publicKey = 'R_oWqjQhyn1mSaaKU'; // EmailJS Public Key
        this.serviceId = 'service_dki5pkx'; // Gmail 서비스 ID
        this.adminTemplateId = 'template_hdsco7h'; // 관리자용 템플릿 ID
        this.customerTemplateId = 'template_dln2vl3'; // 고객용 템플릿 ID
        
        this.initEmailJS();
        this.setupEmailForm();
    }

    initEmailJS() {
        // EmailJS 초기화
        emailjs.init(this.publicKey);
        console.log('EmailJS 초기화됨');
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
            consultation_request: formData.get('consultation_request') ? '상담 희망' : '상담 불필요'
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
            
            // 1. 관리자에게 이메일 전송 (우리가 받을 이메일)
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
        const stored = localStorage.getItem('simpleTestResults');
        return stored ? JSON.parse(stored) : null;
    }

    async sendAdminEmail(userData, results) {
        const elementNames = {
            wood: '목(木) - 성장형',
            fire: '화(火) - 열정형', 
            earth: '토(土) - 안정형',
            metal: '금(金) - 완벽형',
            water: '수(水) - 적응형'
        };

        const templateParams = {
            user_name: userData.user_name,
            user_email: userData.user_email,
            user_phone: userData.user_phone,
            consultation_request: userData.consultation_request,
            diagnosis_type: '15문항 오행 머니패턴',
            primary_pattern: results ? elementNames[results.results.primaryElement] : '데이터 없음',
            secondary_pattern: results ? elementNames[results.results.secondaryElement] : '데이터 없음',
            diagnosis_time: new Date().toLocaleString('ko-KR'),
            admin_email: 'habin0781@naver.com'
        };

        // EmailJS를 통한 관리자 이메일 전송
        console.log('관리자 이메일 전송:', templateParams);
        return emailjs.send(this.serviceId, this.adminTemplateId, templateParams);
    }

    async sendCustomerEmail(userData, results) {
        const elementData = {
            wood: { name: '목(木) - 성장형', desc: '새로운 기회를 적극적으로 추구하는 성장 지향적 투자자' },
            fire: { name: '화(火) - 열정형', desc: '직감과 열정으로 투자하는 감성적 투자자' },
            earth: { name: '토(土) - 안정형', desc: '안정성을 최우선으로 하는 보수적 투자자' },
            metal: { name: '금(金) - 완벽형', desc: '체계적이고 완벽한 계획을 세우는 논리적 투자자' },
            water: { name: '수(水) - 적응형', desc: '변화에 유연하게 적응하는 지혜로운 투자자' }
        };

        const primaryElement = results?.results.primaryElement || 'wood';
        const elementInfo = elementData[primaryElement];

        const templateParams = {
            user_name: userData.user_name,
            user_email: userData.user_email,
            primary_pattern: elementInfo.name,
            result_summary: elementInfo.desc,
            detailed_analysis: `당신의 주요 투자 성향은 ${elementInfo.name} 유형입니다. ${elementInfo.desc}`,
            contact_email: 'habin0781@naver.com'
        };

        // EmailJS를 통한 고객 이메일 전송
        console.log('고객 이메일 전송:', templateParams);
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

// 페이지 로드 시 결과 표시
document.addEventListener('DOMContentLoaded', () => {
    new SimpleResults();
    new EmailService();
});