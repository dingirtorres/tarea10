
        document.getElementById('numerosForm').addEventListener('submit', function(event) {
            // Obtener los valores ingresados
            const num1 = Number(document.getElementById('num1').value);
            const num2 = Number(document.getElementById('num2').value);
            const num3 = Number(document.getElementById('num3').value);
            const num4 = Number(document.getElementById('num4').value);

            // Calcular el mayor usando Math.max
            const mayor = Math.max(num1, num2, num3, num4);

            // Mostrar el resultado usando alert
            alert(`El número mayor es: ${mayor}`);
        });
 