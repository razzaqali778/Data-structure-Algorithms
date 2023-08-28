//1189 

var maxNumberOfBalloons = function (text) {
 
  const charCount = new Map();

  // Count the occurrences of each character in the input text
  for (const char of text) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  // Calculate the maximum number of instances that can be formed
  const maxInstances = Math.min(
    charCount.get("b") || 0,
    charCount.get("a") || 0,
    Math.floor(charCount.get("l") / 2) || 0,
    Math.floor(charCount.get("o") / 2) || 0,
    charCount.get("n") || 0
  );

  return maxInstances;
};

console.log(maxNumberOfBalloons("loonbalxballpoon"));


