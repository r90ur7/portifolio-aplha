const projects = [
  {
    name: "ohana-list",
    description: "Processo seletivo para Ohana - Lista de tarefas com React e TypeScript.",
    tags: ["TypeScript", "React", "Vercel"],
    github: "https://github.com/r90ur7/ohana-list",
    demo: "https://ohana-list.vercel.app",
    stars: "0"
  },
  {
    name: "MudaMundo",
    description: "Aplicação web para doação e distribuição de mudas de plantas entre usuários.",
    tags: ["PHP", "Laravel", "Blade", "Render"],
    github: "https://github.com/r90ur7/MudaMundo",
    demo: "https://mudamundo.onrender.com",
    stars: "0"
  },
  {
    name: "mini-erp",
    description: "Sistema ERP básico com CodeIgniter 4. Gerencia produtos, cupons e pedidos.",
    tags: ["PHP", "CodeIgniter", "MySQL"],
    github: "https://github.com/r90ur7/mini-erp",
    demo: "",
    stars: "0"
  },
  {
    name: "DSMOVIE",
    description: "Site estático de avaliação de filmes desenvolvido com HTML e CSS.",
    tags: ["HTML", "CSS", "GitHub Pages"],
    github: "https://github.com/r90ur7/DSMOVIE",
    demo: "https://r90ur7.github.io/DSMOVIE/",
    stars: "0"
  },
  {
    name: "OnePiecePage",
    description: "Fan page do anime One Piece com layout responsivo e design temático.",
    tags: ["HTML", "CSS", "GitHub Pages"],
    github: "https://github.com/r90ur7/OnePiecePage",
    demo: "https://r90ur7.github.io/OnePiecePage/",
    stars: "0"
  },
  {
    name: "WebPetShop",
    description: "Aplicação ASP.NET com banco SQL para gestão de um pet shop.",
    tags: ["C#", "ASP.NET", "SQL"],
    github: "https://github.com/r90ur7/WebPetShop",
    demo: "",
    stars: "0"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  setupNavToggle();
  setupScrollAnimations();
  setupContactForm();
  setupNavbarScroll();
});

function renderProjects() {
  const grid = document.getElementById("projectsGrid");

  projects.forEach((project) => {
    const initial = project.name.charAt(0).toUpperCase();
    const starIcons = Array(3).fill("").map(() =>
      `<svg viewBox="0 0 24 24" width="14" height="14"><path fill="#FFD700" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`
    ).join("");

    const card = document.createElement("div");
    card.className = "project-card fade-in-up";

    const hasDemo = project.demo && project.demo.length > 0;

    card.innerHTML = `
      <div class="project-card-header">
        <div class="project-card-icon">${initial}</div>
        <div class="project-card-stars">${starIcons}</div>
      </div>
      <h3>${project.name}</h3>
      <p>${project.description}</p>
      <div class="project-tags">
        ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join("")}
      </div>
      <div class="project-links">
        <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project-link">
          <svg viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>
          Código
        </a>
        ${hasDemo ? `
        <a href="${project.demo}" target="_blank" rel="noopener noreferrer" class="project-link">
          <svg viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3m-2 16H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7z"/></svg>
          Demo
        </a>` : ""}
      </div>
    `;

    grid.appendChild(card);
  });
}

function setupNavToggle() {
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");
  const navLinkItems = document.querySelectorAll(".nav-link");

  toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    links.classList.toggle("open");
    const isOpen = links.classList.contains("open");
    toggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
  });

  navLinkItems.forEach((link) => {
    link.addEventListener("click", () => {
      toggle.classList.remove("active");
      links.classList.remove("open");
      toggle.setAttribute("aria-label", "Abrir menu");
    });
  });
}

function setupScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".fade-in-up").forEach((el) => observer.observe(el));
}

function setupContactForm() {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      status.textContent = "Preencha todos os campos.";
      status.className = "form-status error";
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      status.textContent = "Insira um email válido.";
      status.className = "form-status error";
      return;
    }

    status.textContent = "Mensagem enviada com sucesso! Entrarei em contato em breve.";
    status.className = "form-status success";
    form.reset();
  });
}

function setupNavbarScroll() {
  const navbar = document.getElementById("navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
}
