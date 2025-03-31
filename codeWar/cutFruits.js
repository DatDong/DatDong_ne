function cutFruits(fruits) {
  let result = [];
  for (let i = 0; i < fruits.length; i++) {
    let fruit = fruits[i];
    if (fruit === "bomb") {
      result.push(fruit);
      continue;
    }
    if (fruit.length > 0) {
      let mid = Math.ceil(fruit.length / 2);
      result.push(fruit.slice(0, mid), fruit.slice(mid));
    } else {
      result.push(fruit);
    }
  }
  return result;
}
console.log(cutFruits(["apple","pear","banana","bomb"]));
