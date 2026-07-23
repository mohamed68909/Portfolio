'use strict';

// ==========================================
// 1. DATA
// ==========================================

const projectsData = [
  {
    id: 'smart-traffic',
    category: 'fullstack',
    image: 'Image/traffic_management_mockup.png',
    github: 'https://github.com/mohamed68909/SmartTrafficManagement',
    demo: '',
    title: 'Smart Traffic & Emergency Management System',
    subtitle: 'A complete Smart City platform for traffic management, emergency response, and roadside assistance.',
    description: 'An integrated smart city traffic and roadside emergency response ecosystem. The backend is built with .NET 8 (C#) using Clean Architecture, SQL Server + EF Core with custom non-clustered indexes, real-time SignalR Hubs for live location tracking & instant support chat, Stripe API with HMAC signature verification, and automatic JWT token refresh interceptors.',
    role: 'Full Stack Developer',
    duration: '4 Months',
    team: 'Graduation Project',
    challenge: 'Cities need an integrated platform to manage traffic incidents, dispatch emergency services, and provide roadside assistance — all in real-time with live tracking and instant communication.',
    solution: 'Built a multi-platform web ecosystem with a .NET 8 backend API, React admin dashboard with 4 role-based views, and real-time Google Maps integration for emergency tracking.',
    features: [
      { title: 'Real-Time Tracking', desc: 'Live ambulance and rescue vehicle tracking via SignalR Hubs and Google Maps API' },
      { title: 'Emergency SOS', desc: 'One-tap emergency requests with automatic nearest-responder dispatch' },
      { title: '4 Role Dashboards', desc: 'System Admin, CS Agent, Rescue Provider, and Store Seller dashboards' },
      { title: 'Stripe Payments', desc: 'Secure payment processing with HMAC webhook verification' },
      { title: 'AutoCare Marketplace', desc: 'E-commerce platform for car parts and roadside services' },
      { title: 'JWT Security', desc: 'Token-based auth with automatic refresh interceptors' }
    ],
    technologies: ['.NET 8', 'C#', 'Clean Architecture', 'SignalR', 'SQL Server', 'EF Core', 'React', 'Vite', 'Stripe API', 'Google Maps API', 'JWT', 'REST API'],
    architecture: 'Clean Architecture with CQRS pattern, Repository + Unit of Work, 4-layer separation (Domain, Application, Infrastructure, Presentation)',
    database: 'SQL Server with EF Core, custom non-clustered indexes for performance, normalized to 3NF'
  },
  {
    id: 'elmogy-fresh',
    category: 'fullstack',
    image: 'Image/elmogy_fresh_mockup.jpg',
    github: 'https://github.com/mohamed68909/ElMogyFresh',
    demo: 'https://elmogyfresh.runasp.net',
    title: 'El Mogy Fresh',
    subtitle: 'Professional e-commerce platform for fresh vegetables and fruits.',
    description: 'An enterprise e-commerce web application built with ASP.NET Core 10 MVC using Clean Architecture and Domain-Driven Design (DDD) principles across 4 decoupled layers. Features a Hybrid Shopping Cart that seamlessly merges guest sessions into user profiles upon login.',
    role: 'Full Stack Developer',
    duration: '3 Months',
    team: 'Solo Project',
    challenge: 'Fresh produce businesses need a modern, reliable e-commerce platform with seamless shopping experiences for both guest and registered users.',
    solution: 'Engineered a 4-layer Clean Architecture MVC application with Domain-Driven Design, featuring a hybrid cart system, automated background services for cart cleanup, and multi-language support.',
    features: [
      { title: 'Hybrid Shopping Cart', desc: 'Guest cart auto-merges with user account on login' },
      { title: 'Multi-Language', desc: 'Full Arabic and English support via LanguageController' },
      { title: 'Background Services', desc: 'Automated cleanup of abandoned guest carts' },
      { title: 'Product Catalog', desc: 'Categories, search, filtering, wishlist, and reviews' },
      { title: 'Order Management', desc: 'Complete order lifecycle with invoices and coupons' },
      { title: 'Admin Dashboard', desc: 'Full admin panel with role-based access control' }
    ],
    technologies: ['ASP.NET Core 10', 'MVC', 'C#', 'EF Core', 'SQL Server', 'Clean Architecture', 'DDD', 'Bootstrap 5', 'Identity', 'Background Services'],
    architecture: '4-Layer Clean Architecture: FreshVeg.Domain, FreshVeg.Application, FreshVeg.Infrastructure, FreshVeg.Web',
    database: 'SQL Server with EF Core Code-First migrations and Fluent API configuration'
  },
  {
    id: 'techstore',
    category: 'fullstack',
    image: 'Image/techstore_customer_mockup.png',
    github: 'https://github.com/mohamed68909/Portfolio',
    demo: '',
    title: 'TechStore',
    subtitle: 'Enterprise electronics e-commerce platform with multi-auth and Stripe payments.',
    description: 'A high-performance enterprise e-commerce web application built with ASP.NET Core 9.0 (MVC + RESTful API) and N-Tier Architecture with 6 projects. Features multi-area management, OTP email verification, OAuth 2.0, and Stripe checkout integration.',
    role: 'Full Stack Developer',
    duration: '2 Months',
    team: 'Solo Project',
    challenge: 'Electronics retailers need a complete e-commerce solution with multi-authentication, secure payments, and real-time inventory management.',
    solution: 'Built an N-Tier Architecture solution with 6 separate projects, implementing Stripe.net SDK for payments, 6-digit OTP email verification, OAuth 2.0 social login, and real-time order lifecycle tracking.',
    features: [
      { title: 'Multi-Auth System', desc: '6-digit OTP, Google OAuth, Facebook OAuth login' },
      { title: 'Stripe Integration', desc: 'Secure checkout with Stripe.net SDK' },
      { title: 'Order Lifecycle', desc: 'Pending → Approved → Processing → Shipped → Completed' },
      { title: 'Multi-Area', desc: 'Separate Customer, Admin, and Identity areas' },
      { title: 'Product Management', desc: 'Multi-image uploads, low-stock warnings, categories' },
      { title: 'Admin Dashboard', desc: 'Reports, analytics, user management, coupon system' }
    ],
    technologies: ['ASP.NET Core 9.0', 'MVC', 'Web API', 'C#', 'EF Core 9', 'SQL Server', 'N-Tier Architecture', 'Stripe.net', 'Identity', 'OAuth 2.0', 'Bootstrap 5.3', 'DataTables.net'],
    architecture: '6-Project N-Tier: TechStore, TechStore.Api, TechStore.Entities, TechStore.Services, TechStore.DataAccess, TechStore.Utilities',
    database: 'SQL Server with Unit of Work pattern and Repository abstractions'
  },
  {
    id: 'curexmind',
    category: 'fullstack',
    image: 'Image/clinic_api_mockup.png',
    github: 'https://github.com/mohamed68909/ClinicManagementAPI',
    demo: '',
    title: 'CurexMind',
    subtitle: 'Complete hospital & clinic management system with patient portal and admin dashboards.',
    description: 'An end-to-end Healthcare & Hospital Management System connecting patients, medical staff, and receptionist administration. Built with ASP.NET Core 9.0 Web API backend and React 19 + TypeScript frontend.',
    role: 'Full Stack Developer',
    duration: '3 Months',
    team: 'Solo Project',
    challenge: 'Healthcare facilities need a digitized system to manage appointments, medical records, billing, and patient portals — replacing manual paper-based workflows.',
    solution: 'Built a full-stack system with React 19 frontend and ASP.NET Core 9.0 API, featuring a 4-step smart booking stepper, 3 simulated payment gateways, and role-based dashboards for patients, receptionists, and administrators.',
    features: [
      { title: 'Smart Booking', desc: '4-step appointment booking with doctor search and time slots' },
      { title: 'Payment Gateways', desc: '3 simulated gateways: Instapay, Mobile Wallets, Credit Cards' },
      { title: 'Patient Portal', desc: 'Medical history, appointments, invoices, and prescriptions' },
      { title: 'Admin Dashboard', desc: 'Revenue analytics, interactive charts, and statistics' },
      { title: '5-Tab Patient Files', desc: 'Info, Appointments, Invoices, Room Stays, Surgeries' },
      { title: 'Role-Based Access', desc: 'Patient, Doctor, Receptionist, and Admin roles' }
    ],
    technologies: ['ASP.NET Core 9.0', 'Web API', 'C#', 'EF Core 9', 'SQL Server', 'Clean Architecture', 'React 19', 'TypeScript', 'Vite', 'Tailwind CSS 4', 'Zustand', 'JWT', 'FluentValidation'],
    architecture: 'Clean Architecture with separate API and Frontend projects, Zustand for state management',
    database: 'SQL Server with EF Core 9, FluentValidation for request validation'
  }
];

const skillsData = [
  {
    category: 'Backend & Enterprise',
    icon: '⚙️',
    skills: [
      { name: 'C# & .NET 8/9/10', level: 'Expert' },
      { name: 'ASP.NET Core Web API', level: 'Expert' },
      { name: 'ASP.NET Core MVC', level: 'Expert' },
      { name: 'Clean Architecture & DDD', level: 'Advanced' },
      { name: 'SignalR', level: 'Advanced' }
    ]
  },
  {
    category: 'Databases',
    icon: '🗄️',
    skills: [
      { name: 'SQL Server & T-SQL', level: 'Expert' },
      { name: 'Entity Framework Core', level: 'Expert' },
      { name: 'Database Design & Indexing', level: 'Advanced' }
    ]
  },
  {
    category: 'Frontend & UI',
    icon: '🎨',
    skills: [
      { name: 'React & TypeScript', level: 'Advanced' },
      { name: 'Tailwind CSS & Bootstrap', level: 'Expert' },
      { name: 'HTML5 & CSS3 & JavaScript', level: 'Expert' },
      { name: 'Responsive Web UI', level: 'Expert' }
    ]
  },
  {
    category: 'Security & Tools',
    icon: '🔐',
    skills: [
      { name: 'JWT & Identity & OAuth 2.0', level: 'Expert' },
      { name: 'Stripe Payment', level: 'Advanced' },
      { name: 'Git & GitHub', level: 'Expert' },
      { name: 'Swagger & Postman', level: 'Expert' }
    ]
  }
];

const servicesData = [
  {
    icon: '🌐',
    title: 'Full Stack Web Applications',
    desc: 'End-to-end web applications with React frontends and ASP.NET Core backends. From database design to deployment.',
    tags: ['React', 'ASP.NET Core', 'SQL Server', 'TypeScript']
  },
  {
    icon: '🔗',
    title: 'RESTful API Development',
    desc: 'Scalable, secure, and well-documented REST APIs following Clean Architecture principles with JWT authentication.',
    tags: ['Web API', 'Clean Architecture', 'JWT', 'Swagger']
  },
  {
    icon: '🛒',
    title: 'E-Commerce Platforms',
    desc: 'Complete e-commerce solutions with product management, payment integration, order tracking, and admin dashboards.',
    tags: ['Stripe', 'MVC', 'Identity', 'EF Core']
  },
  {
    icon: '📊',
    title: 'Dashboard & Admin Panels',
    desc: 'Data-driven admin dashboards with analytics, charts, role-based access control, and real-time updates.',
    tags: ['React', 'SignalR', 'Charts', 'RBAC']
  },
  {
    icon: '⚡',
    title: 'Database Design & Optimization',
    desc: 'SQL Server schema design, index optimization, query tuning, EF Core performance optimization, and data migrations.',
    tags: ['SQL Server', 'EF Core', 'T-SQL', 'Indexing']
  },
  {
    icon: '🏗️',
    title: 'Architecture & Consulting',
    desc: 'System architecture design, code reviews, and technical consulting for .NET-based projects.',
    tags: ['Clean Architecture', 'DDD', 'SOLID', 'Design Patterns']
  }
];

const faqData = [
  {
    question: 'What technologies do you specialize in?',
    answer: 'I specialize in the .NET ecosystem — ASP.NET Core Web API, MVC, C#, Entity Framework Core, and SQL Server for backend. For frontend, I work with React, TypeScript, and modern CSS frameworks.'
  },
  {
    question: 'Can you work with existing codebases?',
    answer: 'Absolutely. I have experience working with legacy code, refactoring systems, and integrating new features into existing architectures. I follow Clean Architecture principles to keep codebases maintainable.'
  },
  {
    question: 'What is your typical project timeline?',
    answer: 'It depends on the scope. A standard web application or API typically takes 2-4 weeks. Complex enterprise systems with multiple dashboards may take 1-3 months. I provide detailed timelines during the planning phase.'
  },
  {
    question: 'Do you offer ongoing maintenance and support?',
    answer: 'Yes. I offer post-launch support packages that include bug fixes, performance optimization, feature additions, and server monitoring to ensure your application runs smoothly.'
  },
  {
    question: 'How do you ensure code quality?',
    answer: 'I follow SOLID principles, write clean and documented code, implement proper error handling, use design patterns like Repository and Unit of Work, and structure projects using Clean Architecture or N-Tier patterns.'
  },
  {
    question: 'Can you handle both frontend and backend?',
    answer: 'Yes. I am a Full Stack developer. I design database schemas, build backend APIs, and create responsive frontends with React — delivering complete web applications.'
  }
];

// SVG Icons
const GITHUB_ICON = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>';
const EXTERNAL_LINK_ICON = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1-2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>';
const ARROW_LEFT_ICON = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>';
const ARROW_RIGHT_ICON = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 19"/></svg>';

// ==========================================
// 2. DOM REFERENCES
// ==========================================

const dom = {
  loadingScreen: document.getElementById('loading-screen'),
  scrollProgressBar: document.getElementById('scroll-progress-bar'),
  navbar: document.getElementById('navbar'),
  mobileMenuBtn: document.getElementById('mobile-menu-btn'),
  mobileMenu: document.getElementById('mobile-menu'),
  themeToggle: document.getElementById('theme-toggle'),
  themeToggleMobile: document.getElementById('theme-toggle-mobile'),
  typewriterEl: document.getElementById('typewriter'),
  projectsGrid: document.getElementById('projects-grid'),
  projectFilters: document.querySelectorAll('.project-filter-btn'),
  mainContent: document.getElementById('main-content'),
  caseStudyView: document.getElementById('case-study-view'),
  contactForm: document.getElementById('contact-form'),
  navLinks: document.querySelectorAll('.nav-link'),
  servicesGrid: document.getElementById('services-grid'),
  techGrid: document.getElementById('tech-grid'),
  faqAccordion: document.getElementById('faq-list')
};

// ==========================================
// 3. STATE VARIABLES
// ==========================================

let currentTheme = localStorage.getItem('portfolio-theme') || 'dark';
let activeFilter = 'all';
let currentProject = null;
let typewriterWords = ['Full Stack .NET Applications', 'Scalable Backend APIs', 'React & TypeScript UIs', 'Clean Architecture Systems'];

// ==========================================
// 4. INITIALIZATION
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
  applyTheme(currentTheme);
  
  // Loading screen logic
  setTimeout(() => {
    if (dom.loadingScreen) {
      dom.loadingScreen.classList.add('hidden');
      setTimeout(() => {
        dom.loadingScreen.style.display = 'none';
        initTypewriter();
      }, 600);
    } else {
      initTypewriter();
    }
  }, 1500);

  initScrollProgress();
  initScrollReveal();
  renderServices();
  renderSkills();
  renderProjects();
  renderFaq();
  setupNavTracking();
  setupSmoothScroll();
});

// ==========================================
// 5. THEME MANAGEMENT
// ==========================================

window.toggleTheme = () => {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  applyTheme(currentTheme);
};

const applyTheme = (theme) => {
  if (theme === 'light') {
    document.documentElement.classList.add('light-theme');
  } else {
    document.documentElement.classList.remove('light-theme');
  }
  localStorage.setItem('portfolio-theme', theme);
  
  // Update icons if toggles exist
  const toggles = [dom.themeToggle, dom.themeToggleMobile];
  toggles.forEach(toggle => {
    if (toggle) {
      const sun = toggle.querySelector('.icon-sun');
      const moon = toggle.querySelector('.icon-moon');
      if (sun && moon) {
        if (theme === 'light') {
          sun.style.display = 'none';
          moon.style.display = 'block';
        } else {
          sun.style.display = 'block';
          moon.style.display = 'none';
        }
      }
    }
  });
};

// ==========================================
// 6. NAVIGATION
// ==========================================

window.toggleMobileMenu = () => {
  if (dom.mobileMenu) {
    dom.mobileMenu.classList.toggle('active');
    document.body.style.overflow = dom.mobileMenu.classList.contains('active') ? 'hidden' : '';
  }
};

const setupNavTracking = () => {
  window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollY >= (sectionTop - sectionHeight / 3)) {
        current = section.getAttribute('id');
      }
    });

    dom.navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
};

const setupSmoothScroll = () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        // Close mobile menu if open
        if (dom.mobileMenu && dom.mobileMenu.classList.contains('active')) {
          window.toggleMobileMenu();
        }
        
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
};

// ==========================================
// 7. LOADING SCREEN (Handled in Initialization)
// ==========================================

// ==========================================
// 8. SCROLL PROGRESS BAR
// ==========================================

const initScrollProgress = () => {
  window.addEventListener('scroll', () => {
    if (!dom.scrollProgressBar) return;
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    dom.scrollProgressBar.style.width = `${scrolled}%`;
  });
};

// ==========================================
// 9. SCROLL REVEAL ANIMATIONS
// ==========================================

const initScrollReveal = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
};

// Re-observe dynamic elements
const observeElements = (elements) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(el => observer.observe(el));
};

// ==========================================
// 10. TYPEWRITER EFFECT
// ==========================================

const initTypewriter = () => {
  if (!dom.typewriterEl) return;
  
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  
  const type = () => {
    const currentWord = typewriterWords[wordIndex];
    
    if (isDeleting) {
      dom.typewriterEl.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
    } else {
      dom.typewriterEl.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
    }
    
    let typeSpeed = isDeleting ? 40 : 80;
    
    if (!isDeleting && charIndex === currentWord.length) {
      typeSpeed = 2000; // pause at end
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % typewriterWords.length;
      typeSpeed = 500; // pause before next word
    }
    
    setTimeout(type, typeSpeed);
  };
  
  type();
};

// ==========================================
// 11. PROJECT RENDERING & FILTERING
// ==========================================

window.filterProjects = (category) => {
  activeFilter = category;
  
  // Update active state of buttons
  if (dom.projectFilters) {
    dom.projectFilters.forEach(btn => {
      if (btn.getAttribute('data-filter') === category) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }
  
  window.renderProjects(category);
};

window.renderProjects = (filter = activeFilter) => {
  if (!dom.projectsGrid) return;
  
  dom.projectsGrid.innerHTML = '';
  
  const filtered = filter === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);
    
  filtered.forEach((project, index) => {
    const isLive = !!project.demo;
    
    const html = `
      <article class="project-card reveal" style="--reveal-delay: ${index * 0.1}s" onclick="showCaseStudy('${project.id}')">
        <div class="project-card-image">
          <img src="${project.image}" alt="${project.title}" loading="lazy">
          <div class="project-card-overlay"></div>
        </div>
        <div class="project-card-body">
          <span class="badge ${isLive ? 'badge-success' : 'badge-primary'}">
            ${isLive ? '<span class="badge-dot"></span>Live Project' : 'Enterprise System'}
          </span>
          <h3 class="project-card-title">${project.title}</h3>
          <p class="project-card-desc">${project.subtitle}</p>
          <div class="project-card-tech">
            ${project.technologies.slice(0, 5).map(t => `<span class="project-card-tech-tag">${t}</span>`).join('')}
          </div>
        </div>
        <div class="project-card-footer">
          <span class="project-card-link">View Case Study <span>→</span></span>
          <div class="project-card-actions">
            <a href="${project.github}" target="_blank" rel="noopener" onclick="event.stopPropagation()" class="btn-icon btn-ghost" aria-label="GitHub">
              ${GITHUB_ICON}
            </a>
            ${isLive ? `<a href="${project.demo}" target="_blank" rel="noopener" onclick="event.stopPropagation()" class="btn-icon btn-ghost" aria-label="Live Demo">${EXTERNAL_LINK_ICON}</a>` : ''}
          </div>
        </div>
      </article>
    `;
    dom.projectsGrid.insertAdjacentHTML('beforeend', html);
  });
  
  // Re-observe newly created reveal elements
  const newRevealElements = dom.projectsGrid.querySelectorAll('.reveal');
  observeElements(newRevealElements);
};

// ==========================================
// 12. CASE STUDY VIEW
// ==========================================

window.showCaseStudy = (projectId) => {
  const project = projectsData.find(p => p.id === projectId);
  if (!project) return;
  
  currentProject = project;
  
  // Hide main content, show case study
  if (dom.mainContent && dom.caseStudyView) {
    dom.mainContent.classList.add('hidden');
    dom.caseStudyView.classList.remove('hidden');
  }
  
  // Populate elements
  const el = (id) => document.getElementById(id);
  
  if (el('cs-title')) el('cs-title').textContent = project.title;
  if (el('cs-subtitle')) el('cs-subtitle').textContent = project.subtitle;
  if (el('cs-description')) el('cs-description').textContent = project.description;
  
  if (el('cs-role')) el('cs-role').textContent = project.role;
  if (el('cs-duration')) el('cs-duration').textContent = project.duration;
  if (el('cs-team')) el('cs-team').textContent = project.team;
  
  if (el('cs-challenge')) el('cs-challenge').textContent = project.challenge;
  if (el('cs-solution')) el('cs-solution').textContent = project.solution;
  
  // Image
  if (el('cs-image')) {
    el('cs-image').src = project.image;
    el('cs-image').alt = project.title;
  }
  
  // Features
  const featuresContainer = el('cs-features');
  if (featuresContainer) {
    featuresContainer.innerHTML = project.features.map(f => `
      <div class="case-study-feature">
        <h4 class="case-study-feature-title">${f.title}</h4>
        <p class="case-study-feature-desc">${f.desc}</p>
      </div>
    `).join('');
  }
  
  // Technologies
  const techContainer = el('cs-technologies');
  if (techContainer) {
    techContainer.innerHTML = project.technologies.map(t => `
      <span class="case-study-tech-item">${t}</span>
    `).join('');
  }
  
  if (el('cs-architecture')) el('cs-architecture').textContent = project.architecture;
  if (el('cs-database')) el('cs-database').textContent = project.database;
  
  // Links
  if (el('cs-github-link')) el('cs-github-link').href = project.github;
  
  const demoContainer = el('cs-demo-container');
  if (demoContainer) {
    if (project.demo) {
      demoContainer.style.display = 'block';
      if (el('cs-demo-link')) el('cs-demo-link').href = project.demo;
    } else {
      demoContainer.style.display = 'none';
    }
  }
  
  // Handlers for next/prev
  if (el('cs-prev')) {
    el('cs-prev').onclick = () => window.navigateProject(-1);
  }
  if (el('cs-next')) {
    el('cs-next').onclick = () => window.navigateProject(1);
  }
  
  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'instant' });
};

window.hideCaseStudy = () => {
  if (dom.mainContent && dom.caseStudyView) {
    dom.caseStudyView.classList.add('hidden');
    dom.mainContent.classList.remove('hidden');
    
    // Scroll to projects section
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'instant' });
    }
  }
};

window.navigateProject = (direction) => {
  if (!currentProject) return;
  const currentIndex = projectsData.findIndex(p => p.id === currentProject.id);
  
  let newIndex = currentIndex + direction;
  if (newIndex < 0) newIndex = projectsData.length - 1;
  if (newIndex >= projectsData.length) newIndex = 0;
  
  window.showCaseStudy(projectsData[newIndex].id);
};

// ==========================================
// 13. FAQ ACCORDION
// ==========================================

const renderFaq = () => {
  if (!dom.faqAccordion) return;
  
  dom.faqAccordion.innerHTML = faqData.map(faq => `
    <div class="faq-item reveal">
      <button class="faq-question" onclick="window.toggleFaq(this)">
        <span>${faq.question}</span>
        <span class="faq-question-icon">+</span>
      </button>
      <div class="faq-answer">
        <p>${faq.answer}</p>
      </div>
    </div>
  `).join('');
  
  observeElements(dom.faqAccordion.querySelectorAll('.reveal'));
};

window.toggleFaq = (button) => {
  const faqItem = button.parentElement;
  
  // Close other open FAQ items
  document.querySelectorAll('.faq-item.active').forEach(item => {
    if (item !== faqItem) {
      item.classList.remove('active');
      const icon = item.querySelector('.faq-question-icon');
      if (icon) icon.textContent = '+';
    }
  });
  
  // Toggle current FAQ item
  faqItem.classList.toggle('active');
  const currentIcon = faqItem.querySelector('.faq-question-icon');
  if (currentIcon) {
    currentIcon.textContent = faqItem.classList.contains('active') ? '-' : '+';
  }
};

// ==========================================
// 14. SERVICES & SKILLS RENDERING
// ==========================================

const renderServices = () => {
  if (!dom.servicesGrid) return;
  
  dom.servicesGrid.innerHTML = servicesData.map((service, index) => `
    <div class="service-card card reveal" style="--reveal-delay: ${index * 0.1}s">
      <div class="service-card-icon">${service.icon}</div>
      <h3 class="service-card-title">${service.title}</h3>
      <p class="service-card-desc">${service.desc}</p>
      <div class="service-card-tags">
        ${service.tags.map(tag => `<span class="service-card-tag">${tag}</span>`).join('')}
      </div>
    </div>
  `).join('');
  
  observeElements(dom.servicesGrid.querySelectorAll('.reveal'));
};

const renderSkills = () => {
  if (!dom.techGrid) return;
  
  dom.techGrid.innerHTML = skillsData.map((category, index) => `
    <div class="tech-category card reveal" style="--reveal-delay: ${index * 0.1}s">
      <h3 class="tech-category-title">
        <span class="tech-category-icon">${category.icon}</span>
        ${category.category}
      </h3>
      <ul class="tech-list">
        ${category.skills.map(skill => `
          <li class="tech-item">
            <span class="tech-item-name">${skill.name}</span>
            <span class="tech-item-level">${skill.level}</span>
          </li>
        `).join('')}
      </ul>
    </div>
  `).join('');
  
  observeElements(dom.techGrid.querySelectorAll('.reveal'));
};

// ==========================================
// 15. CONTACT FORM
// ==========================================

if (dom.contactForm) {
  dom.contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    dom.contactForm.reset();
  });
}

// ==========================================
// 16. UTILITIES
// ==========================================

window.copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    alert('Copied to clipboard!');
  } catch (err) {
    console.error('Failed to copy text: ', err);
    alert('Failed to copy to clipboard.');
  }
};
