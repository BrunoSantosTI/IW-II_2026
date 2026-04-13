function mudarTexto() {
    document.getElementById("texto").innerText = "O texto foi alterado com JavaScript!";
}

function mudarCor() {
    document.body.style.backgroundColor = "#add8e6";
}

let numero = 0;

function aumentar() {
    numero++;
    document.getElementById("contador").innerText = numero;
}