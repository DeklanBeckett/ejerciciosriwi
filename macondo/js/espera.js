
function maletas(){
 let largo1  =  document.getElementById('largo').value;
 let ancho1 = document.getElementById('ancho').value;
 let alto1 = document.getElementById('alto').value;

 let alto = 55/alto1;
 let ancho = 20 /ancho1;
 let largo =  40 /largo1;

let  sapo = Math.min(alto,ancho,largo);

let nuevoAlto = alto1 * sapo;
let nuevoAncho = ancho1 * sapo;
let nuevoLargo = largo1 * sapo;
document.getElementById('pasar').innerHTML = ` nuevo alto : ${nuevoAlto} <br><br> nuevo ancho : ${nuevoAncho} <br><br>   nuevo largo: ${nuevoLargo} <br><br><br><br> puedo ir a medellin`
document.getElementById('pasar').classList.add("pasar")
document.getElementById('boton').innerHTML =  ` <a href="contraseña.html"><button>ir a medellin</button></a>`

}

