let value = prompt("How many grids you want?");

const container = document.querySelector("#container");

function generateDivs(value) {
  for (let i = 0; i < value; i++) {
    const line = document.createElement("div");
    line.classList.add("line");
    for (let x = 0; x < value; x++) {
      const cell = document.createElement("div");
      cell.textContent = "cell";
      cell.classList.add("cell");
      line.appendChild(cell);
    }
    container.appendChild(line);
  }
}

generateDivs(value);
