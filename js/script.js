"use strict";

let todoControl = document.querySelector(".todo-control"),
headerInput = document.querySelector('.header-input'),
todoList = document.querySelector('.todo-list'),
todoCompleted = document.querySelector('.todo-completed'),
todoContainer = document.querySelector('.todo-completed');
let todoData ;
if(localStorage.Json){
    todoData = JSON.parse(localStorage.Json);
}else{
    todoData = [{
        value: "Задача1",
        completed: false
    }]
}


const render = function(){
    todoList.textContent = '';
    todoCompleted.textContent = '';

    todoData.forEach(function(item){
        const li = document.createElement("li");
        li.classList.add("todo-item");
        li.innerHTML = `<span class="text-todo">${item.value}</span>
        <div class="todo-buttons">
        <button class="todo-remove"></button>
        <button class="todo-complete"></button>
    </div>`;
        if(item.completed){
            todoCompleted.append(li);
        }else{

            todoList.append(li);
        }
        const todooCompleted = li.querySelector(".todo-complete");
        todooCompleted.addEventListener("click", function(){
            item.completed = !item.completed;
            render();
            localStorage.Json = fromArrToJson();
        })

    });
};

todoControl.addEventListener('submit', function(event){
   event.preventDefault();
    
    const newTodo = {
        value: headerInput.value,
        completed: false
    };
    if(headerInput.value !== ""){
        todoData.push(newTodo);
        render();
        headerInput.value = "";
    }
    localStorage.Json = fromArrToJson();
    
});
document.addEventListener('click', function(event){
    if(event.target.classList.contains("todo-remove")){
        todoData.forEach(function(item, i){
            if(event.target.parentElement.parentElement.firstChild.innerHTML === item.value){
                event.target.parentElement.parentElement.remove();
                todoData.splice(i,1);
                localStorage.Json = fromArrToJson();
            }
        });
    }
     
 });

 function fromJsonToArr(){
    JSON.parse(todoData);
 };

 function fromArrToJson(){
    return JSON.stringify(todoData);
 };
render();