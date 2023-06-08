///////////
//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.You may assume that each input would have exactly one solution, and you may not use the same element twice.You can return the answer in any order

function twoSum(nums, target) {
  const map = new Map(); // Map to store the complement value and its index

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map.has(complement)) {
      // If complement is found in the map, return the indices
      return [map.get(complement), i];
    }

    // Store the current number and its index in the map
    map.set(nums[i], i);
  }

  // No solution found
  return [];
}

// Example usage:
const nums = [2, 7, 11, 15];
const target = 9;

const result = twoSum(nums, target);
console.log(result); // Output: [0, 1]
