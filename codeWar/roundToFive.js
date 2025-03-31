function roundToFive(numbers) {
  let result = [];
  let num;
  for (let i = 0; i < numbers.length; i++) {
    num = Math.round(numbers[i] / 5) * 5;
    result.push(num);
  }
  return result;
}
console.log(roundToFive([34.5, 56.2, 11, 13]));
