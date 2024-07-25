// Seleciona os elementos do formulário de contato
const form = document.querySelector('form');
const nomeInput = document.querySelector('#nome');
const emailInput = document.querySelector('#email');
const mensagemInput = document.querySelector('#mensagem');

// Adiciona um evento de submit ao formulário
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Previne o comportamento padrão do formulário

  // Verifica se os campos estão preenchidos
  if (nomeInput.value && emailInput.value && mensagemInput.value) {
    // Envia uma mensagem de sucesso
    alert('Mensagem enviada com sucesso!');
  } else {
    // Envia uma mensagem de erro
    alert('Por favor, preencha todos os campos!');
  }
});

// Adiciona um evento de hover aos links do menu
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach((link) => {
  link.addEventListener('mouseover', () => {
    link.style.color = '#4CAF50'; // Muda a cor do link para verde
  });

  link.addEventListener('mouseout', () => {
    link.style.color = ''; // Volta à cor original do link
  });
});

// Adiciona um evento de scroll à página
window.addEventListener('scroll', () => {
  // Verifica se o usuário scrolled até o final da página
  if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
    // Mostra uma mensagem de "Você alcançou o final da página!"
    alert('Você alcançou o final da página!');
  }
});