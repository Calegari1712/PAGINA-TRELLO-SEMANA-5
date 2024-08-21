function cadastrarPets(event) {
    event.preventDefault()

    const foto = document.getElementById('foto').value
    const nome = document.getElementById('nome').value
    const idade = document.getElementById('idade').value
    const descricao = document.getElementById('descricao').value
    const especie = document.getElementById('especie').value

    // VALIDAÇÃO DOS ITENS OBRIGATORIOS
    //LEGENDA
    //NESSE CASO SE FOTO FOR VAZIA PEGUE O ID FOTO E COLOQUE O TEXTO E BORDA VERMELHA.
    if (foto === "") {
        document.getElementById('foto').style.borderColor = 'red'
        document.getElementById('erro-foto').innerText = 'Foto Obrigátoria'
    }
    // SE NAO FOR VAZIO NAO COLOQUE BORDA E NEM TEXTO
    else {
        document.getElementById('foto').style.borderColor = ''
        document.getElementById('erro-foto').innerText = ''
    }

    if (nome === "") {
        document.getElementById('nome').style.borderColor = 'red'
        document.getElementById('erro-nome').innerText = 'Nome Obrigátorio'
    }

    else {
        document.getElementById('nome').style.borderColor = ''
        document.getElementById('erro-nome').innerText = ''
    }

    if (idade === "") {
        document.getElementById('idade').style.borderColor = 'red'
        document.getElementById('erro-idade').innerText = 'Idade Obrigátoria'
    }

    else {
        document.getElementById('idade').style.borderColor = ''
        document.getElementById('erro-idade').innerText = ''
    }

    if (especie === "") {
        document.getElementById('especie').style.borderColor = 'red'
        document.getElementById('erro-tipo').innerText = 'Espécie Obrigátoria'
    }

    else {
        document.getElementById('especie').style.borderColor = ''
        document.getElementById('erro-especie').innerText = ''
    }

    if (descricao === "") {
        document.getElementById('descricao').style.borderColor = 'red'
        document.getElementById('erro-descricao').innerText = 'Descrição Obrigátoria'
    }

    else {
        document.getElementById('descricao').style.borderColor = ''
        document.getElementById('erro-descricao').innerText = ''
    }

    // FINAL DA VALIDAÇÃO
    if (nome && foto && descricao && especie) {
        const pet = {
            id: Date.now(),
            foto: foto,
            nome: nome,
            idade: idade,
            descricao: descricao,
            especie: especie,

        }

        const listaNoLocalStorage = JSON.parse(localStorage.getItem("pets")) || []
        listaNoLocalStorage.push(pet)
        localStorage.setItem("pets", JSON.stringify(listaNoLocalStorage))
        console.log(pet)
    }
}
document
    .getElementById('cadastro-pet')
    .addEventListener('submit', cadastrarPets)