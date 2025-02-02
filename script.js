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
    const tipo = document.getElementById('calculoTipo').value;
    const inputsDiv = document.getElementById('inputs');
    let html = '';
    
    if (tipo === 'inclinacao') {
      html = `
        <label for="altura">Altura (m):</label>
        <input type="number" id="altura" required step="any">
        <label for="comprimento">Comprimento (m):</label>
        <input type="number" id="comprimento" required step="any">
      `;
    } else if (tipo === 'comprimento') {
      html = `
        <label for="altura">Altura (m):</label>
        <input type="number" id="altura" required step="any">
        <label for="inclinacao">Inclinação (%):</label>
        <input type="number" id="inclinacao" required step="any">
      `;
    } else if (tipo === 'altura') {
      html = `
        <label for="comprimento">Comprimento (m):</label>
        <input type="number" id="comprimento" required step="any">
        <label for="inclinacao">Inclinação (%):</label>
        <input type="number" id="inclinacao" required step="any">
      `;
    }
    
    inputsDiv.innerHTML = html;
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    // Inicializa os inputs com a seleção padrão
    renderInputs();
    
    // Atualiza os inputs quando o tipo de cálculo é alterado
    document.getElementById('calculoTipo').addEventListener('change', renderInputs);
    
    // Trata o envio do formulário
    document.getElementById('formCalculadora').addEventListener('submit', event => {
      event.preventDefault();
      
      const tipo = document.getElementById('calculoTipo').value;
      let resultado;
      
      if (tipo === 'inclinacao') {
        const altura = parseFloat(document.getElementById('altura').value);
        const comprimento = parseFloat(document.getElementById('comprimento').value);
        resultado = calcularInclinacao(altura, comprimento);
        // Resultado em porcentagem
        document.getElementById('resultado').innerHTML = `<p>Resultado: ${resultado.toFixed(2)}%</p>`;
      } else if (tipo === 'comprimento') {
        const altura = parseFloat(document.getElementById('altura').value);
        const inclinacao = parseFloat(document.getElementById('inclinacao').value);
        resultado = calcularComprimento(altura, inclinacao);
        document.getElementById('resultado').innerHTML = `<p>Resultado: ${resultado.toFixed(2)} m</p>`;
      } else if (tipo === 'altura') {
        const comprimento = parseFloat(document.getElementById('comprimento').value);
        const inclinacao = parseFloat(document.getElementById('inclinacao').value);
        resultado = calcularAltura(comprimento, inclinacao);
        document.getElementById('resultado').innerHTML = `<p>Resultado: ${resultado.toFixed(2)} m</p>`;
      }
    });
  });
  