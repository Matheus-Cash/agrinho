// script.js

// Função para adicionar evento de clique aos títulos da navegação
document.addEventListener("DOMContentLoaded", function() {
  const navTitles = document.querySelectorAll("nav h2");
  navTitles.forEach(function(title) {
    title.addEventListener("click", function(event) {
      event.preventDefault();
      const targetSection = document.querySelector(`#${title.textContent.toLowerCase().replace(" ", "-")}`);
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