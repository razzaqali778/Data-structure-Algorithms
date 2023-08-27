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
