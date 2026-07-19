// ===== Data from Lovable source =====
const GITHUB = "https://github.com/silici0";
const LINKEDIN = "https://www.linkedin.com/in/rafael-cunha";
const EMAIL = "silici0@gmail.com";

const projects = [
  {
    name: "Seguralta — Plataforma de Seguros",
    url: "https://www.seguralta.com.br",
    stack: ["React", "Next.js", "TypeScript", "Python", "AWS"],
    description: "Plataforma full stack para o setor de seguros com arquitetura de Data Lake, contratos de dados em EMR e distribuição via API Gateway. Vencedora do Insurance Innovation Award 2024 (CNseg).",
  },
  {
    name: "Flix — Microsserviços Cloud Native",
    url: "https://flix.com.br",
    stack: ["Python", "FastAPI", "AWS Lambda", "React", "Next.js"],
    description: "Backend em Python/FastAPI com microsserviços em AWS (EC2, Lambda, CloudFormation, API Gateway) e frontend em Next.js/TypeScript hospedado na Vercel.",
  },
  {
    name: "GerenteWeb — Sistemas & Marketing",
    url: "https://www.gerenteweb.com.br",
    stack: ["PHP", "Laravel", "React", "Vue.js", "Docker"],
    description: "Desenvolvimento sênior em Laravel, WordPress, React e Vue com CI/CD, APM, containers Docker e checagens GA/GTM para performance de marketing.",
  },
  {
    name: "Design System com Storybook",
    url: GITHUB,
    stack: ["React", "TypeScript", "Storybook", "Jest"],
    description: "Biblioteca de componentes documentada em Storybook, com pirâmide de testes robusta (Jest + Cypress) integrada em pipelines de CI/CD modernos.",
  },
  {
    name: "Infra as Code — Terraform & Pulumi",
    url: GITHUB,
    stack: ["Terraform", "Pulumi", "AWS EKS", "Kubernetes"],
    description: "Provisionamento de infraestrutura AWS (EKS, Lambda, SQS, RDS) com IaC seguindo o framework AWS Well-Architected para escala, segurança e otimização de custos.",
  },
  {
    name: "Migração Monolito → Microsserviços",
    url: GITHUB,
    stack: ["PHP", "Python", "AWS EKS", "SQS"],
    description: "Modernização de sistemas legados PHP/Python para arquitetura de microsserviços em AWS Lambda e EKS, com observabilidade via ElasticSearch APM.",
  },
  // {
  //   name: "Aplam",
  //   url: "https://aplam.com.br",
  //   stack: ["WordPress", "SEO", "CMS", "Captação de Leads"],
  //   description: "Projeto freelance: site institucional em WordPress com SEO on-page, integrações de captação de leads e otimização de performance para conversão.",
  // },
  // {
  //   name: "Laris",
  //   url: "https://laris.com.br",
  //   stack: ["VTEX", "eCommerce", "SEO", "Integrações"],
  //   description: "Projeto freelance: loja eCommerce integrações de marketplace/ERP e SEO técnico para catálogos.",
  // },
  // {
  //   name: "Blog Laris",
  //   url: "https://bloglaris.com.br",
  //   stack: ["WordPress", "SEO", "CMS", "Content Marketing"],
  //   description: "Projeto freelance: blog em WordPress integrado ao ecossistema Laris, com SEO técnico, schema markup e estratégia de captação de leads via conteúdo.",
  // },
  // {
  //   name: "Toolbox Brasil",
  //   url: "https://toolboxbrasil.com.br",
  //   stack: ["VTEX", "eCommerce", "CI/CD", "Consultoria"],
  //   description: "Projeto freelance: consultoria em eCommerce e desenvolvimento na VTEX, migração de legado para pipelines de CI/CD modernos e integrações headless.",
  // },
];

const freelance = [
  {
    name: "Aplam",
    url: "https://aplam.com.br",
    stack: ["WordPress", "SEO", "CMS", "Leads"],
    description: "Site institucional em Typescript/NextJS com SEO on-page",
  },
  {
    name: "Laris",
    url: "https://laris.com.br",
    stack: ["Tray", "eCommerce", "SEO", "Integrações"],
    description: "Loja eCommerce na plataforma TRAY com consultoria em arquitetura, integrações de marketplace/ERP e SEO técnico para catálogos.",
  },
  {
    name: "Blog Laris",
    url: "https://bloglaris.com.br",
    stack: ["WordPress", "SEO", "Content Marketing"],
    description: "Blog em WordPress integrado ao ecossistema Laris, com SEO técnico, schema markup e estratégia de captação de tráfego via conteúdo.",
  },
  {
    name: "Toolbox Brasil",
    url: "https://toolboxbrasil.com.br",
    stack: ["Typescrip", "IA", "CI/CD", "Consultoria", "SEO"],
    description: "Criação de plataforma como ferramenta para uso geral, com SEO técnico para captção de tráfego via conteúdo",
  },
];

const experience = [
  { company: "Seguralta", role: "Desenvolvedor Full Stack", period: "Jul 2024 — Abr 2026", desc: "TypeScript, React, Next.js, Storybook, Python microsserviços, PHP/Laravel. AWS: S3, Cognito, Lambda, EC2, Docker, API Gateway. Equipe premiada com o Insurance Innovation Award 2024." },
  { company: "Flix", role: "Engenheiro Full Stack", period: "Mai 2023 — Jun 2024", desc: "Backend Python/FastAPI/SQLAlchemy em microsserviços AWS (EC2, Lambda, CloudFormation, API Gateway). Frontend React/Next.js/TypeScript na Vercel." },
  { company: "Trampolim", role: "Líder Técnico", period: "Mar 2023 — Mai 2023", desc: "Liderança técnica em projetos full stack, coordenando equipes multifuncionais para entregar soluções eficientes." },
  { company: "Flix", role: "Engenheiro Full Stack", period: "Out 2021 — Mar 2023", desc: "Microsserviços em Python/FastAPI e frontend React/Next.js/TypeScript." },
  { company: "GerenteWeb", role: "Analista / Programador Sênior", period: "Fev 2018 — Out 2021", desc: "PHP, Laravel, WordPress, React, Vue.js. Implementação de APM, CI/CD, Git e Docker; integrações GA/GTM para performance." },
  { company: "Mktnow", role: "Analista / Programador", period: "Jun 2017 — Dez 2017", desc: "Magento 1/2, landing pages e painéis CRUD com integrações REST/Webservices em Laravel." },
];

// ===== Render Projects =====
function renderProjects() {
  const grid = document.querySelector('.projects-grid');
  if (!grid) return;

  grid.innerHTML = projects.map(p => `
    <article class="project-card">
      <div class="project-card-header">
        <h3><a href="${p.url}" target="_blank" rel="noopener">${p.name}</a></h3>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="project-card-arrow"><path d="M7 17L17 7M10 7h7v7"/></svg>
      </div>
      <p>${p.description}</p>
      <div class="project-tags">${p.stack.map(s => `<span>${s}</span>`).join('')}</div>
      <a href="${p.url}" target="_blank" rel="noopener" class="project-link">visitar projeto →</a>
    </article>
  `).join('');
}

// ===== Render Freelance =====
function renderFreelance() {
  const grid = document.querySelector('.freelance-grid');
  if (!grid) return;

  grid.innerHTML = freelance.map(p => `
    <article class="freelance-card">
      <div class="freelance-card-header">
        <h3><a href="${p.url}" target="_blank" rel="noopener">${p.name}</a></h3>
        <span class="freelance-badge">freelance</span>
      </div>
      <p>${p.description}</p>
      <div class="project-tags">${p.stack.map(s => `<span>${s}</span>`).join('')}</div>
      <a href="${p.url}" target="_blank" rel="noopener" class="project-link">visitar site →</a>
    </article>
  `).join('');
}

// ===== Render Timeline =====
function renderTimeline() {
  const timeline = document.querySelector('.timeline');
  if (!timeline) return;

  timeline.innerHTML = experience.map(e => `
    <li class="timeline-item">
      <div class="timeline-header">
        <h3>${e.role} <span class="timeline-company">@ ${e.company}</span></h3>
        <span class="timeline-date">${e.period}</span>
      </div>
      <p>${e.desc}</p>
    </li>
  `).join('');
}

// ===== Mobile Nav Toggle =====
function initNav() {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', open);
  });

  links.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      links.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ===== Scroll Animations =====
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.project-card, .freelance-card, .timeline-item, .stack-card, .education-card').forEach(el => {
    el.classList.add('animate-in');
    observer.observe(el);
  });
}

// ===== Active Nav Highlighting =====
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  const update = () => {
    const scrollY = window.scrollY + 200;
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      if (scrollY >= top && scrollY < top + height) {
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  };

  window.addEventListener('scroll', update, { passive: true });
  update();
}

// ===== Init =====
document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
  renderFreelance();
  renderTimeline();
  initNav();
  initScrollAnimations();
  initActiveNav();
});


const form = document.getElementById('form');
const submitBtn = form.querySelector('button[type="submit"]');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    formData.append("access_key", "7bcf4b73-7d0d-4787-9f6f-15a543f6ac5e");

    const originalText = submitBtn.textContent;

    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: JSON.stringify(formData)
        });

        const data = await response.json();

        if (response.ok) {
            alert("Success! Your message has been sent.");
            form.reset();
        } else {
            alert("Error: " + data.message);
        }

    } catch (error) {
        alert("Something went wrong. Please try again.");
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
});