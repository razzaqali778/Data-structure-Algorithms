function mostFrequentValue(arr, property) {
  const valueCount = {};
  let mostFrequentValue = null;
  let maxCount = 0;

  for (const obj of arr) {
    const value = obj[property];
    if (valueCount[value]) {
      valueCount[value]++;
    } else {
      valueCount[value] = 1;
    }

    if (valueCount[value] > maxCount) {
      mostFrequentValue = value;
      maxCount = valueCount[value];
    }
  }

  return mostFrequentValue;
}

const data = [
  { color: "red" },
  { color: "blue" },
  { color: "red" },
  { color: "green" },
  { color: "blue" },
];

const mostFrequentColor = mostFrequentValue(data, "color");
console.log(mostFrequentColor); // Output: "red"
