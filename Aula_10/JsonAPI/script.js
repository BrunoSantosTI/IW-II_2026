function Animal() {
    let teste = document.getElementById("teste");

    // Array com os animais
    let animais = ["cachorro", "gato", "urso", "raposa", "pato"];

    // Sorteia um número de 0 até 4
    let numero = Math.floor(Math.random() * animais.length);

    // Pega o animal sorteado
    let animal = animais[numero];

    // Elementos da página
    let imagem = document.getElementById("imagemAnimal");
    let nome = document.getElementById("nomeAnimal");

    // Garantias e fallback visuais para depuração
    imagem.alt = "Imagem do animal";
    imagem.onerror = function() {
        console.log('Erro ao carregar a imagem, aplicando fallback. src=', this.src);
        this.src = "https://via.placeholder.com/200x300?text=Imagem+indisponivel";
    };

    // Elemento de mensagem de erro (cria se não existir)
    let mensagem = document.getElementById('mensagemErro');
    if (!mensagem) {
        mensagem = document.createElement('p');
        mensagem.id = 'mensagemErro';
        mensagem.style.color = '#b00020';
        mensagem.style.fontWeight = 'bold';
        mensagem.style.display = 'none';
        imagem.parentNode.insertBefore(mensagem, imagem.nextSibling);
    }

    function showImage() {
        mensagem.style.display = 'none';
        imagem.style.display = '';
    }

    function showErrorMessage(text) {
        imagem.style.display = 'none';
        mensagem.innerText = text;
        mensagem.style.display = '';
    }

    // Mostra o nome do animal
    nome.innerText = animal.toUpperCase();
    // Garantir que a imagem esteja visível por padrão (os outros animais usarão a img)
    showImage();

    // Cachorro
    if (animal == "cachorro") {

        fetch("https://dog.ceo/api/breeds/image/random")
            .then(response => response.json())
            .then(data => {
                imagem.src = data.message;
            });

    }

    // Gato
    if (animal == "gato") {

        fetch("https://api.thecatapi.com/v1/images/search")
            .then(response => response.json())
            .then(data => {
                imagem.src = data[0].url;
            });

    }

    // Urso
    if (animal == "urso") {

        let numeroRandomico = Math.floor(Math.random() * 100);

        imagem.src = "https://placebear.com/200/300?" + numeroRandomico;

    }

    // Raposa
    if (animal == "raposa") {

        fetch("https://randomfox.ca/floof/")
            .then(response => response.json())
            .then(data => {
                imagem.src = data.image;
            });

    }

    // Pato: não trocar a imagem — mostrar mensagem de erro no lugar da imagem
    if (animal == "pato") {

        fetch("https://random-d.uk/api/v2/random")

        .then(response => response.json())
        .then(data => {
            
            imagem.src = data.url;
            teste.innerText = data.url;
        }
        )
    }


}