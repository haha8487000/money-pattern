// 머니패턴 심리진단지 - 메인 JavaScript

// 전역 변수 (diagnosis.js에서 개별 관리)

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// 앱 초기화
function initializeApp() {
    // 부드러운 스크롤 이벤트 추가
    addSmoothScrolling();
    
    // 페이지별 초기화
    const currentPage = getCurrentPage();
    
    switch(currentPage) {
        case 'index':
            initializeLandingPage();
            break;
        case 'diagnosis':
            // diagnosis.js에서 자체 초기화됨
            break;
        case 'results':
            initializeResultsPage();
            break;
    }
}

// 현재 페이지 감지
function getCurrentPage() {
    const path = window.location.pathname;
    if (path.includes('diagnosis.html')) return 'diagnosis';
    if (path.includes('results.html')) return 'results';
    return 'index';
}

// 랜딩 페이지 초기화
function initializeLandingPage() {
    // 애니메이션 효과 추가
    addScrollAnimations();
    
    // 통계 카운터 애니메이션
    animateCounters();
}

// 진단 시작 함수
function startDiagnosis() {
    // 부드러운 전환 효과와 함께 진단 페이지로 이동
    document.body.style.opacity = '0';
    setTimeout(() => {
        window.location.href = 'diagnosis.html';
    }, 300);
}

// 무의식 신념 진단 시작 함수
function startBeliefDiagnosis() {
    // 부드러운 전환 효과와 함께 신념 진단 페이지로 이동
    document.body.style.opacity = '0';
    setTimeout(() => {
        window.location.href = 'belief-diagnosis.html';
    }, 300);
}

// 결과 페이지로 이동
function goToResults() {
    // 답변 데이터를 localStorage에 저장
    localStorage.setItem('diagnosisAnswers', JSON.stringify(answers));
    localStorage.setItem('diagnosisCompleted', 'true');
    
    // 결과 페이지로 이동
    document.body.style.opacity = '0';
    setTimeout(() => {
        window.location.href = 'results.html';
    }, 300);
}

// 진단 재시작
function restartDiagnosis() {
    // 저장된 데이터 클리어
    localStorage.removeItem('diagnosisAnswers');
    localStorage.removeItem('diagnosisCompleted');
    
    // 진단 페이지로 이동
    document.body.style.opacity = '0';
    setTimeout(() => {
        window.location.href = 'diagnosis.html';
    }, 300);
}

// 홈으로 돌아가기
function goHome() {
    document.body.style.opacity = '0';
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 300);
}

// 부드러운 스크롤링 추가
function addSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// 스크롤 애니메이션 추가
function addScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);
    
    // 애니메이션을 적용할 요소들 선택
    const elementsToAnimate = document.querySelectorAll('.grid > div, .bg-white, section');
    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });
}

// 카운터 애니메이션
function animateCounters() {
    const counters = [
        { element: document.querySelector('.text-2xl.font-bold'), target: 10000, suffix: '+' },
        { element: document.querySelectorAll('.text-2xl.font-bold')[1], target: 95, suffix: '%' },
        { element: document.querySelectorAll('.text-2xl.font-bold')[2], target: 5, suffix: '분' }
    ];
    
    counters.forEach(counter => {
        if (counter.element) {
            animateCounter(counter.element, counter.target, counter.suffix);
        }
    });
}

// 개별 카운터 애니메이션
function animateCounter(element, target, suffix = '') {
    let current = 0;
    const increment = target / 100;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        
        if (suffix === '+' && target >= 1000) {
            element.textContent = Math.floor(current).toLocaleString() + suffix;
        } else {
            element.textContent = Math.floor(current) + suffix;
        }
    }, 20);
}

// 페이지 전환 효과
function transitionToPage(url) {
    document.body.style.transition = 'opacity 0.3s ease';
    document.body.style.opacity = '0';
    
    setTimeout(() => {
        window.location.href = url;
    }, 300);
}

// 페이지 로드 완료 시 페이드 인 효과
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// 모바일 메뉴 토글 (필요시 사용)
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
        mobileMenu.classList.toggle('hidden');
    }
}

// 유틸리티 함수들

// 로컬스토리지 헬퍼
const Storage = {
    set: (key, value) => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error('LocalStorage 저장 실패:', error);
        }
    },
    
    get: (key, defaultValue = null) => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : defaultValue;
        } catch (error) {
            console.error('LocalStorage 읽기 실패:', error);
            return defaultValue;
        }
    },
    
    remove: (key) => {
        try {
            localStorage.removeItem(key);
        } catch (error) {
            console.error('LocalStorage 삭제 실패:', error);
        }
    }
};

// 디바운스 함수
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 화면 크기 감지
function isMobile() {
    return window.innerWidth <= 768;
}

// 진단 데이터 검증
function validateDiagnosisData() {
    const savedAnswers = Storage.get('diagnosisAnswers');
    const isCompleted = Storage.get('diagnosisCompleted');
    
    return savedAnswers && isCompleted && Array.isArray(savedAnswers) && savedAnswers.length > 0;
}

// 에러 처리
function handleError(error, context = '') {
    console.error(`오류 발생 ${context}:`, error);
    
    // 사용자에게 친화적인 에러 메시지 표시
    const errorMessage = document.createElement('div');
    errorMessage.className = 'fixed top-4 right-4 bg-red-500 text-white p-4 rounded-lg shadow-lg z-50';
    errorMessage.textContent = '일시적인 오류가 발생했습니다. 잠시 후 다시 시도해주세요.';
    
    document.body.appendChild(errorMessage);
    
    setTimeout(() => {
        if (errorMessage.parentNode) {
            errorMessage.parentNode.removeChild(errorMessage);
        }
    }, 5000);
}

// 성공 메시지 표시
function showSuccessMessage(message) {
    const successElement = document.createElement('div');
    successElement.className = 'fixed top-4 right-4 bg-green-500 text-white p-4 rounded-lg shadow-lg z-50';
    successElement.textContent = message;
    
    document.body.appendChild(successElement);
    
    setTimeout(() => {
        if (successElement.parentNode) {
            successElement.parentNode.removeChild(successElement);
        }
    }, 3000);
}

// 전역 함수로 내보내기 (다른 파일에서 사용할 수 있도록)
window.MoneyPattern = {
    startDiagnosis,
    goToResults,
    restartDiagnosis,
    goHome,
    Storage,
    validateDiagnosisData,
    handleError,
    showSuccessMessage,
    isMobile
};