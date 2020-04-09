let ships  = []

function createSquare(i, j) {
  let square = document.createElement("div");

  square.innerText = "";

  square.className = "square";
  square.addEventListener("click", squareClicked);
  square.id = String.fromCharCode(65 + i) + j;

  return square;
}

function createBoard() {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      root.appendChild(createSquare(i, j));
    }
  }
}

function squareClicked(e) {
  let { id } = e.target
  ships.map((ship) => {
    if (ship.includes(id)) {
        let node = document.getElementById(id)
        node.style.backgroundColor = 'black'
    }
  })
}

function getStartingPoints() {
  const startingPoints = []
  const shipsNumber = random(6, 4)

  for(let i = 0; i < shipsNumber; i++){
    let y  = random(10, 0)
    let x = String.fromCharCode(random(74, 65))

    startingPoints.push(x + y)
  }

  return startingPoints
}

function setShipsPositions() {
  const startingPoints = getStartingPoints()

  startingPoints.map(point => {
    let direction = Math.round(Math.random()) // 0 - Vertical, 1 - Horizontal
    let ship = []
    let x = point[0]
    let y = Number(point[1])

    let size = 0

    if(direction === 0) {
      size = random(y, 1)
    } else {
      size = random(10 -(x.charCodeAt(0) - 65), 1)
    }

    for(let i = 0; i < size; i++) {
      if(direction === 0) {
        y  = (y + 1) % 10
        ship.push([x, y].join(''))
      } else {
        let asciiCodeX = String.fromCharCode(x.charCodeAt(0) + i)
        ship.push([asciiCodeX, y].join(''))
      }
    }
    ships.push(ship)
  })
}

/**
 *
 * @param {number} max Inclusive max value
 * @param {number} min
 */
function random(max, min) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
window.onload = (function() {
  createBoard();
  setShipsPositions()
})()
