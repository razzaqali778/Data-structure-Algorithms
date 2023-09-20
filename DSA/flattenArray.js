  const flattenArray = (arr) => {
    let res = [];

    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        res = res.concat(flattenArray(arr[i]));
      } else {
        res.push(arr[i]);
      }
    }

    return res;
  };

  console.log(flattenArray([1, [2], [[[[[[[[[[4]]]]]]]]]]]))
