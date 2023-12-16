var persons = [
    {
       nombre: "Julian",
       apellidos: "Jimenex",
       correo : "julian@gmail.com"
    },
    {
       nombre: "Andres",
       apellidos: "Martinez",
       correo : "andres@gmail.com"
    },
    {
       nombre: "carmen",
       apellidos: "matias",
       correo : "carmen@gmail.com"
    }];

    function actualizar(posicion){
       let nombre = document.getElementById('nombre_' + posicion).value;
       let apellido = document.getElementById('apellido_' + posicion).value;
       let correo = document.getElementById('correo_' + posicion).value;
       
       persons[posicion].nombre = nombre;
       persons[posicion].apellidos = apellido;
       persons[posicion].correo = correo;

       
       

       
      
       if (nombre != "") {
         document.getElementById('nombre_' + posicion).classList.add('is-valid');
         document.getElementById('nombre_' + posicion).classList.remove('is-invalid');
         
 
     } else {
         document.getElementById('nombre_' + posicion).classList.add('is-invalid');
         document.getElementById('nombre_' + posicion).classList.remove('is-valid');
         
         document.getElementById('nombre_' + posicion).focus();
     }
     if (apellido !== "") {
         document.getElementById('apellido_' + posicion).classList.add('is-valid');
         document.getElementById('apellido_' + posicion).classList.remove('is-invalid');
         
     } else {
         document.getElementById('apellido_' + posicion).classList.add('is-invalid');
         document.getElementById('apellido_' + posicion).classList.remove('is-valid');
         
         document.getElementById('apellido_' + posicion).focus();
     }
     if (correo !== "") {
         document.getElementById('correo_' + posicion).classList.add('is-valid');
         document.getElementById('correo_' + posicion).classList.remove('is-invalid');
         
     } else {
         document.getElementById('correo_' + posicion).classList.add('is-invalid');
         document.getElementById('correo_' + posicion).classList.remove('is-valid');
        document.getElementById('correo_' + posicion).focus();
     }


     if (nombre !== "" && apellido !== "" && correo != ""){
      console.log(persons);
     }
     else{
      alert('todos los elementos son necesarios');
     }
     
    }
    function eliminar(posicion){
        let nombre = document.getElementById('nombre_' + posicion).innerText = "";
        let apellido = document.getElementById('apellido_' + posicion).innerHTML = "";
        let correo = document.getElementById('correo_' + posicion).innerHTML = "";
        
        persons[posicion].nombre = nombre;
        persons[posicion].apellidos = apellido;
        persons[posicion].correo = correo;
        document.getElementById('element_'+posicion).innerHTML = " "
        
        
    }

 
    console.log(persons);
