export function populateGrid(container, size) {
  for (let i = 0; i < size * size; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
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
  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach(item => item.style.backgroundColor = "var(--clr-white)");
}
