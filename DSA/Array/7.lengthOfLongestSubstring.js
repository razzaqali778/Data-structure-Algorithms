// Given a string s, find the length of the longest substring without repeating characters.

function lengthOfLongestSubstring(s) {
  let maxLength = 0;
  let currentSubstring = "";

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    const charIndex = currentSubstring.indexOf(char);
    console.log(charIndex);
    if (charIndex !== -1) {
      currentSubstring = currentSubstring.slice(charIndex + 1);
    }

    currentSubstring += char;

    maxLength = Math.max(maxLength, currentSubstring.length);
  }

  return maxLength;
}

console.log(lengthOfLongestSubstring("abcabcbb"));
