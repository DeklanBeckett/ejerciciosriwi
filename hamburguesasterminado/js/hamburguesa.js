function claro(){
    let claro = document.getElementById('clarito').value;
    if (claro  == "2"){
        document.getElementById('color').classList.add('dark')
        localStorage.setItem('tema','2')
        claro = localStorage.getItem('tema')
        console.log(claro)
    }
    else{
        document.getElementById('color').classList.remove('dark');
        localStorage.setItem('tema','1')
        claro = localStorage.getItem('tema')
        console.log(claro)
    }   
}
function idioma(){
let language = document.getElementById('idioma').value;
console.log(language)
if (language =="2"){
    document.getElementById('div1').innerHTML =  `<div class="card-body " id="div1">
    <p>$8.900</p>
    <h4>BBQ Crunch</h4>
    <p>1 BBQ Crunch Sandwich (1 breaded chicken fillet</p> 
    <button class="btn btn-danger w-100">buy</button>
    </div>`
    document.getElementById('div2').innerHTML = `<div class="card-body" id="div2">
    <p>$ 15.900</p>
    <h4>Kentucky Sandwich</h4>
    <p>1 Kentucky burger / Sandwich (1 breaded chicken breast fillet, pickles, premium mayonnaise and butter)</p>
    <button class="btn btn-danger w-100">buy</button>
    </div>`
    document.getElementById('div3').innerHTML = `<div class="card-body" id="div3">
    <p>$ 15.900</p>
    <h4>COMBO BBQ CRUNCH</h4>
    <p>1 BBQ Crunch Sandwich (1 Breaded Chicken Fillet) + 1 Small Potato + 1 PET Soda 400ml</p>
    <button class="btn btn-danger w-100">buy</button>
    </div>`
    document.getElementById('div4').innerHTML = `<div class="card-body" id="div4">
    <p>$ 16.900</p>
    <h4>KENTUCKY CORONEL SANDWICH</h4>
    <p >1 Kentucky Colonel Burger / Sandwich (1 Breaded Chicken Breast Filet, Coleslaw Salad, BBQ and Butter)</p>
    <button class="btn btn-danger w-100">buy</button>
    </div>`
    document.getElementById('div5').innerHTML = `<div class="card-body" id="div5">
    <p>$ 21.900</p>
    <h4>COMBO KENTUCKY SANDWICH</h4>
    <p>1 Kentucky hamburger/Sandwich (1 breaded chicken breast fillet, pickles, premium mayonnaise and butter) + 1 Small Potato + 1 PET Soda 400ml
    </p>
    <button class="btn btn-danger w-100">buy</button>
    </div>`
    document.getElementById('div6').innerHTML = `<div class="card-body" id="div6">
    <p>$ 22.900</p>
    <h4>COMBO KENTUCKY CORONEL SANDWICH</h4>
    <p>1 Kentucky Colonel burger / Sandwich (1 breaded chicken breast fillet, Coleslaw Salad, BBQ and butter) + 1 Small Potato + 1 PET Soda 400ml</p>
    <button class="btn btn-danger w-100">buy</button>
    </div>`
    document.getElementById('div7').innerHTML = `<div class="card-body" id="div7">
    <p>$ 23.900</p>
    <h4>SANDWICH CRISPY BBQ</h4>
    <p>1 Crispy BBQ Sandwich (1 extra large breast fillet, triple breaded, crispy onion, bacon, cheddar cheese, BBQ Sauce)
    </p>
    <button class="btn btn-danger w-100">buy</button>
    </div>`
    document.getElementById('div8').innerHTML = `<div class="card-body" id="div8">
    <p>$ 29.900</p>
    <h4>COMBO SANDWICH CRISPY BBQ</h4>
    <p>1 Crispy BBQ Sandwich (1 extra large breast fillet, triple breaded, crispy onion, bacon, cheddar cheese + BBQ Sauce) + 1 Small Potato + 1 Pet Soda 400ml</p>
    <button class="btn btn-danger w-100">buy</button>
    </div>`
}
else if(language == "1"){
    document.getElementById('div1').innerHTML =  `<div class="card-body " id="div1">
    <p>$8.900</p>
    <h4>BBQ Crunch</h4>
    <p>1 Sandwich BBQ Crunch (1 filete de pollo apanado)</p> <br><br>
    <button class="btn btn-danger w-100">Comprar</button>
    </div>`
    document.getElementById('div2').innerHTML = `<div class="card-body" id="div2">
    <p>$ 15.900</p>
    <h4>Kentucky Sandwich</h4>
    <p>1 Kentucky hamburguesa / Sandwich (1 Filete de pechuga de pollo apanado, pepinillos, mayonesa premium y mantequilla)</p>
    <button class="btn btn-danger w-100">Comprar</button>
    </div>`
    document.getElementById('div3').innerHTML = `<div class="card-body" id="div3">
    <p>$ 15.900</p>
    <h4>COMBO BBQ CRUNCH</h4>
    <p>1 Sándwich BBQ Crunch (1 Filete de pollo apanado) + 1 Papa Pequeña + 1 Gaseosa PET 400ml</p><br>
    <button class="btn btn-danger w-100">Comprar</button>
    </div>`
    document.getElementById('div4').innerHTML = `<div class="card-body" id="div4">
    <p>$ 16.900</p>
    <h4>KENTUCKY CORONEL SANDWICH</h4>
    <p>1 Kentucky Coronel hamburguesa / Sandwich (1 Filete de pechuga de pollo apanado, Ensalada Coleslaw, BBQ y mantequilla)</p>
    <button class="btn btn-danger w-100">Comprar</button>
    </div>`
    document.getElementById('div5').innerHTML = `<div class="card-body" id="div5">
    <p>$ 21.900</p>
    <h4>COMBO KENTUCKY SANDWICH</h4>
    <p>1 Kentucky hamburguesa /Sandwich (1 Filete de pechuga de pollo apanado, pepinillos, mayonesa premium y mantequilla) + 1 Papa Pequeña + 1 Gaseosa PET 400ml
    </p>
    <button class="btn btn-danger w-100">Comprar</button>
    </div>`
    document.getElementById('div6').innerHTML = `<div class="card-body" id="div6">
    <p>$ 22.900</p>
    <h4>COMBO KENTUCKY CORONEL SANDWICH</h4>
    <p>1 Kentucky Coronel hamburguesa / Sandwich (1 Filete de pechuga de pollo apanado, Ensalada Coleslaw, BBQ y mantequilla) + 1 Papa Pequeña + 1 Gaseosa PET 400ml</p>
    <button class="btn btn-danger w-100">Comprar</button>
    </div>`
    document.getElementById('div7').innerHTML = `<div class="card-body" id="div7">
    <p>$ 23.900</p>
    <h4>SANDWICH CRISPY BBQ</h4>
    <p>1 Sándwich Crispy BBQ (1 Filete de pechuga extra grande, triple empanizado, cebolla crispy, tocineta, queso cheddar, Salsa BBQ)
    </p><br><br>
    <button class="btn btn-danger w-100">Comprar</button>
    </div>`
    document.getElementById('div8').innerHTML = `<div class="card-body" id="div8">
    <p>$ 29.900</p>
    <h4>COMBO SANDWICH CRISPY BBQ</h4>
    <p>1 Sándwich Crispy BBQ (1 Filete de pechuga extra grande, triple empanizado, cebolla crispy, tocineta, queso cheddar + Salsa BBQ) + 1 Papa Pequeña + 1 Gaseosa Pet 400ml</p>
    <button class="btn btn-danger w-100">Comprar</button>
    </div>`
}
}
