let shipStruct = require('./ships')

let forbidden  = {type: 'forbidden'};

let field = createField();
let limit = createField();

function createField(){
  let arr = new Array(10);

  for (let i = 0; i < 10; i++){
    arr[i] = new Array(10);
  }

  return arr;
}

function validatePosition(x, y, orientation, size){ // checks if the position is valid.
  let isValid = true;
  if(orientation){
    for(let i = 0; i < size && isValid; i++){
      if(limit[x + i][y]!= undefined){
        isValid = false;
      }
    }
  }
  else{
    for(let i = 0; i < size && isValid; i++){
      if(limit[y][x + i]!= undefined){
        isValid = false;
      }
    }
  }
  
  return isValid;
}

function setLimit(x, y, orientation, size){
  if(orientation){
    for(let i = 0; i < size; i++){
      limit[x +i][y] = forbidden;
      if(y > 0){
        limit[x +i][y -1] = forbidden;
      }
      if(y < 9){
        limit[x +i][y +1] = forbidden;
      }
    }
    if(x > 0){
      limit[x-1][y] = forbidden;
    }
    if(x + size < 10){
      limit[x + size][y] = forbidden;
    }
  }
  else{
    for(let i = 0; i < size; i++){
      limit[y][x +i] = forbidden;
      if(y > 0){
        limit[y -1][x +i] = forbidden;
      }
      if(y < 9){
        limit[y +1][x +i] = forbidden;
      }
    }
    if(x > 0){
      limit[y][x-1] = forbidden;
    }
    if(x + size < 10){
      limit[y][x + size] = forbidden;
    }
  }
}

function insertShip(x, y, orientation, size, ship){
  if(orientation){
    for(let i = 0; i < size; i++){
      field[x + i][y] = ship[i];
      ship[i].position = [(x+i), y].join('');
      ship[i].orientation = orientation;
    }
  }
  else{
    for(let i = 0; i < size; i++){
      field[y][x + i] = ship[i];
      ship[i].position = [y, (x+i)].join('');
      ship[i].orientation = orientation;
    }
  }
  setLimit(x, y, orientation, size);
}

function setShipsPositions(){
  for(let ship of shipStruct){
    let x, y, orientation;
    do{
      x = random(0, 9 - ship.length);
      y = random(0, 9);
      orientation = random(0, 1); // horizontal if is 0, and vertical if is 1.
    }while(!validatePosition(x, y, orientation, ship.length));

    insertShip(x, y, orientation, ship.length, ship);

  }
}

function random(min, max) {
  return Math.floor(Math.random() * (min + max + 1) - min);
}

exports.mapShips = function() {
  setShipsPositions();
    return field
}

exports.struct = function() {
  return shipStruct;
}
