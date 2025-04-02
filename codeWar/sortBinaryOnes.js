function counByBinaryOnes(num) {
  return num.toString(2).split("1").length - 1;
}

function sortByBinaryOnes(n) {
  for (let i = 0; i < n.length - 1; i++) {
    for (let j = 0; j < n.length - i - 1; j++) {
      let onesA = counByBinaryOnes(n[j]);
      let onesB = counByBinaryOnes(n[j + 1]);

      let lenA = n[j].toString(2).length;
      let lenB = n[j + 1].toString(2).length;

      if(onesA < onesB || onesA === onesB && lenA > lenB || onesA === onesB && lenA === lenB && n[j] > n[j + 1])
      [n[j],n[j+1]] = [n[j+1],n[j]];
    }
  }
  return n;
}

console.log(sortByBinaryOnes([3, 7, 8, 9, 5, 6, 15]));
