 function groupAnagrams(arr) {
    const anagram = {};

    for (let char of arr) {
      let sortedword = char.split("").sort().join("");

      if (!anagram[sortedword]) {
        anagram[sortedword] = [];
      }

      anagram[sortedword].push(char);
    }

    return Object.values(anagram);
  }

  console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
