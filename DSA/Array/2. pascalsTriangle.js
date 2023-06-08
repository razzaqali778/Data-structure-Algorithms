//In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

function generatepascalTriangle(num) {
  let pascal = []

  for (let j = 1; j < num; j++) {
    pascal[i] = []
    pascal[i][0] = 1

    for (let j = 1; j < num; j++) {
      pascal[i][j] = pascal[i - 1][j - 1] + pascal[i - 1][j]
    }
    pascal[i][i] = 1
  }
  return pascal
}

console.log(generatepascalTriangle(5))
