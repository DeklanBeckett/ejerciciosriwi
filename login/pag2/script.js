let nombre = sessionStorage.getItem('usuario')
let autenticacion = sessionStorage.getItem('autenticacion')

if(autenticacion != 1){
    window.location.assign('file:///C:/Users/juand/OneDrive/Escritorio/portafolio/login/pag1/index.html');
}

function salir(){
    window.location.assign('file:///C:/Users/juand/OneDrive/Escritorio/portafolio/login/pag1/index.html');
    autenticacion = 0;
    sessionStorage.setItem('autenticacion',0);
}