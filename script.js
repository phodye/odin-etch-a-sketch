//create grid- container 
const container = document.querySelector('#container');
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.width = "600px";
container.style.height = "600px";

const lowerContiner = document.querySelector('#lowerContainer');

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
output.innerHTML = slider.value;

//Updates the output value and invokes buildGrid when slider is updated
slider.oninput = function() {
    output.innerHTML = this.value;
    buildGrid(this.value);
  } 

//color/bw button
let colorChooser = document.createElement('button');
colorChooser.textContent = "Black and White";
colorChooser.addEventListener('click', () => {
    if (colorChooser.textContent === "Black and White") {
        colorChooser.textContent = "Color Mix";
    } else if (colorChooser.textContent === "Color Mix") {
        colorChooser.textContent = "Black and White";
    }
    console.log(colorChooser.textContent)
})
lowerContainer.appendChild(colorChooser);

//random color generator 
function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
