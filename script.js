( ()=>{

const btn = document.querySelector("[data-form-btn]");

console.log(btn); 

const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    const value = input.value;
    const list = document.querySelector("[data-list]");
    const task = document.createElement('li');
    task.classList.add("card");
    input.value = "";
    const taskContent = document.createElement("div");
    taskContent.appendChild(checkComplete());
    const titleTask = document.createElement("span");
    titleTask.classList.add("task");
    titleTask.innerHTML = value;
    taskContent.appendChild(titleTask);
    const content = 
    `<i class="fas fa-trash-alt trashIcon icon"></i>`;
    
    // task.innerHTML = content;
    task.appendChild(taskContent);
    list.appendChild(task);

    console.log(task);
}
//call
btn.addEventListener('click', createTask);

//function para el check square. Al ser varias lineas de html es conveniente armar una funcion

const checkComplete = ()=>{
    const i = document.createElement("i");
    i.classList.add("far","fa-check-square","icon");
    i.addEventListener("click", completeTask);
    return i;
};

//function para hacer dinamico el check square seleccionando y deseleccionando

const completeTask = (event)=>{
    const element = event.target;
    element.classList.toggle("fas");
    element.classList.toggle("completeIcon");
    element.classList.toggle("far");
};

})();