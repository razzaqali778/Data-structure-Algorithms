function areObjectsEqual(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}

const objA = { x: 1, y: 2 };
const objB = { x: 1, y: 2 };
const objC = { x: 1, y: 3 };

console.log(areObjectsEqual(objA, objB)); // Output: true
console.log(areObjectsEqual(objA, objC)); // Output: false
