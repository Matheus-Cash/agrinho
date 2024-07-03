// script.js

// Seleciona os elementos do DOM
const nav = document.querySelector('nav');
const sections = document.querySelectorAll('section');
const introSection = document.querySelector('#introducao');
const tiposDeFinanciamentoSection = document.querySelector('#tipos-de-financiamento');
const beneficiosSection = document.querySelector('#beneficios');
const comoFuncionaSection = document.querySelector('#como-funciona');
const casosDeSucessoSection = document.querySelector('#casos-de-sucesso');

// Adiciona evento de clique ao menu de navegação
nav.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    e.preventDefault();
    const sectionId = e.target.getAttribute('href').replace('#', '');
    const section = document.querySelector(`#${sectionId}`);
    section.scrollIntoView({ behavior: 'smooth' });
  }
});

// Adiciona evento de scroll para mostrar ou esconder o menu de navegação
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  if (scrollPosition > 200) {
    nav.classList.add('fixed');
  } else {
    nav.classList.remove('fixed');
  }
});

// Adiciona animação para a seção de introdução
introSection.addEventListener('scroll', () => {
  const scrollPosition = introSection.scrollTop;
  if (scrollPosition > 100) {
    introSection.classList.add('animate');
  } else {
    introSection.classList.remove('animate');
  }
});

// Adiciona animação para os cards de tipos de financiamento
tiposDeFinanciamentoSection.addEventListener('scroll', () => {
  const cards = tiposDeFinanciamentoSection.querySelectorAll('.card');
  cards.forEach((card) => {
    const cardTop = card.offsetTop;
    const scrollPosition = tiposDeFinanciamentoSection.scrollTop;
    if (scrollPosition > cardTop - 200) {
      card.classList.add('animate');
    } else {
      card.classList.remove('animate');
    }
  });
});

// Adiciona animação para os cards de benefícios
beneficiosSection.addEventListener('scroll', () => {
  const cards = beneficiosSection.querySelectorAll('.card');
  cards.forEach((card) => {
    const cardTop = card.offsetTop;
    const scrollPosition = beneficiosSection.scrollTop;
    if (scrollPosition > cardTop - 200) {
      card.classList.add('animate');
    } else {
      card.classList.remove('animate');
    }
  });
});

// Adiciona animação para os cards de casos de sucesso
casosDeSucessoSection.addEventListener('scroll', () => {
  const cards = casosDeSucessoSection.querySelectorAll('.card');
  cards.forEach((card) => {
    const cardTop = card.offsetTop;
    const scrollPosition = casosDeSucessoSection.scrollTop;
    if (scrollPosition > cardTop - 200) {
      card.classList.add('animate');
    } else {
      card.classList.remove('animate');
    }
  });
});