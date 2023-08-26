//49


const groupAnagrams = (strs) => {
  const map = new Map();

  for (let word of strs) {
    const sortedKey = word.split("").sort().join("");
  
    if (!map.has(sortedKey)) {
      map.set(sortedKey, []);
    }

    map.get(sortedKey).push(word);
  }

  return [...map.values()];
};
