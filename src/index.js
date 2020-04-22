require('dotenv').config()

const path = require('path')
const express = require('express')
const app = require('express')()
const http = require('http').createServer(app);
const io = require('socket.io')(http)
const {mapShips} = require('./game/mapShips')

const shipsMap = mapShips()

const destroyed = []

const PORT = process.env.PORT || '8080'

let score = 0

app.use(express.static(path.join(__dirname, 'public')))

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', {title: 'Batalha Naval', score: score})
})

/* Socket */
io.on('connection', (socket) => {
  socket.on('click', (id) => {
    if(shipsMap.includes(id)) {
      if(!destroyed.includes(id)) {
        destroyed.push(id)
        score++
        if(score === 30) {
          score = 0
          io.emit('won')
          return
        }
        io.emit('hit', id, score);
      }
    } else {
      io.emit('miss', id);
    }
  })
});

http.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`)
})
