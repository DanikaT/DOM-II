// Your code goes here

//MOUSEOVER
const logoChange = document.querySelector(".logo-heading");
console.log(logoChange);

logoChange.addEventListener("mouseover", e => {
console.log("I'm under mouse attack!")
logoChange.style.color = "#DC143C";
logoChange.style.fontSize = "60px";
});

//CLICK
const buttons = document.querySelectorAll(".btn");
console.log(buttons);

const buttonsArray = Array.from(buttons);
console.log(buttonsArray);

buttonsArray[0].addEventListener("click", event => {
console.log("Click meeeee!")
event.target.textContent = "BEEP BEEP!!!";
event.target.style.color = "green";
});

//dblclick
buttonsArray[1].addEventListener("dblclick", event => {
    console.log("I'm a double click!");
    event.target.style.fontSize = "30px";
    event.target.style.color = "purple";
});

//Mouseup
buttonsArray[2].addEventListener("mouseup", event => {
    console.log("I'm a mouseup event!");
    event.target.style.fontSize = "30px";
    event.target.style.color = "aqua";
    event.target.style.backgroundColor = "orange";
});




