const projects = [
    {
        t: "CodeAtlas",
        d: "Інтерактивний атлас коду — навігація по проектах, технологіях та ресурсах для розробників.",
        u: "CodeAtlas",
        i: "fa-atlas",
        c: "cyan",
        tags: ["app", "tool", "code"],
        category: "app"
    },
    {
        t: "Dead Rails Wiki",
        d: "Енциклопедія для гри Dead Rails з повним описом персонажів, локацій та стратегій.",
        u: "Dead-Rails-wiki",
        i: "fa-book-dead",
        c: "indigo",
        tags: ["wiki", "gaming", "guide"],
        category: "wiki"
    },
    {
        t: "Grow a Garden",
        d: "Інтерактивний проєкт дослідження росту з візуалізацією даних.",
        u: "Grow-",
        i: "fa-seedling",
        c: "green",
        tags: ["wiki", "data", "visualization"],
        category: "wiki"
    },
    {
        t: "Calculator",
        d: "Сучасний веб-калькулятор з підтримкою складних обчислень та історією.",
        u: "calculator",
        i: "fa-calculator",
        c: "blue",
        tags: ["tool", "math"],
        category: "tool"
    },
    {
        t: "Riddles Site",
        d: "Збірка інтелектуальних загадок з системою підказок та рейтингом.",
        u: "riddles-site",
        i: "fa-brain",
        c: "yellow",
        tags: ["game", "puzzle"],
        category: "game"
    },
    {
        t: "Steal-a-Brainrot v3",
        d: "Розважальний контент з мемами та інтерактивними елементами.",
        u: "Steal-a-Brainrot-v3",
        i: "fa-ghost",
        c: "red",
        tags: ["game", "meme"],
        category: "game"
    },
    {
        t: "Wishlist",
        d: "Менеджер списку бажань з можливістю поділитися з друзями.",
        u: "Wishlist",
        i: "fa-heart",
        c: "pink",
        tags: ["app", "social"],
        category: "app"
    },
    {
        t: "API Перекладач",
        d: "Інструмент перекладу через API з підтримкою багатьох мов.",
        u: "API----------",
        i: "fa-language",
        c: "cyan",
        tags: ["tool", "api"],
        category: "tool"
    },
    {
        t: "Fisch Wiki",
        d: "Повний гайд по грі Fisch з базою даних предметів.",
        u: "Fisch-wiki",
        i: "fa-fish",
        c: "orange",
        tags: ["wiki", "gaming"],
        category: "wiki"
    },
    {
        t: "LinkHub",
        d: "Хаб для організації та зберігання ваших посилань.",
        u: "LinkHub-h",
        i: "fa-link",
        c: "purple",
        tags: ["app", "productivity"],
        category: "app"
    },
    {
        t: "Doors Wiki",
        d: "База знань гри Doors з описом усіх сутностей.",
        u: "Doors-wiki",
        i: "fa-door-open",
        c: "amber",
        tags: ["wiki", "gaming", "horror"],
        category: "wiki"
    }
];

const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

if (window.matchMedia('(pointer: fine)').matches) {
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';

        setTimeout(() => {
            cursorFollower.style.left = e.clientX - 20 + 'px';
            cursorFollower.style.top = e.clientY - 20 + 'px';
        }, 100);
    });

    const interactiveElements = document.querySelectorAll('a, button, .project-card, .clone-cmd');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(1.5)';
            cursor.style.borderColor = '#06b6d4';
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursor.style.borderColor = '#6366f1';
        });
    });
}

function createParticles() {
    const container = document.getElementById('particles');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        container.appendChild(particle);
    }
}

function renderProjects(filter = 'all') {
    const grid = document.getElementById('grid');
    grid.innerHTML = '';

    const filtered = filter === 'all'
        ? projects
        : projects.filter(p => p.category === filter);

    filtered.forEach((p, idx) => {
        const card = document.createElement('div');
        card.className = `project-card`;
        card.style.animationDelay = `${idx * 0.1}s`;

        const colorMap = {
            indigo: 'from-indigo-500 to-purple-600',
            green: 'from-green-500 to-emerald-600',
            blue: 'from-blue-500 to-cyan-600',
            yellow: 'from-yellow-500 to-orange-600',
            red: 'from-red-500 to-pink-600',
            pink: 'from-pink-500 to-rose-600',
            cyan: 'from-cyan-500 to-blue-600',
            orange: 'from-orange-500 to-red-600',
            purple: 'from-purple-500 to-indigo-600',
            amber: 'from-amber-500 to-yellow-600'
        };

        card.innerHTML = `
            <div class="card-glow"></div>
            <div class="p-6 relative z-10">
                <div class="card-icon bg-gradient-to-br ${colorMap[p.c]}">
                    <i class="fas ${p.i} text-white"></i>
                </div>
                <h3 class="card-title">${p.t}</h3>
                <p class="card-description">${p.d}</p>
                <div class="card-tags">
                    ${p.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <div class="card-actions">
                    <a href="https://doors5misha44444e.github.io/${p.u}/" target="_blank" class="btn-live flex-1">
                        <i class="fas fa-external-link-alt mr-2"></i>LIVE
                    </a>
                    <a href="https://github.com/Doors5Misha44444e/${p.u}" target="_blank" class="btn-code flex-1">
                        <i class="fab fa-github mr-2"></i>CODE
                    </a>
                    <a href="https://github.dev/Doors5Misha44444e/${p.u}" target="_blank" class="btn-vscode" title="Відкрити в VS Code Web">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg" alt="VS Code" class="w-5 h-5">
                    </a>
                </div>
            </div>
        `;

        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;

            const glow = card.querySelector('.card-glow');
            glow.style.left = x + 'px';
            glow.style.top = y + 'px';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });

        grid.appendChild(card);
    });
}

function initFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;
            renderProjects(filter);
        });
    });
}

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');

                if (entry.target.classList.contains('stat-item')) {
                    animateNumber(entry.target.querySelector('.stat-number'));
                }
            }
        });
    }, observerOptions);

    document.querySelectorAll('.project-card, .section-header, .stat-item, .glass-card-3d, .reveal').forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });
}

function animateNumber(element) {
    if (!element || element.dataset.animated) return;
    element.dataset.animated = 'true';

    const target = parseInt(element.dataset.target);
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;

    const update = () => {
        current += step;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(update);
        } else {
            element.textContent = target + '+';
        }
    };

    update();
}

function initBackToTop() {
    const btn = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

function initNavScroll() {
    const nav = document.querySelector('nav');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            nav.style.transform = currentScroll > lastScroll ? 'translateY(-100%)' : 'translateY(0)';
        } else {
            nav.style.transform = 'translateY(0)';
        }

        lastScroll = currentScroll;
    });
}

class TextScramble {
    constructor(el) {
        this.el = el;
        this.chars = '!<>-_\\/[]{}—=+*^?#________';
        this.update = this.update.bind(this);
    }

    setText(newText) {
        const oldText = this.el.innerText;
        const length = Math.max(oldText.length, newText.length);
        const promise = new Promise((resolve) => this.resolve = resolve);
        this.queue = [];

        for (let i = 0; i < length; i++) {
            const from = oldText[i] || '';
            const to = newText[i] || '';
            const start = Math.floor(Math.random() * 40);
            const end = start + Math.floor(Math.random() * 40);
            this.queue.push({ from, to, start, end });
        }

        cancelAnimationFrame(this.frameRequest);
        this.frame = 0;
        this.update();
        return promise;
    }

    update() {
        let output = '';
        let complete = 0;

        for (let i = 0, n = this.queue.length; i < n; i++) {
            let { from, to, start, end, char } = this.queue[i];

            if (this.frame >= end) {
                complete++;
                output += to;
            } else if (this.frame >= start) {
                if (!char || Math.random() < 0.28) {
                    char = this.randomChar();
                    this.queue[i].char = char;
                }
                output += `<span class="text-cyan-400">${char}</span>`;
            } else {
                output += from;
            }
        }

        this.el.innerHTML = output;

        if (complete === this.queue.length) {
            this.resolve();
        } else {
            this.frameRequest = requestAnimationFrame(this.update);
            this.frame++;
        }
    }

    randomChar() {
        return this.chars[Math.floor(Math.random() * this.chars.length)];
    }
}

function initTextScramble() {
    const title = document.querySelector('.hero-title');
    if (title) {
        const fx = new TextScramble(title);
        const originalText = title.innerText;

        title.addEventListener('mouseenter', () => {
            fx.setText(originalText);
        });
    }
}

function initParallax() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.gradient-sphere');

        parallaxElements.forEach((el, index) => {
            const speed = 0.5 + (index * 0.1);
            el.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

function initDiscordCopy() {
    const discordBtns = document.querySelectorAll('.discord-btn');

    let toast = document.querySelector('.toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.className = 'toast';
        toast.innerHTML = '<i class="fab fa-discord"></i><span>Скопійовано: mikhailokrivenko_85791</span>';
        document.body.appendChild(toast);
    }

    discordBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            navigator.clipboard.writeText('mikhailokrivenko_85791').then(() => {
                toast.classList.add('show');
                setTimeout(() => {
                    toast.classList.remove('show');
                }, 3000);
            });
        });
    });
}

function initVSCodeClone() {
    const cloneCmds = document.querySelectorAll('.clone-cmd');
    let toast = document.querySelector('.toast');

    cloneCmds.forEach(cmd => {
        cmd.addEventListener('click', (e) => {
            e.preventDefault();
            navigator.clipboard.writeText('git clone https://github.com/Doors5Misha44444e/Portfolio-2.git').then(() => {
                const originalHTML = toast.innerHTML;
                toast.innerHTML = '<i class="fas fa-check-circle" style="color:#007ACC"></i><span>Команду скопійовано!</span>';
                toast.classList.add('show');
                setTimeout(() => {
                    toast.classList.remove('show');
                    setTimeout(() => { toast.innerHTML = originalHTML; }, 500);
                }, 3000);
            });
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    renderProjects();
    initFilters();
    initScrollAnimations();
    initBackToTop();
    initSmoothScroll();
    initNavScroll();
    initTextScramble();
    initParallax();
    initDiscordCopy();
    initVSCodeClone();
});

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

const optimizedScroll = debounce(() => {}, 10);
window.addEventListener('scroll', optimizedScroll);

window.addEventListener('error', (e) => {
    console.error('Portfolio Error:', e.message);
});

if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.style.setProperty('--animation-duration', '0.01ms');
}
