function arrayToObj(arr, keyProperty) {
  const result = {};

  for (let obj of arr) {
    result[obj[keyProperty]] = obj;
  }

  return result;
}

// Example usage:
const arrayOfPeople = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
];

const peopleById = arrayToObj(arrayOfPeople, 'id');
console.log(peopleById);
