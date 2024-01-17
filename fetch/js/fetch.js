let primero  = document.getElementById('row')

function buscar(){
    
var valor =  document.getElementById('valor');
fetch("https://memin.io/public/api/v2/users/search/"+valor.value, { method: "GET"})
    .then(response => {
        return response.json()
        
    }).then(data =>{
        
        primero.innerHTML = ""
        data.forEach(elementos => {
            console.log(elementos);
            let col =  document.createElement('div')
            col.classList.add("col-md-3","mt-5");
            primero.appendChild(col);
        
            let card =  document.createElement('div');
            card.classList.add("card");
            col.appendChild(card);
        
            let card_body = document.createElement('div');
            card_body.classList.add("card-body");
            card.appendChild(card_body);
        
            let p = document.createElement('h3');
            card_body.appendChild(p);
            p.innerText = elementos.name;

            let correo =  document.createElement('p');
            correo.innerText = elementos.email;
            card_body.appendChild(correo);
        
            let numero = document.createElement('p');
            numero.innerText = `id ${elementos.id}`;
            card_body.appendChild(numero);
        
            let eliminar = document.createElement('button');
            eliminar.classList.add("btn","btn-danger", );
            card_body.appendChild(eliminar);
            eliminar.innerText = "eliminar" ;
            eliminar.setAttribute("onclick",`eli(${elementos.id})`);
            
            let actualizar  = document.createElement('button');
            actualizar.classList.add("btn","btn-warning");
            card_body.appendChild(actualizar);
            actualizar.innerText =  "actualizar";
            actualizar.setAttribute("onclick",`act(${elementos.id})`);
        
        
            let mostrar = document.createElement('button');
            mostrar.classList.add("btn","btn-info");
            mostrar.innerText = "show details";
            mostrar.setAttribute("onclick",`show(${elementos.id})`);
            card_body.appendChild(mostrar);
        });
    }).catch(funciona => {
        console.log(funciona);
    })
    

}

function  eli(id){
    fetch("https://memin.io/public/api/users/"+ id, {  method: "DELETE", })
    .then(response => {  console.log(response.status); })
    .then(borrar => {
        location.href =  ""
    });
    
}

function act(id){
    let cardBody = document.querySelector(`[onclick="act(${id})"]`).parentNode;
        let formulario =  document.createElement('form'); 
        let label= document.createElement('label');
        label.innerText =  "Nombre";
    
        let input_nombre  =  document.createElement('input');
        input_nombre.setAttribute("type","text");
        input_nombre.setAttribute("id","name_"+id);
        input_nombre.setAttribute("placeholder","nuevo nombre");
    
        let label2= document.createElement('label');
        label2.innerText =  "correo";
    
        let input_correo  =  document.createElement('input');
        input_correo.setAttribute("type","email");
        input_correo.setAttribute("id","email_"+id);
        input_correo.setAttribute("placeholder","nuevo correo");
    
        let enviar  = document.createElement('button');
        enviar.classList.add("btn","btn-success");
        enviar.innerText =  "enviar datos";
        enviar.setAttribute("type","button");
    
        
        
        cardBody.appendChild(formulario);      
        formulario.appendChild(label);
        formulario.appendChild(input_nombre);
        formulario.appendChild(label2);
        formulario.appendChild(input_correo);
        formulario.appendChild(enviar)
    
        fetch("https://memin.io/public/api/users/"+id)
        .then(result => result.json())
        .then(data => {
            document.getElementById('name_'+id).value = data.name;
            document.getElementById('email_'+id).value = data.email;
        });  
        enviar.addEventListener('click', function (e) {
            console.log(e)
            let nombre = document.getElementById('name_'+id).value;
            let correo = document.getElementById('email_'+id).value;
    
            let nuevos_datos = {
                name: nombre,
                email: correo
            };
    
        fetch("https://memin.io/public/api/users/"+id, {  method: "PUT",
        headers: {
            "Content-Type": "application/json",
        }, body:JSON.stringify(nuevos_datos)})
    
        .then(response => { return response.json() })
        .then(response => {  console.log(response.status); })
        .then(actualizar =>{
            location.href = ""
        });
    });
    };
    
function show(id){
    fetch("https://memin.io/public/api/v2/users/"+id, { method: "GET"}).then(response => {
        return response.json()
    }).then(data =>{
        window.confirm(`el nombre del usuario es :${data.name} \n el correo es  :  ${data.email} \n la contraseña es :  ${data.password }`)
    })

}

function store(){

let usuario =   document.getElementById('usuario');
let correo =   document.getElementById('correo');
let contraseña =   document.getElementById('contraseña');

let guardar_user = {
    name: usuario.value,
    email: correo.value,
    password: contraseña.value
}
    fetch("https://memin.io/public/api/v2/users", { method : "POST",
    headers:{  "Content-Type": "application/json"},
    body: JSON.stringify(guardar_user)})
    .then(response => { 
        return response.json()
        .then(hola => {
            location.href = ""
        })
    })
}









