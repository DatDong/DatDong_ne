function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
function divisors(integer) {
  let result = [];
  for (let i = 2; i <= Math.sqrt(integer); i++) {
    if (integer % i === 0) {
      result.push(i);
      if (i !== integer / i) {
        result.push(integer / i);
      }
    }
  }
  if (result.length === 0) {
    return `${integer} is prime`;
  } else {
    return bubbleSort(result);
  }
}
console.log(divisors(50));
