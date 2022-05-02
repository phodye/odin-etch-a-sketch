const container = document.querySelector('#container');
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.width = "50px";

for (x = 0; x < 16; x++) {
    const div = document.createElement('div');
    div.style.border = "thin solid #000000";
    div.style.height = "10px";
    div.style.width = "10px";
    div.addEventListener("mouseenter", () => {
        div.style.backgroundColor = "purple";
    }) 
    container.appendChild(div);
}



