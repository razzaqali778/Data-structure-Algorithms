  function romanToInt(s) {
    const romanNumerals = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };
    let res = 0;
    let prev = 0;

    for (let i = 0; i < s.length; i++) {
      let curr = romanNumerals[s[i]];
      curr < prev ? (res -= curr) : (res += curr);

      prev = curr;
    }

    return res;
  }

  console.log(romanToInt("MCMXCIV"));
