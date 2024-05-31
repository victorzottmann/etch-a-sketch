export function populateGrid(container) {
  for (let i = 0; i < 15 * 15; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
  }
}

export function paintGrid(color) {
  const squares = document.querySelectorAll(".square");
  squares.forEach(s => {
    s.addEventListener("mouseover", () => {
      s.style.backgroundColor = color;
    });
  });
};

export function clearGrid() {
  const squares = document.querySelectorAll(".square");
  squares.forEach(s => s.style.backgroundColor = "var(--clr-white)");
}
