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
    result: "Premiada com Insurance Innovation Award 2024 — processamento de +500k cotações/mês",
  },
  {
    name: "Flix — Microsserviços Cloud Native",
    url: "https://flix.com.br",
    stack: ["Python", "FastAPI", "AWS Lambda", "React", "Next.js"],
    description: "Backend em Python/FastAPI com microsserviços em AWS (EC2, Lambda, CloudFormation, API Gateway) e frontend em Next.js/TypeScript hospedado na Vercel.",
    result: "Redução de 60% no tempo de deploy com arquitetura serverless e CI/CD automatizado",
  },
  {
    name: "GerenteWeb — Sistemas & Marketing",
    url: "https://www.gerenteweb.com.br",
    stack: ["PHP", "Laravel", "React", "Vue.js", "Docker"],
    description: "Desenvolvimento sênior em Laravel, WordPress, React e Vue com CI/CD, APM, containers Docker e checagens GA/GTM para performance de marketing.",
    result: "Aumento de 40% na performance de carregamento após implementação de APM e otimizações",
  },
  {
    name: "Design System com Storybook",
    url: GITHUB,
    stack: ["React", "TypeScript", "Storybook", "Jest"],
    description: "Biblioteca de componentes documentada em Storybook, com pirâmide de testes robusta (Jest + Cypress) integrada em pipelines de CI/CD modernos.",
    result: "Cobertura de testes de 92% — redução de 70% em bugs visuais reportados em produção",
  },
  {
    name: "Infra as Code — Terraform & Pulumi",
    url: GITHUB,
    stack: ["Terraform", "Pulumi", "AWS EKS", "Kubernetes"],
    description: "Provisionamento de infraestrutura AWS (EKS, Lambda, SQS, RDS) com IaC seguindo o framework AWS Well-Architected para escala, segurança e otimização de custos.",
    result: "Redução de 35% nos custos AWS com right-sizing e ambientes efêmeros automatizados",
  },
  {
    name: "Migração Monolito → Microsserviços",
    url: GITHUB,
    stack: ["PHP", "Python", "AWS EKS", "SQS"],
    description: "Modernização de sistemas legados PHP/Python para arquitetura de microsserviços em AWS Lambda e EKS, com observabilidade via ElasticSearch APM.",
    result: "Migração zero-downtime de monolito com 8 anos — latência P95 reduzida de 2.1s para 340ms",
  },
];

const freelance = [
  {
    name: "Aplam",
    url: "https://aplam.com.br",
    stack: ["TypeScript", "Next.js", "SEO", "Leads"],
    description: "Site institucional em TypeScript/Next.js com SEO on-page, integrações de captação de leads e otimização de performance para conversão.",
    result: "Aumento de 3x na captação orgânica de leads em 6 meses",
  },
  {
    name: "Laris",
    url: "https://laris.com.br",
    stack: ["Tray", "eCommerce", "SEO", "Integrações"],
    description: "Loja eCommerce na plataforma Tray com consultoria em arquitetura, integrações de marketplace/ERP e SEO técnico para catálogos.",
    result: "Integração com 3 marketplaces e aumento de 25% no tráfego orgânico",
  },
  {
    name: "Blog Laris",
    url: "https://bloglaris.com.br",
    stack: ["WordPress", "SEO", "Content Marketing"],
    description: "Blog em WordPress integrado ao ecossistema Laris, com SEO técnico, schema markup e estratégia de captação de tráfego via conteúdo.",
    result: "Crescimento de 180% no tráfego orgânico com estratégia de content marketing",
  },
  {
    name: "Toolbox Brasil",
    url: "https://toolboxbrasil.com.br",
    stack: ["TypeScript", "IA", "CI/CD", "Consultoria", "SEO"],
    description: "Criação de plataforma como ferramenta para uso geral, com SEO técnico para captação de tráfego via conteúdo e integrações com IA.",
    result: "Plataforma lançada em 8 semanas com pipeline CI/CD e deploy automatizado",
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
    toggle.setAttribute('aria-expanded', String(open));
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

  document.querySelectorAll('.project-card, .freelance-card, .timeline-item, .stack-card, .education-card, .service-card, .faq-item').forEach(el => {
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

// ===== Contact Form =====
function initContactForm() {
  const form = document.getElementById('form');
  if (!form) return;

  const submitBtn = form.querySelector('button[type="submit"]');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const originalText = submitBtn.textContent;

    submitBtn.textContent = "Enviando...";
    submitBtn.disabled = true;

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        submitBtn.textContent = "✓ Enviado!";
        form.reset();
        setTimeout(() => { submitBtn.textContent = originalText; }, 3000);
      } else {
        alert("Erro: " + data.message);
        submitBtn.textContent = originalText;
      }
    } catch (error) {
      alert("Algo deu errado. Tente novamente.");
      submitBtn.textContent = originalText;
    } finally {
      submitBtn.disabled = false;
    }
  });
}

// ===== Init =====
document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
  renderFreelance();
  renderTimeline();
  initNav();
  initScrollAnimations();
  initActiveNav();
  initContactForm();
});
