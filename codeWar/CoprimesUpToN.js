function gcd(a, b) {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
}

function coprimes(n) {
  const result = [];

  for (let k = 1; k < n; k++) {
    if (gcd(n, k) === 1) {
      result.push(k);
    }
  }

  return result;
}

console.log(coprimes(2));
