document.getElementById('palindromoForm').addEventListener('submit', function (event) {
    event.preventDefault();

    let palabra = document.getElementById("text-input").value;

    // Verificar si el input está vacío
    if (palabra === "") {
        alert("Por favor, ingresa una palabra o frase."); // Mostrar alerta si el campo está vacío
        return; // Salir de la función si no hay texto ingresado
    }

    // Verificar si la palabra es un palíndromo
    let resultado;
    if (esPalindromo(palabra)) {
        resultado = `"${palabra}" es un palíndromo`;
    } else {
        resultado = `"${palabra}" no es un palíndromo.`;
    }

    // Escribir la respuesta en el HTML
    document.getElementById('result').textContent = resultado;
});

function esPalindromo(palabra) {
    // Convertir la palabra a minúsculas para evitar problemas con mayúsculas/minúsculas
    palabra = palabra.toLowerCase();
    // Eliminar todos los caracteres no alfabéticos (espacios, puntuación, etc.)
    palabra = palabra.replace(/[^a-z0-9]/g, '');
    // Invertir la palabra
    let palabraInvertida = palabra.split('').reverse().join('');
    // Comparar la palabra original con la palabra invertida
    return palabra === palabraInvertida;
}



