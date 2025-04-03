function partConst(n, k, num) {
  let count = 0;
  for (let a = 1; a <= n; a++) {
    if (a === num) {
      continue;
    }
    for (let b = a; b <= n; b++) {
      if (b === num) {
        continue;
      }
      for (let c = b; c <= n; c++) {
        if (c === num) {
          continue;
        }
        if (a + b + c === n && k === 3) {
          count++;
        }
      }
    }
  }
  return count;
}
console.log(partConst(10, 3, 2));
