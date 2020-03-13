let counter = 0;

function createSquare(filled) {
  let square = document.createElement("div");

  square.innerText = "";

  if (filled) {
    square.innerText = "x";
  }
  square.className = "square";
  square.addEventListener("click", squareClicked);
  square.id = counter++;

  return square;
}

function populateSquares() {
  let start = {
    row: Math.floor(Math.random() * Math.floor(100)),
    col: Math.floor(Math.random() * Math.floor(100))
  };

  let end = {
    row: Math.floor(Math.random() * Math.floor(100)),
    col: Math.floor(Math.random() * Math.floor(100))
  };

  /** Posição inválida: Mesmas coordenadas */
  if (start.row === end.row && start.col === end.row) {
    return false;
  }
  /** Posição inválida: Coordenada diagonal*/
  if (start.row !== end.row && start.col !== end.row) {
    return false;
  }

  return [start, end];
}

function createBoard() {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      let populate = populateSquares()
      if(populate && populate[0].row === i && populate[0].col === j) {
        root.appendChild(createSquare(true));
        console.log('filled');

        continue;
      }
      root.appendChild(createSquare());
    }
  }
}

function squareClicked(e) {
  console.log(e.target.id)
}

window.onload = createBoard();
