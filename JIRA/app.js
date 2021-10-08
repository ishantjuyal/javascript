function Task(taskName, taskPriority, taskDeadline, taskStatus) {
    this.name = taskName;
    this.priority = taskPriority;
    this.deadline = taskDeadline;
    this.status = taskStatus;
}

let taskList = [];


let addTaskButton = document.getElementById("addTask");
let formDiv = document.getElementById("addTaskForm");
formDiv.style.visibility = "hidden";

addTaskButton.addEventListener('click', function() {
    formDiv.style.visibility = 'visible';
})

function submitForm() {
    var taskName = document.getElementById("taskForm").elements.namedItem("taskName").value;
    var taskPriority = document.getElementById("taskForm").elements.namedItem("taskPriority").value;
    var taskDeadline = document.getElementById("taskForm").elements.namedItem("taskDeadline").value;
    var taskStatus = document.getElementById("taskForm").elements.namedItem("taskStatus").checked ? 'Y' : 'N';
    
    if(taskName.length != 0){
        let newTask = new Task(taskName, taskPriority, taskDeadline, taskStatus);
        taskList.push(newTask);
        formDiv.style.visibility = "hidden";
        refreshTaskList(taskList);
    }
}

function refreshTaskList(taskList) {
    let taskListComp = document.getElementById("taskList");
    let divValue = '';
    if(taskList.length != 0) {
        for(let i = 0; i < taskList.length; i++) {
            divValue += `<div id="taskList">
                ${taskList[i].name}
                ${taskList[i].priority}
                ${taskList[i].deadline}
                ${taskList[i].status}
                <button onclick="deleteElement('${taskList[i].name}')">Delete</button>
            </div><br>`
        }
        taskListComp.innerHTML = divValue;
    } else {
        taskListComp.innerHTML = '';
    }
}

function deleteElement(deleteName) {
    let index = 0
    for(let i = 0; i < taskList.length; i++) {
        if(taskList[i].name === deleteName) {
            index = i;
            break;
        }
    }
    taskList.splice(index, 1);
    refreshTaskList(taskList);
}