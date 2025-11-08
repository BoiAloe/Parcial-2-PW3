//funciones de las operaciones
function sumarValores() {
  const n1 = parseFloat(document.getElementById("num1").value);
  const n2 = parseFloat(document.getElementById("num2").value);
  const n3 = parseFloat(document.getElementById("num3").value);
  const resultado = document.getElementById("resultado");

  if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
    resultado.textContent = "Ingrese los tres números correctamente.";
    return;
  }
  resultado.textContent = `La suma de los valores constantes es: ${n1 + n2 + n3}`;
}

function calcularCuadrado() {
  const numero = parseFloat(document.getElementById("numero").value);
  const resultado = document.getElementById("resultado");

  if (isNaN(numero)) {
    resultado.textContent = "Ingrese un número válido.";
    return;
  }
  resultado.textContent = `El cuadrado de ${numero} es: ${numero ** 2}`;
}

function calcularPromedio() {
  const nombre = document.getElementById("nombre").value.trim();
  const n1 = parseFloat(document.getElementById("nota1").value);
  const n2 = parseFloat(document.getElementById("nota2").value);
  const n3 = parseFloat(document.getElementById("nota3").value);
  const resultado = document.getElementById("resultado");

  if (!nombre || isNaN(n1) || isNaN(n2) || isNaN(n3)) {
    resultado.textContent = "Ingrese el nombre y las tres calificaciones.";
    return;
  }
  const promedio = ((n1 + n2 + n3) / 3).toFixed(2);
  resultado.textContent = `El promedio de ${nombre} es: ${promedio} puntos.`;
}

function convertirUnidades() {
  const metros = parseFloat(document.getElementById("metros").value);
  const resultado = document.getElementById("resultado");

  if (isNaN(metros)) {
    resultado.textContent = "Ingrese un valor válido en metros.";
    return;
  }

  const cm = metros * 100;
  const km = metros / 1000;
  resultado.textContent = `${metros} metros equivalen a ${cm} centímetros y ${km} kilómetros.`;
}


function compararValores() {
  const v1 = parseFloat(document.getElementById("valor1").value);
  const v2 = parseFloat(document.getElementById("valor2").value);
  const resultado = document.getElementById("resultado");

  if (isNaN(v1) || isNaN(v2)) {
    resultado.textContent = "Ingrese ambos valores.";
    return;
  }
  if (v1 === v2) {
    resultado.textContent = "No pueden ser iguales.";
    return;
  }
  const mayor = v1 > v2 ? v1 : v2;
  const menor = v1 < v2 ? v1 : v2;
  const diferencia = Math.abs(v1 - v2);
  resultado.textContent = `El número mayor es ${mayor}, el menor es ${menor}, y su diferencia es ${diferencia}.`;
}
