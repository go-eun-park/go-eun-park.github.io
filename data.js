// data.js
const portfolioData = {
    basicInfo: {
        name: { en: "Goeun Park", kr: "박고은" },
        email: "goen1182@gmail.com",
        phone: "+82 10-5673-1182",
        role: { en: "Bio Statistics & Software Engineer", kr: "생물통계 및 소프트웨어 엔지니어" },
        about: {
            en: "I am a researcher specializing in Bio Statistics and Big Data, focusing on deep learning-based biological signal processing.",
            kr: "생물통계학과 소프트웨어를 전공한 연구원입니다. 딥러닝을 활용한 생체 신호 처리 및 임상 데이터 분석을 통해 의료 문제를 해결하는 데 주력하고 있습니다."
        }
    },
    education: [
        {
            period: "2020 - 2024",
            school: { en: "Hallym University, Republic of Korea", kr: "한림대학교" },
            degree: { en: "B.S. in Bio Statistics & Software (Double Major)", kr: "생물통계학 및 소프트웨어 복수전공 (이학사)" }
        }
    ],
    achievements: [
        {
            type: { en: "Patent", kr: "특허" },
            title: { 
                en: "Apparatus And Method For Detecting Chronic Kidney Disease Based On Walking Data", 
                kr: "보행 데이터 기반 만성 신부전증 탐지 장치 및 방법" 
            },
            date: "2025.10",
            detail: "App. No: 10-2025-0147970 (South Korea)"
        },
        {
            type: { en: "Publication", kr: "논문" },
            title: { 
                en: "Comparative analysis of RGB and infrared imaging photoplethysmography...", 
                kr: "RGB 및 적외선 영상 광용적맥파 비교 분석..." 
            },
            date: "2025",
            detail: "Digital Health Research, vol. 3, no. 1"
        }
    ]
};
