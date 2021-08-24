let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function(){
    inputValue = inputEl.value
    if(inputValue.length > 0){
        myLeads.push(inputValue);
        inputEl.value = "";
        renderLeads();
    }
})

function renderLeads(){
    listItems = "";
    for (let i = 0; i < myLeads.length; i++) {
        listItems += "<li><a href='" + myLeads[i]+ "' target='_blank'>" + myLeads[i] + "</a></li>";
    }
    ulEl.innerHTML = listItems;
}
