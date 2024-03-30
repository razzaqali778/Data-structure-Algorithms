 function occuranceMap(str) {
    const map = new Map()

    for (let i = 0; i < str.length; i++) {
      const char = str[i]

      if (map.has(char)) {
        map.set(char, map.get(char) + 1)
      } else {
        map.set(char, 1)
      }
    }
    return map
  }

  const ocuurence = (str) => {
    let obj = {}

    for (let char of str) {
      if (obj[char]) {
        obj[char]++
      } else {
        obj[char] = 1
      }
    }
    return obj
  }
