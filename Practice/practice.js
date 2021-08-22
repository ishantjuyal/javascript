let fruits = ["apple", "orange", "orange", "apple", "orange", "apple", "orange"]

let appleShelf = document.getElementById("apple-shelf");
let orangeShelf = document.getElementById("orange-shelf");

for(let i = 0; i < fruits.length; i += 1){
    if(fruits[i] === "apple"){
        appleShelf.textContent += fruits[i] + " ";
    } else{
        orangeShelf.textContent += fruits[i] + " ";
    }
}