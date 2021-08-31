let myPlaylist = []
let renderEl = document.getElementById("render-el");
let getBtn = document.getElementById("get-btn");
let clearBtn = document.getElementById("clear-btn");

songsFromLocalStorage = JSON.parse(localStorage.getItem("playlist"));

if(songsFromLocalStorage){
    myPlaylist = songsFromLocalStorage;
    render(myPlaylist);
}

clearBtn.addEventListener("click", function() {
    localStorage.clear();
    myPlaylist = []
    render(myPlaylist)
});

getBtn.addEventListener("click", function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myPlaylist.push(tabs[0].url)
        localStorage.setItem("playlist", JSON.stringify(myPlaylist));
        render(myPlaylist);
    });
});

function render(myList) {
    console.log(myList)
    let renderText = "";
    for(let i = 0; i < myList.length; i ++){
        renderText += `<a target="_blank" href="${myList[i]}">Song ${i}</a><br>`;
    }
    renderEl.innerHTML = renderText;
}