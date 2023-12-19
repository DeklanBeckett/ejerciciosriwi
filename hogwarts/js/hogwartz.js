let persona = {
    nombre: "deklan",
    edad: 21,
    familia: "lestrange",
    linaje: "sangre pura",
    casa:  "",
    patronus : "conejo",
    cualidades : ["Ambición", "Determinación", "Astucia" ],

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


for (let clave in persona){
console.log(persona[clave]);
if (String(persona.cualidades) == ["Ambición", "Determinación", "Astucia"] && String(persona.linaje) == "sangre pura"){
    persona.casa = "Slytherin";

}



}
console.log(persona)
