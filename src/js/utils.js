export function populateGrid(container, size = 16) {
  for (let i = 0; i < size * size; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    gridItem.classList.add("grid-on");
    container.appendChild(gridItem);
  }

  container.style.setProperty("--grid-size", size);
}

export function paintGrid(color) {
  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach(item => {
    item.addEventListener("mouseover", () => {
      item.style.backgroundColor = color;
    });
  });
};

export function clearGrid() {
  const colorPicker = document.querySelector(".menu-color-picker");

  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach(item => item.style.backgroundColor = "var(--clr-white)");

  paintGrid(colorPicker.value);
}

export function handleGridSizeChange(grid, currentColor) {
  const input = document.querySelector(".menu-grid-input");
  const size = parseInt(input.value);

  if (isNaN(size) || size < 1 || size > 100) {
    showInvalidInputMessage(size);
    return;
  }

  hideInvalidInputMessage();

  clearGrid();
  populateGrid(grid, parseInt(size));
  paintGrid(currentColor);
}

export function hideInvalidInputMessage() {
  const message = document.querySelector("small");
  message.style.display = "none";
}

function showInvalidInputMessage(size) {
  const message = document.querySelector("small");
  const input = document.querySelector(".menu-grid-input");

  message.style.display = "block";
  input.style.backgroundColor = "var(--clr-red)";
  input.style.color = "var(--clr-white)";
  
  if (isNaN(size)) {
    input.style.backgroundColor = "var(--clr-bg)";
    message.textContent = "Input cannot be empty!";
  } else {
    message.textContent = "WARNING: Value must be within 1 and 100!";
  }
}
