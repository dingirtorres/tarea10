document.getElementById('numerosForm').addEventListener('submit', function(event) {
    // Obtener los valores ingresados
    const num1 = Number(document.getElementById('num1').value);
    const num2 = Number(document.getElementById('num2').value);
    const num3 = Number(document.getElementById('num3').value);

    // Calcular el menor usando Math.min
    const menor = Math.min(num1, num2, num3);

    // Mostrar el resultado usando alert
    alert(`El número menor es: ${menor}`);
});