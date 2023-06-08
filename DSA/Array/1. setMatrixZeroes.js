// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's
function setMatrixZeroes(matrix) {
  let rowZeroes = new Array(matrix.length)
  let columnZeroes = new Array(matrix[0].length)

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        rowZeroes[i] = true
        columnZeroes[j] = true
      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (rowZeroes[i] || columnZeroes[j]) {
        matrix[i][j] = 0
      }
    }
  }
  return matrix
}

console.log(
  setMatrixZeroes([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ])
)
