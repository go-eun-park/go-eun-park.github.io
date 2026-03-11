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

    // 4. 출판(논문) - DOI 링크 및 이름 하이라이트 기능 추가!
    const pubContainer = document.getElementById('publication-list');
    pubContainer.innerHTML = '';
    portfolioData.publications.forEach(pub => {
        // 이름 굵게 처리 (Goeun Park)
        let highlightedAuthors = pub.authors.replace('Goeun Park', '<strong style="color: #2980b9; text-decoration: underline;">Goeun Park</strong>');
        
        pubContainer.innerHTML += `
            <div class="item">
                <div class="item-title">
                    <a href="${pub.doi}" target="_blank" style="color: #34495e; text-decoration: none;">🔗 ${pub.title}</a>
                </div>
                <div>${highlightedAuthors}</div>
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

    // 6. 소프트웨어 저작권 (새로 추가됨)
    const copyContainer = document.getElementById('copyright-list');
    copyContainer.innerHTML = '';
    portfolioData.copyrights.forEach(copy => {
        copyContainer.innerHTML += `
            <div class="item">
                <div class="item-title">${copy.title[currentLang]}</div>
                <div class="item-meta">${copy.date} | ${copy.detail}</div>
            </div>
        `;
    });

    // 7. 수상 내역 (새로 추가됨)
    const awardContainer = document.getElementById('award-list');
    awardContainer.innerHTML = '';
    portfolioData.awards.forEach(award => {
        awardContainer.innerHTML += `
            <div class="item">
                <div class="item-title">${award.title[currentLang]}</div>
                <div class="item-meta">${award.year} | ${award.org[currentLang]}</div>
            </div>
        `;
    });

    // 8. 학생 자치 활동 (새로 추가됨)
    const actContainer = document.getElementById('activity-list');
    actContainer.innerHTML = '';
    portfolioData.activities.forEach(act => {
        actContainer.innerHTML += `
            <div class="item">
                <div class="item-title">${act.role[currentLang]}</div>
                <div class="item-meta">${act.period} | ${act.org[currentLang]}</div>
            </div>
        `;
    });

    // 9. 스킬
    const skillContainer = document.getElementById('skill-list');
    skillContainer.innerHTML = '';
    portfolioData.skills[currentLang].forEach(skill => {
        skillContainer.innerHTML += `<li>${skill}</li>`;
    });

    // 10. 섹션 제목 언어 변경
    document.getElementById('title-about').textContent = currentLang === 'en' ? 'About Me' : '소개';
    document.getElementById('title-edu').textContent = currentLang === 'en' ? 'Education' : '학력';
    document.getElementById('title-work').textContent = currentLang === 'en' ? 'Work Experience' : '연구 및 업무 경험';
    document.getElementById('title-pub').textContent = currentLang === 'en' ? 'Publications (SCIE & Conferences)' : '논문 실적';
    document.getElementById('title-pat').textContent = currentLang === 'en' ? 'Patents' : '특허 실적';
    document.getElementById('title-copy').textContent = currentLang === 'en' ? 'Software Copyrights' : '소프트웨어 저작권';
    document.getElementById('title-award').textContent = currentLang === 'en' ? 'Awards' : '수상 내역';
    document.getElementById('title-act').textContent = currentLang === 'en' ? 'Student Activities' : '학생 자치 활동';
    document.getElementById('title-skill').textContent = currentLang === 'en' ? 'Skills' : '보유 기술';
}

// 언어 토글 버튼 이벤트
document.getElementById('lang-toggle').addEventListener('click', (e) => {
    currentLang = currentLang === 'en' ? 'kr' : 'en';
    e.target.textContent = currentLang === 'en' ? 'KOR' : 'ENG';
    renderContent();
});

// 초기 렌더링
renderContent();
