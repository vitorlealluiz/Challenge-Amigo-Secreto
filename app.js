let amigos = []; //array de amigos

function adicionarAmigo(){
    let nome = document.getElementById("amigo").value; //recebe o nome do amigo
    if(nome == ""){
        alert("Por favor, insira um nome.");
        return; //sai da função caso o campo esteja vazio
    }
    amigos.push(nome); //adiciona na lista
    exibirNomes();
    console.log(amigos);
    limparCampo(); //chama a função que limpa o campo
}

function limparCampo(){
    let inputNome = document.querySelector("input");
    inputNome.value = "";
}

function exibirNomes(){
    let lista = document.getElementById("listaAmigos"); //obtém o id da lista
    lista.innerHTML = ""; //limpa a lista existente, evita que duplique o nome de novos amigos

    for(let i = 0; i < amigos.length; i++){
        let item = document.createElement("li"); //cria o novo elemento
        item.textContent = amigos[i]; //define o que vai estar no campo (no caso, o nome)
        lista.appendChild(item) //adiciona o <li>
    }
}

function sortearAmigo(){
    if(amigos == ""){
        alert("Por favor, insira um nome.");
        return;
    }
    let numeroSorteio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[numeroSorteio];
    document.getElementById("resultado").innerHTML = `<li>${amigoSorteado}</li>`;
}