document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    const preloader = document.querySelector('.preloader');
    
    setTimeout(() => {
        preloader.classList.add('fade-out');
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }, 1500);

    // Theme Toggle
    const themeSwitch = document.getElementById('theme-switch');
    const body = document.body;
    
    
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        body.classList.add('dark-theme');
        themeSwitch.checked = true;
    }
    
    themeSwitch.addEventListener('change', function() {
        if (this.checked) {
            body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark-theme');
            localStorage.setItem('theme', 'light');
        }
    });

    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        offset: 100
    });
    

    // Header scroll effect
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('.nav-list');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navList.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navList.classList.remove('active');
            
            // Update active link
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Auth Modal
    const loginBtn = document.getElementById('login-btn');
    const signupBtn = document.getElementById('signup-btn');
    const authModal = document.getElementById('auth-modal');
    const authClose = document.getElementById('auth-close');
    const authTabs = document.querySelectorAll('.auth-tab');
    const authForms = document.querySelectorAll('.auth-form');
    const userDropdown = document.getElementById('user-dropdown');
    const logoutBtn = document.getElementById('logout-btn');
    
    // Simulate login state 
    let isLoggedIn = false;
    
    function toggleAuthModal() {
        authModal.classList.toggle('active');
    }
    
    function switchAuthTab(tabName) {
        authTabs.forEach(tab => tab.classList.remove('active'));
        authForms.forEach(form => form.classList.remove('active'));
        
        document.querySelector(`.auth-tab[data-tab="${tabName}"]`).classList.add('active');
        document.getElementById(`${tabName}-form`).classList.add('active');
    }
    
    loginBtn.addEventListener('click', (e) => {
        e.preventDefault();
        switchAuthTab('login');
        toggleAuthModal();
    });
    
    signupBtn.addEventListener('click', (e) => {
        e.preventDefault();
        switchAuthTab('signup');
        toggleAuthModal();
    });
    
    authClose.addEventListener('click', toggleAuthModal);
    
    authTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabName = tab.getAttribute('data-tab');
            switchAuthTab(tabName);
        });
    });
    
    // Simulate login
    document.getElementById('login-form').addEventListener('submit', function(e) {
        e.preventDefault();
        isLoggedIn = true;
        updateAuthUI();
        toggleAuthModal();
        showNotification('Logged in successfully!', 'success');
    });
    
    // Simulate signup
    document.getElementById('signup-form').addEventListener('submit', function(e) {
        e.preventDefault();
        isLoggedIn = true;
        updateAuthUI();
        toggleAuthModal();
        showNotification('Account created successfully!', 'success');
    });
    
    // Simulate logout
    logoutBtn.addEventListener('click', function(e) {
        e.preventDefault();
        isLoggedIn = false;
        updateAuthUI();
        showNotification('Logged out successfully!', 'success');
    });
    
    function updateAuthUI() {
        if (isLoggedIn) {
            loginBtn.style.display = 'none';
            signupBtn.style.display = 'none';
            userDropdown.style.display = 'inline-block';
        } else {
            loginBtn.style.display = 'inline-block';
            signupBtn.style.display = 'inline-block';
            userDropdown.style.display = 'none';
        }
    }
    
    // Initialize auth UI
    updateAuthUI();

    // Back to top button
    const backToTopBtn = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('active');
        } else {
            backToTopBtn.classList.remove('active');
        }
    });
    
    backToTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animated hero title words
    const titleWords = document.querySelectorAll('.title-word');
    
    titleWords.forEach((word, index) => {
        setTimeout(() => {
            word.style.opacity = '1';
            word.style.transform = 'translateY(0)';
        }, index * 200);
    });

    // Animate hero subtitle and buttons
    setTimeout(() => {
        document.querySelector('.hero-subtitle').style.opacity = '1';
    }, 1200);
    
    setTimeout(() => {
        document.querySelector('.hero-buttons').style.opacity = '1';
    }, 1500);
    
    setTimeout(() => {
        document.querySelector('.hero-image').style.opacity = '1';
        document.querySelector('.hero-image').style.transform = 'translateX(0)';
    }, 1800);
    
    setTimeout(() => {
        document.querySelector('.hero-stats').style.opacity = '1';
    }, 2100);
    
    setTimeout(() => {
        document.querySelector('.scroll-down').style.opacity = '1';
    }, 2400);

    // Course cards animation
    const courseCards = document.querySelectorAll('.course-card');
    
    courseCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 150);
    });

    // Stats counter animation
    const statItems = document.querySelectorAll('.stat-item');
    
    function animateStats() {
        statItems.forEach(item => {
            const numberElement = item.querySelector('.stat-number');
            const target = parseInt(numberElement.getAttribute('data-count'));
            const duration = 2000;
            const start = 0;
            const increment = target / (duration / 16);
            let current = start;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    clearInterval(timer);
                    current = target;
                }
                numberElement.textContent = Math.floor(current);
            }, 16);
        });
    }
    
    // Intersection Observer for stats animation
    const statsSection = document.querySelector('.hero');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    observer.observe(statsSection);

    // Course filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter courses
            const filter = button.getAttribute('data-filter');
            const courses = document.querySelectorAll('.course-card');
            
            courses.forEach(course => {
                if (filter === 'all' || course.querySelector('.course-level').classList.contains(filter)) {
                    course.style.display = 'block';
                } else {
                    course.style.display = 'none';
                }
            });
        });
    });

    // Testimonial slider
    const sliderTrack = document.querySelector('.slider-track');
    const sliderItems = document.querySelectorAll('.testimonial');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    const dotsContainer = document.querySelector('.slider-dots');
    
    let currentIndex = 0;
    const itemWidth = 100; // Percentage
    
    // Create dots
    sliderItems.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('slider-dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });
    
    const dots = document.querySelectorAll('.slider-dot');
    
    function updateSlider() {
        sliderTrack.style.transform = `translateX(-${currentIndex * itemWidth}%)`;
        
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }
    
    function goToSlide(index) {
        currentIndex = index;
        updateSlider();
    }
    
    function nextSlide() {
        currentIndex = (currentIndex + 1) % sliderItems.length;
        updateSlider();
    }
    
    function prevSlide() {
        currentIndex = (currentIndex - 1 + sliderItems.length) % sliderItems.length;
        updateSlider();
    }
    
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Auto slide
    let slideInterval = setInterval(nextSlide, 5000);
    
    function resetInterval() {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 5000);
    }
    
    nextBtn.addEventListener('click', resetInterval);
    prevBtn.addEventListener('click', resetInterval);
    dots.forEach(dot => dot.addEventListener('click', resetInterval));

    // Pricing toggle
    const pricingToggle = document.getElementById('pricing-toggle');
    const monthlyPrices = document.querySelectorAll('.monthly-price');
    const yearlyPrices = document.querySelectorAll('.yearly-price');
    
    pricingToggle.addEventListener('change', function() {
        if (this.checked) {
            monthlyPrices.forEach(price => price.style.display = 'none');
            yearlyPrices.forEach(price => price.style.display = 'inline');
        } else {
            monthlyPrices.forEach(price => price.style.display = 'inline');
            yearlyPrices.forEach(price => price.style.display = 'none');
        }
    });

    // Course data
    const courses = [
        {
            title: "JavaScript Fundamentals",
            description: "Master the basics of JavaScript programming",
            image: "course-js.jpg",
            category: "Web Development",
            level: "beginner",
            price: "Kes 1,499.99",
            duration: "8 weeks"
        },
        {
            title: "Python for Beginners",
            description: "Start your programming journey with Python",
            image: "course-python.jpg",
            category: "Programming",
            level: "beginner",
            price: "Kes 1,299.99",
            duration: "6 weeks"
        },
        {
            title: "React.js Development",
            description: "Build modern web applications with React",
            image: "course-React.jpg",
            category: "Web Development",
            level: "intermediate",
            price: "Kes 1,999.99",
            duration: "10 weeks"
        },
        {
            title: "Full Stack Development",
            description: "Become a full stack web developer",
            image: "course-fullstack.jpg",
            category: "Web Development",
            level: "advanced",
            price: "Kes 2,499.99",
            duration: "12 weeks"
        },
        {
            title: "Mobile App Development",
            description: "Create mobile apps for iOS and Android",
            image: "course-mobile.jpg",
            category: "Mobile Development",
            level: "intermediate",
            price: "Kes 1,899.99",
            duration: "10 weeks"
        },
        {
            title: "Data Science Essentials",
            description: "Learn data analysis and machine learning",
            image: "course-Data.jpg",
            category: "Data Science",
            level: "intermediate",
            price: "Kes 1,799.99",
            duration: "8 weeks"
        }
    ];

    function loadCourses(filter = 'all') {
        const courseGrid = document.querySelector('.course-grid');
        courseGrid.innerHTML = '';
        
        const filteredCourses = filter === 'all' 
            ? courses 
            : courses.filter(course => course.level === filter);
        
        filteredCourses.forEach(course => {
            const card = document.createElement('div');
            card.className = 'course-card';
            card.setAttribute('data-aos', 'fade-up');
            
            card.innerHTML = `
                <div class="course-image">
                    <img src="${course.image}" alt="${course.title}">
                    <div class="course-category">${course.category}</div>
                </div>
                <div class="course-content">
                    <h3 class="course-title">${course.title}</h3>
                    <p class="course-description">${course.description}</p>
                    <div class="course-meta">
                        <span class="course-level ${course.level}">${course.level}</span>
                        <span class="course-duration"><i class="far fa-clock"></i> ${course.duration}</span>
                    </div>
                    <div class="course-price">${course.price}</div>
                    <a href="#" class="btn btn-primary">Enroll Now</a>
                </div>
            `;
            
            courseGrid.appendChild(card);
        });
    }

    // Initialize courses
    loadCourses();

    // Course filters
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            loadCourses(filter);
        });
    });

    // Testimonial slider
    const sliderTrack = document.querySelector('.slider-track');
    const sliderItems = document.querySelectorAll('.testimonial');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    const dotsContainer = document.querySelector('.slider-dots');
    
    let currentIndex = 0;
    const itemWidth = 100; // Percentage
    
    // Create dots
    sliderItems.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('slider-dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });
    
    const dots = document.querySelectorAll('.slider-dot');
    
    function updateSlider() {
        sliderTrack.style.transform = `translateX(-${currentIndex * itemWidth}%)`;
        
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }
    
    function goToSlide(index) {
        currentIndex = index;
        updateSlider();
    }
    
    function nextSlide() {
        currentIndex = (currentIndex + 1) % sliderItems.length;
        updateSlider();
    }
    
    function prevSlide() {
        currentIndex = (currentIndex - 1 + sliderItems.length) % sliderItems.length;
        updateSlider();
    }
    
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Auto slide
    let slideInterval = setInterval(nextSlide, 5000);
    
    function resetInterval() {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 5000);
    }
    
    nextBtn.addEventListener('click', resetInterval);
    prevBtn.addEventListener('click', resetInterval);
    dots.forEach(dot => dot.addEventListener('click', resetInterval));

    // Pricing toggle
    const pricingToggle = document.getElementById('pricing-toggle');
    const monthlyPrices = document.querySelectorAll('.monthly-price');
    const yearlyPrices = document.querySelectorAll('.yearly-price');
    
    pricingToggle.addEventListener('change', function() {
        if (this.checked) {
            monthlyPrices.forEach(price => price.style.display = 'none');
            yearlyPrices.forEach(price => price.style.display = 'inline');
        } else {
            monthlyPrices.forEach(price => price.style.display = 'inline');
            yearlyPrices.forEach(price => price.style.display = 'none');
        }
    });

    // Testimonial data
    const testimonials = [
        {
            name: "John Smith",
            role: "Web Developer",
            image: "testimonial-1.jpg",
            text: "SYNTAXCORE helped me transition from a complete beginner to a professional web developer. The courses are well-structured and the community support is amazing!"
        },
        {
            name: "Sarah Johnson",
            role: "Data Scientist",
            image: "testimonial-1.jpg",
            text: "The data science course was exactly what I needed to start my career in AI and machine learning. The hands-on projects really helped me understand complex concepts."
        },
        {
            name: "Michael Chen",
            role: "Mobile Developer",
            image: "testimonial-1.jpg",
            text: "I learned mobile app development from scratch and now I'm building apps for clients. The instructors are knowledgeable and always ready to help."
        },
        {
            name: "Emily Davis",
            role: "Full Stack Developer",
            image: "testimonial-1.jpg",
            text: "The full stack development course gave me all the skills I needed to land my dream job. The project-based learning approach is incredibly effective."
        }
    ];

    // Initialize testimonial slider
    function initTestimonialSlider() {
        const sliderTrack = document.querySelector('.slider-track');
        const sliderDots = document.querySelector('.slider-dots');
        const prevButton = document.querySelector('.slider-prev');
        const nextButton = document.querySelector('.slider-next');
        let currentSlide = 0;
        let interval;

        // Create testimonial slides
        testimonials.forEach((testimonial, index) => {
            // Create slide
            const slide = document.createElement('div');
            slide.className = 'testimonial';
            slide.innerHTML = `
                <div class="testimonial-content">
                    <p>${testimonial.text}</p>
                </div>
                <div class="testimonial-author">
                    <img src="${testimonial.image}" alt="${testimonial.name}">
                    <div class="author-info">
                        <h4>${testimonial.name}</h4>
                        <p>${testimonial.role}</p>
                    </div>
                </div>
            `;
            sliderTrack.appendChild(slide);

            // Create dot
            const dot = document.createElement('button');
            dot.className = 'slider-dot';
            dot.setAttribute('data-slide', index);
            sliderDots.appendChild(dot);
        });

        const slides = document.querySelectorAll('.testimonial');
        const dots = document.querySelectorAll('.slider-dot');

        function updateSlider() {
            slides.forEach((slide, index) => {
                slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
            });
            
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentSlide);
            });
        }

        function goToSlide(index) {
            currentSlide = index;
            updateSlider();
            resetInterval();
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            updateSlider();
        }

        function prevSlide() {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            updateSlider();
        }

        function resetInterval() {
            clearInterval(interval);
            interval = setInterval(nextSlide, 5000);
        }

        // Event listeners
        prevButton.addEventListener('click', () => {
            prevSlide();
            resetInterval();
        });

        nextButton.addEventListener('click', () => {
            nextSlide();
            resetInterval();
        });

        dots.forEach(dot => {
            dot.addEventListener('click', () => {
                const slideIndex = parseInt(dot.getAttribute('data-slide'));
                goToSlide(slideIndex);
            });
        });

        // Initialize slider
        updateSlider();
        resetInterval();
    }

    // Initialize testimonial slider
    initTestimonialSlider();

    // Form submission
    const contactForm = document.getElementById('contactForm');
    const newsletterForm = document.getElementById('newsletterForm');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        showNotification('Thank you for your message! We will get back to you soon.', 'success');
        this.reset();
    });
    
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        showNotification('Thank you for subscribing to our newsletter!', 'success');
        this.reset();
    });

    // Floating particles effect
    const particlesContainer = document.querySelector('.particles');
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random properties
        const size = Math.random() * 5 + 2;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = Math.random() * 10 + 10;
        const color = `hsl(${Math.random() * 60 + 200}, 70%, 60%)`;
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.animationDelay = `${delay}s`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.backgroundColor = color;
        
        particlesContainer.appendChild(particle);
    }

    // Chatbot functionality
    const chatbotToggle = document.getElementById('chatbot-toggle');
    const chatbotContainer = document.querySelector('.chatbot-container');
    const chatbotClose = document.getElementById('chatbot-close');
    const chatbotMessages = document.getElementById('chatbot-messages');
    const chatbotInput = document.getElementById('chatbot-input');
    const chatbotSend = document.getElementById('chatbot-send');

    // Sample responses
    const botResponses = {
        greetings: [
            "Hello! How can I help you today?",
            "Hi there! What would you like to know about our courses?",
            "Welcome to SYNTAXCORE! I'm here to assist you."
        ],
        courses: [
            "We offer a variety of courses including Web Development, Python Programming, Data Science, and more. Which area interests you?",
            "Our most popular courses are JavaScript Fundamentals and Python for Beginners. Would you like to know more about them?",
            "We have courses for all skill levels - beginner, intermediate, and advanced. What's your current level?"
        ],
        pricing: [
            "Our courses start from Kes 1,299.99. We also offer flexible payment plans and student discounts.",
            "You can check our pricing page for detailed information about course fees and available discounts.",
            "We have different pricing tiers - Basic, Pro, and Enterprise. Would you like me to explain the differences?"
        ],
        default: [
            "I'm not sure I understand. Could you please rephrase that?",
            "Let me connect you with our support team for more detailed information.",
            "That's an interesting question! Let me help you find the right information."
        ]
    };

    function getRandomResponse(category) {
        const responses = botResponses[category] || botResponses.default;
        return responses[Math.floor(Math.random() * responses.length)];
    }

    function addMessage(content, isUser = false) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
        
        const contentDiv = document.createElement('div');
        contentDiv.className = 'message-content';
        contentDiv.textContent = content;
        
        messageDiv.appendChild(contentDiv);
        chatbotMessages.appendChild(messageDiv);
        
        // Scroll to bottom
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    function handleUserInput() {
        const message = chatbotInput.value.trim().toLowerCase();
        if (!message) return;
        
        // Add user message
        addMessage(chatbotInput.value, true);
        chatbotInput.value = '';
        
        // Determine response category
        let responseCategory = 'default';
        if (message.includes('hi') || message.includes('hello') || message.includes('hey')) {
            responseCategory = 'greetings';
        } else if (message.includes('course') || message.includes('learn') || message.includes('study')) {
            responseCategory = 'courses';
        } else if (message.includes('price') || message.includes('cost') || message.includes('fee')) {
            responseCategory = 'pricing';
        }
        
        // Add bot response with delay
        setTimeout(() => {
            addMessage(getRandomResponse(responseCategory));
        }, 500);
    }

    // Event listeners
    chatbotToggle.addEventListener('click', () => {
        chatbotContainer.classList.toggle('active');
        chatbotToggle.classList.toggle('hidden');
    });

    chatbotClose.addEventListener('click', () => {
        chatbotContainer.classList.remove('active');
        chatbotToggle.classList.remove('hidden');
    });

    chatbotSend.addEventListener('click', handleUserInput);

    chatbotInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleUserInput();
        }
    });

    // Initial bot message
    addMessage("Hello! I'm SyntaxBot, your AI coding assistant. How can I help you today?");

    // Notification system
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        
        const icon = document.createElement('i');
        switch (type) {
            case 'success':
                icon.className = 'fas fa-check-circle';
                break;
            case 'error':
                icon.className = 'fas fa-times-circle';
                break;
            case 'warning':
                icon.className = 'fas fa-exclamation-circle';
                break;
            default:
                icon.className = 'fas fa-info-circle';
        }
        
        const text = document.createElement('span');
        text.textContent = message;
        
        notification.appendChild(icon);
        notification.appendChild(text);
        document.body.appendChild(notification);
        
        // Add animation class after a small delay
        setTimeout(() => {
            notification.classList.add('show');
        }, 10);
        
        // Remove notification after 3 seconds
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    }

    // Add notification styles
    const notificationStyles = document.createElement('style');
    notificationStyles.textContent = `
        .notification {
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 20px;
            border-radius: 4px;
            background: white;
            color: #333;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            display: flex;
            align-items: center;
            gap: 10px;
            transform: translateX(120%);
            transition: transform 0.3s ease;
            z-index: 9999;
        }
        
        .notification.show {
            transform: translateX(0);
        }
        
        .notification i {
            font-size: 20px;
        }
        
        .notification.success {
            background: #d4edda;
            color: #155724;
        }
        
        .notification.error {
            background: #f8d7da;
            color: #721c24;
        }
        
        .notification.warning {
            background: #fff3cd;
            color: #856404;
        }
        
        .notification.info {
            background: #d1ecf1;
            color: #0c5460;
        }
    `;

    document.head.appendChild(notificationStyles);
});

// Testimonial Slider - Updated Version
function initTestimonialSlider() {
    const sliderTrack = document.querySelector('.slider-track');
    const sliderItems = document.querySelectorAll('.testimonial');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    const dotsContainer = document.querySelector('.slider-dots');
    
    if (!sliderTrack || sliderItems.length === 0) {
        console.error('Slider elements not found!');
        return;
    }

    let currentIndex = 0;
    const itemWidth = 100; // Percentage
    
    // Create dots
    dotsContainer.innerHTML = '';
    sliderItems.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('slider-dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });
    
    const dots = document.querySelectorAll('.slider-dot');
    
    function updateSlider() {
        sliderTrack.style.transform = `translateX(-${currentIndex * itemWidth}%)`;
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }
    
    function goToSlide(index) {
        currentIndex = index;
        updateSlider();
    }
    
    function nextSlide() {
        currentIndex = (currentIndex + 1) % sliderItems.length;
        updateSlider();
    }
    
    function prevSlide() {
        currentIndex = (currentIndex - 1 + sliderItems.length) % sliderItems.length;
        updateSlider();
    }
    
    // Event listeners
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Auto slide
    let slideInterval = setInterval(nextSlide, 5000);
    
    function resetInterval() {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 5000);
    }
    
    // Pause on hover
    sliderTrack.addEventListener('mouseenter', () => clearInterval(slideInterval));
    sliderTrack.addEventListener('mouseleave', resetInterval);
    
    // Initialize
    updateSlider();
}

// Call this when DOM is loaded
document.addEventListener('DOMContentLoaded', initTestimonialSlider);

// Updated login function
function handleLogin(username, avatarUrl = 'images/default-avatar.jpg') {
    isLoggedIn = true;
    updateAuthUI(username, avatarUrl);
    showNotification('Logged in successfully!', 'success');
}

function updateAuthUI(username, avatarUrl) {
    if (isLoggedIn) {
        document.getElementById('login-btn').style.display = 'none';
        document.getElementById('signup-btn').style.display = 'none';
        const userProfile = document.getElementById('user-profile');
        userProfile.style.display = 'flex';
        
        // Update user info
        document.getElementById('username-display').textContent = username;
        document.getElementById('user-avatar').src = avatarUrl;
    } else {
        document.getElementById('login-btn').style.display = 'inline-block';
        document.getElementById('signup-btn').style.display = 'inline-block';
        document.getElementById('user-profile').style.display = 'none';
    }
}

// Modify your login form submission
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = this.querySelector('input[type="email"]').value.split('@')[0];
    handleLogin(username);
    toggleAuthModal();
});

document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = this.querySelector('input[type="text"]').value;
    const selectedAvatar = this.querySelector('input[name="avatar"]:checked').value;
    handleLogin(username, `images/${selectedAvatar}`);
    toggleAuthModal();
});

function loadCourses() {
    const courseGrid = document.querySelector('.course-grid');
    
    // Check if course grid exists
    if (!courseGrid) {
        console.error("Course grid element not found!");
        return;
    }

    // Clear existing content
    courseGrid.innerHTML = '';

    // Check if courses exist
    if (!courses || courses.length === 0) {
        courseGrid.innerHTML = '<p class="no-courses">No courses available at the moment.</p>';
        return;
    }

    // Create and append course cards
    courses.forEach((course, index) => {
        const courseCard = document.createElement('div');
        courseCard.className = 'course-card';
        
        courseCard.innerHTML = `
            <div class="course-image">
                <img src="${course.image}" alt="${course.title}" 
                     onerror="this.src='images/default-course.jpg'">
            </div>
            <div class="course-content">
                <span class="course-category">${course.category}</span>
                <h3 class="course-title">${course.title}</h3>
                <p class="course-description">${course.description}</p>
                <div class="course-meta">
                    <span class="course-level ${course.level}">${course.level}</span>
                    <span class="course-price">${course.price}</span>
                </div>
            </div>
        `;

        courseGrid.appendChild(courseCard);
        
        // Add animation
        setTimeout(() => {
            courseCard.style.opacity = '1';
            courseCard.style.transform = 'translateY(0)';
        }, index * 150);
    });
}

// Call this when page loads
document.addEventListener('DOMContentLoaded', loadCourses);










   