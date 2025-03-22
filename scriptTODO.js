const taskList = document.getElementById("taskList");
const btntask = document.getElementById("btntask");
const taskInput = document.getElementById("taskInput");
const ul = document.getElementById("taskList");
const tasksArr = [];
console.log(localStorage);
//------------------------------------------------
loadTasks();

btntask.addEventListener("click", createNewTask);

function createNewTask() {

    const text = taskInput.value;
    addTaskToList(text);
    saveTaskInLocalStorage();
    document.getElementById("taskInput").value = '';
    console.log(localStorage);
};

function addTaskToList(text) {
    if (text.trim() != ''){
        let li = document.createElement('li');
        li.textContent = text;
        li.className = 'taskItem';
        ul.appendChild(li);
    };
};
// Ввод задач через кнопку Enter

taskInput.addEventListener("keypress", 
    function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      btntask.click();
    }
});

function clearAll() {
    localStorage.clear();

    console.log(localStorage);
};

////////---------------------------
function loadTasks() {
    if (localStorage.length != 0) {
        const del = /[]""/g
        arr = localStorage.getItem('tasks').replace('[','').replace(']','');
        arr = arr.replace(/"/g,'');
        arr = arr.split(",");
        for (let i=0; i < arr.length; i++) {
            console.log(arr[i]);
            addTaskToList(arr[i]);    
        };
    };
    
};

function saveTaskInLocalStorage() {
    text = taskInput.value;
    tasksArr.push(text.trim());
    localStorage.setItem('tasks', JSON.stringify(tasksArr));
};