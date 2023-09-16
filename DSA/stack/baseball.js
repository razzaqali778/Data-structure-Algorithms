//682


const baseBallGame = (arr) => {
  const stack = [];

  for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i])) {
      stack.push(parseInt(arr[i]));
    } else if (arr[i] === "+") {
      stack.push(stack[stack.length - 2] + stack[stack.length - 1]);
    } else if (arr[i] === "D") {
      stack.push(stack[stack.length - 1] * 2);
    } else if (arr[i] === "C") {
      stack.pop();
    }
  }

  return stack.reduce((acc, curr) => acc + curr, 0);
};

console.log(baseBallGame(["5", "2", "C", "D", "+"])); // Output: 30
