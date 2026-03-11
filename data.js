// data.js
const portfolioData = {
    basicInfo: {
        name: { en: "Goeun Park", kr: "박고은" },
        email: "goen1182@gmail.com",
        phone: "+82 10-5673-1182",
        // role: { en: "Bio Statistics & Software Engineer", kr: "생물통계 및 소프트웨어 엔지니어" },
        // about: {
        //     en: "I am a researcher specializing in Bio Statistics and Big Data. I focus on developing deep learning models, such as 1-D CNNs, for biological signal processing and disease classification using clinical and wearable sensor data.",
        //     kr: "임상의학통계학과 빅데이터를 전공한 연구원입니다. 임상 데이터 및 웨어러블 센서 데이터를 활용하여, 1-D CNN과 같은 딥러닝 기반의 생체 신호 처리 및 질병 분류 모델을 연구하고 개발합니다."
        // }
    },
    education: [
        {
            period: "2020.03 - 2024.02",
            school: { en: "Hallym University, Republic of Korea", kr: "한림대학교" },
            degree: { 
                en: "B.S. in Bio Statistics & Software (Double Major)", 
                kr: "데이터사이언스(이학사) 및 소프트웨어(공학사) 복수전공" 
            },
            desc: {
                en: "Specialization: Bio Statistics in Clinical Medicine / Big Data",
                kr: "세부전공: 임상의학통계 / 빅데이터"
            }
        }
    ],
    workExperience: [
        {
            period: "2024.04 - 2024.09",
            role: { en: "Research Assistant", kr: "연구원" },
            org: { en: "Cardiovascular Disease Research Center (RLRC), Hallym University", kr: "한림대학교 Cardiovascular Disease Research Center(RLRC)" },
            desc: {
                en: "Conducted AI research projects focused on disease prediction using healthcare big data. Key projects include IMU Gait Data-Based CKD Classification and Multimodal Biosignal-Based Sleep Staging.",
                kr: "의료 빅데이터 및 웨어러블 데이터를 활용한 질병 예측 AI 연구 수행. (보행 데이터 기반 만성 신장 질환 분류, 다중 생체 신호 기반 수면 단계 분류 등)"
            }
        },
        {
            period: "2023.01 - 2024.02",
            role: { en: "Undergraduate Intern", kr: "학부생 인턴" },
            org: { en: "Dept. of Data Science, Hallym University", kr: "한림대학교 데이터사이언스학부 연구실" },
            desc: {
                en: "Participated in cognitive ability analysis of MCI patients, applying MICE techniques for missing data imputation.",
                kr: "경도인지장애(MCI) 환자의 인지능력 변화 분석 연구 참여. MICE 기법을 활용한 결측치 처리 및 데이터 정제."
            }
        },
        {
            period: "2021.09 - 2021.12",
            role: { en: "Undergraduate Research Assistant", kr: "학부연구생" },
            org: { en: "AI Team, Hallym University Chuncheon Sacred Heart Hospital", kr: "한림대학교 춘천성심병원 인공지능(AI) 팀" },
            desc: {
                en: "Assisted in analyzing the association between sleep anesthesia drugs and patient delirium. Conducted basic clinical data preprocessing and Exploratory Data Analysis (EDA).",
                kr: "수면마취 약제 종류에 따른 환자의 섬망 증상 연관성 분석 보조. 기초 임상 데이터 전처리 및 탐색적 데이터 분석(EDA) 수행."
            }
        }
    ],
    publications: [
        {
            year: "2025",
            title: "Comparative analysis of RGB and infrared imaging photoplethysmography using traditional and deep learning approaches across various frame rates",
            authors: "Sunghan Lee, Jeonghwan Koh, Suyeon Yun, Jinwon Kim, Seoyeong Lee, Goeun Park, Ung Park, Seokjue Jeong, In cheol Jeong",
            journal: "Digital Health Research, vol. 3, no. 1",
            type: "Journal Article",
            doi: "https://doi.org/10.61499/dhr.2025.3.e1"
        },
        {
            year: "2025",
            title: "Patch-type wearable electrocardiography and impedance pneumography for sleep staging: A multi-modal deep learning approach",
            authors: "Sunghan Lee, Ung Park, Suyeon Yun, Goeun Park, Sung Pil Cho, Kyung Min Kim, In cheol Jeong",
            journal: "Computers in Biology and Medicine, vol. 195",
            type: "Journal Article (SCIE)",
            doi: "https://doi.org/10.1016/j.compbiomed.2025.110452"
        },
        {
            year: "2025",
            title: "AI-Enabled Speech Monitoring for Dysarthria Detection in Consumer Electronics",
            authors: "Seoyeong Lee, Sunghan Lee, Goeun Park, Dong-Ok Won, Chul-Ho Kim, Jae-Jun Lee, In cheol Jeong",
            journal: "2025 IEEE International Conference on Consumer Electronics (ICCE)",
            type: "Conference Proceedings",
            doi: "https://doi.org/10.1109/ICCE63647.2025.10929844"
        }
    ],
    patents: [
        {
            date: "2025.11",
            title: { en: "Apparatus And Method For Detecting Chronic Kidney Disease Based On Walking Data", kr: "보행 데이터 기반 만성 신장 질환 검출 장치 및 방법" },
            detail: "PCT/KR2025/019785 (International Patent Application, PCT)"
        },
        {
            date: "2025.10",
            title: { en: "Apparatus And Method For Detecting Chronic Kidney Disease Based On Walking Data", kr: "보행 데이터 기반 만성 신장 질환 검출 장치 및 방법" },
            detail: "App. No: 10-2025-0147970 (South Korea)"
        },
        {
            date: "2025.10",
            title: { en: "Walking Data-Based Biomarker For Detecting Kidney Disease, Extraction Apparatus And Method Thereof", kr: "신장 질환 검출을 위한 보행 데이터 기반 바이오마커, 이의 추출 장치 및 방법" },
            detail: "App. No: 10-2025-0147971 (South Korea)"
        },
        {
            date: "2025.09",
            title: { en: "Apparatus And Method For Classifying Sleep Stages Based On Electrocardiogram And Impedance Plethysmography", kr: "심전도 및 호흡 임피던스 기반 수면 단계 분류 장치 및 방법" },
            detail: "App. No: 10-2025-0132934 (South Korea)"
        },
        {
            date: "2025.06",
            title: { en: "Apparatus And Method For Disease Classification Based On Voice Data", kr: "음성 데이터 기반 질환 분류 장치 및 방법" },
            detail: "App. No: 10-2025-0085420 (South Korea)"
        }
    ],
    copyrights: [
        {
            date: "2025.09",
            title: { en: "Web Application for CKD Classification Based on Gait Data", kr: "보행 데이터 기반 만성 신부전증 탐지 웹 어플리케이션" },
            detail: "Reg No: C-2025-038377 (South Korea)"
        },
        {
            date: "2025.08",
            title: { en: "Sleep Tracker v1", kr: "Sleep Tracker v1" },
            detail: "Reg No: C-2025-030887 (South Korea)"
        }
    ],
    awards: [
        {
            year: "2022",
            title: { en: "Grand Prize, Hallym SW Week", kr: "대상, 한림 SW Week" },
            org: { en: "Hallym University", kr: "한림대학교" }
        },
        {
            year: "2022",
            title: { en: "Participation Award, Field Problem Solving AI-Big Data Expert Program", kr: "장려상, 현장 문제해결 AI·빅데이터 전문가 과정" },
            org: { en: "Gyeonggi University Big Data Center", kr: "경기대학교 빅데이터센터" }
        },
        {
            year: "2021",
            title: { en: "Grand Prize, Hallym/OP.GG Game Big Data Hackathon", kr: "최우수상, Hallym/OP.GG Game Big Data Hackathon" },
            org: { en: "Hallym University", kr: "한림대학교" }
        },
        {
            year: "2021",
            title: { en: "Excellence Award, Hallym/OP.GG Game Big Data Hackathon", kr: "우수상, Hallym/OP.GG Game Big Data Hackathon" },
            org: { en: "OP.GG", kr: "OP.GG" }
        }
    ],
    activities: [
        {
            period: "2022.01 - 2022.12",
            role: { en: "Vice President", kr: "부학생회장" },
            org: { en: "Student Council of the College, Hallym University", kr: "한림대학교 데이터사이언스 학생회" }
        },
        {
            period: "2021.01 - 2021.12",
            role: { en: "Director, Communication & PR Department", kr: "소통홍보국장" },
            org: { en: "Dormitory Council, Hallym University", kr: "한림대학교 사생위원단" }
        },
        {
            period: "2020.03 - 2020.12",
            role: { en: "Staff Member", kr: "학생회 부원" },
            org: { en: "Department Student Council, Hallym University", kr: "한림대학교 데이터사이언스 학생회" }
        }
    ],
    skills: {
        en: [
            "Programming: Python (PyTorch, TensorFlow, Scikit-learn), R (Tidyverse), SAS (Certified), Java, C, LaTeX",
            "Research: Deep learning-based biological signal processing, Clinical data preprocessing",
            "Tools: Docker, Notion, SPSS"
        ],
        kr: [
            "프로그래밍: Python (PyTorch, TensorFlow, Scikit-learn), R (Tidyverse), SAS (Base Programming 자격), Java, C, LaTeX",
            "연구 분야: 딥러닝 기반 생체 신호 처리 및 질환 분류, 임상 데이터 전처리 및 결측치 보정",
            "도구: Docker, Notion, SPSS"
        ]
    }
};
