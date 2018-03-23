export default function spawnNumber(board){
  var square = FreeSquares[Math.floor(Math.random()*FreeSquares.length)]
  square.value = 2
  return square
}

let FreeSquares = board.filter(square=>
    square.value == null
    )
