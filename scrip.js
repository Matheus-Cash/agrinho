// Função para mostrar e esconder os menus
function toggleMenu(menuId) {
  const menu = document.getElementById(menuId);
  menu.classList.toggle('show');
}

// Adiciona evento de clique nos links do menu
document.querySelectorAll('nav a').forEach((link) => {
  link.addEventListener('click', (e) => {
      e.preventDefault();
      toggleMenu(link.getAttribute('href').replace('#', ''));
  });
});

// Função para enviar formulário de contato
function sendContactForm() {
  const form = document.getElementById('contact-form');
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const mensagem = document.getElementById('mensagem').value;

  // Verifica se os campos estão preenchidos
  if (nome && email && mensagem) {
      // Envia formulário via AJAX
      fetch('/contact', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              nome,
              email,
              mensagem
          })
      })
      .then((response) => response.json())
      .then((data) => {
          if (data.success) {
              alert('Mensagem enviada com sucesso!');
              form.reset();
          } else {
              alert('Erro ao enviar mensagem. Tente novamente mais tarde.');
          }
      })
      .catch((error) => {
          console.error(error);
          alert('Erro ao enviar mensagem. Tente novamente mais tarde.');
      });
  } else {
      alert('Preencha todos os campos obrigatórios!');
  }
}

// Adiciona evento de submit ao formulário de contato
document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  sendContactForm();
});