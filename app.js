// Array para almacenar los nombres de amigos
let amigos = [];

// Función para agregar amigos
function agregarAmigo() {
    const amigoInput = document.getElementById('amigo');
    const amigoNombre = amigoInput.value.trim();

    // Solo mostrar alerta si el campo está vacío
    if (amigoNombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    // Agregar el nombre al array y limpiar el campo de entrada
    amigos.push(amigoNombre);
    amigoInput.value = ""; // Limpiar el campo de entrada
    actualizarListaAmigos(); // Actualizar la lista de amigos
}

// Función para actualizar la lista de amigos en la interfaz
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ""; // Limpiar la lista actual

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Función para sortear un amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSeleccionado = amigos[indiceAleatorio];
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `El amigo secreto es: <strong>${amigoSeleccionado}</strong>`;
}

// Asignar eventos a los botones
document.querySelector('.button-add').addEventListener('click', agregarAmigo);
document.querySelector('.button-draw').addEventListener('click', sortearAmigo);

// También puedes permitir que el usuario presione "Enter" para añadir un amigo
document.getElementById('amigo').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        agregarAmigo();
    }
});