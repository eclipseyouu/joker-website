const moviesData = [
    {
        id: 1,
        title: "Темный рыцарь",
        year: "2008",
        description: "Шедевр Кристофера Нолана. Хит Леджер создал культовый образ анархиста.",
        image: "images/15172248_3683329.jpg"
    },
    {
        id: 2,
        title: "Джокер",
        year: "2019",
        description: "Трагический портрет происхождения злодея. Хоакин Феникс создал глубокий образ.",
        image: "images/sds.png"
    },
    {
        id: 3,
        title: "Отряд самоубийц",
        year: "2016",
        description: "Яркий хаос команды злодеев. Джаред Лето представил гангстерскую версию.",
        image: "images/83cde2f0c5207127eccf13bcad7fec23.jpg"
    },
    {
        id: 4,
        title: "Бэтмен",
        year: "1989",
        description: "Готическое возрождение темного рыцаря. Джек Николсон создал театрального злодея.",
        image: "images/MV5BYjcyZmRlNDgtMjk3Ny00NDE0LTlhM2QtYTFjZjVkNWZkOWQxXkEyXkFqcGc@._V1_.jpg"
    },
    {
        id: 5,
        title: "Бэтмен",
        year: "1966",
        description: "Комедийная классика. Сезар Ромеро представил сатирического злодея.",
        image: "images/d520f7eb54f25de4673afde763216d19.jpg"
    }
];

const actorsData = {
    heath: {
        name: "Хит Леджер",
        movie: "Темный рыцарь (2008)",
        style: "анархичный, реалистичный",
        elements: "шрамы, грим, пальто",
        description: "Хит Леджер создал культовый образ Джокера. Его исполнение было настолько глубоким, что актер полностью погрузился в роль.",
        details: [
            "Посмертно награжден Оскаром",
            "Подготовка к роли заняла 6 недель",
            "Сам придумал макияж",
            "Импровизировал в сценах"
        ]
    },
    joaquin: {
        name: "Хоакин Феникс",
        movie: "Джокер (2019)",
        style: "психологический, трагический",
        elements: "танец, грим, костюм",
        description: "Хоакин Феникс представил трагическую версию Артура Флека. Его физическая трансформация создала реалистичный портрет.",
        details: [
            "Получил Оскар за лучшую мужскую роль",
            "Похудел на 24 кг для роли",
            "Изучал патологический смех",
            "Сам выполнял все трюки"
        ]
    },
    jared: {
        name: "Джаред Лето",
        movie: "Отряд самоубийц (2016)",
        style: "гангстерский, эксцентричный",
        elements: "татуировки, украшения",
        description: "Джаред Лето создал ультра-современную версию Джокера. Его персонаж - харизматичный криминальный босс.",
        details: [
            "Отправлял коллегам 'подарки'",
            "Полностью погружался в роль",
            "Разработал уникальный смех",
            "Носил временные татуировки"
        ]
    },
    jack: {
        name: "Джек Николсон",
        movie: "Бэтмен (1989)",
        style: "театральный, гротескный",
        elements: "улыбка, костюм, смех",
        description: "Джек Николсон создал театральную версию Джокера. Его персонаж - бывший гангстер Джек Напье.",
        details: [
            "Получил процент от сборов",
            "Использовал 9 разных костюмов",
            "Сам выполнял трюки",
            "Вдохновил темные интерпретации"
        ]
    },
    cesar: {
        name: "Сезар Ромеро",
        movie: "Бэтмен (1966)",
        style: "комедийный, классический",
        elements: "грим, яркий костюм",
        description: "Сезар Ромеро стал первым актером, исполнившим роль Джокера в кино.",
        details: [
            "Первый актер в роли Джокера",
            "Отказался брить усы",
            "Снимался в 22 эпизодах",
            "Установил каноны образа"
        ]
    }
};

const moviesInfoData = {
    darkKnight: {
        title: "Темный рыцарь",
        year: "2008",
        director: "Кристофер Нолан",
        description: "Бэтмен поднимает ставки в войне с преступностью с криминальным гением Джокером.",
        rating: "9.0/10",
        duration: "2ч 32м",
        genre: "Боевик, Драма, Криминал",
        kinopoisk: "https://www.kinopoisk.ru/film/111543/"
    },
    joker2019: {
        title: "Джокер",
        year: "2019",
        director: "Тодд Филлипс",
        description: "Готэм, 1980-е. Комик Артур Флек превращается в Джокера.",
        rating: "8.4/10",
        duration: "2ч 2м",
        genre: "Драма, Триллер, Криминал",
        kinopoisk: "https://www.kinopoisk.ru/film/1048334/"
    },
    suicideSquad: {
        title: "Отряд самоубийц",
        year: "2016",
        director: "Дэвид Эйер",
        description: "Команда опасных суперзлодеев для секретной миссии.",
        rating: "5.9/10",
        duration: "2ч 3м",
        genre: "Боевик, Приключения, Фантастика",
        kinopoisk: "https://www.kinopoisk.ru/film/468927/"
    },
    batman1989: {
        title: "Бэтмен",
        year: "1989",
        director: "Тим Бёртон",
        description: "Бэтмен против Джека Напье, превратившегося в Джокера.",
        rating: "7.5/10",
        duration: "2ч 6м",
        genre: "Боевик, Фэнтези, Приключения",
        kinopoisk: "https://www.kinopoisk.ru/film/4205/"
    },
    batman1966: {
        title: "Бэтмен",
        year: "1966",
        director: "Лесли Мартинсон",
        description: "Бэтмен и Робин против объединившихся суперзлодеев.",
        rating: "6.5/10",
        duration: "1ч 45м",
        genre: "Комедия, Приключения, Семейный",
        kinopoisk: "https://www.kinopoisk.ru/film/18406/"
    }
};

function openKinopoisk(slideIndex) {
    const movieKey = ["darkKnight", "joker2019", "suicideSquad", "batman1989", "batman1966"];
    if (slideIndex >= 0 && slideIndex < movieKey.length) {
        const movie = moviesInfoData[movieKey[slideIndex]];
        if (movie && movie.kinopoisk) {
            window.open(movie.kinopoisk, '_blank');
        }
    }
}

class MoviesSlider {
    constructor() {
        this.currentSlide = 0;
        this.sliderInterval = null;
        this.init();
    }

    init() {
        this.createSlider();
        this.startAutoSlide();
        this.addEventListeners();
    }

    createSlider() {
        const sliderContent = document.querySelector('.slider-content');
        const sliderDots = document.querySelector('.slider-dots');

        moviesData.forEach((movie, index) => {
            const slide = document.createElement('div');
            slide.className = `slider-slide ${index === 0 ? 'active' : ''}`;
            slide.innerHTML = `
                <div class="slide-info">
                    <h2 class="slide-title">${movie.title}</h2>
                    <div class="slide-year">${movie.year}</div>
                    <p class="slide-description">${movie.description}</p>
                    <button class="slide-button" onclick="openKinopoisk(${index})">СМОТРЕТЬ ФИЛЬМ</button>
                </div>
                <div class="slide-image" style="background-image: url('${movie.image}')"></div>
            `;
            sliderContent.appendChild(slide);

            const dot = document.createElement('div');
            dot.className = `slider-dot ${index === 0 ? 'active' : ''}`;
            dot.dataset.index = index;
            sliderDots.appendChild(dot);
        });
    }

    goToSlide(index) {
        const slides = document.querySelectorAll('.slider-slide');
        const dots = document.querySelectorAll('.slider-dot');

        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        slides[index].classList.add('active');
        dots[index].classList.add('active');

        this.currentSlide = index;
    }

    nextSlide() {
        let nextIndex = this.currentSlide + 1;
        if (nextIndex >= moviesData.length) nextIndex = 0;
        this.goToSlide(nextIndex);
    }

    prevSlide() {
        let prevIndex = this.currentSlide - 1;
        if (prevIndex < 0) prevIndex = moviesData.length - 1;
        this.goToSlide(prevIndex);
    }

    startAutoSlide() {
        this.sliderInterval = setInterval(() => this.nextSlide(), 6000);
    }

    stopAutoSlide() {
        if (this.sliderInterval) clearInterval(this.sliderInterval);
    }

    addEventListeners() {
        document.querySelector('.slider-next').addEventListener('click', () => {
            this.stopAutoSlide();
            this.nextSlide();
            this.startAutoSlide();
        });

        document.querySelector('.slider-prev').addEventListener('click', () => {
            this.stopAutoSlide();
            this.prevSlide();
            this.startAutoSlide();
        });

        document.querySelectorAll('.slider-dot').forEach(dot => {
            dot.addEventListener('click', (e) => {
                this.stopAutoSlide();
                const index = parseInt(e.target.dataset.index);
                this.goToSlide(index);
                this.startAutoSlide();
            });
        });

        const slider = document.querySelector('.movies-slider');
        slider.addEventListener('mouseenter', () => this.stopAutoSlide());
        slider.addEventListener('mouseleave', () => this.startAutoSlide());

        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                this.stopAutoSlide();
                this.prevSlide();
                this.startAutoSlide();
            } else if (e.key === 'ArrowRight') {
                this.stopAutoSlide();
                this.nextSlide();
                this.startAutoSlide();
            }
        });
    }
}

function initMovieCards() {
    document.querySelectorAll('.movie-card').forEach(card => {
        const movieKey = card.dataset.movie;
        card.addEventListener('click', function(e) {
            if (!e.target.classList.contains('movie-button')) showMovieInfo(movieKey);
        });
    });
}

function showMovieInfo(movieKey) {
    const movie = moviesInfoData[movieKey];
    if (!movie) return;
    
    const modalContent = document.getElementById('movieModalContent');
    modalContent.innerHTML = `
        <h2 class="modal-title">${movie.title}</h2>
        <p class="modal-subtitle">${movie.year} • ${movie.director}</p>
        <div class="movie-rating">
            <span class="rating-value">${movie.rating}</span>
            <span class="rating-text">IMDb</span>
        </div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin: 20px 0;">
            <div style="background: rgba(57, 255, 20, 0.1); padding: 12px; border-radius: 8px; text-align: center;">
                <div style="color: #39ff14; font-weight: bold; font-size: 14px;">ДЛИТЕЛЬНОСТЬ</div>
                <div style="color: white; font-size: 16px;">${movie.duration}</div>
            </div>
            <div style="background: rgba(255, 0, 128, 0.1); padding: 12px; border-radius: 8px; text-align: center;">
                <div style="color: #ff0080; font-weight: bold; font-size: 14px;">ЖАНР</div>
                <div style="color: white; font-size: 14px; line-height: 1.3;">${movie.genre}</div>
            </div>
        </div>
        <p class="modal-description">${movie.description}</p>
        <a href="${movie.kinopoisk}" target="_blank" class="film-button">
            <i class="fas fa-film" style="margin-right: 10px;"></i>СМОТРЕТЬ ФИЛЬМ НА КИНОПОИСКЕ
        </a>
    `;
    
    document.getElementById('movieModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeMovieModal() {
    document.getElementById('movieModal').classList.remove('active');
    document.body.style.overflow = '';
}

function initEmailJS() {
    try {
        emailjs.init("98kZA_-0TPme2Uo4b");
        return true;
    } catch (error) {
        return false;
    }
}

function initFeedbackForm() {
    const form = document.getElementById('feedbackForm');
    const submitButton = form.querySelector('.submit-button');
    const submitText = form.querySelector('.submit-text');
    
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const userName = document.getElementById('userName').value.trim();
        const userEmail = document.getElementById('userEmail').value.trim();
        const userMessage = document.getElementById('userMessage').value.trim();
        
        if (!userName || !userEmail || !userMessage) {
            showFormMessage('Заполни все поля!', 'error');
            return;
        }
        
        if (!isValidEmail(userEmail)) {
            showFormMessage('Некорректный email!', 'error');
            return;
        }
        
        if (userMessage.length < 5) {
            showFormMessage('Сообщение слишком короткое!', 'error');
            return;
        }
        
        submitButton.disabled = true;
        submitText.textContent = 'ОТПРАВЛЯЕМ...';
        
        try {
            if (typeof emailjs !== 'undefined' && emailjs) {
                const response = await emailjs.send(
                    'service_d34jpvz',
                    'template_hn3xkcu',
                    {
                        from_name: userName,
                        from_email: userEmail,
                        message: userMessage,
                        to_name: 'Владелец сайта',
                        reply_to: userEmail
                    }
                );
                
                if (response.status === 200) {
                    showFormMessage('Сообщение отправлено!', 'success');
                    form.reset();
                }
            } else {
                throw new Error('EmailJS не доступен');
            }
        } catch (error) {
            sendViaMailto(userName, userEmail, userMessage);
        } finally {
            submitButton.disabled = false;
            submitText.textContent = 'ОТПРАВИТЬ В ХАОС';
        }
    });
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function sendViaMailto(userName, userEmail, userMessage) {
    const subject = `Сообщение от ${userName}`;
    const body = `Имя: ${userName}%0AEmail: ${userEmail}%0A%0AСообщение:%0A${userMessage}`;
    window.location.href = `mailto:your-email@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    showFormMessage('Письмо готово к отправке!', 'success');
}

function showFormMessage(message, type) {
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) existingMessage.remove();
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `form-message ${type}`;
    messageDiv.textContent = message;
    
    const form = document.getElementById('feedbackForm');
    form.appendChild(messageDiv);
    
    setTimeout(() => {
        if (messageDiv.parentNode) messageDiv.remove();
    }, 5000);
}

function initActorCards() {
    document.querySelectorAll('.joker-card').forEach(card => {
        const actorKey = card.dataset.actor;
        const button = card.querySelector('.card-button');
        
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            showActorInfo(actorKey);
        });
        
        card.addEventListener('click', function(e) {
            if (!e.target.classList.contains('card-button')) showActorInfo(actorKey);
        });
    });
}

function showActorInfo(actorKey) {
    const actor = actorsData[actorKey];
    if (!actor) return;
    
    const modalContent = document.getElementById('modalContent');
    modalContent.innerHTML = `
        <h2 class="modal-title">${actor.name}</h2>
        <p class="modal-subtitle">${actor.movie}</p>
        <p class="modal-description">${actor.description}</p>
        <div class="modal-details">
            <h4>Интересные факты:</h4>
            <ul>${actor.details.map(detail => `<li>${detail}</li>`).join('')}</ul>
        </div>
        <div style="margin-top: 20px; color: #ff0080; font-style: italic;">
            <strong>Стиль:</strong> ${actor.style} | <strong>Элементы:</strong> ${actor.elements}
        </div>
    `;
    
    document.getElementById('actorModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('actorModal').classList.remove('active');
    document.body.style.overflow = '';
}

function initSmoothScroll() {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const element = document.querySelector(targetId);
            if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
}

function showNotification(message, isSuccess = true) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed; top: 20px; right: 20px;
        background: ${isSuccess ? '#39ff14' : '#ff0080'};
        color: black; padding: 15px 25px;
        border-radius: 5px; font-weight: bold;
        z-index: 10000; box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    `;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showNotification(`Скопировано: ${text}`);
        const telegramElement = document.querySelector('.telegram-username');
        if (telegramElement && text === 'dimawesss') {
            telegramElement.style.background = 'rgba(57, 255, 20, 0.2)';
            telegramElement.style.borderColor = '#39ff14';
            setTimeout(() => {
                telegramElement.style.background = 'rgba(0, 136, 204, 0.1)';
                telegramElement.style.borderColor = '#0088cc';
            }, 1000);
        }
    }).catch(err => showNotification('Ошибка копирования', false));
}

function createParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles';
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.animationDelay = Math.random() * 10 + 's';
        particle.style.width = Math.random() * 6 + 2 + 'px';
        particle.style.height = particle.style.width;
        particlesContainer.appendChild(particle);
    }
    
    document.body.appendChild(particlesContainer);
}

function initHeaderEffect() {
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        const scrolled = window.pageYOffset;
        if (scrolled > 100) {
            header.style.background = 'rgba(10, 0, 21, 0.98)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = 'rgba(10, 0, 21, 0.95)';
            header.style.backdropFilter = 'blur(5px)';
        }
    });
}

class EasterEgg {
    constructor() {
        this.trigger = document.getElementById('whySerious');
        this.easterEgg = document.getElementById('easterEgg');
        this.holdTimer = null;
        this.hideTimer = null;
        this.isHolding = false;
        this.isRevealed = false;
        this.init();
    }

    init() {
        this.trigger.addEventListener('mouseenter', () => {
            if (this.isHolding || this.isRevealed) return;
            this.startHoldTimer();
        });
        this.trigger.addEventListener('mouseleave', () => this.cancelHoldTimer());
    }

    startHoldTimer() {
        this.isHolding = true;
        this.holdTimer = setTimeout(() => this.revealEasterEgg(), 3000);
    }

    cancelHoldTimer() {
        if (this.holdTimer) clearTimeout(this.holdTimer);
        this.holdTimer = null;
        this.isHolding = false;
    }

    revealEasterEgg() {
        this.isRevealed = true;
        this.easterEgg.classList.add('active');
        this.trigger.style.animation = 'crazyShake 0.2s ease-in-out infinite';
        this.showSecretMessage();
        this.hideTimer = setTimeout(() => this.hideEasterEgg(), 3000);
    }

    hideEasterEgg() {
        this.easterEgg.classList.remove('active');
        this.isRevealed = false;
        this.trigger.style.animation = '';
    }

    showSecretMessage() {
        const message = document.createElement('div');
        message.textContent = 'Why so serious? 😈';
        message.style.cssText = `
            position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
            background: rgba(10, 0, 21, 0.95); color: #39ff14; padding: 20px 40px;
            border: 2px solid #ff0080; border-radius: 10px; font-size: 24px;
            font-weight: bold; z-index: 1000;
        `;
        document.body.appendChild(message);
        setTimeout(() => message.remove(), 3000);
    }
}

document.getElementById('actorModal').addEventListener('click', function(e) {
    if (e.target === this) closeModal();
});

document.getElementById('movieModal').addEventListener('click', function(e) {
    if (e.target === this) closeMovieModal();
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
        closeMovieModal();
    }
});

document.addEventListener('DOMContentLoaded', function() {
    initEmailJS();
    new MoviesSlider();
    createParticles();
    initSmoothScroll();
    initActorCards();
    initMovieCards();
    initHeaderEffect();
    initFeedbackForm();
    new EasterEgg();
});