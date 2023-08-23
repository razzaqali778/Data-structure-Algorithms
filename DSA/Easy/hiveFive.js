 // 1086
  function highFive(items) {
    const scoresMap = new Map()

    for (const [id, score] of items) {
      if (!scoresMap.has(id)) {
        scoresMap.set(id, [])
      }
      scoresMap.get(id).push(score)
    }

    const result = []
    for (const [id, scores] of scoresMap) {
      scores.sort((a, b) => b - a)
      const topFiveSum = scores.slice(0, 5).reduce((acc, val) => acc + val, 0)
      const topFiveAverage = Math.floor(topFiveSum / 5)
      result.push([id, topFiveAverage])
    }

    result.sort((a, b) => a[0] - b[0])
    return result
  }

  console.log(
    highFive([
      [1, 91],
      [1, 92],
      [2, 93],
      [2, 97],
      [1, 60],
      [2, 77],
      [1, 65],
      [1, 87],
      [1, 100],
      [2, 100],
      [2, 76],
    ])
  ) 
