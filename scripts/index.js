let numeroSecreto;
let intentos = 0;

function iniciarJuego() {
    const limiteInferior = parseInt(document.getElementById("limiteInferior").value);
    const limiteSuperior = parseInt(document.getElementById("limiteSuperior").value);

    if (limiteInferior >= limiteSuperior) {
        alert("El límite inferior debe ser menor que el límite superior.");
        return;
    }

    numeroSecreto = Math.floor(Math.random() * (limiteSuperior - limiteInferior + 1)) + limiteInferior;
    intentos = 0;

    document.getElementById("rango").textContent = `${limiteInferior} y ${limiteSuperior}`;
    document.getElementById("juego").style.display = "block";
    document.getElementById("result").textContent = "";
}

function hacerAdivinanza() {
    const adivinanza = parseInt(document.getElementById("adivinanza").value);
    intentos++;

    if (adivinanza < numeroSecreto) {
        document.getElementById("result").textContent = "🤑CAlIENTE🤑. Intenta de nuevo.";
    } else if (adivinanza > numeroSecreto) {
        document.getElementById("result").textContent = "🥶FRIO🥶. Intenta de nuevo.";
    } else {
        document.getElementById("result").textContent = `🤩¡Ganaste!🤩 Has adivinado el número ${numeroSecreto} en ${intentos} intentos.`;
    }
}