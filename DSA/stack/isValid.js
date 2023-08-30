//20

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
