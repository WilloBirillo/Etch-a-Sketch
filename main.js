const button = document.querySelector("#choice");
const container = document.querySelector("#container");

function askValue() {
  let value = prompt("What grid size you want (number x number)?");
  while (value > 100) {
    alert("Please select a number from 1 to 100");
    value = prompt("What grid size you want (number x number)?");
  }
  generateDivs(value);
}

button.addEventListener("click", askValue);

//* generates first the line than all the single blocks on that line 
function generateDivs(value) {
  for (let i = 0; i < value; i++) {
    const line = document.createElement("div");
    line.classList.add("line");
    for (let x = 0; x < value; x++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      line.appendChild(cell);

      cell.addEventListener("mouseover", function () {
        changeBackground(this);
      });
      clearGrid(cell);
    }
    container.appendChild(line);
    clearGrid(line);
  }
}

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function changeBackground(cell) {
  cell.style.backgroundColor = getRandomColor();
}

//* used to clear the grid when the button is pressed
function clearGrid(thing) {
  button.addEventListener("click", () => thing.remove());
}
