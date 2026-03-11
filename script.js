// script.js
let currentLang = 'en';

// 💡 이름 하이라이트 (데이터가 없어도 에러 안 나게 방어)
function highlightName(text) {
    if (!text) return "";
    return text.replace(/(Goeun Park|G\.\s*Park|박고은)/gi, '<strong style="color: #2980b9; text-decoration: underline;">$1</strong>');
}

// 💡 텍스트 안전 삽입 (태그가 없어도 에러 안 나게 방어)
function safeSetText(id, text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text || "";
}

// 💡 리스트 안전 렌더링 (배열 데이터가 누락되어도 에러 안 나게 방어)
function renderList(id, dataArray, renderItem) {
    const container = document.getElementById(id);
    if (container) {
        container.innerHTML = '';
        if (Array.isArray(dataArray)) {
            dataArray.forEach(item => {
                container.innerHTML += renderItem(item);
            });
        }
    }
}

function renderContent() {
    // 1. 기본 정보 안전하게 불러오기 (데이터 없으면 빈칸 처리)
    const info = portfolioData.basicInfo || {};
    const nameObj = info.name || {en: '', kr: ''};
    const roleObj = info.role || {en: '', kr: ''};
    const aboutObj = info.about || {en: '', kr: ''};

    safeSetText('name', nameObj[currentLang]);
    safeSetText('role', roleObj[currentLang]);
    safeSetText('about-text', aboutObj[currentLang]);
    safeSetText('contact-info', `📧 ${info.email || ''} | 📞 ${info.phone || ''}`);

    // 2. 학력
    renderList('education-list', portfolioData.education, edu => `
        <div class="item">
            <div class="item-title">${(edu.school || {})[currentLang] || ''}</div>
            <div class="item-meta">${edu.period || ''}</div>
            <div>${(edu.degree || {})[currentLang] || ''}<br><small>${(edu.desc || {})[currentLang] || ''}</small></div>
        </div>
    `);

    // 3. 업무 경험
    renderList('work-list', portfolioData.workExperience, work => `
        <div class="item">
            <div class="item-title">${(work.role || {})[currentLang] || ''} @ ${(work.org || {})[currentLang] || ''}</div>
            <div class="item-meta">${work.period || ''}</div>
            <div>${(work.desc || {})[currentLang] || ''}</div>
        </div>
    `);

    // 4. 출판물(논문) - 새 탭 링크 기능 포함
    renderList('publication-list', portfolioData.publications, pub => {
        const authors = highlightName(pub.authors);
        const titleHtml = pub.doi ? `<a href="${pub.doi}" target="_blank" style="color: #34495e; text-decoration: underline;">🔗 ${pub.title}</a>` : pub.title;
        return `<div class="item">
            <div class="item-title">${titleHtml}</div>
            <div style="font-size: 0.95em; color: #555;">${authors}</div>
            <div class="item-meta">${pub.year} | ${pub.journal} [${pub.type}]</div>
        </div>`;
    });

    // 5. 특허
    renderList('patent-list', portfolioData.patents, pat => {
        const authorText = pat.authors ? pat.authors[currentLang] : '';
        const authors = highlightName(authorText);
        return `<div class="item">
            <div class="item-title">${(pat.title || {})[currentLang] || ''}</div>
            <div style="font-size: 0.95em; color: #555;">${authors}</div>
            <div class="item-meta">${pat.date} | ${pat.detail}</div>
        </div>`;
    });

    // 6. 소프트웨어 저작권
    renderList('copyright-list', portfolioData.copyrights, copy => {
        const authorText = copy.authors ? copy.authors[currentLang] : '';
        const authors = highlightName(authorText);
        return `<div class="item">
            <div class="item-title">${(copy.title || {})[currentLang] || ''}</div>
            <div style="font-size: 0.95em; color: #555;">${authors}</div>
            <div class="item-meta">${copy.date} | ${copy.detail}</div>
        </div>`;
    });

    // 7. 수상
    renderList('award-list', portfolioData.awards, award => `
        <div class="item">
            <div class="item-title">${(award.title || {})[currentLang] || ''}</div>
            <div class="item-meta">${award.year} | ${(award.org || {})[currentLang] || ''}</div>
        </div>
    `);

    // 8. 활동
    renderList('activity-list', portfolioData.activities, act => `
        <div class="item">
            <div class="item-title">${(act.role || {})[currentLang] || ''}</div>
            <div class="item-meta">${act.period} | ${(act.org || {})[currentLang] || ''}</div>
        </div>
    `);

    // 9. 스킬
    const skillContainer = document.getElementById('skill-list');
    if (skillContainer) {
        skillContainer.innerHTML = '';
        const skills = (portfolioData.skills || {})[currentLang] || [];
        skills.forEach(skill => {
            skillContainer.innerHTML += `<li>${skill}</li>`;
        });
    }

    // 10. 제목 세팅
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

// 언어 토글 버튼 이벤트
document.getElementById('lang-toggle').addEventListener('click', (e) => {
    currentLang = currentLang === 'en' ? 'kr' : 'en';
    e.target.textContent = currentLang === 'en' ? 'KOR' : 'ENG';
    renderContent();
});

// 초기 실행
renderContent();
