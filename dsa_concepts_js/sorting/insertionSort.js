const insertionSort = (arr) => {
  const len = arr.length;

  for (let i = 1; i < len; i++) {
    let j = i;
    const temp = arr[i];

    while (j > 0 && arr[j - 1] > temp) {
      arr[j] = arr[j - 1];
      j--;
    }

    arr[j] = temp;
  }

  return arr;
};

const array = [5, 3, 8, 4, 2];
const sortedArray = insertionSort(array);
console.log(sortedArray);
