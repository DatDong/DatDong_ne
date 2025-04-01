function maxPossibleScore(obj, arr) {
  let sum = 0;
  let arrObj = Object.keys(obj);
  for (let i = 0; i < arrObj.length; i++) {
    let question = arrObj[i];
    let point = obj[question];
    for (let j = 0; j < arr.length; j++) {
      if (question === arr[j]) {
        point *= 2;
        break;
      }
    }
    sum += point;
  }
  return sum;
}
console.log(maxPossibleScore({ a: 1, b: 2, c: 4 }, ["a", "b", "c"]));
