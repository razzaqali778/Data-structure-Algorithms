//Given an integer array nums, find the subarray with the largest sum, and return its sum.

//1.
// const maxSubArray = (array) => {
//   let currentMax = array[0]
//   let max = array[0]

//   for (let i = 1; i < array.length; i++) {
//     currentMax = Math.max(array[i], currentMax + array[i])
//     max = Math.max(max, currentMax)
//   }
//   return max
// }

//2.
const maxSubArray = (array) => {
  let sum = 0
  let maximum = array[0]
  let start = 0
  let end = 0

  for (let i = 0; i < array.length; i++) {
    let currentSum = 0
    for (let j = i; j < array.length; j++) {
      currentSum += array[j]

      if (currentSum > maximum) {
        maximum = currentSum
        start = i
        end = j
      }
    }
  }
  return {
    sum: maximum,
    subArray: array.slice(start, end + 1),
  }
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
