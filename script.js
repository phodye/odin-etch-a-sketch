//etch box contianer
const etchBox = document.querySelector('#etchBox');
etchBox.style.width = "950px";
etchBox.style.height = "725px";
etchBox.style.borderRadius = "6%";
etchBox.style.margin = "auto";
etchBox.style.backgroundColor = "#e63629";

//create grid- container 
const container = document.querySelector('#container');
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.width = "600px";
container.style.height = "600px";
container.style.margin = "auto";
container.style.padding = "10px";

const slideContainer = document.querySelector('#slideRow');
slideContainer.style.display = "flex";
slideContainer.style.alignItems = "center";

const slideElement = document.querySelector('#myRange');

//create grid- build function
function buildGrid(input) {
container.innerHTML = "";

const gridSize = input;
let numberofDivs = gridSize * gridSize;
let divDimension = 600 / gridSize;
console.log(input);

for (x = 0; x < numberofDivs; x++) {
    const div = document.createElement('div');
    div.style.boxSizing = "border-box";
    div.style.border = ".5px solid #454545";
    div.style.height = `${divDimension}px`;
    div.style.width = `${divDimension}px`;
    div.style.backgroundColor = "rgba(255, 255, 255, 1.0)";
    div.addEventListener("mouseenter", () => {
        if (colorChooser.textContent === "Black and White") {
                div.style.backgroundColor = "rgba(0, 0, 0, 1)";
        } else if (colorChooser.textContent === "Color Mix") {
                div.style.backgroundColor = getRandomColor();
        } 
     }) 
    container.appendChild(div);
}
}

//slider for grid size
let slider = document.getElementById("myRange");
let output = document.getElementById("demo");

//Updates the output value and invokes buildGrid when slider is updated
slider.oninput = function() {
    buildGrid(this.value);
  } 

//color or bw button
let colorChooser = document.createElement('button');
colorChooser.style.height = "75px";
colorChooser.style.width = "75px";
colorChooser.style.borderRadius = "50%";
colorChooser.textContent = "Black and White";
colorChooser.style.margin = "10px";
colorChooser.addEventListener('click', () => {
    if (colorChooser.textContent === "Black and White") {
        colorChooser.textContent = "Color Mix";
    } else if (colorChooser.textContent === "Color Mix") {
        colorChooser.textContent = "Black and White";
    }
})
slideContainer.insertBefore(colorChooser, slideElement);

//instructions button
let instructions = document.createElement('button');
instructions.style.height = "75px";
instructions.style.width = "75px";
instructions.style.borderRadius = "50%";
instructions.style.margin = "10px";
instructions.textContent = "Directions";
instructions.addEventListener('click', () => {
    alert("Use the slider to create or reset the grid \nToggle between color and monochrome with the left button")
})
slideContainer.appendChild(instructions);

//random color generator 
function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
