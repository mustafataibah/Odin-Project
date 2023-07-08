let currentColor = "#000000";

window.addEventListener("load", () => {
  let gridSize = document.getElementById("gridSize").value;
  setGridSize(gridSize);
  fillGrid(gridSize);
});

document.getElementById("clear").addEventListener("click", clearGrid);
document.getElementById("erase").addEventListener("click", setErase, false);
document.getElementById("colorPicker").addEventListener("click", openColorPicker);
document.getElementById("gridSize").addEventListener("input", updateGridSize, false);

function setGridSize(size) {
  let grid = document.getElementById("container");
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridAutoRows = `${600 / size}px`;
  grid.style.gridAutoColumns = `${600 / size}px`;
}

function fillGrid(size) {
  for (let i = 0; i < size * size; i++) {
    let gridCell = document.createElement("div");
    gridCell.style.width = `${600 / size}px`;
    gridCell.style.height = `${600 / size}px`;
    gridCell.classList = "cell";
    gridCell.addEventListener("mouseover", changeColor);
    document.getElementById("container").appendChild(gridCell);
  }
}

function changeColor(e) {
  e.target.style.backgroundColor = currentColor;
}

function clearGrid() {
  let gridArray = Array.from(document.getElementById("container").childNodes);

  gridArray.forEach((element) => {
    document.getElementById("container").removeChild(element);
  });

  let gridSize = document.getElementById("gridSize").value;
  setGridSize(gridSize);
  fillGrid(gridSize);
}

function openColorPicker() {
  let colorPicker = new Coloris("#colorPicker");
  colorPicker.on("color:change", function (color) {
    currentColor = color.hexString;
  });
}

function setErase() {
  currentColor = "#ffffff";
}

function updateGridSize() {
  let gridSize = document.getElementById("gridSize").value;
  document.getElementById("gridSizeValue").textContent = gridSize;
  document.getElementById("gridSizeValue2").textContent = gridSize;
  clearGrid();
}
