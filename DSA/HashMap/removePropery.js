function removeProperty(obj, propToRemove) {
  const newObj = { ...obj };
  delete newObj[propToRemove];
  return newObj;
}

/////////////////////////////////

function removeProperty(obj, propToRemove) {
  const { [propToRemove]: removedProp, ...newObj } = obj;
  return newObj;
}

// Example usage:
const myObject = { a: 1, b: 2, c: 3 };
const newObjWithoutB = removeProperty(myObject, 'b');
console.log(newObjWithoutB); // { a: 1, c: 3 }
