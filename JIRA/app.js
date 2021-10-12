function Task(taskName, taskPriority = "low", taskDeadline = "2021-10-11", taskStatus) {
    this.name = taskName;
    this.priority = taskPriority;
    this.deadline = taskDeadline;
    this.status = taskStatus;
}

let taskList = [];

const tasksFromLocalStorage = JSON.parse(localStorage.getItem("tasks"));

if(tasksFromLocalStorage){
    taskList = tasksFromLocalStorage;
    refreshTaskList(taskList);
}

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
    var taskStatus = document.getElementById("taskForm").elements.namedItem("taskStatus").checked ? 'Done' : 'Not Done';
    
    if(taskDeadline === ""){
        taskDeadline = "2021-10-11";
    }

    if(taskPriority === ""){
        taskPriority = "Low";
    }

    if(taskName.length != 0){
        let newTask = new Task(taskName, taskPriority, taskDeadline, taskStatus);
        taskList.push(newTask);
        localStorage.setItem("tasks", JSON.stringify(taskList));
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
            <div id="taskList">
                <table>
                    <tr>
                        <td>Name</td>
                        <td>
                        ${taskList[i].name}
                        </td>
                    </tr>
                    <tr>
                        <td>Priority</td>
                        <td>
                        ${taskList[i].priority}
                        </td>
                    </tr>
                    <tr>
                        <td>Deadline</td>
                        <td>
                        ${taskList[i].deadline}
                        </td>
                        </tr>
                    <tr>
                        <td>Status</td>
                        <td>
                        ${taskList[i].status}
                        </td>
                    </tr>
                </table>
                <button onclick="deleteElement('${taskList[i].name}')">Delete</button>
                <button onclick="changeElementStatus('${taskList[i].name}')">Change Status</button>
            </div>`
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
    localStorage.setItem("tasks", JSON.stringify(taskList));
    refreshTaskList(taskList);
}

function changeElementStatus(changeName) {
    let index = 0
    for(let i = 0; i < taskList.length; i++) {
        if(taskList[i].name === changeName) {
            index = i;
            break;
        }
    }

    if(taskList[index].status === "Not Done") {
        taskList[index].status = "Done";
    } else {
        taskList[index].status = "Not Done"
    }
    localStorage.setItem("tasks", JSON.stringify(taskList));
    refreshTaskList(taskList);
}