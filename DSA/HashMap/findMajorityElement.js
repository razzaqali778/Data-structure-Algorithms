

function findMajorityElement(nums) {
    const count = {};
    let maxKey = null;
    let maxValue = 0;

    for (const num of nums) {
      if (count[num]) {
        count[num]++;
      } else {
        count[num] = 1;
      }
    }

    for (const [key, value] of Object.entries(count)) {
      if (value > maxValue) {
        maxKey = key;
        maxValue = value;
      }
    }

    return maxKey;
  }

  console.log(findMajorityElement([2, 3, 3, 2, 2, 3, 5, 5, 5, 5, 5, 5, 5, 5])); //5


















