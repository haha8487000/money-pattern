// 백만장자 머니패턴 심리진단지 - 진단 페이지 JavaScript

// 5가지 머니패턴 정의
const moneyPatternDefinitions = {
    '팔랑귀': {
        name: '팔랑귀형',
        emoji: '👂',
        shortDescription: '주변 의견에 쉽게 흔들리는',
        description: '다른 사람들의 의견이나 추천에 쉽게 영향을 받는 성향입니다. 사회적 관계를 중시하며, 주변 사람들과의 조화를 위해 지출하는 경우가 많습니다.',
        characteristics: ['사회적 영향에 민감', '타인의 추천을 신뢰', '관계 지향적 소비', '동조 성향'],
        color: '#f59e0b'
    },
    '질러': {
        name: '질러형',
        emoji: '💸',
        shortDescription: '충동적이고 즉흥적인',
        description: '계획보다는 충동에 따라 행동하며, 현재의 만족을 우선시하는 성향입니다. 즉흥적인 구매나 투자 결정을 내리는 경향이 있습니다.',
        characteristics: ['충동적 소비', '즉흥적 결정', '현재 지향적', '감정적 구매'],
        color: '#ef4444'
    },
    '완벽': {
        name: '완벽형',
        emoji: '🎯',
        shortDescription: '신중하고 계획적인',
        description: '모든 것을 꼼꼼히 따져보고 계획적으로 접근하는 성향입니다. 위험을 최소화하고 안정성을 추구하며, 완벽한 결정을 내리려고 노력합니다.',
        characteristics: ['계획적 접근', '위험 회피', '정보 수집', '신중한 결정'],
        color: '#10b981'
    },
    '나잘나': {
        name: '나잘나형',
        emoji: '💎',
        shortDescription: '자기과시를 즐기는',
        description: '자신의 성공이나 능력을 드러내는 것을 좋아하며, 개성과 스타일을 중시하는 성향입니다. 남들에게 보여지는 것을 의식한 소비를 합니다.',
        characteristics: ['과시적 소비', '자기표현 중시', '브랜드 선호', '스타일 추구'],
        color: '#8b5cf6'
    },
    '쟁취': {
        name: '쟁취형',
        emoji: '🏆',
        shortDescription: '성취욕이 강한',
        description: '목표 달성과 경쟁에서 이기는 것을 중시하는 성향입니다. 투자나 재정 관리를 게임이나 경쟁으로 여기며, 높은 성취를 추구합니다.',
        characteristics: ['목표 지향적', '경쟁 의식', '성취욕', '도전 정신'],
        color: '#3b82f6'
    }
};

// 20개의 진단 질문 리스트
const diagnosisQuestions = [
    "주변 사람들이 좋다고 이야기하는 금융 상품이나 투자처에 마음이 끌린다.",
    "사회적 관계나 모임을 위해 예산을 초과하여 지출한 경험이 있다.",
    "다른 사람에게 재정적으로 도움을 주는 것을 거절하기 어렵다고 느낀다.",
    "마음에 드는 물건이 생기면, 계획에 없었더라도 바로 사는 편이다.",
    "'대박'이라는 투자 기회가 생기면, 깊게 분석하기보다 먼저 참여하고 싶다.",
    "미래를 위해 저축하기보다 현재의 즐거움과 경험을 위해 돈을 쓰는 것을 선호한다.",
    "돈을 쓰기 전에는 여러 가지 정보를 비교하고 최선의 선택인지 확인해야 마음이 놓인다.",
    "금융 상품에 가입할 때, 모든 약관과 세부사항을 꼼꼼히 읽어보는 편이다.",
    "투자를 할 때, 원금 손실의 가능성이 조금이라도 있는 곳은 피하고 싶다.",
    "다른 사람들에게 나의 재정적 성공이나 능력을 보여주는 것을 즐긴다.",
    "남들이 잘 모르는 독특하거나 새로운 방식의 투자에 매력을 느낀다.",
    "나의 개성과 스타일을 드러내기 위해 돈을 쓰는 것은 가치 있다고 생각한다.",
    "재정적인 목표를 세우고 그것을 달성했을 때 큰 성취감을 느낀다.",
    "나의 자산이 다른 사람들보다 빠르게 늘어나는 것을 볼 때 만족스럽다.",
    "투자를 일종의 경쟁이나 게임처럼 느끼며, 이기고 싶다는 마음이 강하다.",
    "돈은 사람을 망가뜨릴 수 있는 위험한 것이라고 생각한다.",
    "부자들은 다른 사람들을 착취했을 가능성이 높다고 생각한다.",
    "열심히 일한다고 해서 반드시 부자가 될 수 있는 것은 아니다.",
    "돈이 많으면 인생의 대부분의 문제가 해결될 것이라고 믿는다.",
    "나는 돈을 많이 벌 자격이 충분한 사람이라고 생각한다."
];

// 진단 상태 관리 변수들
let currentQuestionIndex = 0;
let userAnswers = [];
let totalQuestions = diagnosisQuestions.length;
let selectedScore = null;

// 5가지 머니패턴 점수 저장 변수
let moneyPatternScores = {
    '팔랑귀': 0,  // 1~3번 질문 (사회적 영향)
    '질러': 0,    // 4~6번 질문 (충동적 소비)
    '완벽': 0,    // 7~9번 질문 (신중함, 완벽주의)
    '나잘나': 0,  // 10~12번 질문 (과시욕, 자기표현)
    '쟁취': 0     // 13~15번 질문 (성취욕, 경쟁심)
};

// 패턴별 질문 범위 매핑
const patternQuestionMapping = {
    '팔랑귀': [0, 1, 2],     // 1~3번 질문 (인덱스 0~2)
    '질러': [3, 4, 5],       // 4~6번 질문 (인덱스 3~5)
    '완벽': [6, 7, 8],       // 7~9번 질문 (인덱스 6~8)
    '나잘나': [9, 10, 11],   // 10~12번 질문 (인덱스 9~11)
    '쟁취': [12, 13, 14]     // 13~15번 질문 (인덱스 12~14)
};

// 진단 페이지 초기화
function initializeDiagnosisPage() {
    console.log('진단 페이지 초기화 중...');
    
    // 화면 초기 설정
    showStartScreen();
    
    // 진행 바 초기화
    updateProgressBar();
    
    // CSS 스타일 추가
    addDynamicStyles();
}

// 동적 CSS 스타일 추가
function addDynamicStyles() {
    const style = document.createElement('style');
    style.textContent = `
        /* 점수 버튼 스타일 */
        .score-btn {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 16px 8px;
            border: 2px solid #e5e7eb;
            border-radius: 16px;
            background: white;
            transition: all 0.3s ease;
            cursor: pointer;
            min-height: 100px;
        }
        
        .score-btn:hover {
            border-color: #3b82f6;
            background-color: #f8faff;
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(59, 130, 246, 0.15);
        }
        
        .score-btn.selected {
            border-color: #3b82f6;
            background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
            color: #1e40af;
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(59, 130, 246, 0.25);
        }
        
        .score-circle {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background-color: #f3f4f6;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            font-size: 18px;
            color: #6b7280;
            margin-bottom: 8px;
            transition: all 0.3s ease;
        }
        
        .score-btn:hover .score-circle,
        .score-btn.selected .score-circle {
            background-color: #3b82f6;
            color: white;
            transform: scale(1.1);
        }
        
        .score-label {
            font-size: 12px;
            font-weight: 500;
            color: #6b7280;
            text-align: center;
            transition: all 0.3s ease;
        }
        
        .score-btn:hover .score-label,
        .score-btn.selected .score-label {
            color: #1e40af;
            font-weight: 600;
        }
        
        /* 애니메이션 */
        .slide-in-right {
            animation: slideInRight 0.5s ease-out;
        }
        
        .slide-out-left {
            animation: slideOutLeft 0.3s ease-in;
        }
        
        @keyframes slideInRight {
            from {
                opacity: 0;
                transform: translateX(50px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
        
        @keyframes slideOutLeft {
            from {
                opacity: 1;
                transform: translateX(0);
            }
            to {
                opacity: 0;
                transform: translateX(-50px);
            }
        }
        
        /* 모바일 최적화 */
        @media (max-width: 768px) {
            .score-btn {
                padding: 12px 6px;
                min-height: 80px;
            }
            
            .score-circle {
                width: 32px;
                height: 32px;
                font-size: 14px;
            }
            
            .score-label {
                font-size: 10px;
            }
        }
    `;
    document.head.appendChild(style);
}

// 시작 화면 표시
function showStartScreen() {
    document.getElementById('start-screen').classList.remove('hidden');
    document.getElementById('question-screen').classList.add('hidden');
    document.getElementById('completion-screen').classList.add('hidden');
}

// 진단 시작
function startDiagnosis() {
    console.log('진단 시작');
    
    // 초기화
    currentQuestionIndex = 0;
    userAnswers = [];
    selectedScore = null;
    
    // 화면 전환
    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('question-screen').classList.remove('hidden');
    
    // 첫 번째 질문 표시
    showCurrentQuestion();
}

// 현재 질문 표시
function showCurrentQuestion() {
    const questionScreen = document.getElementById('question-screen');
    
    // 애니메이션을 위한 클래스 추가
    questionScreen.classList.add('slide-in-right');
    
    // 질문 정보 업데이트
    document.getElementById('question-number').textContent = `질문 ${currentQuestionIndex + 1}`;
    document.getElementById('question-text').textContent = diagnosisQuestions[currentQuestionIndex];
    
    // 선택된 점수 초기화
    selectedScore = null;
    clearScoreSelection();
    
    // 진행바 및 네비게이션 업데이트
    updateProgressBar();
    updateNavigationButtons();
    
    // 애니메이션 클래스 제거 (재사용을 위해)
    setTimeout(() => {
        questionScreen.classList.remove('slide-in-right');
    }, 500);
}

// 점수 선택
function selectScore(score) {
    console.log(`점수 선택: ${score}`);
    
    selectedScore = score;
    
    // 모든 버튼의 선택 상태 초기화
    clearScoreSelection();
    
    // 선택된 버튼에 selected 클래스 추가
    const selectedButton = document.querySelector(`[data-score="${score}"]`);
    selectedButton.classList.add('selected');
    
    // 답변 저장
    userAnswers[currentQuestionIndex] = {
        questionIndex: currentQuestionIndex,
        question: diagnosisQuestions[currentQuestionIndex],
        score: score,
        timestamp: new Date().toISOString()
    };
    
    // 네비게이션 버튼 업데이트
    updateNavigationButtons();
    
    // 1초 후 자동으로 다음 질문으로 이동
    setTimeout(() => {
        if (currentQuestionIndex < totalQuestions - 1) {
            nextQuestion();
        } else {
            completeAllQuestions();
        }
    }, 800);
}

// 점수 선택 초기화
function clearScoreSelection() {
    const allScoreButtons = document.querySelectorAll('.score-btn');
    allScoreButtons.forEach(btn => {
        btn.classList.remove('selected');
    });
}

// 다음 질문으로 이동
function nextQuestion() {
    if (selectedScore === null) {
        alert('점수를 선택해 주세요.');
        return;
    }
    
    if (currentQuestionIndex < totalQuestions - 1) {
        currentQuestionIndex++;
        showCurrentQuestion();
    }
}

// 이전 질문으로 이동
function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        
        // 이전에 선택했던 답변이 있다면 복원
        const previousAnswer = userAnswers[currentQuestionIndex];
        if (previousAnswer) {
            selectedScore = previousAnswer.score;
        }
        
        showCurrentQuestion();
        
        // 이전 선택 복원
        if (previousAnswer) {
            setTimeout(() => {
                const button = document.querySelector(`[data-score="${previousAnswer.score}"]`);
                if (button) {
                    button.classList.add('selected');
                }
            }, 100);
        }
    }
}

// 모든 질문 완료
function completeAllQuestions() {
    console.log('모든 질문 완료', userAnswers);
    
    // 머니패턴 점수 계산
    const patternResults = calculateMoneyPatternScores();
    console.log('머니패턴 계산 결과:', patternResults);
    
    // LocalStorage에 답변과 계산 결과 저장
    MoneyPattern.Storage.set('diagnosisAnswers', userAnswers);
    MoneyPattern.Storage.set('patternScores', moneyPatternScores);
    MoneyPattern.Storage.set('patternResults', patternResults);
    MoneyPattern.Storage.set('diagnosisCompleted', true);
    MoneyPattern.Storage.set('diagnosisDate', new Date().toISOString());
    
    // 완료 화면 표시
    document.getElementById('question-screen').classList.add('hidden');
    document.getElementById('completion-screen').classList.remove('hidden');
}

// 머니패턴 점수 계산 함수
function calculateMoneyPatternScores() {
    console.log('머니패턴 점수 계산 시작...');
    
    // 점수 초기화
    moneyPatternScores = {
        '팔랑귀': 0,
        '질러': 0,
        '완벽': 0,
        '나잘나': 0,
        '쟁취': 0
    };
    
    // 각 패턴별로 해당 질문들의 점수 합계 계산
    Object.keys(patternQuestionMapping).forEach(pattern => {
        const questionIndices = patternQuestionMapping[pattern];
        
        questionIndices.forEach(questionIndex => {
            if (userAnswers[questionIndex]) {
                moneyPatternScores[pattern] += userAnswers[questionIndex].score;
            }
        });
        
        console.log(`${pattern} 점수:`, moneyPatternScores[pattern]);
    });
    
    // 16~20번 질문은 별도 처리 (기질 보정용)
    const additionalQuestions = [15, 16, 17, 18, 19]; // 16~20번 질문 (인덱스 15~19)
    let additionalScores = [];
    
    additionalQuestions.forEach((questionIndex, index) => {
        if (userAnswers[questionIndex]) {
            additionalScores[index] = userAnswers[questionIndex].score;
        }
    });
    
    // 16~20번 질문을 바탕으로 기질 보정
    applyPersonalityAdjustment(additionalScores);
    
    // 주기질(1위)과 부기질(2위) 결정
    const sortedPatterns = Object.entries(moneyPatternScores)
        .sort(([,scoreA], [,scoreB]) => scoreB - scoreA);
    
    const primaryPattern = sortedPatterns[0][0];   // 주기질 (가장 높은 점수)
    const secondaryPattern = sortedPatterns[1][0]; // 부기질 (두 번째로 높은 점수)
    
    const results = {
        scores: { ...moneyPatternScores },
        sortedPatterns: sortedPatterns,
        primaryPattern: primaryPattern,
        secondaryPattern: secondaryPattern,
        primaryScore: sortedPatterns[0][1],
        secondaryScore: sortedPatterns[1][1],
        totalScore: Object.values(moneyPatternScores).reduce((sum, score) => sum + score, 0),
        additionalScores: additionalScores,
        calculatedAt: new Date().toISOString()
    };
    
    console.log('최종 계산 결과:', results);
    return results;
}

// 16~20번 질문을 바탕으로 기질 보정 적용
function applyPersonalityAdjustment(additionalScores) {
    console.log('기질 보정 적용 중...', additionalScores);
    
    // 16번: "돈은 사람을 망가뜨릴 수 있는 위험한 것이라고 생각한다"
    // 17번: "부자들은 다른 사람들을 착취했을 가능성이 높다고 생각한다"  
    // 18번: "열심히 일한다고 해서 반드시 부자가 될 수 있는 것은 아니다"
    // → 높은 점수일수록 보수적/완벽 성향 강화
    
    // 19번: "돈이 많으면 인생의 대부분의 문제가 해결될 것이라고 믿는다"
    // 20번: "나는 돈을 많이 벌 자격이 충분한 사람이라고 생각한다"
    // → 높은 점수일수록 나잘나/쟁취 성향 강화
    
    if (additionalScores.length >= 5) {
        // 16~18번 질문 (부정적 머니 마인드셋)
        const negativeMoneyMindset = (additionalScores[0] + additionalScores[1] + additionalScores[2]) / 3;
        
        // 19~20번 질문 (긍정적 자기 효능감)
        const positiveMoneyMindset = (additionalScores[3] + additionalScores[4]) / 2;
        
        // 보정 적용
        if (negativeMoneyMindset > 3) {
            // 부정적 마인드셋이 강할 때 완벽 성향 강화
            moneyPatternScores['완벽'] += Math.floor(negativeMoneyMindset - 3);
            console.log('완벽 성향 보정 적용:', Math.floor(negativeMoneyMindset - 3));
        }
        
        if (positiveMoneyMindset > 3.5) {
            // 긍정적 자기 효능감이 강할 때 나잘나/쟁취 성향 강화
            const boost = Math.floor((positiveMoneyMindset - 3.5) * 2);
            moneyPatternScores['나잘나'] += boost;
            moneyPatternScores['쟁취'] += boost;
            console.log('나잘나/쟁취 성향 보정 적용:', boost);
        }
    }
}

// 결과 페이지로 이동
function viewResults() {
    console.log('결과 페이지로 이동');
    
    // 부드러운 전환 효과
    document.body.style.transition = 'opacity 0.3s ease';
    document.body.style.opacity = '0';
    
    setTimeout(() => {
        window.location.href = 'email-collection.html';
    }, 300);
}

// 진행바 업데이트
function updateProgressBar() {
    const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;
    document.getElementById('progress-bar').style.width = `${progress}%`;
    document.getElementById('progress-text').textContent = `${currentQuestionIndex + 1} / ${totalQuestions}`;
}

// 네비게이션 버튼 상태 업데이트
function updateNavigationButtons() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    // 이전 버튼
    prevBtn.disabled = currentQuestionIndex === 0;
    prevBtn.classList.toggle('opacity-30', currentQuestionIndex === 0);
    prevBtn.classList.toggle('cursor-not-allowed', currentQuestionIndex === 0);
    
    // 다음 버튼 (점수 선택 시에만 활성화)
    if (selectedScore !== null) {
        nextBtn.className = 'flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors cursor-pointer';
        if (currentQuestionIndex === totalQuestions - 1) {
            nextBtn.innerHTML = '<span>결과 보기</span><i class="fas fa-chevron-right"></i>';
        } else {
            nextBtn.innerHTML = '<span>다음 질문</span><i class="fas fa-chevron-right"></i>';
        }
        nextBtn.disabled = false;
    } else {
        nextBtn.className = 'flex items-center space-x-2 text-gray-400 cursor-not-allowed';
        nextBtn.innerHTML = '<span>답변을 선택해 주세요</span><i class="fas fa-chevron-right"></i>';
        nextBtn.disabled = true;
    }
}

// 키보드 이벤트 처리
document.addEventListener('keydown', (e) => {
    const questionScreen = document.getElementById('question-screen');
    if (!questionScreen.classList.contains('hidden')) {
        // 숫자키 1-5로 점수 선택
        if (e.key >= '1' && e.key <= '5') {
            e.preventDefault();
            const score = parseInt(e.key);
            selectScore(score);
        }
        // 좌우 화살표로 이동
        else if (e.key === 'ArrowLeft' && currentQuestionIndex > 0) {
            e.preventDefault();
            previousQuestion();
        }
        else if (e.key === 'ArrowRight' && selectedScore !== null) {
            e.preventDefault();
            if (currentQuestionIndex < totalQuestions - 1) {
                nextQuestion();
            } else {
                completeAllQuestions();
            }
        }
    }
});

// 페이지 이탈 경고
window.addEventListener('beforeunload', (e) => {
    const questionScreen = document.getElementById('question-screen');
    const completionScreen = document.getElementById('completion-screen');
    
    // 진단 중이고 아직 완료하지 않았을 때만 경고
    if (!questionScreen.classList.contains('hidden') && completionScreen.classList.contains('hidden')) {
        e.preventDefault();
        e.returnValue = '진단을 완료하지 않고 페이지를 떠나면 답변 내용이 사라집니다. 정말 떠나시겠습니까?';
    }
});

// 전역 초기화 상태 체크
let diagnosisInitialized = false;

// 페이지 로드 완료 시 초기화 (중복 방지)
function initDiagnosisOnce() {
    if (!diagnosisInitialized) {
        diagnosisInitialized = true;
        initializeDiagnosisPage();
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDiagnosisOnce);
} else {
    initDiagnosisOnce();
}