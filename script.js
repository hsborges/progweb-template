function createSquare() {
  let square = document.createElement("div");
  square.innerText = "";
  square.className = "square";
  return square;
}

function createBoard() {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      root.appendChild(createSquare());
    }
  }
}

window.onload = createBoard();
