document.addEventListener("DOMContentLoaded", () => {
  // Menu Hamburguer: alterna a exibição do menu em mobile
  const menuToggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav");

  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });

  // Funções da calculadora (convertidas do código Java para JavaScript)
  function calcularInclinacao(altura, comprimento) {
    return (altura * 100) / comprimento;
  }

  function calcularComprimento(altura, inclinacao) {
    return (altura * 100) / inclinacao;
  }

  function calcularAltura(comprimento, inclinacao) {
    return (comprimento * inclinacao) / 100;
  }

  // Renderiza os inputs de acordo com o tipo de cálculo selecionado
  function renderInputs() {
    const tipo = document.getElementById("calculoTipo").value;
    const inputsDiv = document.getElementById("inputs");
    let html = "";

    if (tipo === "inclinacao") {
      html = `
        <label for="altura">Altura (m):</label>
        <input type="number" id="altura" required step="any">
        <label for="comprimento">Comprimento (m):</label>
        <input type="number" id="comprimento" required step="any">
      `;
    } else if (tipo === "comprimento") {
      html = `
        <label for="altura">Altura (m):</label>
        <input type="number" id="altura" required step="any">
        <label for="inclinacao">Inclinação (%):</label>
        <input type="number" id="inclinacao" required step="any">
      `;
    } else if (tipo === "altura") {
      html = `
        <label for="comprimento">Comprimento (m):</label>
        <input type="number" id="comprimento" required step="any">
        <label for="inclinacao">Inclinação (%):</label>
        <input type="number" id="inclinacao" required step="any">
      `;
    }

    inputsDiv.innerHTML = html;
  }

  // Inicializa os inputs com a seleção padrão
  renderInputs();

  // Atualiza os inputs quando o tipo de cálculo é alterado
  document
    .getElementById("calculoTipo")
    .addEventListener("change", renderInputs);

  // Trata o envio do formulário
  document
    .getElementById("formCalculadora")
    .addEventListener("submit", (event) => {
      event.preventDefault();

      const tipo = document.getElementById("calculoTipo").value;
      let resultado;

      if (tipo === "inclinacao") {
        const altura = parseFloat(document.getElementById("altura").value);
        const comprimento = parseFloat(
          document.getElementById("comprimento").value
        );
        resultado = calcularInclinacao(altura, comprimento);
        document.getElementById(
          "resultado"
        ).innerHTML = `<p>Resultado: ${resultado.toFixed(2)}%</p>`;
      } else if (tipo === "comprimento") {
        const altura = parseFloat(document.getElementById("altura").value);
        const inclinacao = parseFloat(
          document.getElementById("inclinacao").value
        );
        resultado = calcularComprimento(altura, inclinacao);
        document.getElementById(
          "resultado"
        ).innerHTML = `<p>Resultado: ${resultado.toFixed(2)} m</p>`;
      } else if (tipo === "altura") {
        const comprimento = parseFloat(
          document.getElementById("comprimento").value
        );
        const inclinacao = parseFloat(
          document.getElementById("inclinacao").value
        );
        resultado = calcularAltura(comprimento, inclinacao);
        document.getElementById(
          "resultado"
        ).innerHTML = `<p>Resultado: ${resultado.toFixed(2)} m</p>`;
      }
    });

  // Galeria de renders do portfólio Vitalis
  const rendersVitalis = [
    "assets/img/portfolio/vitalis/renders/render1.jpg",
    "assets/img/portfolio/vitalis/renders/render2.jpg",
    "assets/img/portfolio/vitalis/renders/render3.jpg",
    "assets/img/portfolio/vitalis/renders/render4.jpg",
    "assets/img/portfolio/vitalis/renders/render5.jpg",
    "assets/img/portfolio/vitalis/renders/render6.jpg",
    "assets/img/portfolio/vitalis/renders/render7.jpg",
    "assets/img/portfolio/vitalis/renders/render8.jpg",
    "assets/img/portfolio/vitalis/renders/render9.jpg",
    "assets/img/portfolio/vitalis/renders/render10.jpg",
    "assets/img/portfolio/vitalis/renders/render11.jpg",
  ];

  const mainRender = document.getElementById("main-render");
  const thumbs = document.querySelectorAll(".gallery-thumbs .thumb");
  const fullscreenBtn = document.getElementById("fullscreen-btn");

  if (mainRender && thumbs.length) {
    thumbs.forEach((thumb, idx) => {
      thumb.addEventListener("click", () => {
        mainRender.src = rendersVitalis[idx];
        thumbs.forEach((t) => t.classList.remove("active"));
        thumb.classList.add("active");
      });
    });
  }

  // Botão de tela cheia
  if (fullscreenBtn && mainRender) {
    fullscreenBtn.addEventListener("click", () => {
      if (mainRender.requestFullscreen) {
        mainRender.requestFullscreen();
      } else if (mainRender.webkitRequestFullscreen) {
        mainRender.webkitRequestFullscreen();
      } else if (mainRender.msRequestFullscreen) {
        mainRender.msRequestFullscreen();
      }
    });
  }

  // Botão de tela cheia para planta
  const fullscreenPlantaBtn = document.getElementById("fullscreen-planta-btn");
  const plantaImg = document.getElementById("planta-img");
  if (fullscreenPlantaBtn && plantaImg) {
    fullscreenPlantaBtn.addEventListener("click", () => {
      if (plantaImg.requestFullscreen) {
        plantaImg.requestFullscreen();
      } else if (plantaImg.webkitRequestFullscreen) {
        plantaImg.webkitRequestFullscreen();
      } else if (plantaImg.msRequestFullscreen) {
        plantaImg.msRequestFullscreen();
      }
    });
  }
});
