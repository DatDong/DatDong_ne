function partConst(sum, k, num) {
  let count = 0;
  for (let a = 1; a <= sum; a++) {
    if (a === num) {
      continue;
    }
    for (let b = a; b <= sum; b++) {
      if (b === num) {
        continue;
      }
      for (let c = b; c <= sum; c++) {
        if (c === num) {
          continue;
        }
        if (a + b + c === sum && k === 3) {
          count++;
        }
      }
    }
  }
  return count;
}
console.log(partConst(10, 3, 2));
