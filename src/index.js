require('dotenv').config()

const path = require('path');
const express = require('express');
const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const {ShipStruct} = require('./game/mapShips');

const PORT = process.env.PORT || '8080'

let struct = new Map();

function sink(ship, socket){
  for(let i = 0; i < ship.length; i++){
    socket.emit('sink', ship[i].position);
  }
}

function verifyShips(id, socket){
  let ship = struct.get(id).verifyShips()
  if(ship){
    sink(ship, socket);
  }
}

app.use(express.static(path.join(__dirname, 'public')))

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', {title: 'Batalha Naval', score: 0})
})

/* Socket */
io.on('connection', (socket) => {
  let score = 0;
  let multi = 1;
  struct.set(socket.id, new ShipStruct());
  console.log(`Usuário conectado: ${socket.id}`);
  socket.on('click', (id) => {
    if(struct.get(socket.id).shot(id)) {
      score += multi++;
      socket.emit('hit', id, score);
      verifyShips(socket.id, socket);
    } else {
      multi = 1;
      socket.emit('miss', id);
    }
    if(struct.get(socket.id).allDestroyed()){
      socket.emit('won');
      setTimeout(function(){
        socket.disconnect();
      }, 100);
    }
  });
  socket.on('disconnect', ()=>{
    console.log(`Usuário desconectado: ${socket.id}`);
  });
});


http.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
})