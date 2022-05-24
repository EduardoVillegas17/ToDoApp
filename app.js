//Global vars
let newTask = document.getElementById("txtTask"); //travel the DOM once
let count = 0;

function registerTask(){
    //Display on console ---> in a html element
    console.log(newTask.value);
    let tmp=`<li id="${count}" class="task">${newTask.value}<button onclic="deleteTask(${count})">trash</button></li>`;
    document.getElementById("todoList").innerHTML+=tmp;
    clearForm();
    count++;
}

function deleteTask(x){
    document.getElementById(x).remove();
}
function clearForm(){
    newTask.value="";
}