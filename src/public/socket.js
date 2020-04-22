/** SOCKET */
function handleHit(id, score) {
  let sqr = document.getElementById(id)
  let scr = document.getElementById('score')

  scr.innerText = score
  sqr.classList.add('hit')
}

function handleMiss(id) {
  let sqr = document.getElementById(id)
  sqr.classList.add('miss')
}

function handleVictory() {
  alert('You Win!!!')
}

socket.on('hit', handleHit)
socket.on('miss', handleMiss)
socket.on('won', handleVictory)
