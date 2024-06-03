import { populateGrid, paintGrid, clearGrid } from "./utils.js";

let currentColor = "#d4d4d4";

const container = document.querySelector(".container");

const menu = document.createElement("div");
menu.classList.add("menu");
container.appendChild(menu);

const menuColor = document.createElement("div");
menuColor.classList.add("menu-container");

const colorHeading = document.createElement("p");
colorHeading.textContent = "Color";
colorHeading.classList.add("menu-heading");
menuColor.appendChild(colorHeading);

const colorPicker = document.createElement("input");
colorPicker.setAttribute("type", "color");
colorPicker.classList.add("menu-color-picker");
colorPicker.value = currentColor;
menuColor.appendChild(colorPicker);

const menuGrid = document.createElement("div");
menuGrid.classList.add("menu-container");

const gridSizeHeading = document.createElement("p");
gridSizeHeading.textContent = "Grid Size";
gridSizeHeading.classList.add("menu-heading");
menuGrid.appendChild(gridSizeHeading);

const gridSizeBtn = document.createElement("button");
gridSizeBtn.classList.add("btn");
gridSizeBtn.classList.add("btn-grid-size");
gridSizeBtn.textContent = "Grid Size";
menuGrid.appendChild(gridSizeBtn);

menu.appendChild(menuColor);
menu.appendChild(menuGrid);

const board = document.createElement("div");
board.classList.add("board");
container.appendChild(board);

const title = document.createElement("h1");
title.textContent = "Etch A Sketch";
title.classList.add("title");

const grid = document.createElement("div");
grid.classList.add("grid");

const buttons = document.createElement("div");
buttons.classList.add("buttons");

const clearBtn = document.createElement("button");
clearBtn.classList.add("btn");
clearBtn.classList.add("btn-clear");
clearBtn.textContent = "Clear";
buttons.appendChild(clearBtn);

board.appendChild(title);
board.appendChild(grid);
board.appendChild(buttons);

populateGrid(grid);
paintGrid(currentColor);

colorPicker.addEventListener("change", (e) => {
  currentColor = e.target.value;
  paintGrid(currentColor);
});

clearBtn.addEventListener("click", () => {
  clearGrid();
});

gridSizeBtn.addEventListener("click", () => {
  const size = prompt("Enter a new grid size:");
  
  if (!size || isNaN(size)) {
    alert("Invalid input. Please enter a valid number");
    return;
  }

  clearGrid();
  populateGrid(grid, parseInt(size));
});
