let num = parseInt(prompt("Digite um número para saber se ele é par ou ímpar: "));

funcaoPar(num);

function funcaoPar(num) {
    if (num % 2 == 0) {
        alert ("O seu número é par!");
        return true;
    } else {
        alert ("O seu número é ímpar!")
        return false;
    }
}