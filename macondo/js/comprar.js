var salario = 2500000;
function comprar(){

let producto =  document.getElementById('seleccionar').value;
console.log(producto);

if (producto == '1'){
    salario1 = salario -15000;
    localStorage.setItem("salario",salario1)
    document.getElementById('consecuencia').innerHTML   =    `<div class="gorila"> por comer esas almojabanas me siento mal, creo que es hora de ir al baño.  <img src="https://media.tenor.com/54gCcqkSV8cAAAAC/monkey-shocked.gif" alt=""> SALDO ACTUAL:${salario1}</div> <a href="espera.html"><button>siguiente</button></a> `
}
else if(producto =='2'){
    salario1 = salario -23000;
    localStorage.setItem("salario",salario1)
    document.getElementById('consecuencia').innerHTML =  `<div class="gorila"> estaba delicioso ese subway quedé lleno y feliz .  <img src="https://media.tenor.com/KMxrZ-A6ev4AAAAC/nice-smack.gif" alt=""> SALDO ACTUAL:${salario1}</div> <a href="espera.html"><button>siguiente</button></a>`
}

else {
    document.getElementById('consecuencia').innerHTML =  `<div class="gorila"> todo esta muy caro mejor esperaré a llegar a medallo .  <img src="https://media.tenor.com/_hiznwNWUj8AAAAd/lagrimas-depre.gif" alt=""> SALDO ACTUAL:${salario1}</div> <a href="espera.html"><button>siguiente</button></a>`
}
    
}