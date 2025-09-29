// 무의식 신념 진단 JavaScript - Updated 2024.12.21

// 답변 저장 배열
let beliefAnswers = [null, null, null, null, null]; // 5개 질문

// 페이지 초기화
function initializeBeliefDiagnosis() {
    console.log('무의식 신념 진단 초기화 중...');
    
    // 모든 질문에 답변했는지 체크하는 함수
    checkAllAnswered();
}

// 옵션 선택 함수
function selectOption(questionNum, value) {
    console.log(`질문 ${questionNum}에 ${value}점 선택`);
    
    // 답변 저장 (0-based index로 저장)
    beliefAnswers[questionNum - 1] = value;
    
    // 해당 질문의 모든 버튼 선택 해제
    const questionContainer = document.getElementById(`q${questionNum}`);
    const allButtons = questionContainer.querySelectorAll('.belief-option');
    allButtons.forEach(btn => btn.classList.remove('selected'));
    
    // 선택된 버튼에 selected 클래스 추가
    const selectedButton = questionContainer.querySelector(`[data-value="${value}"]`);
    selectedButton.classList.add('selected');
    
    // 모든 질문에 답변했는지 체크
    checkAllAnswered();
}

// 모든 질문에 답변했는지 체크
function checkAllAnswered() {
    const allAnswered = beliefAnswers.every(answer => answer !== null);
    const submitBtn = document.getElementById('submit-btn');
    
    if (allAnswered) {
        submitBtn.disabled = false;
        submitBtn.querySelector('i').className = 'fas fa-check-circle mr-2';
        submitBtn.nextElementSibling.textContent = '모든 질문에 답변하셨습니다!';
        submitBtn.nextElementSibling.className = 'text-sm text-green-600 mt-3 font-medium';
    } else {
        submitBtn.disabled = true;
        submitBtn.querySelector('i').className = 'fas fa-chart-line mr-2';
        submitBtn.nextElementSibling.textContent = '모든 질문에 답변해 주세요';
        submitBtn.nextElementSibling.className = 'text-sm text-gray-500 mt-3';
    }
}

// 결과 보기 함수
function showResults() {
    // 모든 질문에 답변했는지 최종 확인
    if (beliefAnswers.includes(null)) {
        alert('모든 질문에 답변해 주세요.');
        return;
    }
    
    console.log('무의식 신념 답변:', beliefAnswers);
    
    // 무의식 신념 분석
    const beliefAnalysis = analyzeBeliefScores(beliefAnswers);
    console.log('무의식 신념 분석 결과:', beliefAnalysis);
    
    // 결과를 localStorage에 저장
    MoneyPattern.Storage.set('beliefAnswers', beliefAnswers);
    MoneyPattern.Storage.set('beliefAnalysis', beliefAnalysis);
    MoneyPattern.Storage.set('beliefCompleted', true);
    MoneyPattern.Storage.set('beliefDate', new Date().toISOString());
    
    // 무의식 신념 결과 페이지로 이동
    document.body.style.transition = 'opacity 0.3s ease';
    document.body.style.opacity = '0';
    
    setTimeout(() => {
        console.log('이메일 수집 페이지로 이동 시도...');
        window.location.href = 'ultra-belief-email.html?from=belief';
    }, 300);
}

// 무의식 신념 점수 분석
function analyzeBeliefScores(answers) {
    const [q1, q2, q3, q4, q5] = answers;
    
    // 부정적 머니 마인드셋 (1~3번 질문)
    const negativeBeliefs = (q1 + q2 + q3) / 3;
    
    // 긍정적 머니 마인드셋 (4~5번 질문) 
    const positiveBeliefs = (q4 + q5) / 2;
    
    // 전체 평균
    const overallScore = (q1 + q2 + q3 + q4 + q5) / 5;
    
    // 신념 유형 결정
    let beliefType = '';
    let beliefDescription = '';
    
    if (negativeBeliefs >= 4 && positiveBeliefs <= 2) {
        beliefType = 'money-pessimist';
        beliefDescription = '머니 비관주의자';
    } else if (negativeBeliefs <= 2 && positiveBeliefs >= 4) {
        beliefType = 'money-optimist';
        beliefDescription = '머니 낙관주의자';
    } else if (negativeBeliefs >= 3.5 && positiveBeliefs >= 3.5) {
        beliefType = 'money-conflicted';
        beliefDescription = '머니 갈등형';
    } else if (negativeBeliefs <= 2.5 && positiveBeliefs <= 2.5) {
        beliefType = 'money-neutral';
        beliefDescription = '머니 중립형';
    } else {
        beliefType = 'money-balanced';
        beliefDescription = '머니 균형형';
    }
    
    // 세부 분석
    const detailedAnalysis = {
        moneyDanger: q1, // 돈의 위험성
        richPrejudice: q2, // 부자에 대한 편견
        successDoubt: q3, // 성공에 대한 의구심
        moneySolution: q4, // 돈의 해결책 믿음
        worthiness: q5 // 자격감
    };
    
    return {
        type: beliefType,
        description: beliefDescription,
        negativeBeliefs: Math.round(negativeBeliefs * 10) / 10,
        positiveBeliefs: Math.round(positiveBeliefs * 10) / 10,
        overallScore: Math.round(overallScore * 10) / 10,
        detailed: detailedAnalysis,
        answers: answers,
        calculatedAt: new Date().toISOString()
    };
}

// 키보드 이벤트 처리
document.addEventListener('keydown', (e) => {
    // 1-5 숫자키로 빠른 선택 (현재 포커스된 질문에 대해)
    if (e.key >= '1' && e.key <= '5') {
        const focusedQuestion = document.querySelector('.question-card:hover');
        if (focusedQuestion) {
            const questionId = focusedQuestion.querySelector('[id^="q"]').id;
            const questionNum = parseInt(questionId.replace('q', ''));
            const value = parseInt(e.key);
            
            e.preventDefault();
            selectOption(questionNum, value);
        }
    }
});

// 페이지 이탈 경고
window.addEventListener('beforeunload', (e) => {
    const hasAnswers = beliefAnswers.some(answer => answer !== null);
    if (hasAnswers && !MoneyPattern.Storage.get('beliefCompleted')) {
        e.preventDefault();
        e.returnValue = '진단을 완료하지 않고 페이지를 떠나면 답변 내용이 사라집니다. 정말 떠나시겠습니까?';
    }
});

// 전역 초기화 상태 체크
let beliefInitialized = false;

// 페이지 로드 완료 시 초기화 (중복 방지)
function initBeliefOnce() {
    if (!beliefInitialized) {
        beliefInitialized = true;
        initializeBeliefDiagnosis();
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initBeliefOnce);
} else {
    initBeliefOnce();
}