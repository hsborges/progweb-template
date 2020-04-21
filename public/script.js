const socket = io();

function createSquare(i, j) {
    let square = document.createElement('div');

    square.innerText = '';

    square.className = 'square sea';
    square.addEventListener('click', onClick)
    square.id = [i, j].join('');

    return square;
}


function onClick(event) {
  event.preventDefault()
  socket.emit('click', event.target.id)
}
(function createBoard() {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      root.appendChild(createSquare(i, j));
    }
  }
})()

function handleHit(id) {
  let sqr = document.getElementById(id)
  sqr.classList.add('hit')
}

function handleMiss(id) {
  let sqr = document.getElementById(id)
  sqr.classList.add('miss')
}

socket.on('hit', handleHit)
socket.on('miss', handleMiss)
