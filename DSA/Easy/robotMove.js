  // robot return to orgin  - 657 leet code

  //u -->  y++
  //d -->  y--
  //l -->  x--
  //r -->  x++

  function robotMovement(moves) {
    let x = 0
    let y = 0

    for (let move of moves) {
      switch (move) {
        case 'U':
          y++
          break
        case 'R':
          x++
          break
        case 'D':
          y--
          break
        case 'L':
          x--
          break
        default:
          break
      }
    }
    return x === 0 && y === 0
  }

  console.log(robotMovement('UD')) // true
  console.log(robotMovement('LL')) // Fasle
