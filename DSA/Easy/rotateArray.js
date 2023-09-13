function rotateArray(arr, steps) {
  const length = arr.length;
  const rotated = [];
  
  for (let i = 0; i < length; i++) {
    const newIndex = (i + steps) % length;
    rotated[newIndex] = arr[i];
  }
  
  return rotated;
}
