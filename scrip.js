// script.js

// Função para adicionar evento de clique aos links da navegação
document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach(function(link) {
    link.addEventListener("click", function(event) {
      event.preventDefault();
      const targetSection = document.querySelector(`#${link.getAttribute("href").substring(1)}`);
      targetSection.scrollIntoView({ behavior: "smooth" });
    });
  });
});

// Função para adicionar efeito de fade-in às imagens
document.addEventListener("DOMContentLoaded", function() {
  const images = document.querySelectorAll("img");
  images.forEach(function(image) {
    image.style.opacity = 0;
    image.addEventListener("load", function() {
      image.style.transition = "opacity 0.5s";
      image.style.opacity = 1;
    });
  });
});