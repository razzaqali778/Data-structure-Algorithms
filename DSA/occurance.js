

function compressString(str) {
  if (str.length === 0) return str;

 let result = '';
    let count = 1; // Start counting from 1

    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i + 1]) {
            count++; 
        } else {
            result += s[i] + count;
            count = 1;
        }
    }

    return result;
}

const inputString = "aaaabbbbbccccccaabb";
const compressedString = compressString(inputString);

console.log(compressedString); // Output: "a4b5c6a2b2"
