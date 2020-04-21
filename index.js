require('dotenv').config()
const path = require('path')
const express = require('express')
const app = require('express')()
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const {mapShips} = require('./game/mapShips')
const shipsMap = mapShips()

const PORT = process.env.PORT || '8080'

app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index')
})

io.on('connection', (socket) => {
  socket.on('click', (id) => {
    if(shipsMap.includes(id)) {
      io.emit('hit', id);
    } else {
      io.emit('miss', id);
    }
  })
});

http.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`)
})
