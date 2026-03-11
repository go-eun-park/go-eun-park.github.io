// script.js
let currentLang = 'en';

function renderContent() {
    // 1. 기본 정보
    document.getElementById('name').textContent = portfolioData.basicInfo.name[currentLang];
    document.getElementById('role').textContent = portfolioData.basicInfo.role[currentLang];
    document.getElementById('about-text').textContent = portfolioData.basicInfo.about[currentLang];
    document.getElementById('contact-info').textContent = `📧 ${portfolioData.basicInfo.email} | 📞 ${portfolioData.basicInfo.phone}`;

    // 2. 학력
    const eduContainer = document.getElementById('education-list');
    eduContainer.innerHTML = '';
    portfolioData.education.forEach(edu => {
        eduContainer.innerHTML += `
            <div class="item">
                <div class="item-title">${edu.school[currentLang]}</div>
                <div class="item-meta">${edu.period}</div>
                <div>${edu.degree[currentLang]}<br><small>${edu.desc[currentLang]}</small></div>
            </div>
        `;
    });

    // 3. 업무 및 연구 경험
    const workContainer = document.getElementById('work-list');
    workContainer.innerHTML = '';
    portfolioData.workExperience.forEach(work => {
        workContainer.innerHTML += `
            <div class="item">
                <div class="item-title">${work.role[currentLang]} @ ${work.org[currentLang]}</div>
                <div class="item-meta">${work.period}</div>
                <div>${work.desc[currentLang]}</div>
            </div>
        `;
    });

    // 4. 출판(논문)
    const pubContainer = document.getElementById('publication-list');
    pubContainer.innerHTML = '';
    portfolioData.publications.forEach(pub => {
        pubContainer.innerHTML += `
            <div class="item">
                <div class="item-title">${pub.title}</div>
                <div class="item-meta">${pub.year} | ${pub.journal} [${pub.type}]</div>
            </div>
        `;
    });

    // 5. 특허
    const patContainer = document.getElementById('patent-list');
    patContainer.innerHTML = '';
    portfolioData.patents.forEach(pat => {
        patContainer.innerHTML += `
            <div class="item">
                <div class="item-title">${pat.title[currentLang]}</div>
                <div class="item-meta">${pat.date} | ${pat.detail}</div>
            </div>
        `;
    });

    // 6. 스킬
    const skillContainer = document.getElementById('skill-list');
    skillContainer.innerHTML = '';
    portfolioData.skills[currentLang].forEach(skill => {
        skillContainer.innerHTML += `<li>${skill}</li>`;
    });

    // 7. 섹션 제목 언어 변경
    document.getElementById('title-about').textContent = currentLang === 'en' ? 'About Me' : '소개';
    document.getElementById('title-edu').textContent = currentLang === 'en' ? 'Education' : '학력';
    document.getElementById('title-work').textContent = currentLang === 'en' ? 'Work Experience' : '연구 및 업무 경험';
    document.getElementById('title-pub').textContent = currentLang === 'en' ? 'Publications' : '논문 실적';
    document.getElementById('title-pat').textContent = currentLang === 'en' ? 'Patents' : '특허 실적';
    document.getElementById('title-skill').textContent = currentLang === 'en' ? 'Skills' : '보유 기술';
}

// 언어 토글 버튼 이벤트
document.getElementById('lang-toggle').addEventListener('click', (e) => {
    currentLang = currentLang === 'en' ? 'kr' : 'en';
    e.target.textContent = currentLang === 'en' ? 'KOR' : 'ENG';
    renderContent();
});

// 초기 실행
renderContent();
