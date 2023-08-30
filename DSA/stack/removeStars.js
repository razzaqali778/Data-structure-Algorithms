//2390


function removeStars(s) {

  const stack = [];

  for (let char of s) {
    if (char === "*") {
      if (stack.length > 0) {
        stack.pop();
      }
    } else {
      stack.push(char);
    }
  }

  return stack.join("");
}

// Test case
console.log(removeStars("leet**cod*e")); 
