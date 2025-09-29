/**
 * 심층 무의식 머니패턴 진단 결과 시스템
 * 세계 최고 수준의 분석 및 통찰 제공
 */

// 무의식 패턴 정의
const unconsciousPatterns = {
    fear_dominant: {
        name: '두려움 지배형',
        subtitle: '안전을 최우선으로 하는 신중한 성향',
        description: '돈과 관련된 결정에서 두려움과 불안이 주요 동기가 되는 패턴',
        icon: 'fas fa-shield-alt',
        color: 'red',
        gradient: 'from-red-500 to-pink-500'
    },
    unworthiness_dominant: {
        name: '자격부족형', 
        subtitle: '겸손함 속에 숨겨진 잠재력을 가진 성향',
        description: '자신의 가치를 과소평가하며 경제적 성공을 꺼리는 패턴',
        icon: 'fas fa-user-minus',
        color: 'yellow', 
        gradient: 'from-yellow-500 to-orange-500'
    },
    control_anxiety: {
        name: '통제불안형',
        subtitle: '완벽한 계획과 예측을 추구하는 성향', 
        description: '불확실성을 극도로 회피하며 과도한 통제를 추구하는 패턴',
        icon: 'fas fa-sliders-h',
        color: 'blue',
        gradient: 'from-blue-500 to-indigo-500'
    },
    relationship_conflict: {
        name: '관계갈등형',
        subtitle: '타인과의 조화를 중시하는 배려 깊은 성향',
        description: '돈으로 인한 관계 변화를 우려하여 경제적 성취를 미루는 패턴', 
        icon: 'fas fa-users',
        color: 'green',
        gradient: 'from-green-500 to-teal-500'
    },
    fatalistic_passive: {
        name: '운명순응형',
        subtitle: '현실 수용력이 높지만 도전 의지가 부족한 성향',
        description: '경제적 상황을 운명으로 받아들이며 변화 시도를 포기하는 패턴',
        icon: 'fas fa-leaf', 
        color: 'purple',
        gradient: 'from-purple-500 to-indigo-500'
    }
};

// 차원별 상세 정보
const dimensionDetails = {
    fear: {
        name: '두려움 기반',
        description: '돈과 관련된 무의식적 두려움과 불안 수준',
        icon: 'fas fa-shield-alt',
        color: 'red',
        levels: {
            very_high: { label: '매우 높음', message: '경제적 결정에서 극도의 두려움을 느끼며, 안전 추구 성향이 매우 강합니다.' },
            high: { label: '높음', message: '새로운 경제적 기회에 대해 상당한 불안감을 느끼는 경향이 있습니다.' },
            moderate: { label: '보통', message: '일반적인 수준의 경제적 신중함을 보이며, 균형잡힌 접근을 합니다.' },
            low: { label: '낮음', message: '경제적 결정에서 비교적 자신감을 보이며, 합리적 판단을 내립니다.' },
            very_low: { label: '매우 낮음', message: '경제적 위험을 두려워하지 않으며, 과감한 도전 정신을 가지고 있습니다.' }
        }
    },
    worth: {
        name: '자격 부족',
        description: '경제적 성공에 대한 자격감과 자존감 수준', 
        icon: 'fas fa-user-minus',
        color: 'yellow',
        levels: {
            very_high: { label: '매우 높음', message: '자신의 경제적 성공 가능성을 매우 낮게 평가하며, 기회를 회피합니다.' },
            high: { label: '높음', message: '경제적 성취에 대한 자격감이 부족하여 소극적 태도를 보입니다.' },
            moderate: { label: '보통', message: '적절한 자기 성찰과 함께 건전한 자존감을 유지합니다.' },
            low: { label: '낮음', message: '자신의 능력을 신뢰하며, 경제적 목표 달성에 자신감을 보입니다.' },
            very_low: { label: '매우 낮음', message: '강한 자신감과 함께 높은 경제적 목표를 설정하고 추진합니다.' }
        }
    },
    control: {
        name: '통제 불안',
        description: '경제적 상황에 대한 통제감과 안정감 수준',
        icon: 'fas fa-sliders-h', 
        color: 'blue',
        levels: {
            very_high: { label: '매우 높음', message: '예측 불가능한 경제적 상황에 극도의 스트레스를 받으며, 과도한 통제를 시도합니다.' },
            high: { label: '높음', message: '경제적 불확실성에 대한 불안이 높아 과도한 계획과 준비를 선호합니다.' },
            moderate: { label: '보통', message: '적절한 수준의 계획과 함께 불확실성을 받아들일 수 있습니다.' },
            low: { label: '낮음', message: '경제적 변화에 유연하게 적응하며, 상황 변화를 자연스럽게 받아들입니다.' },
            very_low: { label: '매우 낮음', message: '높은 불확실성 수용도를 가지며, 즉흥적 경제 결정도 편안하게 내립니다.' }
        }
    },
    relationship: {
        name: '관계 갈등',
        description: '돈이 인간관계에 미치는 영향에 대한 우려 수준',
        icon: 'fas fa-users',
        color: 'green', 
        levels: {
            very_high: { label: '매우 높음', message: '돈 문제가 관계를 해칠 것을 극도로 우려하여 경제적 성취를 회피합니다.' },
            high: { label: '높음', message: '경제적 성공이 인간관계에 부정적 영향을 줄 것을 크게 걱정합니다.' },
            moderate: { label: '보통', message: '돈과 관계의 균형을 적절히 유지하며, 건전한 경계를 설정합니다.' },
            low: { label: '낮음', message: '경제적 성취와 인간관계를 성공적으로 병행할 수 있다고 믿습니다.' },
            very_low: { label: '매우 낮음', message: '돈이 관계에 미치는 영향을 크게 의식하지 않으며, 경제적 목표를 우선시합니다.' }
        }
    },
    fatalism: {
        name: '운명 순응',
        description: '경제적 성공에 대한 운명론적 사고와 무력감 수준',
        icon: 'fas fa-leaf',
        color: 'purple',
        levels: {
            very_high: { label: '매우 높음', message: '경제적 상황을 완전히 운명으로 받아들이며, 변화 시도를 포기한 상태입니다.' },
            high: { label: '높음', message: '개인 노력보다는 외적 요인이 경제적 성공을 결정한다고 강하게 믿습니다.' },
            moderate: { label: '보통', message: '노력과 운이 적절히 조합되어 결과가 만들어진다고 생각합니다.' },
            low: { label: '낮음', message: '개인의 노력과 선택이 경제적 성과에 큰 영향을 미친다고 믿습니다.' },
            very_low: { label: '매우 낮음', message: '강한 주도성을 가지며, 모든 경제적 성과는 자신의 노력 결과라고 확신합니다.' }
        }
    }
};

let results = null;
let charts = {};

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', function() {
    // localStorage에서 결과 데이터 가져오기
    const storedResults = localStorage.getItem('deepDiagnosisResults');
    
    if (!storedResults) {
        alert('진단 결과를 찾을 수 없습니다. 다시 진단해 주세요.');
        window.location.href = 'deep-diagnosis.html';
        return;
    }
    
    results = JSON.parse(storedResults);
    
    // 2초 후 결과 표시 (분석 시뮬레이션)
    setTimeout(() => {
        displayResults();
    }, 2000);
});

// 결과 표시
function displayResults() {
    document.getElementById('loading-screen').style.display = 'none';
    document.getElementById('results-content').classList.remove('hidden');
    
    displayMainPattern();
    createCharts();
    displayDimensionDetails();
    displayInsights();
    displayNextSteps();
}

// 주요 패턴 표시
function displayMainPattern() {
    const pattern = unconsciousPatterns[results.pattern.primary];
    
    // 패턴 아이콘
    const iconElement = document.getElementById('pattern-icon');
    iconElement.className = `inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r ${pattern.gradient} rounded-full mb-6`;
    iconElement.innerHTML = `<i class="${pattern.icon} text-4xl text-white"></i>`;
    
    // 패턴 이름과 설명
    document.getElementById('pattern-title').textContent = pattern.name;
    document.getElementById('pattern-subtitle').textContent = pattern.subtitle;
    
    // 점수 표시
    document.getElementById('total-score').textContent = results.pattern.totalScore.toFixed(1);
    
    const strengthLabels = {
        strong: '강함',
        moderate: '보통', 
        mild: '약함',
        weak: '매우 약함'
    };
    document.getElementById('pattern-strength').textContent = strengthLabels[results.pattern.strength];
}

// 차트 생성
function createCharts() {
    createDimensionsRadarChart();
    createPatternDoughnutChart();
}

// 5차원 레이더 차트
function createDimensionsRadarChart() {
    const ctx = document.getElementById('dimensionsChart').getContext('2d');
    
    const scores = results.pattern.scores;
    const data = {
        labels: ['두려움 기반', '자격 부족', '통제 불안', '관계 갈등', '운명 순응'],
        datasets: [{
            label: '무의식 패턴 점수',
            data: [
                scores.fear.score,
                scores.worth.score, 
                scores.control.score,
                scores.relationship.score,
                scores.fatalism.score
            ],
            backgroundColor: 'rgba(79, 70, 229, 0.2)',
            borderColor: 'rgb(79, 70, 229)',
            borderWidth: 3,
            pointBackgroundColor: 'rgb(79, 70, 229)',
            pointBorderColor: '#fff',
            pointBorderWidth: 2,
            pointRadius: 6
        }]
    };
    
    const config = {
        type: 'radar',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    beginAtZero: true,
                    max: 7,
                    ticks: {
                        stepSize: 1,
                        font: {
                            size: 12
                        }
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    };
    
    charts.dimensionsChart = new Chart(ctx, config);
}

// 패턴 분포 도넛 차트  
function createPatternDoughnutChart() {
    const ctx = document.getElementById('patternChart').getContext('2d');
    
    const scores = results.pattern.scores;
    const data = {
        labels: ['두려움 지배', '자격 부족', '통제 불안', '관계 갈등', '운명 순응'],
        datasets: [{
            data: [
                scores.fear.score,
                scores.worth.score,
                scores.control.score, 
                scores.relationship.score,
                scores.fatalism.score
            ],
            backgroundColor: [
                'rgba(239, 68, 68, 0.8)',   // red
                'rgba(245, 158, 11, 0.8)',  // yellow
                'rgba(59, 130, 246, 0.8)',  // blue
                'rgba(34, 197, 94, 0.8)',   // green
                'rgba(147, 51, 234, 0.8)'   // purple
            ],
            borderColor: [
                'rgb(239, 68, 68)',
                'rgb(245, 158, 11)', 
                'rgb(59, 130, 246)',
                'rgb(34, 197, 94)',
                'rgb(147, 51, 234)'
            ],
            borderWidth: 2
        }]
    };
    
    const config = {
        type: 'doughnut',
        data: data,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 20,
                        font: {
                            size: 12
                        }
                    }
                }
            }
        }
    };
    
    charts.patternChart = new Chart(ctx, config);
}

// 차원별 상세 분석 표시
function displayDimensionDetails() {
    const container = document.getElementById('dimension-details');
    const scores = results.pattern.scores;
    
    container.innerHTML = Object.entries(scores).map(([dimension, data]) => {
        const detail = dimensionDetails[dimension];
        const levelInfo = detail.levels[data.level];
        
        return `
            <div class="bg-white rounded-2xl shadow-lg p-6 md:p-8 border-l-4 border-${detail.color}-500">
                <div class="flex items-start justify-between mb-4">
                    <div class="flex items-center space-x-3">
                        <div class="flex items-center justify-center w-12 h-12 bg-${detail.color}-100 rounded-xl">
                            <i class="${detail.icon} text-${detail.color}-600 text-xl"></i>
                        </div>
                        <div>
                            <h4 class="text-xl font-bold text-gray-900">${detail.name}</h4>
                            <p class="text-sm text-gray-600">${detail.description}</p>
                        </div>
                    </div>
                    <div class="text-right">
                        <div class="text-2xl font-bold text-${detail.color}-600">${data.score}</div>
                        <div class="text-xs text-gray-500">/ 7.0</div>
                    </div>
                </div>
                <div class="mb-4">
                    <div class="flex justify-between items-center mb-2">
                        <span class="text-sm font-medium text-gray-700">수준: ${levelInfo.label}</span>
                        <span class="text-sm text-${detail.color}-600">${((data.score / 7) * 100).toFixed(0)}%</span>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-2">
                        <div class="bg-${detail.color}-500 h-2 rounded-full transition-all duration-1000" 
                             style="width: ${(data.score / 7) * 100}%"></div>
                    </div>
                </div>
                <p class="text-gray-700 text-sm">${levelInfo.message}</p>
            </div>
        `;
    }).join('');
}

// 통찰과 개선방안 표시
function displayInsights() {
    const pattern = results.pattern.primary;
    const insights = getInsightsForPattern(pattern);
    const improvements = getImprovementPlan(pattern);
    
    // 핵심 통찰
    const insightsContainer = document.getElementById('key-insights');
    insightsContainer.innerHTML = insights.map(insight => `
        <div class="flex items-start space-x-3">
            <i class="fas fa-lightbulb text-yellow-300 mt-1"></i>
            <p class="text-white/90">${insight}</p>
        </div>
    `).join('');
    
    // 개선방안
    const improvementContainer = document.getElementById('improvement-plan');
    improvementContainer.innerHTML = improvements.map(plan => `
        <div class="flex items-start space-x-3">
            <i class="fas fa-arrow-right text-green-300 mt-1"></i>
            <p class="text-white/90">${plan}</p>
        </div>
    `).join('');
}

// 패턴별 통찰 생성
function getInsightsForPattern(pattern) {
    const insights = {
        fear_dominant: [
            '안전 추구 성향이 강해 신중한 투자 결정을 내리는 강점이 있습니다.',
            '과도한 두려움이 좋은 기회를 놓치게 만들 수 있습니다.',
            '점진적 위험 노출을 통해 경제적 자신감을 키울 수 있습니다.'
        ],
        unworthiness_dominant: [
            '겸손한 성격으로 팀워크와 협력에서 뛰어난 능력을 발휘합니다.',
            '자기 가치를 과소평가하여 기회를 스스로 제한하는 경향이 있습니다.',
            '성취 경험 쌓기를 통해 자신감을 점진적으로 향상시킬 수 있습니다.'
        ],
        control_anxiety: [
            '체계적 계획 수립 능력이 뛰어나 안정적 자산 관리에 적합합니다.',
            '완벽주의 성향이 행동 지연과 기회 상실로 이어질 수 있습니다.',
            '불확실성 수용 연습을 통해 유연성을 키울 수 있습니다.'
        ],
        relationship_conflict: [
            '타인을 배려하는 마음이 깊어 신뢰받는 리더십을 발휘할 수 있습니다.',
            '관계 우선 사고가 개인 성장 기회를 제한할 수 있습니다.',
            'Win-Win 마인드셋으로 관계와 성취를 동시에 추구할 수 있습니다.'
        ],
        fatalistic_passive: [
            '현실 수용 능력이 높아 스트레스 관리가 뛰어납니다.',
            '수동적 태도가 능동적 기회 창출을 방해할 수 있습니다.',
            '작은 성공 경험을 통해 주도성과 효능감을 회복할 수 있습니다.'
        ]
    };
    
    return insights[pattern] || [];
}

// 패턴별 개선방안 생성
function getImprovementPlan(pattern) {
    const plans = {
        fear_dominant: [
            '소액 투자부터 시작하여 점진적으로 투자 규모를 늘려보세요.',
            '성공 사례 학습을 통해 긍정적 경제 마인드셋을 구축하세요.',
            '재정 안전망 구축으로 심리적 안정감을 확보하세요.'
        ],
        unworthiness_dominant: [
            '작은 성취부터 인정하고 축하하는 습관을 만드세요.',
            '강점 발견 및 개발을 통해 자신감을 키워나가세요.',
            '멘토링이나 코칭을 통해 객관적 피드백을 받아보세요.'
        ],
        control_anxiety: [
            '80% 계획, 20% 즉흥성의 균형잡힌 접근을 시도하세요.',
            '마음챙김 연습을 통해 불확실성에 대한 수용도를 높이세요.',
            '다양한 시나리오 플래닝으로 변화에 대한 준비도를 높이세요.'
        ],
        relationship_conflict: [
            '경제적 성공과 관계 발전이 상호 보완적임을 인식하세요.',
            '건강한 경계 설정을 통해 자신의 목표도 추구하세요.',
            '성공 스토리 공유로 주변에 긍정적 영향을 미치세요.'
        ],
        fatalistic_passive: [
            '일일 목표 설정과 달성을 통해 주도성을 기르세요.',
            '개인 스킬 개발에 투자하여 경쟁력을 향상시키세요.',
            '네트워킹 활동을 통해 새로운 기회를 적극 탐색하세요.'
        ]
    };
    
    return plans[pattern] || [];
}

// 추천 다음 단계 표시
function displayNextSteps() {
    const pattern = results.pattern.primary;
    const steps = getNextStepsForPattern(pattern);
    
    const container = document.getElementById('next-steps');
    container.innerHTML = steps.map((step, index) => `
        <div class="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
            <div class="text-center mb-4">
                <div class="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white font-bold text-lg mb-3">
                    ${index + 1}
                </div>
                <h4 class="font-bold text-gray-900 mb-2">${step.title}</h4>
            </div>
            <p class="text-sm text-gray-600 text-center">${step.description}</p>
        </div>
    `).join('');
}

// 패턴별 다음 단계 생성
function getNextStepsForPattern(pattern) {
    const steps = {
        fear_dominant: [
            { title: '재정 안전망 구축', description: '3-6개월 생활비 비상금을 마련하여 심리적 안정감을 확보하세요.' },
            { title: '소액 투자 시작', description: '월 소득의 5%부터 안전한 투자상품으로 경험을 쌓아보세요.' },
            { title: '투자 교육 이수', description: '체계적인 투자 교육을 통해 지식 기반의 자신감을 키우세요.' }
        ],
        unworthiness_dominant: [
            { title: '강점 발견 워크숍', description: '전문적인 강점 분석을 통해 숨겨진 재능을 발견하세요.' },
            { title: '성취 일기 작성', description: '매일 작은 성취들을 기록하며 자존감을 점진적으로 향상시키세요.' },
            { title: '멘토 찾기', description: '성공한 롤모델을 찾아 정기적인 조언과 격려를 받으세요.' }
        ],
        control_anxiety: [
            { title: '마음챙김 명상', description: '일일 10분 명상을 통해 불확실성에 대한 수용력을 키우세요.' },
            { title: '유연한 계획 수립', description: '계획에 20% 여유분을 두어 예상치 못한 변화에 대비하세요.' },
            { title: '위험 관리 학습', description: '체계적인 위험 관리 기법을 학습하여 불안감을 줄이세요.' }
        ],
        relationship_conflict: [
            { title: '경계 설정 연습', description: '건강한 경계 설정을 통해 자신의 목표도 추구하는 법을 배우세요.' },
            { title: 'Win-Win 전략 개발', description: '모두가 이익이 되는 상생 전략을 개발하고 실행하세요.' },
            { title: '성공 스토리 공유', description: '자신의 성공 경험을 나누며 다른 사람들에게 영감을 주세요.' }
        ],
        fatalistic_passive: [
            { title: '일일 목표 설정', description: '매일 작은 목표를 설정하고 달성하며 주도성을 기르세요.' },
            { title: '스킬 개발 계획', description: '새로운 기술이나 능력을 개발하여 개인 경쟁력을 높이세요.' },
            { title: '네트워킹 활동', description: '적극적인 네트워킹을 통해 새로운 기회를 발견하고 창조하세요.' }
        ]
    };
    
    return steps[pattern] || [];
}

// 다시 진단하기
function retakeTest() {
    if (confirm('현재 결과가 사라집니다. 다시 진단하시겠습니까?')) {
        localStorage.removeItem('deepDiagnosisResults');
        window.location.href = 'deep-diagnosis.html';
    }
}

// 결과 다운로드 (PDF 형태로 구현 가능)
function downloadResults() {
    const resultText = generateResultText();
    const blob = new Blob([resultText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `심층_무의식_머니패턴_진단결과_${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// 결과 텍스트 생성
function generateResultText() {
    const pattern = unconsciousPatterns[results.pattern.primary];
    const scores = results.pattern.scores;
    
    return `
=== 심층 무의식 머니패턴 진단 결과 ===

진단일시: ${new Date(results.timestamp).toLocaleDateString('ko-KR')}
소요시간: ${results.duration}초

■ 주요 패턴: ${pattern.name}
■ 패턴 특징: ${pattern.subtitle}
■ 총 무의식 지수: ${results.pattern.totalScore.toFixed(1)}/7.0
■ 패턴 강도: ${results.pattern.strength}

■ 5차원 분석 결과:
- 두려움 기반: ${scores.fear.score.toFixed(1)}/7.0
- 자격 부족: ${scores.worth.score.toFixed(1)}/7.0  
- 통제 불안: ${scores.control.score.toFixed(1)}/7.0
- 관계 갈등: ${scores.relationship.score.toFixed(1)}/7.0
- 운명 순응: ${scores.fatalism.score.toFixed(1)}/7.0

■ 핵심 통찰:
${getInsightsForPattern(results.pattern.primary).map(insight => `• ${insight}`).join('\n')}

■ 개선 방안:
${getImprovementPlan(results.pattern.primary).map(plan => `• ${plan}`).join('\n')}

=== 머니패턴 심리진단 시스템 ===
    `;
}

// EmailJS 설정 및 이메일 전송 기능
class DeepEmailService {
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
        console.log('EmailJS 초기화됨 - 심층진단');
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
            consultation_request: formData.get('consultation_request') ? '전문가 심층 상담 희망' : '상담 불필요'
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
        // 심층진단 결과 데이터 가져오기
        const deepResults = localStorage.getItem('deepDiagnosisResults');
        
        return deepResults ? JSON.parse(deepResults) : null;
    }

    async sendAdminEmail(userData, results) {
        const patternNames = {
            'fear_dominant': '두려움 지배형 - 안전 최우선 신중형',
            'unworthiness_dominant': '자격부족형 - 겸손한 잠재력형',
            'control_anxiety': '통제불안형 - 완벽 계획 추구형',
            'relationship_conflict': '관계갈등형 - 타인 조화 중시형',
            'fatalistic_passive': '운명순응형 - 현실 수용 소극형'
        };

        const primaryPattern = results?.pattern?.primary || 'fear_dominant';
        const totalScore = results?.pattern?.totalScore || 0;

        const templateParams = {
            user_name: userData.user_name,
            user_email: userData.user_email,
            user_phone: userData.user_phone,
            consultation_request: userData.consultation_request,
            diagnosis_type: '심층 무의식 머니패턴 (20문항 과학적 분석)',
            primary_pattern: patternNames[primaryPattern] || '데이터 없음',
            secondary_pattern: `무의식 지수: ${totalScore.toFixed(1)}/7.0`,
            diagnosis_time: new Date().toLocaleString('ko-KR'),
            admin_email: 'habin0781@naver.com'
        };

        console.log('관리자 이메일 전송 (심층진단):', templateParams);
        return emailjs.send(this.serviceId, this.adminTemplateId, templateParams);
    }

    async sendCustomerEmail(userData, results) {
        const patternData = {
            'fear_dominant': { 
                name: '두려움 지배형', 
                desc: '안전을 최우선으로 하는 신중한 성향으로, 경제적 결정에서 두려움과 불안이 주요 동기가 되는 무의식 패턴' 
            },
            'unworthiness_dominant': { 
                name: '자격부족형', 
                desc: '겸손함 속에 숨겨진 잠재력을 가진 성향으로, 자신의 가치를 과소평가하는 무의식 패턴' 
            },
            'control_anxiety': { 
                name: '통제불안형', 
                desc: '완벽한 계획과 예측을 추구하는 성향으로, 불확실성을 극도로 회피하는 무의식 패턴' 
            },
            'relationship_conflict': { 
                name: '관계갈등형', 
                desc: '타인과의 조화를 중시하는 배려 깊은 성향으로, 돈으로 인한 관계 변화를 우려하는 무의식 패턴' 
            },
            'fatalistic_passive': { 
                name: '운명순응형', 
                desc: '현실 수용력이 높지만 도전 의지가 부족한 성향으로, 경제적 상황을 운명으로 받아들이는 무의식 패턴' 
            }
        };

        const primaryPattern = results?.pattern?.primary || 'fear_dominant';
        const patternInfo = patternData[primaryPattern];
        const totalScore = results?.pattern?.totalScore || 0;

        const templateParams = {
            user_name: userData.user_name,
            user_email: userData.user_email,
            primary_pattern: patternInfo.name,
            result_summary: patternInfo.desc,
            detailed_analysis: `
[세계 최고 수준 심층 무의식 분석 결과]

당신의 무의식 머니패턴: ${patternInfo.name}
무의식 지수: ${totalScore.toFixed(1)}/7.0

${patternInfo.desc}

정신분석학 × 인지행동치료 × 행동경제학 기반의 과학적 분석을 통해 도출된 결과입니다. 
이러한 무의식 패턴을 바탕으로 개인 맞춤 개선 전략을 수립하실 수 있습니다.
            `,
            contact_email: 'habin0781@naver.com'
        };

        console.log('고객 이메일 전송 (심층진단):', templateParams);
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
        errorDiv.className = 'mt-6 text-center bg-red-500/20 border-2 border-red-300 rounded-xl p-4';
        errorDiv.innerHTML = `<i class="fas fa-exclamation-triangle mr-2"></i>전송 실패: ${message}`;
        document.getElementById('emailSuccess').parentNode.appendChild(errorDiv);
        document.getElementById('sendEmailBtn').disabled = false;
    }
}

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', () => {
    new DeepEmailService(); // EmailJS 서비스 초기화
});