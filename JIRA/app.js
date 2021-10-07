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
    
    let newTask = new Task(taskName, taskPriority, taskDeadline, taskStatus);
    console.log(newTask)
    taskList.push(newTask);
    formDiv.style.visibility = "hidden";
    console.log(taskList);
}