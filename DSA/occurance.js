

function compressString(str) {
  if (str.length === 0) return str;

  let compressed = '';
  let count = 1;

  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i - 1]) {
      count++;
    } else {
      compressed += str[i - 1] + count;
      count = 1;
    }
  }

  compressed += str[str.length - 1] + count;

  return compressed;
}

const inputString = "aaaabbbbbccccccaabb";
const compressedString = compressString(inputString);

console.log(compressedString); // Output: "a4b5c6a2b2"
