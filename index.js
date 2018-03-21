const board = require('./board')


let FreeSquares = board.filter(square=>
    square.value == null
  )


function spawnNumber(){
  var square = FreeSquares[Math.floor(Math.random()*FreeSquares.length)]
  square.value = 2
  return square
}

console.log(spawnNumber())
