//Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.You must write an algorithm that runs in O(n) time.

function longestConsecutive(nums) {
  if (nums.length === 0) {
    return 0;
  }

  nums.sort((a, b) => a - b); // Sort the array in ascending order
  let longestStreak = 1;
  let currentStreak = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      // If the current number is not equal to the previous number
      if (nums[i] === nums[i - 1] + 1) {
        // If the current number is the next consecutive number
        currentStreak++;
      } else {
        // If the current number is not part of the current streak
        longestStreak = Math.max(longestStreak, currentStreak);
        currentStreak = 1;
      }
    }
  }

  return Math.max(longestStreak, currentStreak);
}

// Example usage:
const nums = [100, 4, 200, 1, 3, 2];
const result = longestConsecutive(nums);
console.log(result); // Output: 4
