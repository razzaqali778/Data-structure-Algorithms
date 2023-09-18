//77

function combine(n, k) {
  const result = [];

  function backtrack(start, currentCombination) {
    if (currentCombination.length === k) {
      result.push([...currentCombination]);
      return;
    }

    for (let i = start; i <= n; i++) {
      currentCombination.push(i);
      backtrack(i + 1, currentCombination);
      currentCombination.pop();
    }
  }

  backtrack(1, []);
  return result;
}

// Example usage:
const n1 = 4;
const k1 = 2;
const result1 = combine(n1, k1);
console.log(result1); // Output: [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]



