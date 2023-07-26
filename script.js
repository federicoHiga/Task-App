// data- attributes
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
const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    const value = input.value;//dejamos el valor capturado en una variable
    const list = document.querySelector("[data-list]");//captura el elemento a crear
    const task = document.createElement('li');//crea el elemnto
    task.classList.add("card");//agrega el css por su class
    input.value = "";//reset del form
    //con backticks template podemos replicar estructura html e sumando variables JS como ${variable}
    const content = 
    `<div>
    <i class="far fa-check-square icon"></i>
    <span class="task">${value}</span>
    </div>
    <i class="fas fa-trash-alt trashIcon icon"></i>`;
    //con .innerHTML imprimimos la estuctura
    task.innerHTML = content;

    list.appendChild(task);//imprime 

    console.log(task);
}
//call
btn.addEventListener('click', createTask);