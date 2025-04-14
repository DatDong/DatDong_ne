function newAvg(arr, newavg) {
  let total = arr.reduce((acc, num) => acc + num, 0);
  let result = Math.ceil(newavg * (arr.length + 1) - total);
  if (result <= 0) {
    throw new Error("Expected New Average is too low");
  }
  return result;
}
console.log(newAvg([14, 30, 5, 7, 9, 11, 15], 92));
