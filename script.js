// script.js
let currentLang = 'en';

// 💡 핵심 기능 1: 이름 자동 인식 및 하이라이트 (Goeun Park, G. Park, 박고은 모두 대응)
function highlightName(text) {
    if (!text) return "";
    return text.replace(/(Goeun Park|G\.\s*Park|박고은)/gi, '<strong style="color: #2980b9; text-decoration: underline;">$1</strong>');
}

// 💡 핵심 기능 2: 안전한 텍스트 렌더링 (HTML 요소가 없어도 에러 안 남)
function safeSetText(id, text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
}

function renderContent() {
    // 1. 기본 정보
    safeSetText('name', portfolioData.basicInfo.name[currentLang]);
    safeSetText('role', portfolioData.basicInfo.role[currentLang]);
    safeSetText('about-text', portfolioData.basicInfo.about[currentLang]);
    safeSetText('contact-info', `📧 ${portfolioData.basicInfo.email} | 📞 ${portfolioData.basicInfo.phone}`);

    // 각 섹션 렌더링 로직
    const containers = {
        edu: document.getElementById('education-list'),
        work: document.getElementById('work-list'),
        pub: document.getElementById('publication-list'),
        pat: document.getElementById('patent-list'),
        copy: document.getElementById('copyright-list'),
        award: document.getElementById('award-list'),
        act: document.getElementById('activity-list'),
        skill: document.getElementById('skill-list')
    };

    // 2. 학력
    if (containers.edu) {
        containers.edu.innerHTML = '';
        portfolioData.education.forEach(edu => {
            containers.edu.innerHTML += `<div class="item"><div class="item-title">${edu.school[currentLang]}</div><div class="item-meta">${edu.period}</div><div>${edu.degree[currentLang]}<br><small>${edu.desc[currentLang]}</small></div></div>`;
        });
    }

    // 3. 업무 경험
    if (containers.work) {
        containers.work.innerHTML = '';
        portfolioData.workExperience.forEach(work => {
            containers.work.innerHTML += `<div class="item"><div class="item-title">${work.role[currentLang]} @ ${work.org[currentLang]}</div><div class="item-meta">${work.period}</div><div>${work.desc[currentLang]}</div></div>`;
        });
    }

    // 4. 출판물(논문) - DOI 링크 (새 탭 열기) 포함
    if (containers.pub) {
        containers.pub.innerHTML = '';
        portfolioData.publications.forEach(pub => {
            const authors = highlightName(pub.authors);
            // DOI가 있으면 링크로, 없으면 일반 텍스트로 처리
            const titleHtml = pub.doi ? `<a href="${pub.doi}" target="_blank" style="color: #34495e; text-decoration: underline;">🔗 ${pub.title}</a>` : pub.title;
            containers.pub.innerHTML += `<div class="item"><div class="item-title">${titleHtml}</div><div style="font-size: 0.95em; color: #555;">${authors}</div><div class="item-meta">${pub.year} | ${pub.journal} [${pub.type}]</div></div>`;
        });
    }

    // 5. 특허 - 발명자 하이라이트 추가
    if (containers.pat) {
        containers.pat.innerHTML = '';
        portfolioData.patents.forEach(pat => {
            const authors = highlightName(pat.authors[currentLang]);
            containers.pat.innerHTML += `<div class="item"><div class="item-title">${pat.title[currentLang]}</div><div style="font-size: 0.95em; color: #555;">${authors}</div><div class="item-meta">${pat.date} | ${pat.detail}</div></div>`;
        });
    }

    // 6. 저작권 - 저자 하이라이트 추가
    if (containers.copy) {
        containers.copy.innerHTML = '';
        portfolioData.copyrights.forEach(copy => {
            const authors = highlightName(copy.authors[currentLang]);
            containers.copy.innerHTML += `<div class="item"><div class="item-title">${copy.title[currentLang]}</div><div style="font-size: 0.95em; color: #555;">${authors}</div><div class="item-meta">${copy.date} | ${copy.detail}</div></div>`;
        });
    }

    // 7. 수상
    if (containers.award) {
        containers.award.innerHTML = '';
        portfolioData.awards.forEach(award => {
            containers.award.innerHTML += `<div class="item"><div class="item-title">${award.title[currentLang]}</div><div class="item-meta">${award.year} | ${award.org[currentLang]}</div></div>`;
        });
    }

    // 8. 활동
    if (containers.act) {
        containers.act.innerHTML = '';
        portfolioData.activities.forEach(act => {
            containers.act.innerHTML += `<div class="item"><div class="item-title">${act.role[currentLang]}</div><div class="item-meta">${act.period} | ${act.org[currentLang]}</div></div>`;
        });
    }

    // 9. 스킬
    if (containers.skill) {
        containers.skill.innerHTML = '';
        portfolioData.skills[currentLang].forEach(skill => {
            containers.skill.innerHTML += `<li>${skill}</li>`;
        });
    }

    // 섹션 제목 다국어 처리
    safeSetText('title-about', currentLang === 'en' ? 'About Me' : '소개');
    safeSetText('title-edu', currentLang === 'en' ? 'Education' : '학력');
    safeSetText('title-work', currentLang === 'en' ? 'Work Experience' : '연구 및 업무 경험');
    safeSetText('title-pub', currentLang === 'en' ? 'Publications (SCIE & Conferences)' : '논문 실적');
    safeSetText('title-pat', currentLang === 'en' ? 'Patents' : '특허 실적');
    safeSetText('title-copy', currentLang === 'en' ? 'Software Copyrights' : '소프트웨어 저작권');
    safeSetText('title-award', currentLang === 'en' ? 'Awards' : '수상 내역');
    safeSetText('title-act', currentLang === 'en' ? 'Student Activities' : '학생 자치 활동');
    safeSetText('title-skill', currentLang === 'en' ? 'Skills' : '보유 기술');
}

// 토글 버튼
document.getElementById('lang-toggle').addEventListener('click', (e) => {
    currentLang = currentLang === 'en' ? 'kr' : 'en';
    e.target.textContent = currentLang === 'en' ? 'KOR' : 'ENG';
    renderContent();
});

// 시작
renderContent();
