// 5문항 초간편 무의식 신념 진단 JavaScript

// 5가지 핵심 무의식 신념 질문
const ultraBeliefQuestions = [
    {
        id: 1,
        text: "돈은 사람을 망가뜨릴 수 있는 위험한 것이라고 생각한다.",
        category: "money_danger"
    },
    {
        id: 2, 
        text: "부자들은 다른 사람들을 착취했을 가능성이 높다고 생각한다.",
        category: "rich_exploitation"
    },
    {
        id: 3,
        text: "열심히 일한다고 해서 반드시 부자가 될 수 있는 것은 아니다.",
        category: "work_wealth_disconnect"
    },
    {
        id: 4,
        text: "돈이 많으면 인생의 대부분의 문제가 해결될 것이라고 믿는다.",
        category: "money_solution"
    },
    {
        id: 5,
        text: "나는 돈을 많이 벌 자격이 충분한 사람이라고 생각한다.",
        category: "self_worth"
    }
];

// 신념 유형 정의
const beliefTypes = {
    'money-pessimist': {
        name: '머니 비관주의자',
        emoji: '😰',
        description: '돈에 대해 부정적이고 두려운 감정을 가지고 있습니다. 돈이 가져올 수 있는 문제점들을 과도하게 우려하며, 부에 대한 죄책감을 느낄 수 있습니다.',
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

// 진단 상태
let currentQuestion = 0;
let answers = [];

// 진단 시작
function startDiagnosis() {
    document.getElementById('intro-screen').classList.add('hidden');
    document.getElementById('diagnosis-screen').classList.remove('hidden');
    
    currentQuestion = 0;
    answers = [];
    
    displayQuestion();
}

// 질문 표시
function displayQuestion() {
    const question = ultraBeliefQuestions[currentQuestion];
    
    // 질문 텍스트 업데이트
    document.getElementById('question-text').textContent = question.text;
    
    // 진행률 업데이트
    const progress = ((currentQuestion + 1) / ultraBeliefQuestions.length) * 100;
    document.getElementById('progress-bar').style.width = `${progress}%`;
    document.getElementById('progress-text').textContent = `${currentQuestion + 1}/${ultraBeliefQuestions.length}`;
    
    // 답변 버튼 이벤트 리스너 설정
    setupAnswerButtons();
    
    // 이전/다음 버튼 표시 설정
    updateNavigationButtons();
}

// 답변 버튼 설정
function setupAnswerButtons() {
    const answerButtons = document.querySelectorAll('.answer-btn');
    
    // 기존 선택 상태 초기화
    answerButtons.forEach(btn => {
        btn.classList.remove('border-purple-500', 'bg-purple-100');
        btn.classList.add('border-gray-200');
    });
    
    // 클릭 이벤트 설정
    answerButtons.forEach(btn => {
        btn.onclick = () => selectAnswer(btn);
    });
}

// 답변 선택
function selectAnswer(selectedBtn) {
    const score = parseInt(selectedBtn.dataset.score);
    const question = ultraBeliefQuestions[currentQuestion];
    
    // 답변 저장
    answers[currentQuestion] = {
        questionId: question.id,
        category: question.category,
        score: score,
        text: question.text
    };
    
    // 버튼 스타일 업데이트
    document.querySelectorAll('.answer-btn').forEach(btn => {
        btn.classList.remove('border-purple-500', 'bg-purple-100');
        btn.classList.add('border-gray-200');
    });
    
    selectedBtn.classList.remove('border-gray-200');
    selectedBtn.classList.add('border-purple-500', 'bg-purple-100');
    
    // 다음 버튼 활성화
    document.getElementById('next-btn').classList.remove('hidden');
    
    // 0.5초 후 자동으로 다음 질문으로
    setTimeout(() => {
        if (currentQuestion < ultraBeliefQuestions.length - 1) {
            nextQuestion();
        } else {
            completeTest();
        }
    }, 800);
}

// 다음 질문
function nextQuestion() {
    currentQuestion++;
    
    if (currentQuestion < ultraBeliefQuestions.length) {
        displayQuestion();
    } else {
        completeTest();
    }
}

// 이전 질문
function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        displayQuestion();
    }
}

// 내비게이션 버튼 업데이트
function updateNavigationButtons() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    // 이전 버튼
    if (currentQuestion > 0) {
        prevBtn.classList.remove('hidden');
    } else {
        prevBtn.classList.add('hidden');
    }
    
    // 다음 버튼 (답변 선택 전까지는 숨김)
    nextBtn.classList.add('hidden');
}

// 테스트 완료
function completeTest() {
    // 진단 화면 숨기기
    document.getElementById('diagnosis-screen').classList.add('hidden');
    
    // 완료 화면 표시
    document.getElementById('completion-screen').classList.remove('hidden');
    
    // 결과 분석
    const results = analyzeResults();
    
    // 결과 저장
    localStorage.setItem('ultraBeliefResults', JSON.stringify({
        answers: answers,
        results: results,
        timestamp: Date.now()
    }));
    
    // 2초 후 이메일 수집 페이지로 이동
    setTimeout(() => {
        window.location.href = 'ultra-belief-email.html';
    }, 2000);
}

// 결과 분석
function analyzeResults() {
    const totalScore = answers.reduce((sum, answer) => sum + answer.score, 0);
    const averageScore = totalScore / answers.length;
    
    // 신념 유형 결정 로직
    let beliefType;
    
    if (averageScore <= 2.0) {
        beliefType = 'money-optimist'; // 낮은 점수 = 긍정적 신념
    } else if (averageScore <= 2.5) {
        beliefType = 'money-neutral';
    } else if (averageScore <= 3.0) {
        beliefType = 'money-balanced';
    } else if (averageScore <= 3.5) {
        beliefType = 'money-conflicted';
    } else {
        beliefType = 'money-pessimist'; // 높은 점수 = 부정적 신념
    }
    
    // 신념 강도 결정
    let strength;
    if (averageScore <= 2.0 || averageScore >= 4.0) {
        strength = '강함';
    } else if (averageScore <= 2.5 || averageScore >= 3.5) {
        strength = '보통';
    } else {
        strength = '약함';
    }
    
    return {
        beliefType: beliefType,
        totalScore: totalScore,
        averageScore: averageScore,
        strength: strength,
        categoryScores: calculateCategoryScores()
    };
}

// 카테고리별 점수 계산
function calculateCategoryScores() {
    const categories = {};
    
    answers.forEach(answer => {
        if (!categories[answer.category]) {
            categories[answer.category] = [];
        }
        categories[answer.category].push(answer.score);
    });
    
    // 각 카테고리 평균 계산
    Object.keys(categories).forEach(category => {
        const scores = categories[category];
        categories[category] = scores.reduce((sum, score) => sum + score, 0) / scores.length;
    });
    
    return categories;
}

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', () => {
    console.log('5문항 초간편 무의식 신념 진단 시스템 로드됨');
});