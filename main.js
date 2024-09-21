let value = 12; //prompt("How many grids you want?");

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

      cell.addEventListener("mouseover", function () {
        changeBackground(this);
      });
    }
    container.appendChild(line);
  }
}

function getRandomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}

function changeBackground(cell) {
    cell.style.backgroundColor = getRandomColor();
}

generateDivs(value);

