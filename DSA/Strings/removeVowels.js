//Remove Vowels from a String

function removeVowels(str) {
  var result = '';
  var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    
    // Check if the character is not a vowel
    if (vowels.indexOf(char) === -1) {
      result += char;
    }
  }
  
  return result;
}

// Example usage:
const inputString = "Hello, World!";
const result = removeVowels(inputString);
console.log(result); // Output: "Hll, Wrld!"
