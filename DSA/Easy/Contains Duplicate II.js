
//219


function containsNearbyDuplicate(nums, k) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length && j <= i + k; j++) {
      if (nums[i] === nums[j]) {
        return true;
      }
    }
  }
  return false;
}

// Example 1:
const nums1 = [1, 2, 3, 1];
const k1 = 3;
console.log(containsNearbyDuplicate(nums1, k1)); // Output: true

// Example 2:
const nums2 = [1, 0, 1, 1];
const k2 = 1;
console.log(containsNearbyDuplicate(nums2, k2)); // Output: true






