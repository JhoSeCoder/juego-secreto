let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `¡Felicidades! Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez, ¡Eres el #1!' : 'veces.'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        // El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', '¡Oops! El número secreto es menor. Intentalo de nuevo y veamos si puedes descifrarlo!');
        } else {
            asignarTextoElemento('p', '¡Vas por buen camino! El número es mayor. ¡No te rindas, la victoria está cerca!');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';   
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    // Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', '¡Épico! Has explorado todos los rincones numéricos. ¡Todos los números han sido revelados bajo tu sabia adivinanza!');
    } else {
         // Sí el número generado esta incluido en la lista.
         if (listaNumerosSorteados.includes(numeroGenerado)) {
         // Recursividad
             return generarNumeroSecreto();
        } else {
            // Guardar la lista para que el numero generado no vuelva a salir.
            listaNumerosSorteados.push(numeroGenerado);
            // sino no existe retornamos el valor que ya fue generado, porque no existe en la lista.
            return numeroGenerado;
        }
    }
}

// Encapsulamos los mensajes de titulo e indicar intervalo y demás como condiciones iniciales.
function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto');
    // Indicar mensaje de intervalo de números
    asignarTextoElemento('p',`Ingresa un número del 1 al ${numeroMaximo} y descubre si puedes adivinar el número secreto.`);
    // Generar el número aleatorio
    numeroSecreto = generarNumeroSecreto();
    // Inicializar el número de intentos
    intentos = 1;
}


function reiniciarJuego() {
    // Limpiar caja
    limpiarCaja();
    // Indicar mensaje de intervalo de números
    // Generar el número aleatorio
    // Inicializar el número de intentos
    condicionesIniciales();
    // Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');   
}

condicionesIniciales();