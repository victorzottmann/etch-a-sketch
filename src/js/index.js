import { populateGrid, paintGrid, clearGrid, handleGridSizeChange, hideInvalidInputMessage } from "./utils.js";

const defaultGridSize = 16;
let currentColor = "#d4d4d4";

const container = document.querySelector(".container");

const menu = document.createElement("div");
menu.classList.add("menu");
container.appendChild(menu);

const menuToggleGrid = document.createElement("div");
menuToggleGrid.classList.add("menu-container");
menuToggleGrid.classList.add("grid-switch");

const toggleGridHeading = document.createElement("p");
toggleGridHeading.textContent = "Toggle Grid";
toggleGridHeading.classList.add("menu-heading");

const switchLabel = document.createElement("label");
switchLabel.classList.add("switch");

const switchInput = document.createElement("input");
switchInput.setAttribute("type", "checkbox");
switchInput.classList.add("switch-input");
switchInput.checked = true;

const switchSlider = document.createElement("span");
switchSlider.classList.add("slider");
switchSlider.classList.add("round");

switchLabel.appendChild(switchInput);
switchLabel.appendChild(switchSlider);

menuToggleGrid.appendChild(toggleGridHeading);
menuToggleGrid.appendChild(switchLabel);

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
gridSizeInput.value = defaultGridSize;

const gridSizeBtn = document.createElement("button");
gridSizeBtn.textContent = "Set";
gridSizeBtn.classList.add("btn");
gridSizeBtn.classList.add("btn-grid-size");

gridSizeInputContainer.appendChild(gridSizeInput);
gridSizeInputContainer.appendChild(gridSizeBtn);

const invalidInputMessage = document.createElement("small");
invalidInputMessage.textContent = "WARNING: Value must be within 1 and 100!";
invalidInputMessage.classList.add("invalid-input-message");

menuGrid.appendChild(gridSizeInputContainer);
menuGrid.appendChild(invalidInputMessage);

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

menu.appendChild(menuToggleGrid);
menu.appendChild(menuGrid);
menu.appendChild(menuColor);

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

gridSizeInput.addEventListener("click", () => {
  gridSizeInput.style.color = "var(--clr-white)";
  gridSizeInput.style.backgroundColor = "var(--clr-bg)";
  hideInvalidInputMessage();
});

gridSizeInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    gridSizeBtn.click();
    gridSizeInput.blur();
    handleGridSizeChange(grid, currentColor);
  }
});

gridSizeBtn.addEventListener("click", () => {
  handleGridSizeChange(grid, currentColor);
});

switchInput.addEventListener("change", (e) => {
  const gridItems = document.querySelectorAll(".grid-item");
  const isChecked = e.target.checked;

  gridItems.forEach(item => {
    if (!isChecked) {
      item.classList.remove("grid-on");
    } else {
      item.classList.add("grid-on");
    }
  })
});
