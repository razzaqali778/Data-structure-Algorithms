function arrayToObject(array) {
  let obj = {};

  for (let i = 0; i < array.length; i++) {
    let currentObject = array[i];
    
    for (let key in currentObject) {
      obj[key] = currentObject[key];
    }
  }

  return obj;
}

const arrayOfObjects = [
  { name: "Alice", age: 25 },
  { city: "New York", country: "USA" },
];

const singleObject = arrayToObject(arrayOfObjects);
console.log(singleObject);
