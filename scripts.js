const red = document.querySelector(".red");
console.log(red);
const green = document.querySelector(".green");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");
var selectedColor = document.querySelector(".center")

var neww = (selectedElement)=>{
    return (window.getComputedStyle(selectedElement).backgroundColor);
   
}
var centerDefaultColor = window.getComputedStyle(selectedColor).backgroundColor;

var changeColor = (element)=>{
    element.addEventListener('mouseenter',()=>{
        selectedColor.style.backgroundColor = neww(element)
    })
}

var changeDefaultColor = (element)=>{
    element.addEventListener('mouseleave',()=>{
        selectedColor.style.backgroundColor = centerDefaultColor;
    })
}

changeColor(red);
changeColor(green);
changeColor(violet);
changeColor(orange);
changeColor(pink);

changeDefaultColor(red)
changeDefaultColor(green)
changeDefaultColor(violet)
changeDefaultColor(orange)
changeDefaultColor(pink)