// 5문항 초간편 무의식 신념 진단 결과 JavaScript

// 신념 유형별 정의 (ultra-belief-diagnosis.js와 동일)
const beliefTypes = {
    'money-pessimist': {
        name: '머니 비관주의자',
        emoji: '😰',
        description: '돈에 대해 부정적이고 두려운 감정을 가지고 있습니다. 돈이 가져올 수 있는 문제점들을 과도하게 우려하며, 부에 대한 죄책감을 느낄 수 있습니다.',
        color: '#ef4444',
        gradient: 'from-red-500 to-pink-500',
        characteristics: [
            '돈에 대한 부정적 감정이 강함',
            '경제적 성공에 대한 두려움',
            '사회적 시선을 과도하게 의식',
            '안전을 최우선으로 생각'
        ],
        improvements: [
            '돈의 긍정적 측면에 대해 학습하기',
            '성공한 롤모델의 사례 연구하기', 
            '점진적인 목표 설정으로 자신감 키우기',
            '마음챙김으로 부정적 사고 관찰하기'
        ]
    },
    'money-optimist': {
        name: '머니 낙관주의자',
        emoji: '🤑',
        description: '돈에 대해 긍정적이고 자신감 있는 태도를 가지고 있습니다. 돈이 가져다줄 수 있는 기회와 가능성을 믿으며, 부를 추구하는 것에 거리낌이 없습니다.',
        color: '#10b981',
        gradient: 'from-green-500 to-emerald-500',
        characteristics: [
            '돈에 대한 긍정적 마인드셋',
            '경제적 기회를 적극적으로 추구',
            '자신감 있는 투자 성향',
            '미래에 대한 낙관적 전망'
        ],
        improvements: [
            '리스크 관리 능력 향상하기',
            '신중한 계획 수립 습관 기르기',
            '과도한 낙관을 경계하기',
            '균형잡힌 투자 포트폴리오 구성'
        ]
    },
    'money-conflicted': {
        name: '머니 갈등형',
        emoji: '😕',
        description: '돈에 대해 상반된 감정을 동시에 가지고 있습니다. 돈의 필요성을 인정하면서도 그에 대한 부정적 감정도 함께 존재하여 내적 갈등을 경험합니다.',
        color: '#f59e0b',
        gradient: 'from-yellow-500 to-orange-500',
        characteristics: [
            '돈에 대한 복잡한 감정',
            '경제적 성공과 도덕성 사이의 갈등',
            '우유부단한 투자 결정',
            '상황에 따라 변하는 태도'
        ],
        improvements: [
            '자신의 가치관 명확히 정립하기',
            '돈과 도덕성의 균형점 찾기',
            '일관된 경제 철학 수립하기',
            '전문가 상담을 통한 내적 갈등 해소'
        ]
    },
    'money-neutral': {
        name: '머니 중립형',
        emoji: '😐',
        description: '돈에 대해 특별한 감정이나 신념이 강하지 않습니다. 현실적이고 실용적인 관점에서 돈을 도구로 인식하는 경향이 있습니다.',
        color: '#6b7280',
        gradient: 'from-gray-500 to-slate-500',
        characteristics: [
            '돈에 대한 실용적 접근',
            '감정적 개입 없는 합리적 판단',
            '안정적이지만 소극적인 성향',
            '현상 유지를 선호하는 경향'
        ],
        improvements: [
            '적극적인 투자 마인드 개발하기',
            '경제적 목표 설정하고 추진하기',
            '새로운 기회에 대한 개방성 키우기',
            '돈의 잠재력에 대해 학습하기'
        ]
    },
    'money-balanced': {
        name: '머니 균형형',
        emoji: '😊',
        description: '돈에 대해 건강하고 균형잡힌 관점을 가지고 있습니다. 돈의 긍정적 측면과 주의해야 할 점들을 모두 인식하고 있어 현명한 재정 관리가 가능합니다.',
        color: '#3b82f6',
        gradient: 'from-blue-500 to-indigo-500',
        characteristics: [
            '돈에 대한 건전한 인식',
            '균형잡힌 투자와 저축',
            '합리적 소비 패턴',
            '장기적 관점의 재정 계획'
        ],
        improvements: [
            '현재의 좋은 습관 유지하기',
            '더 적극적인 투자 기회 탐색',
            '금융 지식 지속적으로 업데이트',
            '타인에게 좋은 영향 주기'
        ]
    }
};

// 결과 데이터
let resultsData = null;
let beliefRadarChart = null;
let beliefDoughnutChart = null;

// 5가지 핵심 무의식 신념 패턴 (오행 기반)
const beliefPatterns = {
    'seeking': { name: '쟁취형', element: '목(木)', season: '봄', color: '#10b981', description: '적극적으로 기회를 찾고 성취를 추구하는 성장형 신념' },
    'spending': { name: '질러형', element: '화(火)', season: '여름', color: '#ef4444', description: '즉흥적이고 감정적인 소비로 에너지를 표현하는 활동형 신념' },
    'following': { name: '팔랑귀형', element: '토(土)', season: '늦여름', color: '#f59e0b', description: '다른 사람의 의견에 쉽게 흔들리는 중심 찾기형 신념' },
    'showing': { name: '나잘나형', element: '금(金)', season: '가을', color: '#8b5cf6', description: '자신의 성공을 과시하고 인정받고자 하는 표현형 신념' },
    'perfecting': { name: '완벽형', element: '수(水)', season: '겨울', color: '#3b82f6', description: '완벽한 계획과 신중한 분석을 통한 안정 추구형 신념' }
};

// 상생상극 관계 정의
const wuxingRelations = {
    mutual_generation: { // 상생 관계
        'seeking': 'spending',    // 목→화: 쟁취→질러
        'spending': 'following',  // 화→토: 질러→팔랑귀
        'following': 'showing',   // 토→금: 팔랑귀→나잘나
        'showing': 'perfecting',  // 금→수: 나잘나→완벽
        'perfecting': 'seeking'   // 수→목: 완벽→쟁취
    },
    mutual_destruction: { // 상극 관계
        'seeking': 'following',   // 목극토: 쟁취vs팔랑귀
        'spending': 'showing',    // 화극금: 질러vs나잘나
        'following': 'perfecting', // 토극수: 팔랑귀vs완벽
        'showing': 'seeking',     // 금극목: 나잘나vs쟁취
        'perfecting': 'spending'  // 수극화: 완벽vs질러
    }
};

// 페이지 초기화
function initializeResults() {
    // 저장된 결과 데이터 로드
    const stored = localStorage.getItem('ultraBeliefResults');
    if (!stored) {
        // 테스트 데이터로 대체
        resultsData = {
            results: {
                beliefType: 'money-balanced',
                totalScore: 15,
                averageScore: 3.0,
                strength: '보통'
            }
        };
    } else {
        resultsData = JSON.parse(stored);
    }

    displayResults();
}

// 결과 표시
function displayResults() {
    const results = resultsData.results;
    const beliefData = beliefTypes[results.beliefType];

    // 메인 결과 표시
    const iconElement = document.getElementById('result-icon');
    iconElement.innerHTML = `<div class="text-4xl">${beliefData.emoji}</div>`;
    
    document.getElementById('belief-type').textContent = beliefData.name;
    document.getElementById('belief-description').textContent = beliefData.description;

    // 점수 표시
    document.getElementById('total-score').textContent = results.totalScore;
    document.getElementById('average-score').textContent = results.averageScore.toFixed(1);
    document.getElementById('belief-strength').textContent = results.strength;

    // 특성 표시
    const characteristicsElement = document.getElementById('characteristics');
    characteristicsElement.innerHTML = '';
    beliefData.characteristics.forEach(characteristic => {
        const div = document.createElement('div');
        div.className = 'flex items-center text-gray-700';
        div.innerHTML = `
            <i class="fas fa-check-circle text-purple-600 mr-2"></i>
            <span class="text-sm">${characteristic}</span>
        `;
        characteristicsElement.appendChild(div);
    });

    // 개선 방향 표시
    const improvementsElement = document.getElementById('improvements');
    improvementsElement.innerHTML = '';
    beliefData.improvements.forEach(improvement => {
        const div = document.createElement('div');
        div.className = 'flex items-center text-gray-700';
        div.innerHTML = `
            <i class="fas fa-arrow-up text-pink-600 mr-2"></i>
            <span class="text-sm">${improvement}</span>
        `;
        improvementsElement.appendChild(div);
    });

    // 차트와 상세 분석 표시
    setTimeout(() => {
        createBeliefCharts();
        displayPatternAnalysis();
    }, 100);
}

// 무의식 신념 패턴 차트 생성
function createBeliefCharts() {
    // 샘플 데이터 생성 (실제로는 진단 결과 기반)
    const beliefScores = generateBeliefScores();
    
    createRadarChart(beliefScores);
    createDoughnutChart(beliefScores);
}

// 신념 점수 생성 (실제 진단 결과 기반으로 시뮬레이션)
function generateBeliefScores() {
    // 기본값으로 균등 분포 후 결과 타입에 따라 조정
    const baseScores = {
        'seeking': 20,
        'spending': 20,
        'following': 20, 
        'showing': 20,
        'perfecting': 20
    };

    // 결과 타입에 따라 조정
    const beliefType = resultsData.results.beliefType;
    const totalScore = resultsData.results.totalScore;
    
    // 점수 분포 조정 로직 (결과에 따라)
    if (beliefType === 'money-optimist') {
        baseScores.seeking = Math.min(100, totalScore * 4 + 10);
        baseScores.showing = Math.min(100, totalScore * 3 + 5);
    } else if (beliefType === 'money-pessimist') {
        baseScores.perfecting = Math.min(100, totalScore * 4 + 10);
        baseScores.following = Math.min(100, totalScore * 3 + 5);
    } else if (beliefType === 'money-conflicted') {
        baseScores.following = Math.min(100, totalScore * 3 + 10);
        baseScores.spending = Math.min(100, totalScore * 2 + 15);
    }

    return baseScores;
}

// 레이더 차트 생성
function createRadarChart(beliefScores) {
    const ctx = document.getElementById('beliefRadarChart');
    if (!ctx) return;

    // 기존 차트 파괴
    if (beliefRadarChart) {
        beliefRadarChart.destroy();
    }

    beliefRadarChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['쟁취형(목)', '질러형(화)', '팔랑귀형(토)', '나잘나형(금)', '완벽형(수)'],
            datasets: [{
                label: '무의식 신념 강도',
                data: [
                    beliefScores.seeking,
                    beliefScores.spending,
                    beliefScores.following,
                    beliefScores.showing,
                    beliefScores.perfecting
                ],
                backgroundColor: 'rgba(139, 92, 246, 0.2)',
                borderColor: 'rgba(139, 92, 246, 1)',
                pointBackgroundColor: 'rgba(139, 92, 246, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(139, 92, 246, 1)',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    beginAtZero: true,
                    max: 100,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    },
                    angleLines: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    },
                    pointLabels: {
                        font: {
                            size: 12,
                            family: '"Noto Sans KR", sans-serif'
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        font: {
                            family: '"Noto Sans KR", sans-serif'
                        }
                    }
                }
            }
        }
    });
}

// 도넛 차트 생성
function createDoughnutChart(beliefScores) {
    const ctx = document.getElementById('beliefDoughnutChart');
    if (!ctx) return;

    // 기존 차트 파괴
    if (beliefDoughnutChart) {
        beliefDoughnutChart.destroy();
    }

    const total = Object.values(beliefScores).reduce((a, b) => a + b, 0);
    const percentages = Object.entries(beliefScores).map(([key, value]) => {
        return {
            label: beliefPatterns[key].name,
            value: Math.round((value / total) * 100),
            color: beliefPatterns[key].color
        };
    });

    beliefDoughnutChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: percentages.map(p => `${p.label} (${p.value}%)`),
            datasets: [{
                data: percentages.map(p => p.value),
                backgroundColor: percentages.map(p => p.color),
                borderColor: '#fff',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        font: {
                            family: '"Noto Sans KR", sans-serif',
                            size: 11
                        },
                        padding: 15
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `${context.label}: ${context.parsed}%`;
                        }
                    }
                }
            }
        }
    });
}

// 주기질/부기질 패턴 분석 표시
function displayPatternAnalysis() {
    const beliefScores = generateBeliefScores();
    
    // 점수 순으로 정렬하여 주기질/부기질 결정
    const sortedPatterns = Object.entries(beliefScores)
        .sort(([,a], [,b]) => b - a)
        .map(([key, score]) => ({ key, score, ...beliefPatterns[key] }));
    
    const primaryPattern = sortedPatterns[0];
    const secondaryPattern = sortedPatterns[1];

    // 주기질 분석 표시
    displayPrimaryPattern(primaryPattern);
    
    // 부기질 분석 표시  
    displaySecondaryPattern(secondaryPattern);
    
    // 조합 시너지 분석 표시
    displayCombinationAnalysis(primaryPattern, secondaryPattern);
}

// 주기질 패턴 표시
function displayPrimaryPattern(pattern) {
    document.getElementById('primary-pattern-name').innerHTML = `
        <span class="inline-flex items-center">
            <i class="fas fa-crown mr-2"></i>
            ${pattern.name} (${pattern.element})
        </span>
    `;
    
    const descriptions = {
        'seeking': '목적 의식이 강하고 성장과 발전을 추구하는 적극적인 신념 패턴입니다. 새로운 기회를 포착하는 능력이 뛰어나며, 도전을 두려워하지 않습니다.',
        'spending': '감정과 직감을 중시하며 즉흥적인 의사결정을 하는 활동적인 신념 패턴입니다. 에너지가 넘치고 표현력이 풍부합니다.',
        'following': '조화와 균형을 중시하며 다른 사람의 의견을 수용하는 중재자적 신념 패턴입니다. 신중하고 배려심이 깊습니다.',
        'showing': '성취와 인정을 중시하며 체계적이고 완성도 높은 결과를 추구하는 신념 패턴입니다. 품질과 효율성을 중시합니다.',
        'perfecting': '깊이 있는 사고와 신중한 계획을 바탕으로 하는 지혜로운 신념 패턴입니다. 장기적 관점과 근본적 해결을 추구합니다.'
    };
    
    document.getElementById('primary-pattern-description').textContent = descriptions[pattern.key];
    
    const growthPoints = {
        'seeking': ['새로운 투자 기회 적극 탐색', '창업이나 사업 확장 고려', '네트워킹을 통한 기회 확장', '리더십 역할 적극 수행'],
        'spending': ['감정적 소비 패턴 인식하기', '즉흥성을 창의적 방향으로 활용', '열정을 체계적 계획으로 연결', '에너지를 생산적 활동에 집중'],
        'following': ['자신만의 투자 철학 정립', '독립적 판단력 기르기', '정보 분석 능력 향상', '신뢰할 만한 정보원 확보'],
        'showing': ['성취를 동기부여로 활용', '사회적 책임감 있는 부 추구', '실력 향상에 지속 투자', '성공 경험을 타인과 공유'],
        'perfecting': ['완벽주의를 실행력으로 전환', '계획을 단계별 실행으로 연결', '리스크 관리 능력 활용', '장기 투자 전략 수립']
    };
    
    const pointsContainer = document.getElementById('primary-growth-points');
    pointsContainer.innerHTML = '';
    growthPoints[pattern.key].forEach(point => {
        const div = document.createElement('div');
        div.className = 'flex items-center text-sm text-gray-700';
        div.innerHTML = `<i class="fas fa-arrow-up text-green-600 mr-2 flex-shrink-0"></i><span>${point}</span>`;
        pointsContainer.appendChild(div);
    });
}

// 부기질 패턴 표시
function displaySecondaryPattern(pattern) {
    document.getElementById('secondary-pattern-name').innerHTML = `
        <span class="inline-flex items-center">
            <i class="fas fa-gem mr-2"></i>
            ${pattern.name} (${pattern.element})
        </span>
    `;
    
    const descriptions = {
        'seeking': '보조적으로 성장과 발전을 추구하는 성향이 있어, 주기질의 안정성을 보완해줍니다.',
        'spending': '감정적 에너지와 즉흥성이 보조적으로 작용하여 주기질에 활력을 더해줍니다.',
        'following': '조화와 균형 추구 성향이 보조적으로 작용하여 주기질의 극단적 성향을 완화해줍니다.',
        'showing': '성취 지향성이 보조적으로 작용하여 주기질의 목표 달성을 지원해줍니다.',
        'perfecting': '신중함과 완벽 추구가 보조적으로 작용하여 주기질의 안정성을 높여줍니다.'
    };
    
    document.getElementById('secondary-pattern-description').textContent = descriptions[pattern.key];
    
    const complementEffects = {
        'seeking': ['주도적 성향에 성장 동력 추가', '안정 추구에 발전 욕구 보완', '수동적 성향에 적극성 부여'],
        'spending': ['신중함에 즉흥적 활력 추가', '계획적 성향에 유연성 보완', '경직성에 창의적 에너지 부여'],
        'following': ['극단적 성향에 균형감 제공', '독단적 결정에 신중함 추가', '경쟁적 성향에 협력 요소 보완'],
        'showing': ['내향적 성향에 표현력 추가', '소극적 태도에 성취 동기 부여', '현상 유지에 발전 욕구 보완'],
        'perfecting': ['즉흥적 성향에 신중함 추가', '감정적 결정에 논리성 보완', '성급함에 장기적 관점 제공']
    };
    
    const effectsContainer = document.getElementById('secondary-complement-effects');
    effectsContainer.innerHTML = '';
    complementEffects[pattern.key].forEach(effect => {
        const div = document.createElement('div');
        div.className = 'flex items-center text-sm text-gray-700';
        div.innerHTML = `<i class="fas fa-plus-circle text-blue-600 mr-2 flex-shrink-0"></i><span>${effect}</span>`;
        effectsContainer.appendChild(div);
    });
}

// 조합 시너지 분석 표시
function displayCombinationAnalysis(primary, secondary) {
    // 상생/상극 관계 확인
    const isGenerative = wuxingRelations.mutual_generation[primary.key] === secondary.key;
    const isDestructive = wuxingRelations.mutual_destruction[primary.key] === secondary.key;
    
    // 조합별 시너지 분석
    const combinationKey = `${primary.key}-${secondary.key}`;
    
    // 조합 강점
    const strengths = getCombinationStrengths(primary.key, secondary.key, isGenerative);
    const strengthsContainer = document.getElementById('combination-strengths-list');
    strengthsContainer.innerHTML = '';
    strengths.forEach(strength => {
        const div = document.createElement('div');
        div.className = 'flex items-start text-sm text-gray-700 mb-2';
        div.innerHTML = `<i class="fas fa-star text-green-600 mr-2 mt-0.5 flex-shrink-0"></i><span>${strength}</span>`;
        strengthsContainer.appendChild(div);
    });
    
    // 주의 포인트
    const challenges = getCombinationChallenges(primary.key, secondary.key, isDestructive);
    const challengesContainer = document.getElementById('combination-challenges-list');
    challengesContainer.innerHTML = '';
    challenges.forEach(challenge => {
        const div = document.createElement('div');
        div.className = 'flex items-start text-sm text-gray-700 mb-2';
        div.innerHTML = `<i class="fas fa-exclamation-circle text-orange-600 mr-2 mt-0.5 flex-shrink-0"></i><span>${challenge}</span>`;
        challengesContainer.appendChild(div);
    });
    
    // 균형 발전 전략
    const recommendations = getCombinationRecommendations(primary.key, secondary.key);
    const recommendationsContainer = document.getElementById('combination-recommendations-list');
    recommendationsContainer.innerHTML = '';
    recommendations.forEach(rec => {
        const div = document.createElement('div');
        div.className = 'flex items-start text-sm text-gray-700 mb-2';
        div.innerHTML = `<i class="fas fa-lightbulb text-blue-600 mr-2 mt-0.5 flex-shrink-0"></i><span>${rec}</span>`;
        recommendationsContainer.appendChild(div);
    });
}

// 조합별 강점 분석
function getCombinationStrengths(primary, secondary, isGenerative) {
    const baseStrengths = {
        'seeking': ['적극적 기회 포착', '성장 지향적 마인드', '리더십과 추진력'],
        'spending': ['활발한 에너지', '창의적 발상', '즉시 실행력'],
        'following': ['균형감과 조화', '신중한 판단', '협력적 성향'],
        'showing': ['목표 지향성', '성취 동기', '체계적 접근'],
        'perfecting': ['완벽한 계획', '리스크 관리', '장기적 관점']
    };
    
    let strengths = [...baseStrengths[primary], ...baseStrengths[secondary]];
    
    if (isGenerative) {
        strengths.push('✨ 상생 관계로 인한 자연스러운 시너지 효과');
        strengths.push('💫 서로의 장점을 극대화하는 조화로운 조합');
    }
    
    return strengths.slice(0, 5); // 최대 5개
}

// 조합별 주의사항 분석
function getCombinationChallenges(primary, secondary, isDestructive) {
    const baseChallenges = {
        'seeking': ['성급한 판단 위험', '과도한 위험 감수'],
        'spending': ['충동적 소비 성향', '감정적 의사결정'],
        'following': ['우유부단함', '주체성 부족'],
        'showing': ['과시적 성향', '타인 의식 과도'],
        'perfecting': ['완벽주의로 인한 지연', '기회 놓칠 위험']
    };
    
    let challenges = [...baseChallenges[primary], ...baseChallenges[secondary]];
    
    if (isDestructive) {
        challenges.push('⚠️ 상극 관계로 인한 내적 갈등 가능성');
        challenges.push('🔄 두 성향의 충돌로 인한 혼란 주의');
    }
    
    return challenges.slice(0, 4); // 최대 4개
}

// 조합별 균형 발전 전략
function getCombinationRecommendations(primary, secondary) {
    return [
        '🎯 주기질의 강점을 핵심 전략으로 활용하되, 부기질로 균형 유지',
        '⚖️ 두 성향이 충돌할 때는 상황에 따른 우선순위 설정',
        '🔄 주기질과 부기질을 상황별로 적절히 전환하는 유연성 개발',
        '📈 장기적으로는 주기질 강화, 단기적으로는 부기질 활용 고려',
        '🤝 전문가 상담을 통한 개인 맞춤형 발전 계획 수립 권장'
    ];
}

// 액션 함수들
function shareResults() {
    const results = resultsData.results;
    const beliefData = beliefTypes[results.beliefType];
    const shareText = `나의 무의식 머니 신념: ${beliefData.name} ${beliefData.emoji}\n5문항 초간편 진단으로 3분만에 확인! ${window.location.href}`;
    
    if (navigator.share) {
        navigator.share({
            title: '5문항 초간편 무의식 신념 진단 결과',
            text: shareText,
            url: window.location.href
        });
    } else {
        navigator.clipboard.writeText(shareText).then(() => {
            alert('결과 링크가 클립보드에 복사되었습니다!');
        }).catch(() => {
            alert('결과 공유 링크를 복사할 수 없습니다.');
        });
    }
}

function retakeTest() {
    if (confirm('새로운 진단을 시작하시겠습니까? 현재 결과가 초기화됩니다.')) {
        localStorage.removeItem('ultraBeliefResults');
        window.location.href = 'ultra-belief-diagnosis.html';
    }
}

// EmailJS 설정 및 이메일 전송 기능
class UltraBeliefEmailService {
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
        console.log('EmailJS 초기화됨 - 5문항 초간편 신념진단');
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
            consultation_request: formData.get('consultation_request') ? '5문항 초간편 신념 상담 희망' : '상담 불필요'
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
        return resultsData;
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
            diagnosis_type: '5문항 초간편 무의식 신념 진단',
            primary_pattern: beliefNames[beliefType] || '데이터 없음',
            secondary_pattern: `점수: ${totalScore}/25 (평균 ${averageScore.toFixed(1)})`,
            diagnosis_time: new Date().toLocaleString('ko-KR'),
            admin_email: 'habin0781@naver.com'
        };

        console.log('관리자 이메일 전송 (5문항 신념진단):', templateParams);
        return emailjs.send(this.serviceId, this.adminTemplateId, templateParams);
    }

    async sendCustomerEmail(userData, results) {
        const beliefData = {
            'money-pessimist': { 
                name: '머니 비관주의자', 
                desc: '돈에 대해 부정적이고 두려운 감정을 가진 신념 유형. 돈의 긍정적 측면 학습이 필요합니다.' 
            },
            'money-optimist': { 
                name: '머니 낙관주의자', 
                desc: '돈에 대해 긍정적이고 자신감 있는 신념 유형. 리스크 관리 능력 향상이 도움됩니다.' 
            },
            'money-conflicted': { 
                name: '머니 갈등형', 
                desc: '돈에 대해 상반된 감정을 동시에 가진 신념 유형. 내적 갈등 해소가 중요합니다.' 
            },
            'money-neutral': { 
                name: '머니 중립형', 
                desc: '돈에 대해 실용적이고 현실적인 관점을 가진 신념 유형. 적극적 투자 마인드 개발이 도움됩니다.' 
            },
            'money-balanced': { 
                name: '머니 균형형', 
                desc: '돈에 대해 건강하고 균형잡힌 관점을 가진 이상적 신념 유형. 현재 상태 유지가 중요합니다.' 
            }
        };

        const beliefType = results?.results?.beliefType || 'money-neutral';
        const beliefInfo = beliefData[beliefType];
        const totalScore = results?.results?.totalScore || 0;
        const averageScore = results?.results?.averageScore || 0;

        const templateParams = {
            user_name: userData.user_name,
            user_email: userData.user_email,
            primary_pattern: beliefInfo.name,
            result_summary: beliefInfo.desc,
            detailed_analysis: `
[5문항 초간편 무의식 신념 진단 결과]

당신의 무의식 머니 신념: ${beliefInfo.name}
신념 점수: ${totalScore}/25점 (평균 ${averageScore.toFixed(1)})

${beliefInfo.desc}

단 5문항의 간편한 질문으로 당신의 깊숙한 무의식 속 돈 신념을 분석했습니다. 
이러한 신념 패턴을 바탕으로 건강한 머니 마인드셋 개발을 위한 맞춤 개선 방향을 제시해드립니다.
            `,
            contact_email: 'habin0781@naver.com'
        };

        console.log('고객 이메일 전송 (5문항 신념진단):', templateParams);
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
    initializeResults();
    new UltraBeliefEmailService(); // EmailJS 서비스 초기화
});

// 오행 패턴 하이라이트 기능
function highlightPattern(patternKey) {
    const patternDetails = {
        'seeking': {
            title: '쟁취형 (목행 - 木行)',
            season: '봄의 에너지',
            element: '목(木) - 성장과 발전',
            description: '새로운 기회를 적극적으로 찾고 성장과 발전을 추구하는 전진적 성향의 머니 패턴',
            strengths: ['빠른 의사결정력', '목표 지향적 사고', '도전 정신', '리더십 역량'],
            growthTips: ['체계적 계획 수립', '리스크 관리 법 학습', '장기적 관점 배양', '팀워크와 협력 능력 개발'],
            relationships: {
                enhances: '질러형(화)에게 에너지와 동력 제공',
                balances: '팔랑귀형(토)과 균형적 상호작용',
                complements: '완벽형(수)의 신중한 계획을 실행력으로 활성화'
            }
        },
        'spending': {
            title: '질러형 (화행 - 火行)',
            season: '여름의 에너지',
            element: '화(火) - 열정과 활동',
            description: '감정적 에너지가 강하고 즉흥적인 의사결정으로 활발한 활동을 보이는 머니 패턴',
            strengths: ['강력한 실행력', '창의적 발상', '열정적 에너지', '상황 적응력'],
            growthTips: ['충동 소비 패턴 인식', '계획적 사고 배양', '장기 목표 설정', '감정 관리 법 학습'],
            relationships: {
                enhances: '팔랑귀형(토)에게 안정감과 신중함 제공',
                balances: '나잘나형(금)과 에너지 균형 유지',
                complements: '완벽형(수)의 신중함에 열정과 활력 부여'
            }
        },
        'following': {
            title: '팔랑귀형 (토행 - 土行)',
            season: '늦여름의 에너지',
            element: '토(土) - 안정과 조화',
            description: '다른 사람의 의견을 수용하고 조화와 균형을 중시하는 신중한 머니 패턴',
            strengths: ['뛰어난 소통 능력', '균형감과 안정성', '협력적 성향', '신중한 판단력'],
            growthTips: ['독립적 판단력 강화', '주체성 개발', '리더십 역량 향상', '자신감 배양'],
            relationships: {
                enhances: '나잘나형(금)에게 안정감과 무게감 제공',
                balances: '쟁취형(목)과 도전과 안정의 조화',
                complements: '완벽형(수)과 함께 신중하고 안정적인 기반 구축'
            }
        },
        'showing': {
            title: '나잘나형 (금행 - 金行)',
            season: '가을의 에너지',
            element: '금(金) - 성취와 완성',
            description: '성취와 인정을 중시하며 체계적이고 목표 지향적인 머니 패턴',
            strengths: ['목표 지향성', '성취 동기', '체계적 사고', '효율성 추구'],
            growthTips: ['사회적 책임감 배양', '공유와 나눔 정신', '다양한 관점 수용', '비전 리더십 발휘'],
            relationships: {
                enhances: '완벽형(수)에게 체계성과 완성도 제공',
                balances: '질러형(화)과 체계성과 열정의 균형',
                complements: '쟁취형(목)의 도전 정신에 성취 동기와 체계성 부여'
            }
        },
        'perfecting': {
            title: '완벽형 (수행 - 水行)',
            season: '겨울의 에너지',
            element: '수(水) - 지혜와 신중함',
            description: '신중하고 완벽한 계획을 선호하며 장기적 관점에서 사고하는 머니 패턴',
            strengths: ['뛰어난 리스크 관리', '장기적 전략 사고', '신중한 판단', '안정성과 지속성'],
            growthTips: ['실행력 향상', '적극성 배양', '유연성 개발', '기회 포착 능력 증대'],
            relationships: {
                enhances: '쟁취형(목)에게 깊이와 지혜를 제공',
                balances: '질러형(화)과 신중함과 열정의 조화',
                complements: '팔랑귀형(토)과 함께 안정적이고 지속가능한 기반 조성'
            }
        }
    };

    const pattern = patternDetails[patternKey];
    if (!pattern) return;

    // 전체 패턴 원 초기화
    document.querySelectorAll('[data-pattern]').forEach(circle => {
        circle.style.transform = 'scale(1)';
        circle.style.boxShadow = '';
    });

    // 선택된 패턴 하이라이트
    const selectedCircle = document.querySelector(`[data-pattern="${patternKey}"]`);
    if (selectedCircle) {
        selectedCircle.style.transform = 'scale(1.2)';
        selectedCircle.style.boxShadow = '0 0 30px rgba(255, 255, 255, 0.8)';
    }

    // 세부 정보 표시
    const detailsContainer = document.getElementById('pattern-details');
    const contentContainer = document.getElementById('pattern-detail-content');
    
    contentContainer.innerHTML = `
        <div class="text-center mb-6">
            <h4 class="text-2xl font-bold text-white mb-2">${pattern.title}</h4>
            <div class="flex items-center justify-center space-x-4 text-sm">
                <span class="bg-white/20 px-3 py-1 rounded-full">${pattern.season}</span>
                <span class="bg-white/20 px-3 py-1 rounded-full">${pattern.element}</span>
            </div>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <div class="bg-white/10 rounded-lg p-4">
                <h5 class="font-bold text-white mb-2">
                    <i class="fas fa-star text-yellow-400 mr-2"></i>핵심 특징
                </h5>
                <p class="text-sm text-gray-200 mb-3">${pattern.description}</p>
                <ul class="text-sm text-gray-300 space-y-1">
                    ${pattern.strengths.map(strength => `<li>• ${strength}</li>`).join('')}
                </ul>
            </div>
            
            <div class="bg-white/10 rounded-lg p-4">
                <h5 class="font-bold text-white mb-2">
                    <i class="fas fa-arrow-up text-green-400 mr-2"></i>성장 방향
                </h5>
                <ul class="text-sm text-gray-300 space-y-1">
                    ${pattern.growthTips.map(tip => `<li>• ${tip}</li>`).join('')}
                </ul>
            </div>
            
            <div class="bg-white/10 rounded-lg p-4">
                <h5 class="font-bold text-white mb-2">
                    <i class="fas fa-handshake text-blue-400 mr-2"></i>타 패턴과의 관계
                </h5>
                <div class="text-sm text-gray-300 space-y-2">
                    <div><strong>상생:</strong> ${pattern.relationships.enhances}</div>
                    <div><strong>조화:</strong> ${pattern.relationships.balances}</div>
                    <div><strong>보완:</strong> ${pattern.relationships.complements}</div>
                </div>
            </div>
        </div>
        
        <div class="text-center">
            <button onclick="closePatternDetails()" class="bg-white/20 hover:bg-white/30 px-6 py-2 rounded-lg text-white transition-colors">
                <i class="fas fa-times mr-2"></i>닫기
            </button>
        </div>
    `;
    
    detailsContainer.classList.remove('hidden');
    
    // 스웬로 이동
    detailsContainer.scrollIntoView({ behavior: 'smooth' });
}

// 패턴 세부 정보 닫기
function closePatternDetails() {
    document.getElementById('pattern-details').classList.add('hidden');
    
    // 모든 하이라이트 제거
    document.querySelectorAll('[data-pattern]').forEach(circle => {
        circle.style.transform = 'scale(1)';
        circle.style.boxShadow = '';
    });
}

// 브라우저 뒤로가기/새로고침 시 차트 재생성
window.addEventListener('pageshow', (event) => {
    if (event.persisted) {
        // 페이지가 캐시에서 로드된 경우
        setTimeout(() => {
            if (resultsData) {
                createBeliefCharts();
                displayPatternAnalysis();
            }
        }, 100);
    }
});

// 전역 함수로 등록 (클릭 이벤트에서 사용)
window.highlightPattern = highlightPattern;
window.closePatternDetails = closePatternDetails;