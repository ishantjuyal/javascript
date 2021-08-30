let colorArray = ["gold", "lightgreen", "cyan", "aqua", "orange", "black", "white", "silver", "yellow", "pink"];

let changeBtn = document.getElementById("change-btn");

changeBtn.addEventListener('click', function (){
    let container = document.getElementById("container");
    let text = document.getElementById("text");
    random = Math.floor(Math.random()*colorArray.length);
    
    container.style.background = colorArray[random];
    text.textContent = colorArray[random];
    
    if(colorArray[random] === "black") {
        text.style.color = "white";
    }
    else {
        text.style.color = "black";    
    }
})