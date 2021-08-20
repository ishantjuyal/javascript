let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0; // Initialize count as 0
let beginningText = saveEl.textContent;

// Listen for clicks on increment button
function increment(){
    count += 1; // Increment the count when the button is clicked
    countEl.textContent = count; // Change the count-el in HTML to reflect new count
}

function save(){
    let renderVar = count + " - ";
    saveEl.textContent += renderVar;
    count = 0;
    countEl.textContent = count;
    console.log(count)
}
