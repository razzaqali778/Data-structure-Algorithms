function firstNonRepeatingCharacter(s) {
  const charCount = {};

  for (const char of s) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (const char of s) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  return '';
}

// Example usage:
const inputString = "leetcode";
console.log(firstNonRepeatingCharacter(inputString)); // Output: "l"
