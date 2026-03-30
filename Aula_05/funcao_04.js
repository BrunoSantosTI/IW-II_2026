let num1 = parseFloat(prompt("Digite o primeiro valor:"));
let num2 = parseFloat(prompt("Digite o segundo valor:"));
let num3 = parseFloat(prompt("Digite o terceiro valor:"));
let num4 = parseFloat(prompt("Digite o quarto valor:"));

let media = 0;

funcaoMedia(num1, num2, num3, num4);

function funcaoMedia(num1, num2, num3, num4) {
    media = (num1 + num2 + num3 + num4)/4;
    alert ("A média é: " + media);
}