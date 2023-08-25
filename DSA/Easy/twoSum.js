// 1 two sum


var twoSum = (nums, target) => {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i];
    } else {
      map.set(nums[i], i);
    }
  }

  return [-1, -1];
};

console.log(twoSum([2, 7, 11, 15], 9));



/// sudo

var twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  return [];
};

console.log(twoSum([2, 7, 11, 15], 9));





