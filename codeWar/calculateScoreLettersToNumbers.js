function lettersToNumbers(s) {
  let sum = 0;
  let lower = "abcdefghijklmnopqrstuvwxyz";
  let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let digits = "0123456789";
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    for (let lowerIndex = 0; lowerIndex < lower.length; lowerIndex++) {
      if (lower[lowerIndex] === char) {
        sum += lowerIndex + 1;
      }
    }
    for (let upperIndex = 0; upperIndex < upper.length; upperIndex++) {
      if (upper[upperIndex] === char) {
        sum += (upperIndex + 1) * 2;
      }
    }
    for (let digitsIndex = 0; digitsIndex < digits.length; digitsIndex++) {
      if (digits[digitsIndex] === char) {
        sum += parseInt(char);
      }
    }
  }
  return sum;
}
console.log(lettersToNumbers("I Love You"));
