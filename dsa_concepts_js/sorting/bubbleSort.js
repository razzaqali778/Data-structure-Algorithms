const bubbleSort = (arr) => {
  const len = arr.length;

  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
};

const array = [5, 3, 8, 4, 2];
const sortedArray = bubbleSort(array);
console.log(sortedArray);
