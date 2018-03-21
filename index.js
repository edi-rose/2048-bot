const board = require('./board')


let FreeSquares = board.filter(square=>
    square.value == null
    )


function spawnNumber(){
  var square = FreeSquares[Math.floor(Math.random()*FreeSquares.length)]
  square.value = 2
  return square
}



function moveValuesLeft(){
  let firstRow = board.filter(square => square.row == 0).reverse()
  let secondRow = board.filter(square => square.row == 1).reverse()
  let thirdRow = board.filter(square => square.row == 2).reverse()
  let forthRow = board.filter(square => square.row == 3).reverse()
  let allRows = [firstRow, secondRow, thirdRow, forthRow]
  allRows.map(row => {
    row.map((square, idx, array)=>{
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
  })
}

moveValuesLeft()
console.log(board)
