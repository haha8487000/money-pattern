// 15문항 오행 머니패턴 진단 시스템
class SimpleDiagnosis {
    constructor() {
        this.currentQuestion = 0;
        this.answers = [];
        this.questions = this.initializeQuestions();
        this.elementConfig = this.initializeElements();
        this.init();
    }

    initializeElements() {
        return {
            wood: {
                name: '목(木)', 
                icon: '🌱', 
                color: 'green',
                category: '목(木) 패턴 - 성장과 확장',
                subtitle: '새로운 기회와 성장에 대한 당신의 성향을 알아봅시다',
                description: '성장, 확장, 새로운 시작의 에너지'
            },
            fire: {
                name: '화(火)', 
                icon: '🔥', 
                color: 'red',
                category: '화(火) 패턴 - 열정과 표현',
                subtitle: '돈에 대한 열정과 표현 방식을 확인해봅시다',
                description: '열정, 소통, 활발함의 에너지'
            },
            earth: {
                name: '토(土)', 
                icon: '🏔️', 
                color: 'yellow',
                category: '토(土) 패턴 - 안정과 신뢰',
                subtitle: '안정성과 신뢰에 대한 가치관을 살펴봅시다',
                description: '안정, 신뢰, 중심의 에너지'
            },
            metal: {
                name: '금(金)', 
                icon: '💰', 
                color: 'gray',
                category: '금(金) 패턴 - 효율과 완성',
                subtitle: '효율성과 완벽함을 추구하는 성향을 확인해봅시다',
                description: '효율, 완성, 정리의 에너지'
            },
            water: {
                name: '수(水)', 
                icon: '💧', 
                color: 'blue',
                category: '수(水) 패턴 - 지혜와 적응',
                subtitle: '지혜롭고 유연한 적응력을 측정해봅시다',
                description: '지혜, 적응, 흐름의 에너지'
            }
        };
    }

    initializeQuestions() {
        return [
            // 목(木) 패턴 - 성장과 확장 (3문항)
            {
                element: 'wood',
                text: '새로운 투자 기회가 생겼을 때 나는?',
                options: [
                    { text: '즉시 뛰어들어 새로운 기회를 잡는다', wood: 3, fire: 2, earth: 0, metal: 1, water: 1 },
                    { text: '신중하게 검토한 후 결정한다', wood: 1, fire: 0, earth: 2, metal: 3, water: 2 },
                    { text: '안정성을 우선시하여 보수적으로 접근한다', wood: 0, fire: 0, earth: 3, metal: 2, water: 1 },
                    { text: '다른 사람들의 의견을 많이 들어본다', wood: 1, fire: 3, earth: 1, metal: 1, water: 2 },
                    { text: '기회를 놓치는 것을 두려워하며 망설인다', wood: 2, fire: 1, earth: 1, metal: 0, water: 3 }
                ]
            },
            {
                element: 'wood',
                text: '목표 달성을 위해 가장 중요하게 생각하는 것은?',
                options: [
                    { text: '빠른 성장과 확장', wood: 3, fire: 2, earth: 0, metal: 1, water: 1 },
                    { text: '지속가능한 발전', wood: 2, fire: 1, earth: 3, metal: 2, water: 2 },
                    { text: '완벽한 계획 수립', wood: 1, fire: 0, earth: 2, metal: 3, water: 1 },
                    { text: '사람들과의 협력', wood: 1, fire: 3, earth: 1, metal: 0, water: 2 },
                    { text: '유연한 적응력', wood: 0, fire: 1, earth: 1, metal: 1, water: 3 }
                ]
            },
            {
                element: 'wood',
                text: '돈을 벌 때 가장 큰 동력은?',
                options: [
                    { text: '더 큰 꿈을 실현하고 싶은 욕구', wood: 3, fire: 2, earth: 1, metal: 1, water: 1 },
                    { text: '성공을 인정받고 싶은 욕구', wood: 2, fire: 3, earth: 0, metal: 2, water: 0 },
                    { text: '가족의 안정을 위한 책임감', wood: 1, fire: 1, earth: 3, metal: 1, water: 2 },
                    { text: '효율적인 시스템을 만들고 싶은 욕구', wood: 1, fire: 0, earth: 2, metal: 3, water: 1 },
                    { text: '자유로운 삶을 살고 싶은 욕구', wood: 2, fire: 1, earth: 0, metal: 0, water: 3 }
                ]
            },

            // 화(火) 패턴 - 열정과 표현 (3문항)
            {
                element: 'fire',
                text: '돈에 대해 이야기할 때 나는?',
                options: [
                    { text: '열정적으로 투자 계획을 공유한다', wood: 2, fire: 3, earth: 1, metal: 1, water: 0 },
                    { text: '신중하게 필요한 정보만 말한다', wood: 1, fire: 1, earth: 2, metal: 3, water: 2 },
                    { text: '가급적 돈 이야기를 피한다', wood: 0, fire: 0, earth: 2, metal: 1, water: 3 },
                    { text: '다른 사람들의 조언을 먼저 구한다', wood: 1, fire: 2, earth: 3, metal: 0, water: 1 },
                    { text: '성공 사례를 자랑스럽게 말한다', wood: 2, fire: 3, earth: 0, metal: 2, water: 1 }
                ]
            },
            {
                element: 'fire',
                text: '투자 결정을 내릴 때 가장 중요한 요소는?',
                options: [
                    { text: '직감과 느낌', wood: 2, fire: 3, earth: 0, metal: 0, water: 2 },
                    { text: '데이터와 분석', wood: 1, fire: 0, earth: 2, metal: 3, water: 1 },
                    { text: '안전성과 보장', wood: 0, fire: 0, earth: 3, metal: 2, water: 1 },
                    { text: '주변 사람들의 추천', wood: 1, fire: 2, earth: 2, metal: 0, water: 1 },
                    { text: '시장의 흐름과 트렌드', wood: 1, fire: 2, earth: 0, metal: 1, water: 3 }
                ]
            },
            {
                element: 'fire',
                text: '돈을 쓸 때 나의 성향은?',
                options: [
                    { text: '충동적으로 사고 싶은 것을 바로 산다', wood: 2, fire: 3, earth: 0, metal: 0, water: 1 },
                    { text: '계획에 따라 체계적으로 쓴다', wood: 1, fire: 0, earth: 2, metal: 3, water: 1 },
                    { text: '필요한 것만 신중하게 구매한다', wood: 0, fire: 0, earth: 3, metal: 2, water: 2 },
                    { text: '사람들과 함께 나누며 쓴다', wood: 1, fire: 2, earth: 2, metal: 1, water: 1 },
                    { text: '상황에 따라 유연하게 조절한다', wood: 1, fire: 1, earth: 1, metal: 1, water: 3 }
                ]
            },

            // 토(土) 패턴 - 안정과 신뢰 (3문항)
            {
                element: 'earth',
                text: '재정 관리에서 가장 중요하게 생각하는 것은?',
                options: [
                    { text: '빠른 수익 창출', wood: 3, fire: 2, earth: 0, metal: 1, water: 1 },
                    { text: '꾸준한 성장', wood: 2, fire: 1, earth: 3, metal: 2, water: 2 },
                    { text: '리스크 최소화', wood: 0, fire: 0, earth: 3, metal: 2, water: 1 },
                    { text: '전문가의 조언', wood: 1, fire: 1, earth: 2, metal: 3, water: 0 },
                    { text: '시장 변화에 대한 적응', wood: 1, fire: 2, earth: 0, metal: 1, water: 3 }
                ]
            },
            {
                element: 'earth',
                text: '목표한 금액을 모으기 위해서는?',
                options: [
                    { text: '공격적인 투자로 빠르게 달성한다', wood: 3, fire: 2, earth: 0, metal: 1, water: 1 },
                    { text: '매월 일정 금액을 꾸준히 저축한다', wood: 1, fire: 0, earth: 3, metal: 2, water: 1 },
                    { text: '안전한 금융상품에 장기간 투자한다', wood: 0, fire: 0, earth: 3, metal: 2, water: 1 },
                    { text: '전문가와 상담 후 전략을 세운다', wood: 1, fire: 1, earth: 2, metal: 3, water: 0 },
                    { text: '여러 방법을 조합하여 유연하게 접근한다', wood: 2, fire: 1, earth: 1, metal: 1, water: 3 }
                ]
            },
            {
                element: 'earth',
                text: '금융 상품 선택 시 가장 먼저 확인하는 것은?',
                options: [
                    { text: '수익률과 성장 가능성', wood: 3, fire: 2, earth: 1, metal: 2, water: 1 },
                    { text: '원금 보장 여부', wood: 0, fire: 0, earth: 3, metal: 1, water: 1 },
                    { text: '회사의 신뢰도와 평판', wood: 1, fire: 1, earth: 3, metal: 2, water: 0 },
                    { text: '수수료와 비용 구조', wood: 1, fire: 0, earth: 2, metal: 3, water: 1 },
                    { text: '유동성과 환금성', wood: 1, fire: 1, earth: 1, metal: 2, water: 3 }
                ]
            },

            // 금(金) 패턴 - 효율과 완성 (3문항)
            {
                element: 'metal',
                text: '재정 계획을 세울 때 나는?',
                options: [
                    { text: '큰 그림만 그리고 세부사항은 나중에', wood: 3, fire: 2, earth: 0, metal: 0, water: 1 },
                    { text: '모든 것을 세밀하게 계획하고 기록한다', wood: 1, fire: 0, earth: 2, metal: 3, water: 1 },
                    { text: '안전한 범위 내에서 보수적으로 계획한다', wood: 0, fire: 0, earth: 3, metal: 2, water: 1 },
                    { text: '전문가의 도움을 받아 체계적으로 세운다', wood: 1, fire: 1, earth: 2, metal: 3, water: 0 },
                    { text: '상황에 따라 유연하게 조정할 수 있도록 한다', wood: 2, fire: 1, earth: 1, metal: 1, water: 3 }
                ]
            },
            {
                element: 'metal',
                text: '투자 포트폴리오를 관리할 때?',
                options: [
                    { text: '성장 가능성이 높은 곳에 집중 투자', wood: 3, fire: 2, earth: 0, metal: 1, water: 1 },
                    { text: '리스크별로 분산하여 균형있게 투자', wood: 1, fire: 1, earth: 2, metal: 3, water: 2 },
                    { text: '안전한 상품 위주로 보수적 투자', wood: 0, fire: 0, earth: 3, metal: 2, water: 1 },
                    { text: '전문가 추천에 따라 체계적 투자', wood: 1, fire: 1, earth: 2, metal: 3, water: 0 },
                    { text: '시장 상황에 따라 비중을 조절', wood: 2, fire: 2, earth: 1, metal: 2, water: 3 }
                ]
            },
            {
                element: 'metal',
                text: '재정 상태를 점검할 때?',
                options: [
                    { text: '대략적인 현황만 파악한다', wood: 2, fire: 2, earth: 1, metal: 0, water: 1 },
                    { text: '정확한 숫자로 세밀하게 분석한다', wood: 0, fire: 0, earth: 1, metal: 3, water: 1 },
                    { text: '안전성 중심으로 보수적으로 평가한다', wood: 0, fire: 0, earth: 3, metal: 2, water: 1 },
                    { text: '전문가와 함께 객관적으로 검토한다', wood: 1, fire: 1, earth: 2, metal: 3, water: 0 },
                    { text: '변화하는 상황에 맞춰 유동적으로 본다', wood: 1, fire: 2, earth: 0, metal: 1, water: 3 }
                ]
            },

            // 수(水) 패턴 - 지혜와 적응 (3문항)
            {
                element: 'water',
                text: '예상치 못한 경제 위기가 올 때?',
                options: [
                    { text: '새로운 기회로 보고 적극적으로 대응한다', wood: 3, fire: 2, earth: 0, metal: 1, water: 2 },
                    { text: '미리 세운 비상 계획에 따라 행동한다', wood: 1, fire: 0, earth: 2, metal: 3, water: 1 },
                    { text: '안전한 곳으로 자산을 옮기고 방어한다', wood: 0, fire: 0, earth: 3, metal: 2, water: 1 },
                    { text: '전문가 조언을 구하고 신중하게 판단한다', wood: 1, fire: 1, earth: 2, metal: 3, water: 1 },
                    { text: '상황을 지켜보며 유연하게 적응한다', wood: 2, fire: 1, earth: 1, metal: 1, water: 3 }
                ]
            },
            {
                element: 'water',
                text: '새로운 금융 트렌드에 대한 나의 접근법은?',
                options: [
                    { text: '가장 먼저 도전해보고 경험한다', wood: 3, fire: 2, earth: 0, metal: 1, water: 1 },
                    { text: '충분히 검증된 후 체계적으로 접근한다', wood: 1, fire: 0, earth: 2, metal: 3, water: 1 },
                    { text: '안전성이 확보될 때까지 기다린다', wood: 0, fire: 0, earth: 3, metal: 2, water: 1 },
                    { text: '다른 사람들의 경험을 먼저 들어본다', wood: 1, fire: 2, earth: 2, metal: 1, water: 1 },
                    { text: '흐름을 파악하고 적절한 시점에 합류한다', wood: 2, fire: 1, earth: 1, metal: 2, water: 3 }
                ]
            },
            {
                element: 'water',
                text: '장기적 재정 목표 설정 시?',
                options: [
                    { text: '야심찬 목표를 세우고 도전한다', wood: 3, fire: 2, earth: 1, metal: 1, water: 1 },
                    { text: '구체적이고 실현 가능한 목표를 세운다', wood: 1, fire: 0, earth: 2, metal: 3, water: 2 },
                    { text: '안전하고 확실한 목표를 우선시한다', wood: 0, fire: 0, earth: 3, metal: 2, water: 1 },
                    { text: '전문가와 상담하여 객관적으로 설정한다', wood: 1, fire: 1, earth: 2, metal: 3, water: 1 },
                    { text: '상황 변화에 따라 조정 가능한 유연한 목표를 세운다', wood: 2, fire: 1, earth: 1, metal: 2, water: 3 }
                ]
            }
        ];
    }

    init() {
        this.updateUI();
        this.setupEventListeners();
    }

    setupEventListeners() {
        // 답변 선택 시 자동 진행
        document.addEventListener('change', (e) => {
            if (e.target.name === 'current-answer') {
                setTimeout(() => {
                    this.nextQuestion();
                }, 500);
            }
        });
    }

    updateUI() {
        const question = this.questions[this.currentQuestion];
        const element = this.elementConfig[question.element];
        
        // 진행률 업데이트
        const progress = ((this.currentQuestion + 1) / 15) * 100;
        document.getElementById('progress-bar').style.width = `${progress}%`;
        document.getElementById('current-question').textContent = this.currentQuestion + 1;
        
        // 현재 오행 요소 표시
        const elementSpan = document.getElementById('current-element');
        elementSpan.innerHTML = `<i class="fas fa-${this.getElementIcon(question.element)} mr-1"></i>${element.name} - ${element.description}`;
        elementSpan.className = `inline-flex items-center px-3 py-1 rounded-full text-sm font-bold bg-${element.color}-100 text-${element.color}-800`;
        
        // 질문 UI 업데이트
        document.getElementById('question-icon').textContent = element.icon;
        document.getElementById('question-category').textContent = element.category;
        document.getElementById('question-subtitle').textContent = element.subtitle;
        document.getElementById('question-text').textContent = question.text;
        
        // 옵션 업데이트
        this.updateOptions(question.options);
        
        // 버튼 상태 업데이트
        document.getElementById('prev-btn').disabled = this.currentQuestion === 0;
        
        // 기존 선택 해제
        document.querySelectorAll('input[name="current-answer"]').forEach(input => {
            input.checked = false;
        });
    }

    updateOptions(options) {
        const container = document.querySelector('.space-y-4');
        container.innerHTML = '';
        
        options.forEach((option, index) => {
            const label = document.createElement('label');
            label.className = 'flex items-center p-4 rounded-xl bg-gray-50 hover:bg-blue-50 cursor-pointer transition-colors border-2 border-transparent hover:border-blue-200';
            label.innerHTML = `
                <input type="radio" name="current-answer" value="${index}" class="w-5 h-5 text-blue-600 mr-4">
                <span class="text-gray-700 flex-1">${option.text}</span>
            `;
            container.appendChild(label);
        });
    }

    getElementIcon(element) {
        const icons = {
            wood: 'tree',
            fire: 'fire',
            earth: 'mountain',
            metal: 'coins',
            water: 'tint'
        };
        return icons[element];
    }

    nextQuestion() {
        const selectedAnswer = document.querySelector('input[name="current-answer"]:checked');
        if (!selectedAnswer) return;
        
        // 답변 저장
        const answerIndex = parseInt(selectedAnswer.value);
        const question = this.questions[this.currentQuestion];
        this.answers.push({
            questionIndex: this.currentQuestion,
            element: question.element,
            answerIndex: answerIndex,
            scores: question.options[answerIndex]
        });
        
        this.currentQuestion++;
        
        if (this.currentQuestion >= 15) {
            this.completeTest();
        } else {
            this.updateUI();
        }
    }

    previousQuestion() {
        if (this.currentQuestion > 0) {
            this.currentQuestion--;
            this.answers.pop(); // 이전 답변 제거
            this.updateUI();
        }
    }

    completeTest() {
        // 결과 계산
        const results = this.calculateResults();
        
        // localStorage에 저장
        localStorage.setItem('simpleTestResults', JSON.stringify({
            answers: this.answers,
            results: results,
            timestamp: new Date().toISOString()
        }));
        
        // 결과 페이지로 이동
        window.location.href = 'simple-results.html';
    }

    calculateResults() {
        const scores = { wood: 0, fire: 0, earth: 0, metal: 0, water: 0 };
        
        // 각 답변의 점수를 합산
        this.answers.forEach(answer => {
            const answerScores = answer.scores;
            scores.wood += answerScores.wood || 0;
            scores.fire += answerScores.fire || 0;
            scores.earth += answerScores.earth || 0;
            scores.metal += answerScores.metal || 0;
            scores.water += answerScores.water || 0;
        });
        
        // 주기질과 부기질 결정
        const sortedElements = Object.entries(scores)
            .sort(([,a], [,b]) => b - a);
        
        const primaryElement = sortedElements[0][0];
        const secondaryElement = sortedElements[1][0];
        
        return {
            scores: scores,
            primaryElement: primaryElement,
            secondaryElement: secondaryElement,
            elementRanking: sortedElements,
            totalScore: Object.values(scores).reduce((sum, score) => sum + score, 0)
        };
    }
}

// 전역 함수들 (HTML에서 호출)
let diagnosis;

function nextQuestion() {
    diagnosis.nextQuestion();
}

function previousQuestion() {
    diagnosis.previousQuestion();
}

// 페이지 로드 시 진단 시작
document.addEventListener('DOMContentLoaded', () => {
    diagnosis = new SimpleDiagnosis();
});