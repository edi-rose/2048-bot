export function moveValues(direction, board){
  let dir = takeDirection(direction)[0]
  let rev = takeDirection(direction)[1]
  let Rows = getRows(dir, rev, board)

  Rows.map(row => {
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
        if(array[idx+1].value == square.value){
          array[idx+1].value = 2*array[idx+1].value
          square.value = null
        }
    })
  })
}

export function getRows(dir, rev, board){
  let Rows = []
  if(rev){
    for(let i = 0; i <= 3; i++){
      Rows.push(board.filter(square => square[dir] == i).reverse())
    }
  }
  else{
    for(let i = 0; i <= 3; i++){
      Rows.push(board.filter(square => square[dir] == i))
    }
  }
  return Rows
}

export function takeDirection(direction){
  if (direction == 'left'){
    return ['row', true]
  }
  else if(direction == 'right'){
    return ['row', false]
  }
  else if(direction =='up'){
    return ['col', true]
  }
  else if(direction =='down'){
    return ['col', false]
  }
}
