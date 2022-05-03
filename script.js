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
    div.addEventListener("mouseenter", () => {
        if (colorChooser.textContent === "Black and White") {
                div.style.backgroundColor = "black";
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
        colorChooser.textContent = "Color Mix"
    } else if (colorChooser.textContent === "Color Mix") {
        colorChooser.textContent = "Black and White"
    }
    console.log(colorChooser.textContent)
})
lowerContainer.appendChild(colorChooser);

//random color generator 
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }