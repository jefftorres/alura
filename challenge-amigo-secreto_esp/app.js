let amigos = []

function agregarAmigo() {
    let amigo = document.getElementById('amigo');

    if (amigo.value === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }

    amigos.push(amigo.value);
    amigo.value = '';

    actualizarAmigo();
}

function actualizarAmigo() {
    let listaAmigos = document.getElementById('listaAmigos');

    listaAmigos.innerHTML = '';

    for (let amigo in amigos) {
        const nuevoLi = document.createElement('li');

        nuevoLi.innerText = amigos[amigo];
        listaAmigos.appendChild(nuevoLi);
    }

}

function sortearAmigo() {
    if (amigos.length === 0) return;

    let idx = Math.floor(Math.random() * amigos.length);
    let resultado = document.getElementById('resultado');

    resultado.innerHTML = amigos[idx];
}