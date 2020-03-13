let counter = 0;

function createSquare() {
  let square = document.createElement("div");
  square.innerText = "";
  square.className = "square";
  square.addEventListener('click', squareClicked)
  square.id = counter++

  return square;
}

function createBoard() {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      root.appendChild(createSquare());
    }
  }
}

function squareClicked(e) {
  console.log(e.target.id)
}
window.onload = createBoard();
