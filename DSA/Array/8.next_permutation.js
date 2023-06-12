// A permutation of an array of integers is an arrangement of its members into a sequence or linear order.
// For example, the next permutation of arr = [1,2,3] is [1,3,2]


function nextPermutation(arr) {
  let i = arr.length - 2;
  for (; i >= 0 && arr[i] >= arr[i + 1]; i--) {}

  if (i >= 0) {
    let j = arr.length - 1;
    while (arr[j] <= arr[i]) {
      j--;
    }
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

reverse(arr, i + 1);
}



function reverse(arr, start) {
  let end = arr.length - 1;
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
}


console.log(nextPermutation([1, 2, 3]));
