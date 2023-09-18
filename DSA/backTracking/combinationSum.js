//39


  function combinationSum(candidates, target) {
    const result = [];
    
    function backtrack(start, currentCombination, currentSum) {
      if (currentSum === target) {
        result.push([...currentCombination]);
        return;
      }
      
      if (currentSum > target || start === candidates.length) {
        return;
      }
      
      for (let i = start; i < candidates.length; i++) {
        currentCombination.push(candidates[i]);
        backtrack(i, currentCombination, currentSum + candidates[i]);
        currentCombination.pop();
      }
    }
  
    backtrack(0, [], 0);
    return result;
  }

  console.log(combinationSum([2,3,6,7],7));


