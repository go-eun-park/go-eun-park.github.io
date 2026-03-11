// script.js
let currentLang = 'en';

function renderContent() {
    // 1. 기본 정보 렌더링
    document.getElementById('name').textContent = portfolioData.basicInfo.name[currentLang];
    document.getElementById('role').textContent = portfolioData.basicInfo.role[currentLang];
    document.getElementById('about-text').textContent = portfolioData.basicInfo.about[currentLang];
    
    // 고정 텍스트 (연락처 등)
    document.getElementById('contact-info').textContent = `📧 ${portfolioData.basicInfo.email} | 📞 ${portfolioData.basicInfo.phone}`;

    // 2. 학력 렌더링
    const eduContainer = document.getElementById('education-list');
    eduContainer.innerHTML = '';
    portfolioData.education.forEach(edu => {
        eduContainer.innerHTML += `
            <div class="item">
                <div class="item-title">${edu.school[currentLang]}</div>
                <div class="item-meta">${edu.period}</div>
                <div>${edu.degree[currentLang]}</div>
            </div>
        `;
    });

    // 3. 실적 렌더링
    const achContainer = document.getElementById('achievements-list');
    achContainer.innerHTML = '';
    portfolioData.achievements.forEach(ach => {
        achContainer.innerHTML += `
            <div class="item">
                <div class="item-title">[${ach.type[currentLang]}] ${ach.title[currentLang]}</div>
                <div class="item-meta">${ach.date} | ${ach.detail}</div>
            </div>
        `;
    });

    // 4. 섹션 제목 언어 변경
    document.getElementById('title-about').textContent = currentLang === 'en' ? 'About Me' : '소개';
    document.getElementById('title-edu').textContent = currentLang === 'en' ? 'Education' : '학력';
    document.getElementById('title-ach').textContent = currentLang === 'en' ? 'Publications & Patents' : '주요 실적';
}

// 언어 토글 버튼 이벤트
document.getElementById('lang-toggle').addEventListener('click', (e) => {
    currentLang = currentLang === 'en' ? 'kr' : 'en';
    e.target.textContent = currentLang === 'en' ? 'KOR' : 'ENG';
    renderContent();
});

// 초기 렌더링 실행
renderContent();
