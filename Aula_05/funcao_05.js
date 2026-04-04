let celsius = parseFloat(prompt("Digite uma temperatura em graus Celsius:"));
let fahrenheit = 0;

celsiusParaFahrenheit(celsius);

function celsiusParaFahrenheit(celsius) {
    fahrenheit = (celsius * 9/5) + 32;
    alert(fahrenheit);
}