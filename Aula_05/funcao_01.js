let a = parseFloat(prompt("Digite um valor x: "));
let b = parseFloat(prompt("Digite um valor y: "));

maiorNumero(a, b);

function maiorNumero(a, b) {
    if (a > b) {
        alert ("O valor " + a + " é maior");
    } else {
        alert ("O valor " + b + " é maior");
    }
}    