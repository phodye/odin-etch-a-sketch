//create grid 
const container = document.querySelector('#container');
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.width = "600px";
container.style.height = "600px";

function buildGrid(input) {
container.innerHTML = "";

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

// Slider
let slider = document.getElementById("myRange");
let output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    output.innerHTML = this.value;
    buildGrid(this.value);
  } 
