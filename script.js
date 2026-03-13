// script.js
let currentLang = 'en';

// Highlight author name
function highlightName(text) {
    if (!text) return "";
    return text.replace(/(Goeun Park|G\.\s*Park|박고은)/gi,
        '<strong class="highlight">$1</strong>');
}

function safeSetText(id, text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text || "";
}

function safeSetHTML(id, html) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html || "";
}

// Detect publication badge type
function getBadgeClass(type) {
    if (!type) return 'journal';
    const t = type.toLowerCase();
    if (t.includes('scie')) return 'scie';
    if (t.includes('conference')) return 'conference';
    return 'journal';
}

function renderContent() {
    const info = portfolioData.basicInfo || {};
    const nameObj = info.name || { en: '', kr: '' };
    const roleObj = info.role || { en: 'Researcher · Engineer', kr: '연구원 · 엔지니어' };
    const aboutObj = info.about || {
        en: "I am a researcher specializing in Bio Statistics and Big Data, focusing on developing deep learning models — such as 1-D CNNs — for biological signal processing and disease classification using clinical and wearable sensor data.",
        kr: "임상의학통계학과 빅데이터를 전공한 연구원입니다. 임상 데이터 및 웨어러블 센서 데이터를 활용하여, 1-D CNN과 같은 딥러닝 기반의 생체 신호 처리 및 질병 분류 모델을 연구하고 개발합니다."
    };

    // Basic info
    safeSetText('name', nameObj[currentLang]);
    safeSetText('mobile-name', nameObj[currentLang]);
    safeSetText('profile-role', roleObj[currentLang]);
    safeSetText('mobile-role', roleObj[currentLang]);
    safeSetHTML('about-text', aboutObj[currentLang]);

    // Section titles
    const titles = {
        'title-edu': { en: 'Education', kr: '학력' },
        'title-work': { en: 'Work Experience', kr: '연구 및 업무 경험' },
        'title-pub': { en: 'Publications', kr: '논문 실적' },
        'title-pat': { en: 'Patents', kr: '특허 실적' },
        'title-copy': { en: 'Software Copyrights', kr: '소프트웨어 저작권' },
        'title-award': { en: 'Awards', kr: '수상 내역' },
        'title-act': { en: 'Student Activities', kr: '학생 자치 활동' },
        'title-skill': { en: 'Skills', kr: '보유 기술' },
        'label-about': { en: 'About', kr: '소개' },
    };

    Object.entries(titles).forEach(([id, obj]) => {
        safeSetText(id, obj[currentLang]);
    });

    // Nav links
    document.querySelectorAll('.nav-link, .mob-nav-link').forEach(link => {
        const text = link.getAttribute(`data-${currentLang}`);
        if (text) link.textContent = text;
    });

    // Education
    const eduContainer = document.getElementById('education-list');
    if (eduContainer) {
        eduContainer.innerHTML = portfolioData.education.map(edu => `
            <div class="timeline-item">
                <div class="timeline-left">
                    <div class="timeline-period">${edu.period || ''}</div>
                </div>
                <div class="timeline-right">
                    <div class="timeline-title">${(edu.school || {})[currentLang] || ''}</div>
                    <div class="timeline-sub">${(edu.degree || {})[currentLang] || ''}</div>
                    <div class="timeline-desc">${(edu.desc || {})[currentLang] || ''}</div>
                </div>
            </div>
        `).join('');
    }

    // Work Experience
    const workContainer = document.getElementById('work-list');
    if (workContainer) {
        workContainer.innerHTML = portfolioData.workExperience.map(work => `
            <div class="timeline-item">
                <div class="timeline-left">
                    <div class="timeline-period">${work.period || ''}</div>
                </div>
                <div class="timeline-right">
                    <div class="timeline-title">${(work.role || {})[currentLang] || ''}</div>
                    <div class="timeline-sub">${(work.org || {})[currentLang] || ''}</div>
                    <div class="timeline-desc">${(work.desc || {})[currentLang] || ''}</div>
                </div>
            </div>
        `).join('');
    }

    // Publications
    const pubContainer = document.getElementById('publication-list');
    if (pubContainer) {
        pubContainer.innerHTML = portfolioData.publications.map((pub, i) => {
            const authors = highlightName(pub.authors || '');
            const badgeClass = getBadgeClass(pub.type);
            const titleEl = pub.doi
                ? `<a href="${pub.doi}" target="_blank" rel="noopener" class="pub-title">${pub.title}</a>`
                : `<span class="pub-title">${pub.title}</span>`;
            return `
                <div class="pub-item">
                    <div class="pub-num">${String(i + 1).padStart(2, '0')}</div>
                    <div>
                        <div><span class="pub-badge ${badgeClass}">${pub.type || 'Journal'}</span></div>
                        ${titleEl}
                        <div class="pub-authors">${authors}</div>
                        <div class="pub-meta">${pub.year} · ${pub.journal}</div>
                    </div>
                </div>`;
        }).join('');
    }

    // Patents
    const patContainer = document.getElementById('patent-list');
    if (patContainer) {
        patContainer.innerHTML = portfolioData.patents.map(pat => {
            const authorText = pat.authors ? pat.authors[currentLang] : '';
            return `
                <div class="ip-item">
                    <div class="ip-date">${pat.date || ''}</div>
                    <div>
                        <div class="ip-title">${(pat.title || {})[currentLang] || ''}</div>
                        <div class="ip-authors">${highlightName(authorText)}</div>
                        <div class="ip-detail">${pat.detail || ''}</div>
                    </div>
                </div>`;
        }).join('');
    }

    // Copyrights
    const copyContainer = document.getElementById('copyright-list');
    if (copyContainer) {
        copyContainer.innerHTML = portfolioData.copyrights.map(copy => {
            const authorText = copy.authors ? copy.authors[currentLang] : '';
            return `
                <div class="ip-item">
                    <div class="ip-date">${copy.date || ''}</div>
                    <div>
                        <div class="ip-title">${(copy.title || {})[currentLang] || ''}</div>
                        <div class="ip-authors">${highlightName(authorText)}</div>
                        <div class="ip-detail">${copy.detail || ''}</div>
                    </div>
                </div>`;
        }).join('');
    }

    // Awards
    const awardContainer = document.getElementById('award-list');
    if (awardContainer) {
        awardContainer.innerHTML = portfolioData.awards.map(award => `
            <div class="award-card">
                <div class="award-year">${award.year}</div>
                <div class="award-title">${(award.title || {})[currentLang] || ''}</div>
                <div class="award-org">${(award.org || {})[currentLang] || ''}</div>
            </div>
        `).join('');
    }

    // Activities
    const actContainer = document.getElementById('activity-list');
    if (actContainer) {
        actContainer.innerHTML = portfolioData.activities.map(act => `
            <div class="timeline-item">
                <div class="timeline-left">
                    <div class="timeline-period">${act.period || ''}</div>
                </div>
                <div class="timeline-right">
                    <div class="timeline-title">${(act.role || {})[currentLang] || ''}</div>
                    <div class="timeline-sub">${(act.org || {})[currentLang] || ''}</div>
                </div>
            </div>
        `).join('');
    }

    // Skills — structured rendering
    const skillContainer = document.getElementById('skill-list');
    if (skillContainer) {
        const skills = (portfolioData.skills || {})[currentLang] || [];
        const skillCategories = currentLang === 'en'
            ? ['Programming', 'Research', 'Tools']
            : ['프로그래밍', '연구 분야', '도구'];

        skillContainer.innerHTML = skills.map((skill, i) => {
            const colonIdx = skill.indexOf(':');
            if (colonIdx === -1) {
                return `<div class="skill-item">
                    <div class="skill-category">${skillCategories[i] || ''}</div>
                    <div class="skill-content">${skill}</div>
                </div>`;
            }
            const category = skill.substring(0, colonIdx).trim();
            const content = skill.substring(colonIdx + 1).trim();
            return `<div class="skill-item">
                <div class="skill-category">${category}</div>
                <div class="skill-content">${content}</div>
            </div>`;
        }).join('');
    }
}

// Lang toggle
document.getElementById('lang-toggle').addEventListener('click', (e) => {
    currentLang = currentLang === 'en' ? 'kr' : 'en';
    document.getElementById('lang-label').textContent = currentLang === 'en' ? '한국어' : 'English';
    renderContent();
});

// Hamburger menu
const hamburger = document.getElementById('hamburger');
const drawer = document.getElementById('mobile-drawer');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    drawer.classList.toggle('open');
});

// Close drawer on nav link click
document.querySelectorAll('.mob-nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        drawer.classList.remove('open');
    });
});

// Active nav on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(link => {
                link.classList.toggle('active',
                    link.getAttribute('href') === `#${entry.target.id}`);
            });
        }
    });
}, { rootMargin: '-30% 0px -60% 0px' });

sections.forEach(s => observer.observe(s));

// Initial render
renderContent();
