document.getElementById('calcular-boton').addEventListener('click', calcular);

function calcular() {
    const nombre = document.getElementById('nombre').value;
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const edad = parseInt(document.getElementById('edad').value);
    const nivelActividad = parseFloat(document.getElementById('actividad').value);
    const genero = document.querySelector('input[name="genero"]:checked').value;
    const resultadosDiv = document.getElementById('resultados');

    // Validación básica de entrada
    if (isNaN(peso) || isNaN(altura) || isNaN(edad) || peso <= 0 || altura <= 0 || edad <= 0 || nombre.trim() === "") {
        resultadosDiv.innerHTML = "<p style='color:red;'>Por favor, introduce valores válidos para todos los campos.</p>";
        return;
    }

    // Ecuación de Mifflin-St Jeor
    let tmb;
    if (genero === "hombre") {
        tmb = (10 * peso) + (6.25 * altura) - (5 * edad) + 5;
    } else {
        tmb = (10 * peso) + (6.25 * altura) - (5 * edad) - 161;
    }

    let necesidadesCaloricasDiarias = Math.round(tmb * nivelActividad);

    // Mostrar resultados
    resultadosDiv.innerHTML = `
        <h2>Estimaciones para ${nombre}:</h2>
        <p>Necesidades calóricas diarias (estimadas): ${necesidadesCaloricasDiarias} calorías</p>
        <p><strong>Nota:</strong> Esta es una estimación simplificada. Para un plan nutricional personalizado, consulta a un profesional.</p>
    `;
}