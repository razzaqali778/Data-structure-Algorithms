//189

function rotate(nums, k) {
 
  const n = nums.length;

  // Handle the case where k is greater than the array length
  k %= n;

  // Reverse the entire array
  reverse(nums, 0, n - 1);

  // Reverse the first k elements
  reverse(nums, 0, k - 1);

  // Reverse the remaining elements
  reverse(nums, k, n - 1);

  return nums;
}

function reverse(nums, start, end) {
  debugger;
  while (start < end) {
    const temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
    start++;
    end--;
  }
}
console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));

