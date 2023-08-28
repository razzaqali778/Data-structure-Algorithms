//169


var majorityElement = function (nums) {
    const occuranceOFElement = new Map()

    for (let i = 0; i < nums.length; i++) {
      if (occuranceOFElement.has(nums[i])) {
        let occurance = occuranceOFElement.get(nums[i])
        occuranceOFElement.set(nums[i], occurance + 1)
      } else {
        occuranceOFElement.set(nums[i], 1)
      }
    }

    for (let [key, value] of occuranceOFElement) {
      if (value > nums.length / 2) return key
    }
  }
  console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]))



---------->>>>>>>>>>>>>>>>>>>>Shorthand <<<<<<<<<<<<<<<<<<<------------------


var majorityElement = function (nums) {
  const occuranceOfElement = new Map();

  for (const num of nums) {
    occuranceOfElement.set(num, (occuranceOfElement.get(num) || 0) + 1);
  }

  for (let [key, value] of occuranceOfElement) {
    if (value > nums.length / 2) return key;
  }
};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));













    
