var allPersons = [];

function guardarPersona() {
    let formNombre = document.getElementById('nombres').value;
    let formApellido = document.getElementById('apellidos').value;
    let formCorreo = document.getElementById('correo').value;

    let persona = {
        nombre: formNombre,
        apellido: formApellido,
        correo: formCorreo
    }

    allPersons.push(persona);
    console.log(allPersons);

    if (formNombre !== "" && formApellido !== "" && formCorreo !== "") {
        document.getElementById('nuevo').innerHTML += `<tr><td>${formNombre}</td><td>${formApellido}</td><td>${formCorreo}</td><td><a href="" class="btn btn-danger btn-sm">Eliminar</a></td></tr>`;
    }
    else{
        document.getElementById('devolver').innerHTML = "todos los elementos son necesearios";
    }
    
    document.getElementById('resetear').reset();

    if (formNombre != "") {
        document.getElementById('nombres').classList.add('is-valid');
        document.getElementById('nombres').classList.remove('is-invalid');

    } else {
        document.getElementById('nombres').classList.add('is-invalid');
        document.getElementById('nombres').classList.remove('is-valid');
        document.getElementById('elementos').innerHTML = "Faltan elementos";
    }
    if (formApellido !== "") {
        document.getElementById('apellidos').classList.add('is-valid');
        document.getElementById('apellidos').classList.remove('is-invalid');
        
    } else {
        document.getElementById('apellidos').classList.add('is-invalid');
        document.getElementById('apellidos').classList.remove('is-valid');
        document.getElementById('elementos2').innerHTML = "Faltan elementos";
    }
    if (formCorreo !== "") {
        document.getElementById('correo').classList.add('is-valid');
        document.getElementById('correo').classList.remove('is-invalid');
        
    } else {
        document.getElementById('correo').classList.add('is-invalid');
        document.getElementById('correo').classList.remove('is-valid');
        document.getElementById('elementos3').innerHTML = "Faltan elementos";
    }

    
}




