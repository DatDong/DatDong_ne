function pendulum(values) {
  values.sort((a, b) => a - b);
  let result = [];
  for (let i = 0; i < values.length; i++) {
    if (i % 2 == 0) {
      result.unshift(values[i]);
    } else {
      result.push(values[i]);
    }
  }
  return result;
}
let test = [6, 6, 8, 5, 10];
console.log(pendulum(test));
