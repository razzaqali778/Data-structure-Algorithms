const getMax = (arr) => {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};

const countSort = (arr, exp) => {
  const output = new Array(arr.length).fill(0);
  const count = new Array(10).fill(0);

  for (let i = 0; i < arr.length; i++) {
    const digit = Math.floor(arr[i] / exp) % 10;
    count[digit]++;
  }

  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1];
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    const digit = Math.floor(arr[i] / exp) % 10;
    output[count[digit] - 1] = arr[i];
    count[digit]--;
  }

  for (let i = 0; i < arr.length; i++) {
    arr[i] = output[i];
  }
};

const radixSort = (arr) => {
  const max = getMax(arr);

  for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
    countSort(arr, exp);
  }

  return arr;
};

const array = [170, 45, 75, 90, 802, 24, 2, 66];
const sortedArray = radixSort(array);
console.log(sortedArray);
