//etch box contianer
const etchBox = document.querySelector('#etchBox');
etchBox.style.width = "1000px";
etchBox.style.height = "725px";
etchBox.style.borderRadius = "3%";
etchBox.style.boxShadow = "10px 20px 30px 4px black"; 
etchBox.style.margin = "auto";
etchBox.style.paddingTop = "10px";
etchBox.style.backgroundColor = "#e63629";

//create grid- container 
const container = document.querySelector('#container');
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.width = "600px";
container.style.height = "600px";
container.style.margin = "auto";
container.style.padding = "10px";
container.style.backgroundColor = "#f7f7f7";
container.style.borderRadius = "1%";
container.style.boxShadow = "inset 0px 0px 10px 0px black";

//slide container
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
    div.style.height = `${divDimension}px`;
    div.style.width = `${divDimension}px`;
    div.style.backgroundColor = "rgba(255, 255, 255, 1.0)";
    div.style.border = "1px solid gray";
    div.addEventListener("mouseover", () => {
        if (colorChooser.textContent === "Black") {
                div.style.backgroundColor = "rgba(0, 0, 0, 1)";
        } else if (colorChooser.textContent === "Color") {
                div.style.backgroundColor = getRandomColor();
        } else if (colorChooser.textContent === "Eraser") {
                div.style.backgroundColor = "white";
        }
     }) 
    container.appendChild(div);
}
}

//load page with medium sized grid
buildGrid(50);

//slider for grid size
let slider = document.getElementById("myRange");
let output = document.getElementById("demo");

//Updates the output value and invokes buildGrid when slider is updated
slider.oninput = function() {
    buildGrid(this.value);
  } 

//black or color or eraser button
let colorChooser = document.createElement('button');
colorChooser.style.height = "75px";
colorChooser.style.width = "75px";
colorChooser.style.borderRadius = "50%";
colorChooser.textContent = "Black";
colorChooser.style.margin = "10px";
colorChooser.style.boxShadow = "5px 5px 10px black"; 
colorChooser.addEventListener('click', () => {
    if (colorChooser.textContent === "Black") {
        colorChooser.textContent = "Color";
    } else if (colorChooser.textContent === "Color") {
        colorChooser.textContent = "Eraser";
    } else if (colorChooser.textContent === "Eraser") {
        colorChooser.textContent = "Black";
    }
})
slideContainer.insertBefore(colorChooser, slideElement);

//instructions button
let instructions = document.createElement('button');
instructions.style.height = "75px";
instructions.style.width = "75px";
instructions.style.borderRadius = "50%";
instructions.style.margin = "10px";
instructions.style.boxShadow = "5px 5px 10px black"; 
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
