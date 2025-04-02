function countDivisors(n) {
  let divisors = [];
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      divisors.push(i);
      if (i !== n / i) {
        divisors.push(n / i);
      }
    }
  }
  return divisors.length;
}
function countPairsInt(diff, nMax) {
  let count = 0;
  for (let i = 1; i < nMax - diff; i++) {
    let divisorsLength = countDivisors(i);
    let divisorsNext = countDivisors(i + diff);
    if (divisorsLength === divisorsNext) {
      count++;
    }
  }
  return count;
}
console.log(countPairsInt(1, 50));
