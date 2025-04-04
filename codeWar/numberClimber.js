function climb(n) {
  let result = [];
  while (n >= 1) {
    result.push(n);
    if (n == 1) break;
    n = Math.floor(n / 2);
  }
  return result.reverse();
}
console.log(climb(13));
