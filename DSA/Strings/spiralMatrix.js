//Given an m x n matrix, return all elements of the matrix in spiral order.

 const spiralOrder = (matrix) => {
    const res = []
    while (matrix.length) {
      const first = matrix.shift()
      res.push(...first)
      for (const m of matrix) {
        let val = m.pop()
        if (val) res.push(val)
        m.reverse()
      }
      matrix.reverse()
    }
    return res
  }

  console.log(
    spiralOrder([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ])
  )

//Output: [1,2,3,6,9,8,7,4,5]
