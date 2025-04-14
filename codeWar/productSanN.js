function productSansN(numbers) {
  const n = numbers.length;
  const result = new Array(n).fill(1n);

  let leftProduct = 1n;
  for (let i = 0; i < n; i++) {
    result[i] = leftProduct;
    leftProduct *= BigInt(numbers[i]);
  }

  let rightProduct = 1n;
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= rightProduct;
    rightProduct *= BigInt(numbers[i]);
  }

  return result;
}
console.log(productSansN([1, 2, 3, 4]));
