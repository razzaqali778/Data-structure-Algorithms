const linearSearch = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // Return the index of the target element
    }
  }
  return -1; // Target element not found
};

const array = [5, 3, 8, 4, 2];
const target = 8;
const index = linearSearch(array, target);
console.log(index);
