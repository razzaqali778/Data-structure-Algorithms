//179

function largestNumber(arr) {
  let largest = arr
    .map((e) => e.toString())
    .sort((x, y) => y + x - (x + y))
    .join("");

  return largest[0] === "0" ? "0" : largest;
}
console.log(largestNumber([10, 2]));
