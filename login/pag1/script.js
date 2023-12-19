function iniciar(){
    let correo = document.getElementById('correo').value;
    let password = document.getElementById('password').value;
    persons = [
        {
            nombre : "deklan",
            correo : "deklanbeckett@gmail.com",
            password: "1234"
        },
        {
            nombre : "angie",
            correo : "angie202@gmail.com",
            password: "12345"
        },
        {
            nombre : "patricia",
            correo : "pato@gmail.com",
            password: "123456"
        }
    ];
    persons.forEach(function(person){
        if(correo == person.correo && password == person.password){
            sessionStorage.setItem('usuario',person.nombre);
            window.location.assign('https://deklanbeckett.github.io/ejerciciosriwi/login/pag2/index.html');
            sessionStorage.setItem('autenticacion',1);
            
        }
    });
}