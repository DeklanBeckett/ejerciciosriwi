let nombre = sessionStorage.getItem('usuario')
let autenticacion = sessionStorage.getItem('autenticacion')

if(autenticacion != 1){
    window.location.assign('https://deklanbeckett.github.io/ejerciciosriwi/login/pag1/index.html');
}

function salir(){
    window.location.assign('https://deklanbeckett.github.io/ejerciciosriwi/login/pag1/index.html');
    autenticacion = 0;
    sessionStorage.setItem('autenticacion',0);
}