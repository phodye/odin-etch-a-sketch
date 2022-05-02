let gridSize = 8;
let numberofDivs = gridSize * gridSize;
let divDimension = 700 / gridSize;
console.log(divDimension);

const container = document.querySelector('#container');
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.width = "700px";
container.style.height = "700px";

for (x = 0; x < numberofDivs; x++) {
    const div = document.createElement('div');
    div.style.boxSizing = "border-box";
    div.style.border = "thin solid #000000";
    div.style.height = `${divDimension}px`;
    div.style.width = `${divDimension}px`;
    div.addEventListener("mouseenter", () => {
        div.style.backgroundColor = "purple";
    }) 
    container.appendChild(div);
}



