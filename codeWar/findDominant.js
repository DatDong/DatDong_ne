function solve(arr) {
  let result = [];
  let max = -Infinity;
  for (let i = arr.length; i >= 0; i--) {
    if (arr[i] > max) {
      max = arr[i];
      result.unshift(arr[i]);
    }
  }
  return result;
}
console.log(solve([16, 17, 14, 3, 14, 5, 2]));
