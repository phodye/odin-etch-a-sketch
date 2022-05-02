//get grid size
const body = document.querySelector("body");
const section = document.querySelector("section");

const gridInput = document.createElement('input');
gridInput.setAttribute("type", "text");
gridInput.setAttribute("value", "Input Grid Size") 
gridInput.style.margin = "10px"; 
gridInput.style.rightMargin = "2px";
body.insertBefore(gridInput, section);

console.log(gridInput.value);

const pressMe = document.createElement("button");
pressMe.textContent = "Create Grid";
body.insertBefore(pressMe, section);
pressMe.addEventListener('click', () => buildGrid(gridInput.value));

//create grid 
const container = document.querySelector('#container');
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.width = "600px";
container.style.height = "600px";

function buildGrid(input) {
const gridSize = input;
let numberofDivs = gridSize * gridSize;
let divDimension = 600 / gridSize;
console.log(input);

for (x = 0; x < numberofDivs; x++) {
    const div = document.createElement('div');
    div.style.boxSizing = "border-box";
    div.style.border = "thin solid #000000";
    div.style.height = `${divDimension}px`;
    div.style.width = `${divDimension}px`;
    div.addEventListener("mouseenter", () => {
        div.style.backgroundColor = "black";
    }) 
    container.appendChild(div);
}
}



