function Task(taskName, taskPriority = "low", taskDeadline = "2021-10-11", taskStatus) {
    this.name = taskName;
    this.priority = taskPriority;
    this.deadline = taskDeadline;
    this.status = taskStatus;
}

let taskList = [];

document.getElementById("addTaskForm").style.display = "none";

function openForm() {
    document.getElementById("addTaskForm").style.display = "block";
}

function closeForm() {
    document.getElementById("addTaskForm").style.display = "none";
}

function submitForm() {
    var taskName = document.getElementById("taskForm").elements.namedItem("taskName").value;
    var taskPriority = document.getElementById("taskForm").elements.namedItem("taskPriority").value;
    var taskDeadline = document.getElementById("taskForm").elements.namedItem("taskDeadline").value;
    var taskStatus = document.getElementById("taskForm").elements.namedItem("taskStatus").checked ? 'Y' : 'N';
    
    if(taskDeadline === ""){
        taskDeadline = "2021-10-11";
    }

    if(taskPriority === ""){
        taskPriority = "Low";
    }

    if(taskName.length != 0){
        let newTask = new Task(taskName, taskPriority, taskDeadline, taskStatus);
        taskList.push(newTask);
        closeForm();
        refreshTaskList(taskList);
    }
}

function refreshTaskList(taskList) {
    let taskListComp = document.getElementById("tasks");
    let divValue = '';
    if(taskList.length != 0) {
        for(let i = 0; i < taskList.length; i++) {
            divValue += `
            <br>
            <div id="taskList">    
                ${taskList[i].name}<br>
                ${taskList[i].priority}<br>
                ${taskList[i].deadline}<br>
                ${taskList[i].status}<br>
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