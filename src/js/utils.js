export function populateGrid(container) {
  for (let i = 0; i < 15 * 15; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
  }
}