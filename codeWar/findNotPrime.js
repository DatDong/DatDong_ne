function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function notPrimes(a, b) {
  let result = [];
  for (let i = a; i < b; i++) {
    let str = i.toString();
    let valiDigits = true;
    for (let j = 0; j < str.length; j++) {
      let digit = str[j];
      if (digit !== "2" && digit !== "3" && digit !== "5" && digit !== "7") {
        valiDigits = false;
        break;
      }
    }
    if (!valiDigits) {
      continue;
    }
    if (!isPrime(i)) {
      result.push(i);
    }
  }
  return result;
}
console.log(notPrimes(2, 50));
