// Função para mostrar e esconder as seções de conteúdo
function mostrarSeção(id) {
  var seção = document.getElementById(id);
  if (seção.style.display === "none") {
      seção.style.display = "block";
  } else {
      seção.style.display = "none";
  }
}

// Função para criar um efeito de slide nas seções de conteúdo
function slideSeção(id) {
  var seção = document.getElementById(id);
  var altura = seção.offsetHeight;
  var tempo = 500; // tempo em milissegundos
  var intervalo = setInterval(function() {
      var alturaAtual = seção.offsetHeight;
      if (alturaAtual < altura) {
          seção.style.height = alturaAtual + 10 + "px";
      } else {
          clearInterval(intervalo);
      }
  }, tempo / altura);
}

// Função para criar um efeito de fade nas seções de conteúdo
function fadeSeção(id) {
  var seção = document.getElementById(id);
  var opacidade = 0;
  var tempo = 500; // tempo em milissegundos
  var intervalo = setInterval(function() {
      opacidade += 0.1;
      seção.style.opacity = opacidade;
      if (opacidade >= 1) {
          clearInterval(intervalo);
      }
  }, tempo / 10);
}

// Eventos para mostrar e esconder as seções de conteúdo
document.getElementById("beneficios").addEventListener("click", function() {
  mostrarSeção("beneficios-conteudo");
});

document.getElementById("receitas").addEventListener("click", function() {
  mostrarSeção("receitas-conteudo");
});

document.getElementById("dicas").addEventListener("click", function() {
  mostrarSeção("dicas-conteudo");
});

// Eventos para criar efeitos de slide e fade nas seções de conteúdo
document.getElementById("beneficios").addEventListener("mouseover", function() {
  slideSeção("beneficios-conteudo");
});

document.getElementById("receitas").addEventListener("mouseover", function() {
  slideSeção("receitas-conteudo");
});

document.getElementById("dicas").addEventListener("mouseover", function() {
  slideSeção("dicas-conteudo");
});

document.getElementById("beneficios").addEventListener("mouseout", function() {
  fadeSeção("beneficios-conteudo");
});

document.getElementById("receitas").addEventListener("mouseout", function() {
  fadeSeção("receitas-conteudo");
});

document.getElementById("dicas").addEventListener("mouseout", function() {
  fadeSeção("dicas-conteudo");
});