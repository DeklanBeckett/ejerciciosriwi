function iniciar(){
    let correo = document.getElementById('correo').value;
    let password = document.getElementById('password').value;
    persons = [
        {
            nombre : "",
            correo : "robinson",
            password: "1234"

        }
    ];
    persons.forEach(function(person){
        if(correo == person.correo && password == person.password){
            sessionStorage.setItem('usuario',person.nombre);
            window.location.assign('https://deklanbeckett.github.io/ejerciciosriwi/cine%20terminado/index.html');
            sessionStorage.setItem('autenticacion',1);
            
        }
    });

    console.log("hoal")
}