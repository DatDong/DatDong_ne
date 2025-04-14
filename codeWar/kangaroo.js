function kangaroo(x1, v1, x2, v2) {
    if (v1 === v2) return x1 === x2;
  
    const n = (x1 - x2) / (v2 - v1);
    return n >= 0 && Number.isInteger(n);
  }
  console.log(kangaroo(0,3,4,2));