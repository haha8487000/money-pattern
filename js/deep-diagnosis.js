/**
 * 세계 최고 수준의 심층 무의식 머니패턴 진단 시스템
 * 이론적 기반: 정신분석학 + 인지행동치료 + 행동경제학 + 애착이론 + 신경과학
 */

// 20문항 무의식 머니패턴 진단 질문 (각 차원당 4문항)
const deepQuestions = [
    // A차원: 돈에 대한 무의식적 두려움 (Fear-Based Beliefs) - 문항 1-4
    {
        id: 1,
        dimension: 'fear',
        text: '돈을 많이 벌면 반드시 잃게 될 것 같은 불안감이 든다',
        category: '두려움 기반',
        reverse: false
    },
    {
        id: 2,
        dimension: 'fear', 
        text: '경제적 성공을 꿈꿀 때 죄책감이나 불편함을 느낀다',
        category: '두려움 기반',
        reverse: false
    },
    {
        id: 3,
        dimension: 'fear',
        text: '부자가 되면 가족이나 친구들이 나를 다르게 볼 것 같다',
        category: '두려움 기반', 
        reverse: false
    },
    {
        id: 4,
        dimension: 'fear',
        text: '돈 때문에 중요한 관계가 망가질까봐 걱정된다',
        category: '두려움 기반',
        reverse: false
    },
    
    // B차원: 돈에 대한 자격감/자존감 (Self-Worth & Deservingness) - 문항 5-8  
    {
        id: 5,
        dimension: 'worth',
        text: '나는 다른 사람들보다 경제적으로 성공할 자격이 부족하다고 느낀다',
        category: '자격 부족',
        reverse: false
    },
    {
        id: 6,
        dimension: 'worth',
        text: '돈을 벌기 위해서는 반드시 고통이나 희생이 따라야 한다고 생각한다',
        category: '자격 부족',
        reverse: false
    },
    {
        id: 7,
        dimension: 'worth', 
        text: '쉽게 돈을 벌면 뭔가 잘못된 것이라는 생각이 든다',
        category: '자격 부족',
        reverse: false
    },
    {
        id: 8,
        dimension: 'worth',
        text: '내 능력으로는 큰 부를 만들기 어렵다고 생각한다',
        category: '자격 부족',
        reverse: false
    },

    // C차원: 돈에 대한 통제감/안전감 (Control & Security) - 문항 9-12
    {
        id: 9,
        dimension: 'control',
        text: '아무리 저축해도 돈이 부족할 것 같은 불안감이 있다',
        category: '통제 불안',
        reverse: false
    },
    {
        id: 10, 
        dimension: 'control',
        text: '예상치 못한 지출이 생기면 극도로 스트레스를 받는다',
        category: '통제 불안',
        reverse: false
    },
    {
        id: 11,
        dimension: 'control',
        text: '돈 관리는 너무 복잡해서 전문가에게 맡기는 것이 낫다고 생각한다',
        category: '통제 불안', 
        reverse: false
    },
    {
        id: 12,
        dimension: 'control',
        text: '투자나 사업은 도박과 같다고 생각한다',
        category: '통제 불안',
        reverse: false
    },

    // D차원: 돈과 관계/도덕성 (Relationships & Morality) - 문항 13-16
    {
        id: 13,
        dimension: 'relationship',
        text: '돈이 많은 사람들은 대부분 이기적이고 냉정하다고 생각한다',
        category: '관계 갈등',
        reverse: false
    },
    {
        id: 14,
        dimension: 'relationship',
        text: '돈을 우선시하는 것은 도덕적으로 옳지 않다고 느낀다', 
        category: '관계 갈등',
        reverse: false
    },
    {
        id: 15,
        dimension: 'relationship',
        text: '돈 이야기를 하는 것 자체가 부끄럽고 불편하다',
        category: '관계 갈등',
        reverse: false
    },
    {
        id: 16,
        dimension: 'relationship', 
        text: '좋은 사람이 되려면 돈보다 다른 가치를 추구해야 한다고 생각한다',
        category: '관계 갈등',
        reverse: false
    },

    // E차원: 돈에 대한 운명론/무력감 (Fatalism & Helplessness) - 문항 17-20
    {
        id: 17,
        dimension: 'fatalism',
        text: '경제적 성공은 운이나 타고난 재능에 의해 결정된다고 생각한다',
        category: '운명 순응',
        reverse: false
    },
    {
        id: 18,
        dimension: 'fatalism',
        text: '아무리 노력해도 경제적 상황은 크게 바뀌지 않을 것이다',
        category: '운명 순응',
        reverse: false
    },
    {
        id: 19, 
        dimension: 'fatalism',
        text: '부자와 가난한 사람의 차이는 태어날 때부터 정해진다고 생각한다',
        category: '운명 순응',
        reverse: false
    },
    {
        id: 20,
        dimension: 'fatalism',
        text: '경제적 성공을 위한 정보나 기회는 특정 계층만 접근할 수 있다고 생각한다',
        category: '운명 순응',
        reverse: false
    }
];

// 진단 상태 관리
let currentQuestionIndex = 0;
let answers = {};
let startTime = null;

// 진단 시작
function startDeepDiagnosis() {
    document.querySelector('.container .max-w-5xl > div:first-child').style.display = 'none';
    document.querySelector('.container .max-w-5xl > div:nth-child(2)').style.display = 'none';
    document.getElementById('questions-container').classList.remove('hidden');
    
    startTime = new Date();
    currentQuestionIndex = 0;
    answers = {};
    
    showQuestion();
}

// 질문 표시
function showQuestion() {
    const question = deepQuestions[currentQuestionIndex];
    const questionCard = document.getElementById('question-card');
    
    // 진행률 업데이트
    const progress = ((currentQuestionIndex + 1) / deepQuestions.length) * 100;
    document.getElementById('progress-bar').style.width = progress + '%';
    document.getElementById('progress-text').textContent = `${currentQuestionIndex + 1} / ${deepQuestions.length}`;
    
    // 질문 카드 생성
    questionCard.innerHTML = `
        <div class="question-fade-in">
            <div class="mb-6">
                <div class="flex items-center justify-between mb-4">
                    <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-800">
                        <i class="fas fa-tag mr-1"></i>
                        ${question.category}
                    </span>
                    <span class="text-sm font-medium text-gray-500">문항 ${question.id}</span>
                </div>
                <h3 class="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-relaxed">
                    ${question.text}
                </h3>
                <p class="text-gray-600 text-sm mb-8">
                    <i class="fas fa-lightbulb text-yellow-500 mr-2"></i>
                    첫 번째 직감으로 솔직하게 답변해 주세요. 옳고 그른 답은 없습니다.
                </p>
            </div>
            
            <div class="grid grid-cols-7 gap-3" id="answer-options">
                ${generateAnswerOptions(question.id)}
            </div>
        </div>
    `;
    
    // 이전 답변이 있다면 표시
    if (answers[question.id]) {
        const selectedOption = document.querySelector(`[data-question="${question.id}"][data-value="${answers[question.id]}"]`);
        if (selectedOption) {
            selectedOption.classList.add('selected');
        }
    }
    
    updateNavigationButtons();
}

// 답변 옵션 생성 (7점 척도)
function generateAnswerOptions(questionId) {
    const labels = [
        { value: 1, text: '전혀<br>그렇지<br>않다', color: 'red' },
        { value: 2, text: '그렇지<br>않다', color: 'orange' },  
        { value: 3, text: '약간<br>그렇지<br>않다', color: 'yellow' },
        { value: 4, text: '보통<br>이다', color: 'gray' },
        { value: 5, text: '약간<br>그렇다', color: 'blue' },
        { value: 6, text: '그렇다', color: 'indigo' },
        { value: 7, text: '매우<br>그렇다', color: 'purple' }
    ];
    
    return labels.map(label => `
        <button class="deep-option" 
                onclick="selectDeepOption(${questionId}, ${label.value})" 
                data-question="${questionId}"
                data-value="${label.value}">
            <div class="deep-circle">
                ${label.value}
            </div>
            <span class="deep-label">${label.text}</span>
        </button>
    `).join('');
}

// 답변 선택 처리
function selectDeepOption(questionId, value) {
    // 이전 선택 제거
    document.querySelectorAll(`[data-question="${questionId}"]`).forEach(btn => {
        btn.classList.remove('selected');
    });
    
    // 새 선택 표시
    const selectedButton = document.querySelector(`[data-question="${questionId}"][data-value="${value}"]`);
    selectedButton.classList.add('selected');
    
    // 답변 저장
    answers[questionId] = value;
    
    updateNavigationButtons();
    
    // 자동 진행 (0.5초 후)
    setTimeout(() => {
        if (currentQuestionIndex < deepQuestions.length - 1) {
            nextQuestion();
        }
    }, 500);
}

// 다음 질문
function nextQuestion() {
    if (currentQuestionIndex < deepQuestions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    }
}

// 이전 질문  
function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
    }
}

// 네비게이션 버튼 상태 업데이트
function updateNavigationButtons() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const submitBtn = document.getElementById('submit-btn');
    const currentQuestion = deepQuestions[currentQuestionIndex];
    
    // 이전 버튼
    prevBtn.disabled = currentQuestionIndex === 0;
    
    // 마지막 질문인지 확인
    const isLastQuestion = currentQuestionIndex === deepQuestions.length - 1;
    const hasAnswer = answers[currentQuestion.id];
    
    if (isLastQuestion) {
        nextBtn.style.display = 'none';
        submitBtn.classList.remove('hidden');
        submitBtn.classList.add('flex');
        submitBtn.disabled = !hasAnswer;
    } else {
        nextBtn.style.display = 'flex';
        submitBtn.classList.add('hidden');
        nextBtn.disabled = !hasAnswer;
    }
}

// 진단 완료 및 결과 계산
function completeDeepDiagnosis() {
    const endTime = new Date();
    const duration = Math.round((endTime - startTime) / 1000); // 초 단위
    
    // 답변 완료 여부 확인
    if (Object.keys(answers).length < deepQuestions.length) {
        alert('모든 질문에 답변해 주세요.');
        return;
    }
    
    // 차원별 점수 계산
    const scores = calculateDeepScores(answers);
    
    // 무의식 패턴 분석
    const unconsciousPattern = analyzeUnconsciousPattern(scores);
    
    // 결과 데이터 저장
    const deepResults = {
        answers,
        scores,
        pattern: unconsciousPattern,
        duration,
        timestamp: endTime.toISOString()
    };
    
    // localStorage에 저장
    localStorage.setItem('deepDiagnosisResults', JSON.stringify(deepResults));
    
    // 결과 페이지로 이동
    window.location.href = 'deep-results.html';
}

// 차원별 점수 계산 (정밀한 알고리즘)
function calculateDeepScores(answers) {
    const dimensions = {
        fear: { name: '두려움 기반', questions: [1, 2, 3, 4], score: 0, level: '' },
        worth: { name: '자격 부족', questions: [5, 6, 7, 8], score: 0, level: '' },
        control: { name: '통제 불안', questions: [9, 10, 11, 12], score: 0, level: '' },
        relationship: { name: '관계 갈등', questions: [13, 14, 15, 16], score: 0, level: '' },
        fatalism: { name: '운명 순응', questions: [17, 18, 19, 20], score: 0, level: '' }
    };
    
    // 각 차원별 점수 계산
    for (const [dimension, info] of Object.entries(dimensions)) {
        let totalScore = 0;
        let validAnswers = 0;
        
        info.questions.forEach(questionId => {
            if (answers[questionId]) {
                const question = deepQuestions.find(q => q.id === questionId);
                let score = answers[questionId];
                
                // 역문항 처리 (필요시)
                if (question.reverse) {
                    score = 8 - score;
                }
                
                totalScore += score;
                validAnswers++;
            }
        });
        
        // 평균 점수 계산 (1-7 척도)
        const avgScore = validAnswers > 0 ? totalScore / validAnswers : 0;
        info.score = Math.round(avgScore * 100) / 100; // 소수점 2자리
        
        // 수준 분류 (7점 척도 기준)
        if (avgScore >= 6) info.level = 'very_high';
        else if (avgScore >= 5) info.level = 'high';  
        else if (avgScore >= 4) info.level = 'moderate';
        else if (avgScore >= 3) info.level = 'low';
        else info.level = 'very_low';
    }
    
    return dimensions;
}

// 무의식 패턴 분석 (고도화된 알고리즘)
function analyzeUnconsciousPattern(scores) {
    // 가장 높은 점수의 차원들 찾기
    const sortedDimensions = Object.entries(scores)
        .sort((a, b) => b[1].score - a[1].score);
    
    const primaryDimension = sortedDimensions[0];
    const secondaryDimension = sortedDimensions[1];
    
    // 주요 패턴 결정 (가장 높은 점수 기준)
    const patternMap = {
        'fear': 'fear_dominant',
        'worth': 'unworthiness_dominant', 
        'control': 'control_anxiety',
        'relationship': 'relationship_conflict',
        'fatalism': 'fatalistic_passive'
    };
    
    const primaryPattern = patternMap[primaryDimension[0]];
    const secondaryPattern = patternMap[secondaryDimension[0]];
    
    // 전체적인 무의식 지수 계산
    const totalScore = Object.values(scores).reduce((sum, dim) => sum + dim.score, 0) / 5;
    
    // 패턴 강도 계산
    const patternStrength = calculatePatternStrength(scores, primaryDimension[0]);
    
    return {
        primary: primaryPattern,
        secondary: secondaryPattern,
        totalScore,
        strength: patternStrength,
        scores: scores
    };
}

// 패턴 강도 계산
function calculatePatternStrength(scores, primaryDimension) {
    const primaryScore = scores[primaryDimension].score;
    
    if (primaryScore >= 6) return 'strong';
    else if (primaryScore >= 5) return 'moderate'; 
    else if (primaryScore >= 4) return 'mild';
    else return 'weak';
}

// 홈으로 이동
function goHome() {
    window.location.href = 'index.html';
}

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', function() {
    console.log('심층 무의식 머니패턴 진단 시스템 로드됨');
    console.log('총 문항 수:', deepQuestions.length);
    console.log('측정 차원:', ['두려움', '자격감', '통제감', '관계성', '운명론']);
});