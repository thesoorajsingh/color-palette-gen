
var changerButton = document.getElementById("changerButton");

document.onload = () => {
changeColor("section1","btn1");
changeColor("section2","btn2");
changeColor("section3","btn3");
changeColor("section4","btn4");
changeColor("section5","btn5");
}

changeColor = (id,button) => {
    var color = document.getElementById(id);
    var copy = document.getElementById(button);
    var hex = '#' + Math.floor(Math.random() * 16777215).toString(16);
    color.style.backgroundColor = hex;
    console.log(typeof(hex))
    copy.innerText = hex.toString().toUpperCase();
    return hex.toString().toUpperCase();
}

var generate = document.getElementById("changerButton").addEventListener("click", function() {
    changeColor("section1","btn1");
    changeColor("section2","btn2");
    changeColor("section3","btn3");
    changeColor("section4","btn4");
    changeColor("section5","btn5");
})
// var copier = document.getElementById("color-title").addEventListener("click", function() {
//     navigator.clipboard.writeText(copier.value)
//     alert("Copied Hex Code Value!")
// })