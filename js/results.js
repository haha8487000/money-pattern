// 백만장자 머니패턴 심리진단지 - 결과 페이지 JavaScript

// 5가지 머니패턴 유형 정의 (diagnosis.js와 동일)
const patternTypes = {
    '팔랑귀': {
        name: '팔랑귀형',
        emoji: '👂',
        shortDescription: '주변 의견에 쉽게 흔들리는',
        description: '다른 사람들의 의견이나 추천에 쉽게 영향을 받는 성향입니다. 사회적 관계를 중시하며, 주변 사람들과의 조화를 위해 지출하는 경우가 많습니다.',
        characteristics: ['사회적 영향에 민감', '타인의 추천을 신뢰', '관계 지향적 소비', '동조 성향'],
        color: '#f59e0b',
        gradient: 'from-yellow-500 to-orange-500'
    },
    '질러': {
        name: '질러형',
        emoji: '💸',
        shortDescription: '충동적이고 즉흥적인',
        description: '계획보다는 충동에 따라 행동하며, 현재의 만족을 우선시하는 성향입니다. 즉흥적인 구매나 투자 결정을 내리는 경향이 있습니다.',
        characteristics: ['충동적 소비', '즉흥적 결정', '현재 지향적', '감정적 구매'],
        color: '#ef4444',
        gradient: 'from-red-500 to-pink-500'
    },
    '완벽': {
        name: '완벽형',
        emoji: '🎯',
        shortDescription: '신중하고 계획적인',
        description: '모든 것을 꼼꼼히 따져보고 계획적으로 접근하는 성향입니다. 위험을 최소화하고 안정성을 추구하며, 완벽한 결정을 내리려고 노력합니다.',
        characteristics: ['계획적 접근', '위험 회피', '정보 수집', '신중한 결정'],
        color: '#10b981',
        gradient: 'from-green-500 to-emerald-500'
    },
    '나잘나': {
        name: '나잘나형',
        emoji: '💎',
        shortDescription: '자기과시를 즐기는',
        description: '자신의 성공이나 능력을 드러내는 것을 좋아하며, 개성과 스타일을 중시하는 성향입니다. 남들에게 보여지는 것을 의식한 소비를 합니다.',
        characteristics: ['과시적 소비', '자기표현 중시', '브랜드 선호', '스타일 추구'],
        color: '#8b5cf6',
        gradient: 'from-purple-500 to-violet-500'
    },
    '쟁취': {
        name: '쟁취형',
        emoji: '🏆',
        shortDescription: '성취욕이 강한',
        description: '목표 달성과 경쟁에서 이기는 것을 중시하는 성향입니다. 투자나 재정 관리를 게임이나 경쟁으로 여기며, 높은 성취를 추구합니다.',
        characteristics: ['목표 지향적', '경쟁 의식', '성취욕', '도전 정신'],
        color: '#3b82f6',
        gradient: 'from-blue-500 to-indigo-500'
    }
};

// 패턴별 상세 콘텐츠 (HOOK, INSIGHT, DEEP-DIVE, ACTION)
const patternContents = {
    '팔랑귀': {
        hook: "당신은 '관계의 힘'으로 부를 만드는 사람입니다. 혼자서는 작은 일도 어렵지만, 함께하면 큰 꿈도 이룰 수 있죠.",
        insight: {
            title: "당신만의 특별한 머니 DNA",
            points: [
                "🤝 **사회적 네트워크가 곧 재정적 자산**: 당신의 인맥과 관계는 투자 기회의 보고입니다",
                "👥 **집단 지성의 활용자**: 다른 사람들의 경험과 지혜를 잘 흡수하고 활용합니다", 
                "💡 **협업을 통한 시너지**: 혼자 하는 것보다 함께 할 때 더 큰 성과를 냅니다",
                "🔄 **적응력이 뛰어남**: 시장 변화나 트렌드에 빠르게 적응하는 능력이 있습니다"
            ]
        },
        deepDive: {
            title: "심층 분석: 왜 당신은 팔랑귀형일까?",
            content: [
                {
                    subtitle: "🧠 심리적 특성",
                    description: "당신은 타인과의 연결을 통해 안정감을 얻는 성향이 강합니다. 이는 단순한 의존이 아니라, 집단의 힘을 믿고 활용하는 지혜입니다."
                },
                {
                    subtitle: "💰 머니 패턴의 뿌리",
                    description: "어린 시절부터 '함께'의 가치를 중요하게 여겼을 가능성이 높습니다. 가족이나 친구들과 함께 하는 경제활동에서 즐거움과 성취감을 느꼈죠."
                },
                {
                    subtitle: "🎯 투자 성향 분석",
                    description: "리스크를 분산하고 다른 사람들의 검증을 받은 투자를 선호합니다. 이는 매우 현명한 접근법이며, 큰 손실을 피할 수 있게 해줍니다."
                },
                {
                    subtitle: "⚠️ 주의해야 할 함정",
                    description: "때로는 너무 많은 의견을 수집하다가 결정을 내리지 못하거나, 잘못된 정보에 휩쓸릴 수 있습니다. 정보의 질을 판단하는 기준을 세우는 것이 중요합니다."
                }
            ]
        },
        action: {
            title: "당신을 위한 맞춤 실행 계획",
            phases: [
                {
                    phase: "1단계: 네트워크 구축 (1-3개월)",
                    items: [
                        "투자 스터디 그룹이나 재테크 모임에 참여하기",
                        "신뢰할 만한 금융 전문가나 멘토 찾기", 
                        "가족, 친구들과 재정 목표 공유하고 응원받기",
                        "온라인 투자 커뮤니티에서 활발히 활동하기"
                    ]
                },
                {
                    phase: "2단계: 체계적 학습 (3-6개월)",
                    items: [
                        "동료들과 함께 투자 교육 프로그램 수강하기",
                        "투자 성공 사례들을 분석하고 공유하기",
                        "소액으로 시작하여 경험 쌓기",
                        "정기적인 투자 회의나 점검 모임 만들기"
                    ]
                },
                {
                    phase: "3단계: 실전 적용 (6개월-1년)",
                    items: [
                        "검증된 투자 상품부터 시작하기",
                        "포트폴리오를 동료들과 함께 검토하기",
                        "투자 성과를 정기적으로 공유하고 피드백 받기",
                        "새로운 투자 기회를 네트워크를 통해 발굴하기"
                    ]
                }
            ],
            tips: [
                "💡 **정보 검증 체크리스트 만들기**: 투자 정보의 출처, 검증 여부, 다수 의견 등을 체크",
                "🤝 **투자 파트너십 고려**: 신뢰할 만한 사람과 함께 투자하는 것도 좋은 방법",
                "📚 **지속적인 학습**: 다른 사람들의 성공/실패 사례를 통해 계속 배우기",
                "⚖️ **균형 잡기**: 타인의 의견과 본인의 판단 사이에서 적절한 균형점 찾기"
            ]
        }
    },
    '질러': {
        hook: "당신은 '순간의 힘'으로 기회를 잡는 사람입니다. 남들이 망설일 때 당신은 실행하고, 그 과감함이 곧 당신의 무기죠.",
        insight: {
            title: "당신만의 특별한 머니 DNA", 
            points: [
                "⚡ **빠른 실행력**: 기회를 포착하면 즉시 행동으로 옮기는 추진력이 뛰어납니다",
                "🎯 **직감적 판단력**: 복잡한 분석보다 직관을 통해 좋은 결정을 내리는 능력",
                "💪 **위험 감수 능력**: 변화와 도전을 두려워하지 않는 용기가 있습니다",
                "🌟 **현재 가치 극대화**: 지금 이 순간의 만족과 경험을 중시하는 철학"
            ]
        },
        deepDive: {
            title: "심층 분석: 왜 당신은 질러형일까?",
            content: [
                {
                    subtitle: "🧠 심리적 특성", 
                    description: "당신은 미래의 불확실성보다 현재의 확실한 즐거움을 선택하는 성향이 강합니다. 이는 삶을 적극적으로 살아가려는 긍정적 에너지의 표현입니다."
                },
                {
                    subtitle: "💰 머니 패턴의 뿌리",
                    description: "어릴 때부터 '지금 당장'의 가치를 중요하게 여겼을 가능성이 높습니다. 미래를 위해 현재를 희생하는 것보다, 현재의 행복을 우선시하는 철학을 가지고 있죠."
                },
                {
                    subtitle: "🎯 투자 성향 분석", 
                    description: "빠른 수익을 낼 수 있는 투자를 선호하며, 트렌드에 민감합니다. 이는 시장의 기회를 빠르게 포착할 수 있게 해주지만, 때로는 충동적 결정으로 이어질 수 있습니다."
                },
                {
                    subtitle: "⚠️ 주의해야 할 함정",
                    description: "즉석에서 내린 결정이 때로는 큰 손실로 이어질 수 있습니다. 감정이 아닌 논리로 투자하는 습관을 기르는 것이 중요합니다."
                }
            ]
        },
        action: {
            title: "당신을 위한 맞춤 실행 계획",
            phases: [
                {
                    phase: "1단계: 충동 제어 시스템 구축 (1-2개월)",
                    items: [
                        "투자 전 24시간 쿨다운 타임 규칙 정하기",
                        "투자 한도액을 미리 정해두고 절대 초과하지 않기",
                        "감정 상태를 기록하는 투자 일기 작성하기",
                        "자동 적금을 통해 강제 저축 시스템 만들기"
                    ]
                },
                {
                    phase: "2단계: 체계적 투자 시작 (2-6개월)",
                    items: [
                        "소액 분산 투자로 시작하여 경험 쌓기", 
                        "월 단위 투자 계획 세우고 지키기",
                        "투자 결과를 정기적으로 분석하고 반성하기",
                        "성공한 투자자들의 사례 연구하기"
                    ]
                },
                {
                    phase: "3단계: 균형잡힌 포트폴리오 완성 (6개월-1년)",
                    items: [
                        "장기 투자와 단기 투자의 비율 정하기",
                        "안정적인 자산과 성장 자산의 균형 맞추기",
                        "정기적인 포트폴리오 리밸런싱하기",
                        "투자 목표와 성과를 객관적으로 평가하기"
                    ]
                }
            ],
            tips: [
                "🛑 **스탑로스 설정**: 손실 한계선을 미리 정해두고 지키기",
                "📱 **투자 앱 활용**: 자동 투자 기능을 활용해 감정적 결정 줄이기", 
                "🎯 **작은 목표부터**: 큰 목표보다는 작고 달성 가능한 목표부터 시작",
                "🤝 **멘토 찾기**: 경험 많은 투자자의 조언을 정기적으로 받기"
            ]
        }
    },
    '완벽': {
        hook: "당신은 '완벽한 계획'으로 부를 쌓는 사람입니다. 한 번의 실수도 용납하지 않는 신중함이 곧 당신만의 경쟁력이죠.",
        insight: {
            title: "당신만의 특별한 머니 DNA",
            points: [
                "🎯 **완벽주의적 접근**: 모든 것을 철저히 분석하고 계획하는 체계적 사고력",
                "🛡️ **리스크 관리 전문가**: 위험을 미리 예측하고 대비하는 뛰어난 능력",
                "📊 **데이터 기반 의사결정**: 감정보다는 객관적 정보를 바탕으로 판단",
                "🏗️ **장기적 관점**: 당장의 수익보다 장기적 안정성을 추구하는 지혜"
            ]
        },
        deepDive: {
            title: "심층 분석: 왜 당신은 완벽형일까?",
            content: [
                {
                    subtitle: "🧠 심리적 특성",
                    description: "당신은 불확실성을 최소화하려는 강한 욕구를 가지고 있습니다. 이는 안전에 대한 높은 가치관과 책임감에서 비롯된 것으로, 매우 건전한 투자 철학의 기반입니다."
                },
                {
                    subtitle: "💰 머니 패턴의 뿌리", 
                    description: "어릴 때부터 '실수하지 않기'의 중요성을 배웠을 가능성이 높습니다. 이는 신중하고 안정적인 재정 관리 능력으로 발전했습니다."
                },
                {
                    subtitle: "🎯 투자 성향 분석",
                    description: "철저한 분석을 통해 투자 결정을 내리며, 안정성을 최우선으로 합니다. 이는 큰 손실을 방지하는 강점이지만, 때로는 기회를 놓칠 수도 있습니다."
                },
                {
                    subtitle: "⚠️ 주의해야 할 함정", 
                    description: "과도한 신중함으로 인해 투자 시점을 놓치거나, 완벽한 조건만 기다리다가 기회를 잃을 수 있습니다. 적절한 시점에서의 결단이 필요합니다."
                }
            ]
        },
        action: {
            title: "당신을 위한 맞춤 실행 계획", 
            phases: [
                {
                    phase: "1단계: 투자 기준 명확화 (1-2개월)",
                    items: [
                        "개인 투자 원칙과 기준점 명확히 설정하기",
                        "리스크 허용 수준과 투자 목표 구체화하기",
                        "투자 체크리스트 만들어 활용하기", 
                        "소액으로 다양한 투자 상품 경험해보기"
                    ]
                },
                {
                    phase: "2단계: 점진적 위험자산 확대 (3-6개월)",
                    items: [
                        "안정 자산 70%, 성장 자산 30%로 시작하기",
                        "월별 투자 성과 정기 검토하기",
                        "시장 상황 분석 능력 기르기",
                        "전문가 상담을 통한 포트폴리오 점검받기"
                    ]
                },
                {
                    phase: "3단계: 균형잡힌 포트폴리오 완성 (6개월-1년)",
                    items: [
                        "국내외 분산 투자로 리스크 분산하기",
                        "정기적인 리밸런싱으로 포트폴리오 관리",
                        "경제 지표와 시장 트렌드 분석 학습",
                        "장기 투자 성과 추적 시스템 구축"
                    ]
                }
            ],
            tips: [
                "📈 **점진적 확대**: 위험자산 비중을 점진적으로 늘려가기",
                "⏰ **타이밍보다 타임**: 완벽한 타이밍보다는 꾸준한 투자가 중요",
                "🎓 **지속적 학습**: 투자 교육과 시장 분석 능력 향상에 지속 투자",
                "🤝 **전문가 활용**: 정기적인 전문가 상담으로 객관적 시각 유지"
            ]
        }
    },
    '나잘나': {
        hook: "당신은 '자신만의 스타일'로 부를 만드는 사람입니다. 남들과는 다른 독특함과 개성이 곧 당신만의 투자 철학이죠.",
        insight: {
            title: "당신만의 특별한 머니 DNA",
            points: [
                "✨ **개성 중시**: 남들과 다른 자신만의 투자 스타일과 철학을 추구합니다",
                "🏆 **성공 지향**: 단순한 수익을 넘어서 성공의 상징을 중시합니다",
                "💎 **가치 투자**: 브랜드와 가치가 있는 것에 투자하는 안목이 있습니다",
                "🌟 **자신감**: 자신의 판단과 선택에 대한 강한 확신을 가지고 있습니다"
            ]
        },
        deepDive: {
            title: "심층 분석: 왜 당신은 나잘나형일까?",
            content: [
                {
                    subtitle: "🧠 심리적 특성",
                    description: "당신은 자기 정체성과 사회적 지위를 중요하게 여기는 성향이 강합니다. 이는 높은 자존감과 성취 욕구에서 비롯되며, 투자에서도 '멋진' 선택을 하려는 동기로 작용합니다."
                },
                {
                    subtitle: "💰 머니 패턴의 뿌리",
                    description: "어릴 때부터 '특별함'에 가치를 두고 자랐을 가능성이 높습니다. 남들보다 더 좋은 것, 더 멋진 것을 추구하는 성향이 투자 철학에도 반영되어 있습니다."
                },
                {
                    subtitle: "🎯 투자 성향 분석", 
                    description: "유명하거나 트렌디한 투자 상품을 선호하며, 브랜드 가치를 중시합니다. 이는 좋은 투자 기회를 포착하는 데 도움이 되지만, 때로는 과도한 프리미엄을 지불할 위험도 있습니다."
                },
                {
                    subtitle: "⚠️ 주의해야 할 함정",
                    description: "외적인 멋보다는 실제 수익성을 우선 고려해야 합니다. 브랜드나 이미지에만 의존하지 말고, 실질적인 가치를 판단하는 능력을 기르는 것이 중요합니다."
                }
            ]
        },
        action: {
            title: "당신을 위한 맞춤 실행 계획",
            phases: [
                {
                    phase: "1단계: 가치 투자 기준 정립 (1-3개월)", 
                    items: [
                        "브랜드 가치와 실제 투자 가치 구분하는 기준 세우기",
                        "성공한 가치 투자자들의 철학 연구하기",
                        "개인 투자 포트폴리오의 '시그니처' 만들기",
                        "투자 성과 측정 지표 설정하기"
                    ]
                },
                {
                    phase: "2단계: 프리미엄 자산 투자 (3-9개월)",
                    items: [
                        "우량 기업 주식이나 프리미엄 펀드 투자 시작",
                        "ESG, 테마별 투자로 개성 있는 포트폴리오 구성",
                        "해외 유명 기업이나 ETF 투자 고려", 
                        "투자 성과를 정기적으로 분석하고 자랑하기"
                    ]
                },
                {
                    phase: "3단계: 투자 전문가로 성장 (9개월-2년)",
                    items: [
                        "투자 블로그나 SNS로 투자 철학 공유하기",
                        "투자 스터디나 모임에서 리더 역할 하기",
                        "새로운 투자 트렌드 발굴하고 선도하기", 
                        "개인 브랜드를 활용한 투자 기회 창출"
                    ]
                }
            ],
            tips: [
                "💼 **개인 브랜딩**: 투자자로서의 개인 브랜드 구축하기",
                "📊 **성과 공유**: 투자 성과를 멋지게 시각화하여 공유하기",
                "🎯 **차별화**: 남들과 다른 독특한 투자 포인트 찾기", 
                "🏆 **목표 설정**: 구체적이고 도전적인 투자 목표 세우기"
            ]
        }
    },
    '쟁취': {
        hook: "당신은 '승부사 정신'으로 부를 쟁취하는 사람입니다. 경쟁에서 이기는 것, 목표를 달성하는 것이 곧 당신의 원동력이죠.",
        insight: {
            title: "당신만의 특별한 머니 DNA",
            points: [
                "🏆 **강력한 성취 욕구**: 목표를 설정하고 반드시 달성하려는 의지가 강합니다",
                "⚔️ **경쟁 우위 추구**: 남들보다 더 나은 수익을 내려는 경쟁 정신이 뛰어납니다", 
                "🎯 **목표 지향적**: 명확한 목표를 세우고 체계적으로 실행하는 능력",
                "💪 **도전 정신**: 어려운 상황에서도 포기하지 않는 강인한 정신력"
            ]
        },
        deepDive: {
            title: "심층 분석: 왜 당신은 쟁취형일까?",
            content: [
                {
                    subtitle: "🧠 심리적 특성",
                    description: "당신은 성공과 성취에 대한 강한 욕구를 가지고 있습니다. 이는 높은 자기효능감과 경쟁심에서 비롯되며, 투자에서도 '이기는' 것에 초점을 맞춥니다."
                },
                {
                    subtitle: "💰 머니 패턴의 뿌리",
                    description: "어릴 때부터 '1등'이나 '성취'에 대한 보상을 받으며 자랐을 가능성이 높습니다. 경쟁에서 이기는 것이 자신의 가치를 증명하는 방법이라고 여기는 성향이 있습니다."
                },
                {
                    subtitle: "🎯 투자 성향 분석",
                    description: "높은 수익률을 추구하며, 시장을 이기려는 적극적인 투자를 선호합니다. 이는 큰 성과를 낼 수 있게 해주지만, 과도한 위험을 감수할 수도 있습니다."
                },
                {
                    subtitle: "⚠️ 주의해야 할 함정", 
                    description: "단기적 성과에 집착하거나 과도한 위험을 감수할 수 있습니다. 감정적 투자보다는 전략적 접근이 필요하며, 장기적 관점을 유지하는 것이 중요합니다."
                }
            ]
        },
        action: {
            title: "당신을 위한 맞춤 실행 계획",
            phases: [
                {
                    phase: "1단계: 전략적 기반 구축 (1-3개월)",
                    items: [
                        "구체적이고 도전적인 투자 목표 설정하기",
                        "위험 관리 원칙과 손실 한계선 정하기",
                        "투자 성과 추적 시스템 구축하기",
                        "시장 분석과 투자 전략 학습하기"
                    ]
                },
                {
                    phase: "2단계: 적극적 투자 실행 (3-9개월)",
                    items: [
                        "성장주 중심의 공격적 포트폴리오 구성", 
                        "시장 타이밍을 활용한 투자 기법 연습",
                        "해외 시장이나 새로운 투자 상품 도전",
                        "투자 성과를 정기적으로 분석하고 개선"
                    ]
                },
                {
                    phase: "3단계: 투자 전문성 극대화 (9개월-2년)",
                    items: [
                        "파생상품이나 고급 투자 기법 학습",
                        "개인 투자 전략 개발하고 백테스팅",
                        "투자 관련 자격증 취득이나 전문 교육 수강",
                        "장기적 자산 증식 계획 수립 및 실행"
                    ]
                }
            ],
            tips: [
                "📊 **데이터 중심**: 감정보다는 데이터에 기반한 투자 결정",
                "⚡ **빠른 학습**: 시장 변화에 빠르게 적응하고 학습하기", 
                "🎯 **목표 세분화**: 큰 목표를 작은 단계로 나누어 달성하기",
                "🛡️ **리스크 관리**: 공격적 투자와 안전 장치의 균형 맞추기"
            ]
        }
    }
};

// 패턴별 맞춤 조언
const patternAdvice = {
    '팔랑귀': {
        strengths: [
            '사회적 네트워크를 통한 다양한 정보 수집 능력',
            '타인과의 관계를 중시하는 협력적 성향',
            '새로운 투자 기회에 대한 개방적 태도'
        ],
        improvements: [
            '독립적인 판단력 강화 필요',
            '투자 결정 시 객관적 분석 습관 기르기',
            '타인의 의견에 휘둘리지 않는 원칙 세우기'
        ],
        actionPlan: {
            shortTerm: ['투자 공부 시작하기', '개인 투자 원칙 세우기', '신뢰할 만한 정보원 선별하기'],
            mediumTerm: ['분산 투자 포트폴리오 구성', '정기적인 투자 성과 점검', '투자 일기 작성 습관'],
            longTerm: ['독립적 투자 의사결정 체계 구축', '전문가 수준의 투자 지식 습득', '멘토링 관계 구축']
        }
    },
    '질러': {
        strengths: [
            '빠른 의사결정과 실행력',
            '새로운 기회에 대한 민감성',
            '변화에 대한 적응력과 유연성'
        ],
        improvements: [
            '계획적인 자금 관리 습관 기르기',
            '충동적 투자 결정 억제하기',
            '장기적 관점의 투자 전략 수립'
        ],
        actionPlan: {
            shortTerm: ['가계부 작성 시작', '투자 한도액 미리 정하기', '쿨다운 기간 두기'],
            mediumTerm: ['정기 적금 자동이체 설정', '투자 전 체크리스트 만들기', '감정 일기 작성'],
            longTerm: ['장기 투자 포트폴리오 완성', '재정적 자유 달성 계획', '투자 멘토 찾기']
        }
    },
    '완벽': {
        strengths: [
            '철저한 분석과 신중한 의사결정',
            '리스크 관리 능력',
            '장기적 관점의 투자 접근'
        ],
        improvements: [
            '과도한 신중함으로 인한 기회 상실 주의',
            '적정 수준의 위험 감수 필요',
            '완벽을 추구하다 놓치는 투자 타이밍 개선'
        ],
        actionPlan: {
            shortTerm: ['투자 기준점 명확히 설정', '소액 투자로 경험 쌓기', '투자 타이밍 연습'],
            mediumTerm: ['점진적 위험자산 비중 증가', '투자 성과 정기 검토', '전문가 상담 받기'],
            longTerm: ['균형잡힌 포트폴리오 완성', '글로벌 투자 확대', '투자 교육 지속']
        }
    },
    '나잘나': {
        strengths: [
            '자신감 있는 투자 태도',
            '성공에 대한 강한 동기',
            '브랜드와 가치에 대한 안목'
        ],
        improvements: [
            '과시욕으로 인한 과소비 주의',
            '투자 성과에 대한 객관적 평가',
            '허영심보다 실질적 가치 추구'
        ],
        actionPlan: {
            shortTerm: ['투자 목적 명확히 하기', '소비 패턴 점검하기', '투자 성과 측정 기준 세우기'],
            mediumTerm: ['가치 투자 원칙 확립', '장기 자산 증식 계획', '합리적 소비 습관 기르기'],
            longTerm: ['진정한 부의 축적 달성', '사회적 가치 창출', '후진 양성과 나눔']
        }
    },
    '쟁취': {
        strengths: [
            '높은 목표 의식과 성취욕',
            '경쟁 상황에서의 집중력',
            '빠른 학습 능력과 적응력'
        ],
        improvements: [
            '과도한 위험 추구 성향 조절',
            '단기 성과에 집착하지 않기',
            '감정적 투자 결정 줄이기'
        ],
        actionPlan: {
            shortTerm: ['투자 목표 구체화하기', '리스크 관리 원칙 세우기', '투자 일지 작성하기'],
            mediumTerm: ['체계적 투자 전략 수립', '다양한 투자 상품 경험', '전문가 네트워크 구축'],
            longTerm: ['투자 전문가 되기', '창업이나 사업 도전', '경제적 자유 달성']
        }
    }
};

// 분석 결과 데이터
let analysisResult = null;

// 결과 페이지 초기화
function initializeResultsPage() {
    console.log('결과 페이지 초기화 중...');
    
    // 진단 결과 확인
    const answers = MoneyPattern.Storage.get('diagnosisAnswers');
    const patternResults = MoneyPattern.Storage.get('patternResults');
    const isCompleted = MoneyPattern.Storage.get('diagnosisCompleted');
    
    if (!answers || !isCompleted || !patternResults) {
        // 진단 결과가 없으면 홈으로 리다이렉트
        alert('진단 결과가 없습니다. 먼저 진단을 완료해 주세요.');
        window.location.href = 'index.html';
        return;
    }
    
    console.log('저장된 패턴 결과:', patternResults);
    
    // 분석 결과 설정
    analysisResult = patternResults;
    
    // 결과 표시
    displayResults(analysisResult);
    
    // 차트 초기화
    setTimeout(() => {
        initializeCharts(analysisResult);
    }, 500);
}

// 결과 표시
function displayResults(result) {
    console.log('결과 표시 중...', result);
    
    const primaryPattern = patternTypes[result.primaryPattern];
    const secondaryPattern = patternTypes[result.secondaryPattern];
    const patternContent = patternContents[result.primaryPattern];
    
    if (!primaryPattern || !patternContent) {
        console.error('패턴 정보를 찾을 수 없습니다:', result.primaryPattern);
        return;
    }
    
    // 메인 결과 카드 업데이트 (HOOK 포함)
    document.getElementById('pattern-icon').textContent = primaryPattern.emoji;
    document.getElementById('pattern-type').textContent = `${primaryPattern.name} (주기질)`;
    
    // 설명 텍스트 업데이트
    let descriptionText = primaryPattern.description;
    if (secondaryPattern) {
        descriptionText += ` 부기질로는 ${secondaryPattern.name} 성향도 함께 가지고 있어, ${secondaryPattern.shortDescription} 면도 보입니다.`;
    }
    document.getElementById('pattern-description').textContent = descriptionText;
    document.getElementById('hook-text').textContent = patternContent.hook;
    
    // 배경색 변경
    const headerCard = document.getElementById('main-result-card');
    if (headerCard) {
        headerCard.className = `bg-gradient-to-r ${primaryPattern.gradient} text-white rounded-3xl p-8 md:p-12 mb-12 shadow-2xl`;
    }
    
    // INSIGHT 섹션 업데이트
    updateInsightSection(patternContent.insight);
    
    // DEEP-DIVE 섹션 업데이트  
    updateDeepDiveSection(patternContent.deepDive);
    
    // ACTION 섹션 업데이트
    updateActionSection(patternContent.action);
    
    // 세부 분석 결과 업데이트
    updateDetailedAnalysis(result);
    
    // 추천사항 표시 (기존 방식 유지)
    updateRecommendations(result);
}

// INSIGHT 섹션 업데이트
function updateInsightSection(insight) {
    const insightContent = document.getElementById('insight-content');
    if (!insightContent || !insight) return;
    
    insightContent.innerHTML = `
        <div class="mb-6">
            <h5 class="text-xl font-bold text-gray-800 mb-4">${insight.title}</h5>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                ${insight.points.map(point => `
                    <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                        <p class="text-gray-700">${point}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

// DEEP-DIVE 섹션 업데이트
function updateDeepDiveSection(deepDive) {
    const deepDiveContent = document.getElementById('deep-dive-content');
    if (!deepDiveContent || !deepDive) return;
    
    deepDiveContent.innerHTML = `
        <div>
            <h5 class="text-xl font-bold text-gray-800 mb-6">${deepDive.title}</h5>
            <div class="space-y-6">
                ${deepDive.content.map(item => `
                    <div class="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                        <h6 class="text-lg font-semibold text-gray-800 mb-3">${item.subtitle}</h6>
                        <p class="text-gray-700 leading-relaxed">${item.description}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

// ACTION 섹션 업데이트
function updateActionSection(action) {
    const actionContent = document.getElementById('action-content');
    if (!actionContent || !action) return;
    
    const phasesHtml = action.phases.map(phase => `
        <div class="bg-white/20 rounded-2xl p-6 backdrop-blur-sm mb-6">
            <h6 class="text-xl font-bold mb-4">${phase.phase}</h6>
            <ul class="space-y-2">
                ${phase.items.map(item => `
                    <li class="flex items-start">
                        <i class="fas fa-check-circle text-green-300 mr-3 mt-1 flex-shrink-0"></i>
                        <span class="opacity-90">${item}</span>
                    </li>
                `).join('')}
            </ul>
        </div>
    `).join('');
    
    const tipsHtml = action.tips.map(tip => `
        <div class="bg-white/10 rounded-lg p-4 border border-white/20">
            <p class="text-sm opacity-90">${tip}</p>
        </div>
    `).join('');
    
    actionContent.innerHTML = `
        <div>
            <h5 class="text-xl font-bold mb-6">${action.title}</h5>
            ${phasesHtml}
            <div class="border-t border-white/20 pt-6">
                <h6 class="text-lg font-semibold mb-4">💡 핵심 팁</h6>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    ${tipsHtml}
                </div>
            </div>
        </div>
    `;
}

// 세부 분석 업데이트
function updateDetailedAnalysis(result) {
    console.log('세부 분석 업데이트 중...', result);
    
    // 투자 성향 섹션 업데이트
    const primaryPattern = patternTypes[result.primaryPattern];
    const characteristics = primaryPattern.characteristics;
    
    // 특성별 백분율 계산 (랜덤 시뮬레이션으로 시각적 효과)
    const maxScore = Math.max(...Object.values(result.scores));
    const primaryScore = result.scores[result.primaryPattern];
    const basePercentage = maxScore > 0 ? (primaryScore / (maxScore * 1.2)) * 100 : 70;
    
    // 투자 성향 업데이트 
    updateProgressBar('investment-style', '보수성', 
        result.primaryPattern === '완벽' ? Math.min(95, basePercentage + 20) : Math.max(30, basePercentage - 10), 
        primaryPattern.color);
    updateProgressBar('investment-style', '적극성', 
        ['질러', '쟁취'].includes(result.primaryPattern) ? Math.min(95, basePercentage + 15) : Math.max(25, basePercentage - 15), 
        primaryPattern.color);
    updateProgressBar('investment-style', '장기 관점', 
        ['완벽', '쟁취'].includes(result.primaryPattern) ? Math.min(90, basePercentage + 10) : Math.max(40, basePercentage - 5), 
        primaryPattern.color);
    
    // 소비 패턴 업데이트
    updateProgressBar('spending-pattern', '계획성', 
        result.primaryPattern === '완벽' ? Math.min(95, basePercentage + 25) : Math.max(20, basePercentage - 20), 
        primaryPattern.color);
    updateProgressBar('spending-pattern', '충동성', 
        result.primaryPattern === '질러' ? Math.min(90, basePercentage + 20) : Math.max(15, basePercentage - 25), 
        '#ef4444');
    updateProgressBar('spending-pattern', '절약성', 
        ['완벽', '팔랑귀'].includes(result.primaryPattern) ? Math.min(85, basePercentage + 15) : Math.max(35, basePercentage - 10), 
        '#10b981');
}

// 진행바 업데이트 헬퍼
function updateProgressBar(containerId, label, percentage, color) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const progressBars = container.querySelectorAll('.flex.justify-between.items-center');
    
    progressBars.forEach(bar => {
        const labelElement = bar.querySelector('.text-gray-700');
        if (labelElement && labelElement.textContent === label) {
            const progressBar = bar.querySelector('.w-20 > div');
            const percentageText = bar.querySelector('.text-sm.font-semibold');
            
            if (progressBar && percentageText) {
                progressBar.style.width = `${Math.round(percentage)}%`;
                progressBar.style.backgroundColor = color;
                percentageText.textContent = `${Math.round(percentage)}%`;
                percentageText.style.color = color;
            }
        }
    });
}

// 추천사항 업데이트 (기존 방식과 호환성 유지)
function updateRecommendations(result) {
    const advice = patternAdvice[result.primaryPattern];
    if (!advice) {
        // patternContents에서 가져오기
        const content = patternContents[result.primaryPattern];
        if (!content) return;
        
        // 기본 강점/개선점 생성
        const defaultAdvice = {
            strengths: patternTypes[result.primaryPattern].characteristics || [],
            improvements: ['지속적인 학습과 개선', '균형잡힌 투자 접근', '리스크 관리 강화']
        };
        
        updateStrengthsAndImprovements(defaultAdvice);
        return;
    }
    
    updateStrengthsAndImprovements(advice);
}

// 강점과 개선점 업데이트 헬퍼 함수
function updateStrengthsAndImprovements(advice) {
    // 강점 업데이트
    const strengthsList = document.getElementById('strengths');
    if (strengthsList && advice.strengths) {
        strengthsList.innerHTML = '';
        advice.strengths.slice(0, 3).forEach(strength => {
            const li = document.createElement('li');
            li.className = 'text-xs';
            li.innerHTML = `• ${strength}`;
            strengthsList.appendChild(li);
        });
    }
    
    // 개선점 업데이트
    const improvementsList = document.getElementById('improvements');
    if (improvementsList && advice.improvements) {
        improvementsList.innerHTML = '';
        advice.improvements.slice(0, 3).forEach(improvement => {
            const li = document.createElement('li');
            li.className = 'text-xs';
            li.innerHTML = `• ${improvement}`;
            improvementsList.appendChild(li);
        });
    }
}

// 차트 초기화
function initializeCharts(result) {
    try {
        createPersonalityChart(result);
        createRiskChart(result);
    } catch (error) {
        console.error('차트 초기화 실패:', error);
    }
}

// 성향 분석 차트
function createPersonalityChart(result) {
    const ctx = document.getElementById('personalityChart');
    if (!ctx) return;
    
    const ctxContext = ctx.getContext('2d');
    const scores = result.scores;
    const patterns = Object.keys(scores);
    const values = Object.values(scores);
    
    const data = {
        labels: patterns,
        datasets: [{
            label: '패턴별 점수',
            data: values,
            backgroundColor: patterns.map(pattern => {
                const patternInfo = patternTypes[pattern];
                return patternInfo ? patternInfo.color + '80' : '#3b82f680'; // 투명도 추가
            }),
            borderColor: patterns.map(pattern => {
                const patternInfo = patternTypes[pattern];
                return patternInfo ? patternInfo.color : '#3b82f6';
            }),
            borderWidth: 2
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
                    angleLines: {
                        display: true
                    },
                    suggestedMin: 0,
                    suggestedMax: Math.max(...values) + 2,
                    ticks: {
                        stepSize: 2
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

// 위험 수용도 차트
function createRiskChart(result) {
    const ctx = document.getElementById('riskChart');
    if (!ctx) return;
    
    const ctxContext = ctx.getContext('2d');
    const primaryPattern = result.primaryPattern;
    
    // 패턴별 위험 수용도 매핑
    const riskLevels = {
        '완벽': { level: '낮음', color: '#10b981', value: 30 },
        '팔랑귀': { level: '보통-낮음', color: '#f59e0b', value: 45 },
        '나잘나': { level: '보통', color: '#8b5cf6', value: 60 },
        '질러': { level: '보통-높음', color: '#ef4444', value: 75 },
        '쟁취': { level: '높음', color: '#3b82f6', value: 85 }
    };
    
    const currentRisk = riskLevels[primaryPattern] || riskLevels['팔랑귀'];
    
    new Chart(ctxContext, {
        type: 'doughnut',
        data: {
            labels: ['위험 수용도', '안전 선호도'],
            datasets: [{
                data: [currentRisk.value, 100 - currentRisk.value],
                backgroundColor: [currentRisk.color, '#e5e7eb'],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom'
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            if (context.dataIndex === 0) {
                                return `위험 수용도: ${currentRisk.level} (${context.parsed}%)`;
                            } else {
                                return `안전 선호도: ${context.parsed}%`;
                            }
                        }
                    }
                }
            }
        }
    });
}

// 액션 함수들
function downloadReport() {
    alert('결과 다운로드 기능은 준비 중입니다.');
}

function shareResults() {
    const shareText = `나의 백만장자 머니패턴: ${patternTypes[analysisResult.primaryPattern].name}\n${window.location.href}`;
    
    if (navigator.share) {
        navigator.share({
            title: '백만장자 머니패턴 진단 결과',
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

function retakeTest() {
    if (confirm('새로운 진단을 시작하시겠습니까? 현재 결과가 초기화됩니다.')) {
        MoneyPattern.Storage.remove('diagnosisAnswers');
        MoneyPattern.Storage.remove('patternResults');
        MoneyPattern.Storage.remove('patternScores');
        MoneyPattern.Storage.remove('diagnosisCompleted');
        window.location.href = 'diagnosis.html';
    }
}

// EmailJS 설정 및 이메일 전송 기능
class EmailService {
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
        console.log('EmailJS 초기화됨 - 정밀진단');
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
        // 정밀진단 결과 데이터 가져오기
        const patternResults = MoneyPattern.Storage.get('patternResults');
        const patternScores = MoneyPattern.Storage.get('patternScores');
        
        return {
            patternResults,
            patternScores,
            primaryPattern: analysisResult?.primaryPattern,
            secondaryPattern: analysisResult?.secondaryPattern
        };
    }

    async sendAdminEmail(userData, results) {
        const patternNames = {
            '팔랑귀': '팔랑귀형 - 주변 의견 영향형',
            '질러': '질러형 - 충동 소비형',
            '완벽': '완벽형 - 신중 계획형',
            '나잘나': '나잘나형 - 자기과시형',
            '쟁취': '쟁취형 - 성취욕 강함형'
        };

        const templateParams = {
            user_name: userData.user_name,
            user_email: userData.user_email,
            user_phone: userData.user_phone,
            consultation_request: userData.consultation_request,
            diagnosis_type: '20문항 정밀 머니패턴',
            primary_pattern: results.primaryPattern ? patternNames[results.primaryPattern] : '데이터 없음',
            secondary_pattern: results.secondaryPattern ? patternNames[results.secondaryPattern] : '데이터 없음',
            diagnosis_time: new Date().toLocaleString('ko-KR'),
            admin_email: 'habin0781@naver.com'
        };

        console.log('관리자 이메일 전송:', templateParams);
        return emailjs.send(this.serviceId, this.adminTemplateId, templateParams);
    }

    async sendCustomerEmail(userData, results) {
        const patternData = {
            '팔랑귀': { name: '팔랑귀형', desc: '주변 의견과 추천에 쉽게 영향받는 사회적 관계 중심의 투자자' },
            '질러': { name: '질러형', desc: '충동적이고 즉흥적 결정을 선호하는 감정적 투자자' },
            '완벽': { name: '완벽형', desc: '신중하고 계획적 접근을 하는 안정성 추구 투자자' },
            '나잘나': { name: '나잘나형', desc: '자기표현과 과시를 중시하는 스타일 추구 투자자' },
            '쟁취': { name: '쟁취형', desc: '목표달성과 경쟁에서 이기는 것을 중시하는 성취지향 투자자' }
        };

        const primaryPattern = results.primaryPattern || '팔랑귀';
        const patternInfo = patternData[primaryPattern];

        const templateParams = {
            user_name: userData.user_name,
            user_email: userData.user_email,
            primary_pattern: patternInfo.name,
            result_summary: patternInfo.desc,
            detailed_analysis: `당신의 주요 머니패턴은 ${patternInfo.name} 유형입니다. ${patternInfo.desc} 이러한 성향을 바탕으로 개인 맞춤 투자 전략을 수립하실 수 있습니다.`,
            contact_email: 'habin0781@naver.com'
        };

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

// 결과 페이지 전용 초기화
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        initializeResultsPage();
        new EmailService(); // EmailJS 서비스 초기화
    });
} else {
    initializeResultsPage();
    new EmailService(); // EmailJS 서비스 초기화
}