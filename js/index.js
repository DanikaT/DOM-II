// Your code goes here
const logoChange = document.querySelector(".logo-heading");
console.log(logoChange);

logoChange.addEventListener("mouseover", e => {
console.log("I'm under mouse attack!")
logoChange.style.color = "#DC143C";
logoChange.style.fontSize = "60px";
});

