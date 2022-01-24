function swapHeadAndTail(arr) {
  let middle = [];
  if (arr.length <= 1) return arr;
  if (arr.length % 2 === 0) {
    middle = [];
  } else {
    middle = [arr[Math.floor(arr.length / 2)]];
  }
  if (middle.length !== 0) {
    return arr
      .slice(Math.floor(arr.length / 2) + 1)
      .concat(middle)
      .concat(arr.slice(0, Math.floor(arr.length / 2)));
  }
  return arr
    .slice(Math.floor(arr.length / 2))
    .concat(arr.slice(0, Math.floor(arr.length / 2)));
}

console.log(swapHeadAndTail([1, 2, 3, 4, 5, 6, 7, 8]));
