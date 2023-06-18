window.addEventListener("load", setDefaultGrid);
document.getElementById("clear").addEventListener("click", clearGrid);

function setDefaultGrid() {
  setGridSize(16);
  fillGrid(16);
}

function setGridSize(size) {
  let grid = document.getElementById("container");
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}

function fillGrid(size) {
  for (let i = 0; i < size * size; i++) {
    let gridCell = document.createElement("div");
    gridCell.classList = "cell";
    gridCell.addEventListener("mouseover", changeColor);
    document.getElementById("container").appendChild(gridCell);
  }
}

function changeColor(e) {
  e.target.style.backgroundColor = "black";
}

function clearGrid() {
  let gridArray = Array.from(document.getElementById("container").childNodes);

  gridArray.forEach((element) => {
    document.getElementById("container").removeChild(element);
  });

  setDefaultGrid();
}
