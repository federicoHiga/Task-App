( ()=>{ //inicio del IIFE

// data- attributes
// querySelector pero sin utilizar id o class, por si es necesario cambiarlos. El data- es un tag aun mas especifico para llamar desde js

const btn = document.querySelector("[data-form-btn]");

console.log(btn); //hacemos hablar al programa viendo el selector q linkeamos del html

//1_//listener 
//evento para "escuchar" lo q sucede con el elemento linkeado, puede ser un click, un hover, arrastrar
//al listener se le agrega el evento "click" y una funcion()

btn.addEventListener("click", (evento)=>{ //arrow function ()=>
    evento.preventDefault; //indicamos q el evento "evento" va a recetear el form para q no se autorefresque  
    const input = querySelector(["data-form-input"]); //la funcion captura el input
    console.log(input.value); //y muestra el .value 
});

//2_//pasado en limpio con la arrow function quedaria asi:
//function
const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    const value = input.value;//dejamos el valor capturado en una variable
    const list = document.querySelector("[data-list]");//captura el elemento a crear
    const task = document.createElement('li');//crea el elemnto
    task.classList.add("card");//agrega el css por su class
    input.value = "";//reset del form
    const content = //con template strings con backticks podemos replicar estructura html e sumando variables JS como ${variable}
    `<div>
    <i class="far fa-check-square icon"></i>
    <span class="task">${value}</span>
    </div>
    <i class="fas fa-trash-alt trashIcon icon"></i>`;
    
    task.innerHTML = content;//con .innerHTML traducimos a JS estructura html

    list.appendChild(task);//imprime 

    console.log(task);
}
//call
btn.addEventListener('click', createTask);

//3_// Todos los elementos en nuestro árbol de DOM son nodos y todos los nodos pueden ser accedidos vía JavaScript. Los nodos pueden ser eliminados, creados o modificados. Durante el curso utilizamos el método appendChild que siempre es implementado al final del nodo, para colocar un nodo hijo dentro del nodo padre.

// Existen otros métodos que podemos utilizar para manipular nodos:

// .insertBefore(padre, hijo): Coloca un nodo antes del otro
// .replaceChild(elemento1, elemento2): Sustituye el nodo del elemento 1 por el nodo del elemento 2
// .removeChild(elemento): Remueve un nodo del árbol
// .parentElement(lo vuelve el elemento padre) subir un elemento en el árbol del DOM

//4// se reemplaza la estructura html estatica (linea 28) por una dinamica.


const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    const value = input.value;
    const list = document.querySelector("[data-list]");
    const task = document.createElement('li');
    task.classList.add("card");
    input.value = "";
    const taskContent = document.createElement("div");//imprime "div"
    taskContent.appendChild(checkComplete());//imprime "i" dentro del "div"
    const titleTask = document.createElement("span");//imprime "span"
    titleTask.classList.add("task");//css del span
    titleTask.innerHTML = value;//inserta dentro del span el valor de value
    taskContent.appendChild(titleTask);//imprime "span" dentro del "div"
    const content = //se cambia el contenido de "content" en las lineas de arriba
    // <div>
    // <i class="far fa-check-square icon"></i>
    // <span class="task">${value}</span>
    // </div>
    `<i class="fas fa-trash-alt trashIcon icon"></i>`;
    
    // task.innerHTML = content; se comenta para q deje de recibir el valor de "content"
    task.appendChild(taskContent);//imprime el "div" en el "li"
    list.appendChild(task);//imprime el "li" dento del "ul"

    console.log(task);
}
//call
btn.addEventListener('click', createTask);

//5//function para el check squeare. Al ser varias lineas de html es conveniente armar una funcion

const checkComplete = ()=>{
    const i = document.createElement("i");
    i.classList.add("far","fa-check-square","icon");//3 clases separadas por ",". las cuales estan importadas desde "font-awesome.com" 
    i.addEventListener("click", completeTask);
    return i;
}

//6//function para hacer dinamico el check square seleccionando y deseleccionando

const completeTask = (event)=>{//marca y desmarca en azul el check square 
    const element = event.target;//la propiedad .target muestra sobre q elemento sucede el evento. Y lo capturamos en una variable
    element.classList.add("fas");//agrega la class importada
    element.classList.add("completeIcon");//agrega la class del css. Marca de azul
    element.classList.remove("far");//remueve el check gris

    //con .toggle (palanca) si pickeas si marca y si volves a pickear desmarca (on-off)
    element.classList.toggle("fas");
    element.classList.toggle("completeIcon");
    element.classList.toggle("far");
}

//7// IIFE para q el usuario no tenga acceso desde el navegador a las functions, ya q las mismas estan siendo declaradas mediatne "const" de scoop global lo q se hace es abarcar todo el codigo en una arrow function quedadno limitado en una funcion quedando todo en un scoop regional.
//es importante invocar al IIFE inmediatamente despues de cerrar

})();//fin del IIFE y su respectiva llamada 