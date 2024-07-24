// script.js

// Função para adicionar evento de clique ao menu de navegação
document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach(link => {
    link.addEventListener("click", function(event) {
      event.preventDefault();
      const targetSection = document.querySelector(`#${link.getAttribute("href").substring(1)}`);
      targetSection.scrollIntoView({ behavior: "smooth" });
    });
  });
});

// Função para adicionar efeito de fade-in às seções
document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll("section");
  sections.forEach(section => {
    section.style.opacity = 0;
    section.style.transition = "opacity 0.5s";
    section.addEventListener("scroll", function() {
      if (section.offsetTop <= window.scrollY + window.innerHeight - 200) {
        section.style.opacity = 1;
      }
    });
  });
});

// Função para validar formulário de contato
document.addEventListener("DOMContentLoaded", function() {
  const form = document.querySelector("#contato form");
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    const nome = document.querySelector("#nome").value;
    const email = document.querySelector("#email").value;
    const mensagem = document.querySelector("#mensagem").value;
    if (nome && email && mensagem) {
      alert("Mensagem enviada com sucesso!");
      form.reset();
    } else {
      alert("Preencha todos os campos obrigatórios!");
    }
  });
});