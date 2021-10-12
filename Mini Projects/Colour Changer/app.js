function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

let changeBtn = document.getElementById("change-btn");

changeBtn.addEventListener('click', function (){
    let container = document.getElementsByTagName("BODY")[0];
    container.style.background = "#" + ((1<<24)*Math.random() | 0).toString(16);
})