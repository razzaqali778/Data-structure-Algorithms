//283

var moveZeroes = (nums) => {
  let [left, right] = [0, 0];

  while (right < nums.length) {
    const swap = nums[right] !== 0;
    if (swap) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
    }
    right++;
  }
  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
