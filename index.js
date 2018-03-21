const board = require('./board')


let FreeSquares = board.filter(square=>
    square.value == null
    )


function spawnNumber(){
  var square = FreeSquares[Math.floor(Math.random()*FreeSquares.length)]
  square.value = 2
  return square
}



function topRowLeft(){
  let topRow = board.filter(square => square.row == 0).reverse()
  topRow.map((square, idx, array)=>{
    if(square.value == null){
      return
    }
    if(array[idx+1] == undefined){
      return
    }
      if(array[idx+1].value == null){
        array[idx+1].value = square.value
        square.value = null
      }
  })
}
topRowLeft()
console.log(board)
