const container = document.querySelector(".container");

const board = document.createElement("div");
board.classList.add("board");
container.appendChild(board);

const title = document.createElement("h1");
title.textContent = "Etch A Sketch";
title.classList.add("title");

const screen = document.createElement("div");
screen.classList.add("screen");

const buttons = document.createElement("div");
buttons.classList.add("buttons");

const colorBtn = document.createElement("button");
colorBtn.classList.add("btn");
colorBtn.classList.add("btn-color");
colorBtn.textContent = "Color"
buttons.appendChild(colorBtn);

const gridSizeBtn = document.createElement("button");
gridSizeBtn.classList.add("btn");
gridSizeBtn.classList.add("btn-grid-size");
gridSizeBtn.textContent = "Grid Size";
buttons.appendChild(gridSizeBtn);

const clearBtn = document.createElement("button");
clearBtn.classList.add("btn");
clearBtn.classList.add("btn-clear");
clearBtn.textContent = "Clear";
buttons.appendChild(clearBtn);

board.appendChild(title);
board.appendChild(screen);
board.appendChild(buttons);
