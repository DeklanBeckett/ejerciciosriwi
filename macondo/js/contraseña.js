function decifrar(){
    let contraseña = "01110010_01101001_01110111_01101001";
    
    let binarios = contraseña.split("_");
    

    for ( let i = 0; i<4; i++){
        contra =  String.fromCodePoint(parseInt(binarios[i],2));
        
        
    }
    document.getElementById('contraseña').innerText =  `la contraseña es : r${contra}wi `;  

    console.log(contra)
    
    

    
}
