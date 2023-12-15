
function calculadora(){
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let operaciones = document.getElementById('operacion').value;
    

    if (operaciones == 'suma') {
        console.log("suma");
        var resultado = parseInt(num1)+ parseInt(num2);
        document.getElementById('resultado').innerHTML = `${operaciones}  ${num1}   +  ${num2} = ${resultado} `
        
    }
    else if (operaciones == 'resta') {
        console.log(' resta');
        console.log(num1 - num2);
       
         resultado = num1 - num2;
         document.getElementById('resultado').innerHTML = `${operaciones}  ${num1} -  ${num2} = ${resultado} `
        

    }
    else if (operaciones == 'multi') {
        console.log(' multiplicacion');
        console.log(num1 * num2);
       
         resultado = num1 * num2;
         document.getElementById('resultado').innerHTML = `${operaciones}  ${num1} * ${num2} = ${resultado} `
        

    }
    else if (operaciones == 'divi') {
        console.log('division');
        console.log(num1 / num2);
      
         resultado = num1 / num2;
         document.getElementById('resultado').innerHTML = `${operaciones}  ${num1} / ${num2} = ${resultado} `
        

    }
    


    
    if (operaciones != ""){
        document.getElementById('operacion').classList.add('is-valid');
        document.getElementById('operacion').classList.remove('is-invalid');
        
    }
    else {
        document.getElementById('operacion').classList.add('is-invalid');
        document.getElementById('operacion').classList.remove('is-valid');
    }

    

    if (num1 != ""){
        document.getElementById('num1').classList.add('is-valid');
        document.getElementById('num1').classList.remove('is-invalid');
    }
    else{
        document.getElementById('num1').classList.add('is-invalid');
        document.getElementById('num1').classList.remove('is-valid');
    }
    
    if (num2 != ""){
        document.getElementById('num2').classList.add('is-valid');
        document.getElementById('num2').classList.remove('is-invalid');
    }
    else{
        document.getElementById('num2').classList.add('is-invalid');
        document.getElementById('num2').classList.remove('is-valid');
    }


   

}