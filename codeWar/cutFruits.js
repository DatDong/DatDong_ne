function cutFruits(fruits) {
  const fruitsName = new Set(["apple", "banana", "pear", "grape", "peach", "plum", "cherry", "mango", "orange",
    "watermelon", "cantaloupe", "apricot", "coconut", "pineapple", "blueberry", "pitaya", "hawthorn",
    "pomegranate", "jujube", "persimmon", "mangosteen", "ginkgo", "lemon", "durian", "tomato","litchi","carambola", "fig"]);
  let result = [];
  for (let i = 0; i < fruits.length; i++) {
    let fruit = fruits[i];
    if(!fruitsName.has(fruit)){
      result.push(fruit);
      continue;
    }
    if (fruit.length >= 3) {
      let mid = Math.ceil(fruit.length / 2);
      result.push(fruit.slice(0, mid), fruit.slice(mid));
    } else {
      result.push(fruit);
    }
  }
  return result;
}
console.log(cutFruits(["kodeksx","carambola","grape","cantaloupe","ball","jujube","ball","pomegranate","blueberry","glassball"]));
