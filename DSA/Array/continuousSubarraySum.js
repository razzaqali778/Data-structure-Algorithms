//523


  function hasGoodSubArray(nums, k) {
    const n = nums.length;

    for (let i = 0; i < n; i++) {
      let sum = 0;

      for (let j = i; j < n; j++) {
        sum += nums[j];

        if (j - i >= 1 && sum % k === 0) {
          return true;
        }
      }
    }

    return false;
  }

  console.log(hasGoodSubArray([23, 2, 4, 6, 7], 6)); //true


