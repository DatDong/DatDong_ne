function myLanguages(results) {
  const values = Object.values(results);
  const keys = Object.keys(results);
  let result = [];
  for (let i = 0; i < values.length; i++) {
    if (values[i] >= 60) result.push(keys[i]);
  }
  for (let i = 0; i < result.length - 1; i++) {
    for (let j = 0; j < result.length - i - 1; j++) {
      if (results[result[j]] < results[result[j + 1]]) {
        let temp = result[j];
        result[j] = result[j + 1];
        result[j + 1] = temp;
      }
    }
  }
  return result;    
}
console.log(myLanguages({"Hindi" : 60, "Greek" : 71, "Dutch" : 93}));
