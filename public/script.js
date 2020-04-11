let ships  = [
  {
    title: 'submarino',
    size: 2,
    quantity: 4,
    coordinates: []
  },

  {
    title: 'contra-torpedos',
    size: 3,
    quantity: 3,
    coordinates: []
  },

  {
    title: 'navio-tanque',
    size: 4,
    quantity: 2,
    coordinates: []
  },

  {
    title: 'porta-avioes',
    size: 5,
    quantity: 1,
    coordinates: []
  },
]

function createSquare(i, j) {
  let square = document.createElement("div");

  square.innerText = "";

  square.className = "square";
  square.addEventListener("click", squareClicked);
  square.id = [i, j].join('');

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
  let { id } = e.target;
  ships.map((ship) => {
    for(const coord of ship.coordinates){
      try {
        let node = document.getElementById(coord.join(''));
        node.style.backgroundColor = "black";
      }
      catch(e) {
        console.error(e.message)
      }
    }
  });
}

/* Dont need this */
function getStartingPoint(previous = ['', '']) {
  return new Promise((resolve, reject) => {
    let y = random(9, 0);
    let x = random(9, 0);

    while (x === previous[0] && y === previous[1]) {
      y = random(9, 0);
      x = random(9, 0);
    }

    resolve([x, y])
  })
}

function setShipsPositions() {
  let prevStartingPoints = [0, 0]
  for (let ship of ships) {
    for(let i = 0; i < ship.quantity; i++) {
      let direction = Math.round(Math.random()) === 0 ? "vertical" : "horizontal"; // 0 - Vertical, 1 - Horizontal
      getStartingPoint(prevStartingPoints).then((startPoint) => {
        prevStartingPoints.push(startPoint)
        x = startPoint[0]
        y = startPoint[1]

        for (let j = 0; j < ship.size; j++) {
          if (direction === "vertical") {
            y = (y + 1) % 10;
            ship.coordinates.push([x, y]);
          } else {
            x = (x + 1) % 10
            ship.coordinates.push([x, y]);
          }
        }
      })
    }
  }
}

/**
 *
 * @param {number} max Inclusive max value
 * @param {number} min
 */
function random(max, min) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

window.onload = (function () {
  createBoard();
  setShipsPositions();
})();
