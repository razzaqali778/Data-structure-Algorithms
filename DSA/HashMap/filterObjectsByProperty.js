function filterObjectsByProperty(arr, property, value) {
  return arr.filter(item => item[property] === value);
}

const data = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 25 }
];

const filteredData = filterObjectsByProperty(data, "age", 25);
console.log(filteredData); // Output: [{ name: "Alice", age: 25 }, { name: "Charlie", age: 25 }]
