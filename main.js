const container = document.querySelector(".container");
const range = document.getElementById("grid-select");
for (let i = 1; i <= 256; i++) {
    let div = document.createElement("div");
    div.className = "gridItem";
    div.textContent = " ";
    container.appendChild(div);
}