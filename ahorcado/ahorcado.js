const texto = ["coders", "programacion", "codificacion", "creatividad"];
const aleatorio = Math.floor(Math.random() * texto.length);
var palabra = texto[aleatorio];
const arreglo = palabra.split("");
let usuario = new Array(arreglo.length).fill("_");
let repetidos = [];
let vidas = 7;




function comparar(letra) {
    for (let i = 0; i < arreglo.length; i++) {
        if (letra == arreglo[i]) {
            usuario[i] = letra;
        }
    }
}

function actualizarInterfaz() {
    document.getElementById('letra2').innerText = usuario.join(" ");
    document.getElementById('vidas').innerText = vidas;
}

function enviar() {
    let letra = document.getElementById('letra').value.toLowerCase();

    if (repetidos.includes(letra)) {
        alert("Ya has ingresado esa letra. Intenta con otra.");
        return;
    }

    repetidos.push(letra);

    if (arreglo.includes(letra)) {
        comparar(letra);
        actualizarInterfaz();

        if (arreglo.join("") == usuario.join("")) {
            alert("¡Has ganado!");
        }
    } else {
        vidas -= 1;
        actualizarInterfaz();
        alert("Letra equivocada. Vidas restantes: " + vidas);

        if (vidas === 0) {
            alert("¡Has perdido! La palabra era: " + palabra);
        }
    }
}


actualizarInterfaz();