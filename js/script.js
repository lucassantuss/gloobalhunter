/* ========================================
   ANIMAÇÃO DE ENTRADA (REVEAL)
   Detecta quando elementos entram na tela
   e adiciona a classe "active".
======================================== */

// Seleciona todos elementos que terão animação
const reveals = document.querySelectorAll('.reveal');

// Cria o observer (observador de visibilidade)
const observer = new IntersectionObserver((entries) => {

    // Percorre cada elemento observado
    entries.forEach(entry => {

        // Se o elemento estiver visível na tela
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }

    });

}, {
    threshold: 0.15 // ativa quando 15% do elemento aparece
});

// Aplica o observer a cada elemento
reveals.forEach(el => {
    observer.observe(el);
});

/* ========================================
   MENU MOBILE (HAMBURGUER)
   Controla abrir e fechar o menu no mobile.
======================================== */

// Seleciona elementos do menu
const toggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-menu a");

// Alterna menu ao clicar no botão hamburguer
toggle.addEventListener("click", () => {
    navMenu.classList.toggle("active"); // mostra/esconde menu
    toggle.classList.toggle("open");    // anima ícone para "X"
});

// Fecha menu ao clicar em qualquer link
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        toggle.classList.remove("open");
    });
});

/* ========================================
   ANO AUTOMÁTICO NO FOOTER
   Atualiza o ano automaticamente.
======================================== */

// Pega o elemento do ano
const yearSpan = document.getElementById("year");

// Obtém ano atual
const currentYear = new Date().getFullYear();

// Insere o ano no HTML
yearSpan.textContent = currentYear;