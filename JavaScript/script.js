// Formulario de la calculadora (creado dinámicamente)
const calculatorForm = document.getElementById('calculator-form');
calculatorForm.innerHTML = `
    <label for="name">Nombre:</label><br>
    <input type="text" id="name"><br>

    <label for="weight">Peso (kg):</label><br>
    <input type="number" id="weight"><br>

    <label for="height">Talla (cm):</label><br>
    <input type="number" id="height"><br>

    <label for="age">Edad (años):</label><br>
    <input type="number" id="age"><br>

    <label for="activity">Nivel de Actividad:</label><br>
    <select id="activity">
        <option value="1.2">Sedentario</option>
        <option value="1.375">Ligera</option>
        <option value="1.55">Moderada</option>
        <option value="1.725">Alta</option>
        <option value="1.9">Muy Alta</option>
    </select><br>

    <button id="calculate-button">Calcular</button>
`;

const resultsDiv = document.getElementById('calculator-results');

document.getElementById('calculate-button').addEventListener('click', calculateNeeds);

function calculateNeeds() {
    // ... (Validación de entrada y cálculos – necesita completarse) ...
    //  Usa fórmulas de TMB más precisas, maneja casos límite, etc.
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const age = parseInt(document.getElementById('age').value);
    const activity = parseFloat(document.getElementById('activity').value);

    // Espacio reservado - Reemplaza con un cálculo preciso de TMB
    let bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    let dailyCalorieNeeds = Math.round(bmr * activity);

    resultsDiv.innerHTML = <h3>Calorías diarias estimadas: ${dailyCalorieNeeds}</h3>;

    // Agrega recomendaciones dietéticas más sofisticadas y manejo de errores aquí

}


// Plan de Ejercicios (reemplaza con un plan real)
const exercisePlanDiv = document.getElementById('exercise-plan');
exercisePlanDiv.innerHTML = `
    <p>Plan de ejercicios (ejemplo):</p>
    <ul>
        <li>Lunes: Cardio 30 min</li>
        <li>Martes: Pesas (piernas)</li>
        <li>Miércoles: Descanso</li>
        <li>Jueves: Cardio 30 min</li>
        <li>Viernes: Pesas (brazos)</li>
        <li>Sábado: Descanso o actividad ligera</li>
        <li>Domingo: Descanso o actividad ligera</li>
    </ul>
`;