function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnavbar") {
      x.className += " responsive";
    } else {
      x.className = "topnavbar";
    }
}