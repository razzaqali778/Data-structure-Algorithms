//Write a function to find the longest common prefix string amongst an array of strings.If there is no common prefix, return an empty string "".

// const strings = ["flower", "flow", "flight"];
// console.log(longestCommonPrefix(strings)); // Output: "fl"

function longestCommonPrefix(strs) {
  if (strs.length === 0) return "";

  for (let i = 0; i < strs[0].length; i++) {
    for (j = 1; j < strs.length; j++) {
      if (strs[0][i] != strs[j][i]) {
        return strs[0].slice(0, i);
      }
    }
  }

  return strs[0];
}

const strings = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strings)); // Output: "fl"
