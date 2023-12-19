function sly(){
alert('La Casa Slytherin cuenta con miembros ambiciosos, inteligentes, muy astutos y que tienden a ser líderes fuertes. Aunque también son unos supervivientes, lo que les hace pensar antes de actuar (al contrario que los Gryffindor), pese a tener un claro desprecio por las reglas.')
}
function gry(){
    alert('La Casa de Gryffindor valora el coraje por encima de todo, pero también la osadía, el temple y la caballerosidad. Sus estudiantes son valientes, pero también muy imprudentes.')
}
function haple(){
    alert('La Casa de Hufflepuff se caracteriza por valorar la capacidad de trabajo, con estudiantes amigables y leales. Los estudiantes de esta casa son conocidos por ser trabajadores, amigables, leales y sin prejuicios.')
}
function rave(){
    alert('La Casa Ravenclaw valora el aprendizaje, la sabiduría, el ingenio, y el intelecto como elementos importantes para formar parte de su casa. Al ser magos de mucho talento, Hermione Granger estuvo a punto de ser seleccionada por Ravenclaw.')
}
let persona = {
    nombre: "",
    edad: "",
    familia: "",
    linaje: "",
    casa:  "",
    patronus : "",
    cualidades : "",

}  

let clases = {
transformaciones: "Profesor Kevin Slughorn",
herbologia: "Profesor Maria Umbridge",
pociones: "Profesor Liliana McGonagall",
encantamientos: "Profesora Jackie",
defensaContraLasArtesOscuras: "Profesor Robinson Snape ",
animalesMagicos: "Profesor David Filch",
historiaDeMagia: "Profesor Ronald Sprout"
}



console.log(persona)

function elegir(){
    let valores = document.getElementById('valoress').value;
    var linaje = document.getElementById('linaje').value;
    if (valores == "1" && (linaje == "mestizo" || linaje == "muggle" || linaje == "sangre pura") ){
    alert('gryfindor');
    persona.casa = "gryfindor";
    persona.cualidades = ["Valor", "fuerza", "audacia"];
    persona.linaje =  linaje;   
    document.getElementById('sly').classList.add('none');
    document.getElementById('huple').classList.add('none');
    document.getElementById('raven').classList.add('none');
    document.getElementById('gry').classList.add('aling');
    document.getElementById('gry').innerHTML += ` <a href="profesores.html"><button>ir a ver profesores</button></a>`;
    document.getElementById('elegir').classList.add('none');
    document.getElementById('valoress').classList.add('none');
    document.getElementById('linaje').classList.add('none');
} 

    else if (valores == "2" &&  (linaje  == "mestizo"  || linaje == "muggle")){
    alert ('hufflepuf');
    persona.casa = "hufflepuf";
    persona.cualidades = ["Justicia", "Lealtad", "Paciencia"];
    persona.linaje =  linaje;   
    document.getElementById('sly').classList.add('none');
    document.getElementById('huple').classList.add('aling');
    document.getElementById('raven').classList.add('none');
    document.getElementById('gry').classList.add('none');
    document.getElementById('huple').innerHTML += ` <a href="profesores.html"><button>ir a ver profesores</button></a>`;
    document.getElementById('elegir').classList.add('none');
    document.getElementById('valoress').classList.add('none');
    document.getElementById('linaje').classList.add('none');
    }
    
    else if (valores == "3" &&  (linaje == "mestizo" || linaje == "muggle" || linaje == "sangre pura") ){
    alert ('Ravenclaw');
    persona.casa = "ravenclaw";
    persona.linaje =  linaje;
    persona.cualidades = ["Creatividad", "Erudición", "Inteligencia"];   
    document.getElementById('sly').classList.add('none');
    document.getElementById('huple').classList.add('none');
    document.getElementById('raven').classList.add('aling');
    document.getElementById('gry').classList.add('none');
    document.getElementById('raven').innerHTML += ` <a href="profesores.html"><button>ir a ver profesores</button></a>`;
    document.getElementById('elegir').classList.add('none');
    document.getElementById('valoress').classList.add('none');
    document.getElementById('linaje').classList.add('none');
    }

    else if (valores == "4" &&  linaje =="sangre pura"){
    alert ('Slytherin');
    persona.casa = "slytherin";
    persona.linaje =  linaje;
    persona.cualidades = ["Ambición", "Determinación", "Astucia"];   
    document.getElementById('sly').classList.add('aling');
    document.getElementById('huple').classList.add('none');
    document.getElementById('raven').classList.add('none');
    document.getElementById('gry').classList.add('none');
    document.getElementById('sly').innerHTML += ` <a href="profesores.html"><button>ir a ver profesores</button></a>`;
    document.getElementById('elegir').classList.add('none');
    document.getElementById('valoress').classList.add('none');
    document.getElementById('linaje').classList.add('none');
    }
    console.log(persona)
    
}
    

 
 

