document.getElementById('imc-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede a página de recarregar

    // Pega os valores digitados pelo usuário
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    // Validação básica de segurança
    if (!weight || !height || height <= 0) return;

    // Cálculo do IMC
    const imc = (weight / (height * height)).toFixed(1);

    // Elementos do DOM que vamos modificar
    const resultContainer = document.getElementById('result-container');
    const imcNumber = document.getElementById('imc-number');
    const imcStatus = document.getElementById('imc-status');
    const imcDescription = document.getElementById('imc-description');

    // Limpa classes anteriores de cor para não acumular bugs visual
    resultContainer.classList.remove('weight-under', 'weight-normal', 'weight-over', 'weight-obese');

    let status = '';
    let description = '';
    let colorClass = '';

    // Lógica das faixas de IMC
    if (imc < 18.5) {
        status = 'Abaixo do peso';
        description = 'Atenção! Seu índice está abaixo do recomendado. É importante buscar a orientação de um nutricionista.';
        colorClass = 'weight-under';
    } else if (imc >= 18.5 && imc <= 24.9) {
        status = 'Peso normal';
        description = 'Excelente! Você está no peso ideal para a sua altura. Mantenha seus hábitos saudáveis.';
        colorClass = 'weight-normal';
    } else if (imc >= 25 && imc <= 29.9) {
        status = 'Sobrepeso';
        description = 'Indica uma linha de alerta. Pequenas mudanças na alimentação e atividades físicas podem ajudar bastante.';
        colorClass = 'weight-over';
    } else {
        status = 'Obesidade';
        description = 'Sinal de alerta aceso. Cuidar da saúde deve ser sua prioridade agora. Recomendamos consultar um profissional.';
        colorClass = 'weight-obese';
    }

    // Injeta os dados calculados no HTML
    imcNumber.textContent = imc;
    imcStatus.textContent = status;
    imcDescription.textContent = description;

    // Aplica a classe de cor correspondente e exibe o container de resultado
    resultContainer.classList.add(colorClass);
    resultContainer.classList.remove('hidden');
});