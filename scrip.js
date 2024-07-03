// Seleciona os elementos do DOM
const navLinks = document.querySelectorAll('nav ul li a');
const sections = document.querySelectorAll('main section');
const scrollToTopButton = document.getElementById('scroll-to-top');

// Adiciona evento de clique aos links de navegação
navLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const targetSection = document.querySelector(`#${link.getAttribute('href').slice(1)}`);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

// Adiciona evento de scroll para mostrar ou esconder o botão de voltar ao topo
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    scrollToTopButton.classList.add('show');
  } else {
    scrollToTopButton.classList.remove('show');
  }
});

// Adiciona evento de clique ao botão de voltar ao topo
scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Adiciona animação de fade-in aos elementos da página
sections.forEach(section => {
  section.addEventListener('scrollIntoView', () => {
    section.classList.add('animate');
  });
});

// Adiciona evento de load para carregar as imagens apenas quando necessário
window.addEventListener('load', () => {
  const images = document.querySelectorAll('img');
  images.forEach(image => {
    image.src = image.dataset.src;
  });
});