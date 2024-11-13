const urlParams = new URLSearchParams(window.location.search);
const limite = parseInt(urlParams.get('limite'));
const estados = {
    frio: '🥶 Frío 🥶',
    tibio: '🫢 Tibio  🫢',
    caliente: '🤑 Caliente  🤑',
    gana: '🤩 ¡Ganaste!  🤩'
}
let rangos = [[30, 'caliente'], [100, 'tibio'], [200, 'frio']];

if (limite === 100) {
    rangos = [[10, 'caliente'], [30, 'tibio'], [50, 'frio']];
} else if (limite === 500) {
    rangos = [[10, 'caliente'], [50, 'tibio'], [150, 'frio']];
}

const numeros = document.querySelectorAll('.numeros button');
const elementoNumero = document.querySelector('#numero');
const intentarBtn = document.querySelector('#intentar');
const elementoContador = document.querySelector('#contador span');
const elementoEstado = document.querySelector('#estado');

let numeroActual = parseInt(elementoNumero.innerText);
const numeroObjetivo = Math.floor(Math.random() * limite) + 1;
let contador = 0;

numeros.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (numeroActual === 0 || elementoNumero.innerText.length === 3) {
            elementoNumero.innerText = '';
        }

        elementoNumero.innerText += btn.innerText;
        numeroActual = parseInt(elementoNumero.innerText);
    })
})

const isBetween = (value, lower, upper) => value > lower && value < upper;
console.log(numeroObjetivo)

intentarBtn.addEventListener('click', () => {
    if (numeroActual === 0) return;

    if (numeroActual >= limite) {
        alert('El número supera el límite seleccionado: ' + limite);
        return;
    }

    contador++;

    if (numeroActual === numeroObjetivo) {
        elementoEstado.innerText = estados.gana;
        intentarBtn.setAttribute('disabled', true)

        playConfetti();
        setTimeout(() => saveScore(contador), 3200)
        return
    }

    for (const [valor, estado] of rangos) {
        const upper = numeroObjetivo + valor;
        const lower = (numeroObjetivo - valor) < 0 ? 1 : numeroObjetivo - valor;

        if (isBetween(numeroActual, lower, upper)) {
            elementoEstado.innerText = estados[estado];
            break;
        } else {
            elementoEstado.innerText = estados.frio;
        }
    }

    elementoContador.innerHTML = contador;
    elementoNumero.innerText = numeroActual = 0;
})


const playConfetti = () => {
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            party.confetti(elementoEstado, {
                count: party.variation.range(20, 40)
            });
        }, i * 1000)
    }
}

const saveScore = (puntaje) => {
    let nombre = window.prompt("Guarda tu puntaje con tu nombre:", "Jugador 1")
    
    if (nombre) {
        puntajesStorage.guardar({ nombre: nombre || 'Jugador 1' , puntaje })
    } else {
        alert('Puntaje no guardado')
    }
}