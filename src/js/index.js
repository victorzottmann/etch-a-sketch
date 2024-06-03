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

const gridSizeText = document.createElement("p");
gridSizeText.classList.add("menu-grid-text");
gridSizeText.textContent = "Enter a number between 1 and 100:";
menuGrid.appendChild(gridSizeText);

const gridSizeInputContainer = document.createElement("div");
gridSizeInputContainer.classList.add("menu-grid-input-container");

const gridSizeInput = document.createElement("input");
gridSizeInput.setAttribute("type", "text");
gridSizeInput.setAttribute("min", 1);
gridSizeInput.setAttribute("max", 100);
gridSizeInput.classList.add("menu-grid-input");
gridSizeInput.value = 16;

const gridSizeBtn = document.createElement("button");
gridSizeBtn.textContent = "Set";
gridSizeBtn.classList.add("btn");
gridSizeBtn.classList.add("btn-grid-size");

gridSizeInputContainer.appendChild(gridSizeInput);
gridSizeInputContainer.appendChild(gridSizeBtn);

menuGrid.appendChild(gridSizeInputContainer)

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
  const size = parseInt(gridSizeInput.value);
  clearGrid();
  populateGrid(grid, parseInt(size));
  paintGrid(currentColor);
});
