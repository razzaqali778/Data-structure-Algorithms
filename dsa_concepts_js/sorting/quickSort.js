
const quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
};


const unsortedArray = [5, 2, 9, 1, 5, 6];
const sortedArray = quickSort(unsortedArray);
console.log(sortedArray); // Output: [1, 2, 5, 5, 6, 9]













//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const quickSort = (arr, low = 0, high = arr.length - 1) => {
  if (low < high) {
    const pivotIndex = partition(arr, low, high);
    quickSort(arr, low, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, high);
  }

  return arr;
};

const partition = (arr, low, high) => {
  const pivot = arr[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
};

const array = [5, 3, 8, 4, 2];
const sortedArray = quickSort(array);
console.log(sortedArray);

















