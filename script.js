// data- atribute
// querySelector pero sin utilizar id o class, por si es necesario cambiarlos. El data- es un tag aun mas especifico para llamar desde js

const btn = document.querySelector("[data-form-btn]");

console.log(btn); //hacemos hablar al programa viendo el selector q linkeamos del html

//listener 
//evento para "escuchar" lo q sucede con el elemento linkeado, puede ser un click, un hover, arrastrar
//al listener se le agrega el evento "click" y una funcion()

// btn.addEventListener("click", (evento)=>{ //arrow function ()=>
//     evento.preventDefault; //indicamos q el evento "evento" va a recetear el form para q no se autorefresque  
//     const input = querySelector(["data-form-input"]); //la funcion captura el input
//     console.log(input.value); //y muestra el .value 
// });

//pasado en limpio con la arrow function quedaria asi:
//function
const createTask = (evento)=>{
    evento.preventDefault();
    const input = querySelector(["data-form-input"]);
    console.log(input.value);
}
//call
btn.addEventListener("click", createTask);