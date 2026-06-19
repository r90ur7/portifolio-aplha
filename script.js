const projects = [
  {
    name: "ohana-list",
    description: "Processo seletivo para Ohana — lista de tarefas com React e TypeScript.",
    tags: ["TypeScript", "React", "Vercel"],
    github: "https://github.com/r90ur7/ohana-list",
    demo: "https://ohana-list.vercel.app"
  },
  {
    name: "MudaMundo",
    description: "Aplicação web para doação e distribuição de mudas de plantas (Laravel).",
    tags: ["PHP", "Laravel", "Blade", "Render"],
    github: "https://github.com/r90ur7/MudaMundo",
    demo: "https://mudamundo.onrender.com"
  },
  {
    name: "mini-erp",
    description: "Sistema ERP básico com CodeIgniter 4 — produtos, cupons e pedidos.",
    tags: ["PHP", "CodeIgniter", "MySQL"],
    github: "https://github.com/r90ur7/mini-erp",
    demo: ""
  },
  {
    name: "DSMOVIE",
    description: "Site estático de avaliação de filmes. HTML e CSS puro.",
    tags: ["HTML", "CSS", "GitHub Pages"],
    github: "https://github.com/r90ur7/DSMOVIE",
    demo: "https://r90ur7.github.io/DSMOVIE/"
  },
  {
    name: "OnePiecePage",
    description: "Fan page do anime One Piece com layout responsivo e design temático.",
    tags: ["HTML", "CSS", "GitHub Pages"],
    github: "https://github.com/r90ur7/OnePiecePage",
    demo: "https://r90ur7.github.io/OnePiecePage/"
  },
  {
    name: "WebPetShop",
    description: "Aplicação ASP.NET com banco SQL para gestão de pet shop.",
    tags: ["C#", "ASP.NET", "SQL"],
    github: "https://github.com/r90ur7/WebPetShop",
    demo: ""
  }
];

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  setupNavToggle();
  setupScrollAnimations();
  setupContactForm();
  setupNavbarScroll();
  setupDuck3D();
  initGlobe();
});

function renderProjects() {
  const grid = document.getElementById("projectsGrid");

  projects.forEach((p, i) => {
    const initial = p.name.charAt(0).toUpperCase();
    const card = document.createElement("div");
    card.className = "project-card fade-in-up";
    card.style.transitionDelay = `${i * 0.08}s`;

    const hasDemo = p.demo && p.demo.length > 0;

    card.innerHTML = `
      <div class="project-card-header">
        <div class="project-card-icon">${initial}</div>
        <div><h3>${p.name}</h3></div>
      </div>
      <p>${p.description}</p>
      <div class="project-tags">
        ${p.tags.map(t => `<span class="project-tag">${t}</span>`).join("")}
      </div>
      <div class="project-links">
        <a href="${p.github}" target="_blank" rel="noopener noreferrer" class="project-link">
          <svg viewBox="0 0 24 24" width="14" height="14"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>
          Código
        </a>
        ${hasDemo ? `
        <a href="${p.demo}" target="_blank" rel="noopener noreferrer" class="project-link">
          <svg viewBox="0 0 24 24" width="14" height="14"><path fill="currentColor" d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3m-2 16H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7z"/></svg>
          Demo
        </a>` : ""}
      </div>
    `;

    grid.appendChild(card);
  });
}

function setupNavToggle() {
  const toggle = document.getElementById("navToggle");
  const links = document.querySelector(".nav-links");
  const navLinkItems = document.querySelectorAll(".nav-link");

  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true" ? "false" : "true";
    toggle.setAttribute("aria-expanded", expanded);
    toggle.classList.toggle("active");
    links.classList.toggle("open");
  });

  navLinkItems.forEach((link) => {
    link.addEventListener("click", () => {
      toggle.classList.remove("active");
      toggle.setAttribute("aria-expanded", "false");
      links.classList.remove("open");
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
    { threshold: 0.08 }
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
      status.textContent = "Email inválido.";
      status.className = "form-status error";
      return;
    }

    status.textContent = "Mensagem enviada! Entrarei em contato em breve.";
    status.className = "form-status success";
    form.reset();
  });
}

function setupNavbarScroll() {
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 50);
  });
}

function setupDuck3D() {
  const hero = document.querySelector(".hero");
  const inner = document.getElementById("duckInner");
  if (!hero || !inner) return;

  let targetX = 0, targetY = 0;
  let currentX = 0, currentY = 0;

  hero.addEventListener("mousemove", (e) => {
    const rect = hero.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    targetX = x * 25;
    targetY = y * -18;
  });

  hero.addEventListener("mouseleave", () => {
    targetX = 0;
    targetY = 0;
  });

  function animate() {
    currentX += (targetX - currentX) * 0.08;
    currentY += (targetY - currentY) * 0.08;

    inner.style.transform =
      `rotateX(${currentY}deg) rotateY(${currentX}deg)`;

    requestAnimationFrame(animate);
  }

  animate();
}

function initGlobe() {
  const canvas = document.getElementById("globeCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let w, h;
  const dots = [];
  const DOT_COUNT = 180;
  let mouseX = 0, mouseY = 0;
  let rotX = 0, rotY = 0;
  let targetRotX = 0, targetRotY = 0;

  class Dot {
    constructor() {
      this.theta = Math.random() * Math.PI * 2;
      this.phi = Math.acos(2 * Math.random() - 1);
      this.r = 1;
      this.baseX = 0;
      this.baseY = 0;
      this.baseZ = 0;
      this.screenX = 0;
      this.screenY = 0;
    }

    project(rotX, rotY) {
      const cx = Math.sin(this.phi) * Math.cos(this.theta);
      const cy = Math.sin(this.phi) * Math.sin(this.theta);
      const cz = Math.cos(this.phi);

      const rx = cx;
      const ry = cy * Math.cos(rotX) - cz * Math.sin(rotX);
      const rz = cy * Math.sin(rotX) + cz * Math.cos(rotX);

      const rxz = rx * Math.cos(rotY) + rz * Math.sin(rotY);
      const ryz = ry;
      const rzz = -rx * Math.sin(rotY) + rz * Math.cos(rotY);

      this.baseX = rxz;
      this.baseY = ryz;
      this.baseZ = rzz;

      const scale = 200 / (200 + rzz * w * 0.4);
      this.screenX = w / 2 + rxz * w * 0.35 * scale;
      this.screenY = h / 2 + ryz * w * 0.35 * scale;
      this.size = scale * 1.5;
      this.z = rzz;
    }
  }

  function resize() {
    const rect = canvas.parentElement.getBoundingClientRect();
    w = canvas.width = rect.width * devicePixelRatio;
    h = canvas.height = rect.height * devicePixelRatio;
    canvas.style.width = rect.width + "px";
    canvas.style.height = rect.height + "px";
  }

  for (let i = 0; i < DOT_COUNT; i++) {
    dots.push(new Dot());
  }

  function drawGlobe() {
    ctx.clearRect(0, 0, w, h);

    rotX += (targetRotX - rotX) * 0.05;
    rotY += (targetRotY - rotY) * 0.05;

    rotY += 0.003;

    dots.forEach((d) => d.project(rotX, rotY));

    dots.sort((a, b) => a.z - b.z);

    const grad = ctx.createRadialGradient(w * 0.5, h * 0.5, 0, w * 0.5, h * 0.5, w * 0.4);
    grad.addColorStop(0, "rgba(123,45,142,0.06)");
    grad.addColorStop(0.5, "rgba(74,144,217,0.04)");
    grad.addColorStop(1, "rgba(10,10,20,0)");

    ctx.beginPath();
    ctx.arc(w / 2, h / 2, w * 0.35, 0, Math.PI * 2);
    ctx.fillStyle = grad;
    ctx.fill();

    for (let i = 0; i < dots.length; i++) {
      const d = dots[i];
      const alpha = (d.z + 1) / 2 * 0.9;

      ctx.beginPath();
      ctx.arc(d.screenX, d.screenY, Math.max(d.size, 1), 0, Math.PI * 2);

      const hue = d.z > 0 ? "255,105,180" : "123,45,142";
      ctx.fillStyle = `rgba(${hue},${alpha * 0.8})`;
      ctx.fill();

      if (d.z > 0) {
        ctx.shadowColor = "rgba(123,45,142,0.15)";
        ctx.shadowBlur = 4;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    ctx.strokeStyle = "rgba(123,45,142,0.06)";
    ctx.lineWidth = 0.5;

    for (let lat = 0; lat < 12; lat++) {
      ctx.beginPath();
      for (let lng = 0; lng <= 36; lng++) {
        const theta = (lng / 36) * Math.PI * 2;
        const phi = (lat / 12) * Math.PI;
        const x = Math.sin(phi) * Math.cos(theta);
        const y = Math.sin(phi) * Math.sin(theta);
        const z = Math.cos(phi);

        const rx = x;
        const ry = y * Math.cos(rotX) - z * Math.sin(rotX);
        const rz = y * Math.sin(rotX) + z * Math.cos(rotX);
        const rxz = rx * Math.cos(rotY) + rz * Math.sin(rotY);
        const ryz = ry;
        const rzz = -rx * Math.sin(rotY) + rz * Math.cos(rotY);

        if (rzz < 0) continue;

        const scale = 200 / (200 + rzz * w * 0.4);
        const sx = w / 2 + rxz * w * 0.35 * scale;
        const sy = h / 2 + ryz * w * 0.35 * scale;

        if (lng === 0) ctx.moveTo(sx, sy);
        else ctx.lineTo(sx, sy);
      }
      ctx.stroke();
    }

    for (let lng = 0; lng < 18; lng++) {
      ctx.beginPath();
      for (let lat = 0; lat <= 24; lat++) {
        const theta = (lng / 18) * Math.PI * 2;
        const phi = (lat / 24) * Math.PI;
        const x = Math.sin(phi) * Math.cos(theta);
        const y = Math.sin(phi) * Math.sin(theta);
        const z = Math.cos(phi);

        const rx = x;
        const ry = y * Math.cos(rotX) - z * Math.sin(rotX);
        const rz = y * Math.sin(rotX) + z * Math.cos(rotX);
        const rxz = rx * Math.cos(rotY) + rz * Math.sin(rotY);
        const ryz = ry;
        const rzz = -rx * Math.sin(rotY) + rz * Math.cos(rotY);

        if (rzz < 0) continue;

        const scale = 200 / (200 + rzz * w * 0.4);
        const sx = w / 2 + rxz * w * 0.35 * scale;
        const sy = h / 2 + ryz * w * 0.35 * scale;

        if (lat === 0) ctx.moveTo(sx, sy);
        else ctx.lineTo(sx, sy);
      }
      ctx.stroke();
    }

    requestAnimationFrame(drawGlobe);
  }

  document.querySelector(".contact").addEventListener("mousemove", (e) => {
    const rect = canvas.parentElement.getBoundingClientRect();
    targetRotX = ((e.clientY - rect.top) / rect.height - 0.5) * 0.6;
    targetRotY = ((e.clientX - rect.left) / rect.width - 0.5) * 0.6;
  });

  resize();
  drawGlobe();

  window.addEventListener("resize", resize);
}
