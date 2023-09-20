//20

/////////////////////////////////////////////////////////////////////////////


  function isValid(str) {
    let openCount = 0;
    let closeCount = 0;

    for (let char of str) {
      if (char === "[" || char === "(" || char === "{") {
        openCount++;
      } else if (char === "]" || char === ")" || char === "}") {
        closeCount++;
      }
    }

    if (openCount > closeCount || closeCount > openCount) {
      return false;
    }

    return openCount === closeCount;
  }


/////////////////////////////////////////////////////////////////////////////////////////////


function isValid(s) {
    const stack = [];
    const bracketPairs = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let char of s) {
        if (char in bracketPairs) {
            stack.push(char);
        } else {
            if (stack.length === 0 || char !== bracketPairs[stack.pop()]) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

// Test cases
console.log(isValid("()")); // Output: true
console.log(isValid("()[]{}")); // Output: true
console.log(isValid("(]")); // Output: false
console.log(isValid("([)]")); // Output: false
console.log(isValid("{[]}")); // Output: true




























