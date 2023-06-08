//Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:
// 0 <= a, b, c, d < n
// a, b, c, and d are distinct.
// nums[a] + nums[b] + nums[c] + nums[d] == target
// You may return the answer in any order.
function fourSum(nums, target) {
  const results = [];
  nums.sort((a, b) => a - b); // Sort the array in ascending order

  for (let i = 0; i < nums.length - 3; i++) {
    // Skip duplicates for the first number
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    for (let j = i + 1; j < nums.length - 2; j++) {
      // Skip duplicates for the second number
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        continue;
      }

      let left = j + 1;
      let right = nums.length - 1;

      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right];

        if (sum === target) {
          results.push([nums[i], nums[j], nums[left], nums[right]]);

          // Skip duplicates for the third and fourth numbers
          while (left < right && nums[left] === nums[left + 1]) {
            left++;
          }
          while (left < right && nums[right] === nums[right - 1]) {
            right--;
          }

          left++;
          right--;
        } else if (sum < target) {
          left++;
        } else {
          right--;
        }
      }
    }
  }

  return results;
}

// Example usage:
const nums = [1, 0, -1, 0, -2, 2];
const target = 0;

const result = fourSum(nums, target);
console.log(result);
