 function getValueByPath(obj, path) {
    const keys = path.split('.')
    let current = obj

    for (const key of keys) {
      if (current[key] !== undefined) {
        current = current[key]
      } else {
        return null
      }
    }

    return current
  }

  const obj = {
    a: '1',
    b: {
      c: 'str',
    },
    d: [1, 2],
    e: {
      f: {
        g: {
          k: 120,
        },
      },
    },
  }

  console.log(getValueByPath(obj, 'e.f.g.k')) // Outputs: 120
  console.log(getValueByPath(obj, 'b.c')) // Outputs: 'str'
  console.log(getValueByPath(obj, 'd.0')) // Outputs: 1
  console.log(getValueByPath(obj, 'x.y')) // Outputs: null
