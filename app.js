// Array para almacenar los nombres de los amigos
let amigos = [];
// Obtener el botón de reiniciar juego
const botonReiniciar = document.getElementById("boton__reiniciar");

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const nombreInput = document.getElementById("nombreAmigo");
    const nombreAmigo = nombreInput.value.trim().toUpperCase();

    // Validaciones
    if (!nombreAmigo) {
        alert("¡Ingresa un nombre!");
        return;
    }
    if (!/^[a-zA-Z\s]+$/.test(nombreAmigo)) {
        alert("¡Nombre inválido! Solo letras y espacios.");
        nombreInput.value = "";
        return;
    }
    if (nombreAmigo.length < 3) {
        alert("¡Nombre muy corto! Debe tener al menos 3 caracteres.");
        nombreInput.value = "";
        return;
    }
    if (amigos.includes(nombreAmigo)) {
        alert("¡Ese amigo ya está en la lista!");
        nombreInput.value = "";
        return;
    }

    amigos.push(nombreAmigo);
    nombreInput.value = "";
    mostrarAmigos();

    if (amigos.length === 1) {
        document.getElementById("tituloListaAmigos").classList.remove("ocultar");
         // Activar el botón de reiniciar juego
        botonReiniciar.disabled = false;
        // Cambiar el color del botón a su estado activo
        botonReiniciar.style.backgroundColor = ""; // Restablecer el color original
    }
    
    
}

// Función para mostrar la lista de amigos en la página
function mostrarAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = amigos.map(amigo => `<li>${amigo}</li>`).join("");
}

// Función para realizar el sorteo del amigo secreto
function sortearAmigos() {
    if (amigos.length < 2) {
        alert("¡Se necesitan al menos 2 amigos para el sorteo!");
        return;
    }

    const indiceGanador = Math.floor(Math.random() * amigos.length);
    const ganador = amigos[indiceGanador];

    document.getElementById("resultado").textContent = ganador;

    const tituloResultado = document.getElementById("tituloResultado");
    if (tituloResultado.classList.contains("ocultar")) {
        tituloResultado.classList.remove("ocultar");
    }
}

// Función para reiniciar el juego y limpiar la lista y el resultado
function reiniciarJuego() {
    amigos = [];
    mostrarAmigos();
    document.getElementById("resultado").textContent = "";
    document.getElementById("tituloListaAmigos").classList.add("ocultar");
    document.getElementById("tituloResultado").classList.add("ocultar");
    // Desactivar el botón de reiniciar juego
    botonReiniciar.disabled = true;
}
// Desactivar el botón de reiniciar juego al cargar la página
window.onload = () => {
    botonReiniciar.disabled = true;

};