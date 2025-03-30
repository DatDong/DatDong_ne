function countZero(n) {
  let count = 0;
  while (n > 0) {
    if (n % 10 === 0) {
      count++;
    }
    n = Math.floor(n / 10);
  }
  return count;
}
function countZeros(n) {
  let count = 0;
  for (let i = 1; i <= n; i ++) {
    count += countZero(i);
  }
  return count;
}
console.log(countZeros(200));

