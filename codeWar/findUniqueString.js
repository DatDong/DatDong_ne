function getLetters(str) {
  str = str.toLowerCase().replace(/\s/g, "");
  let letters = "";
  for (let i = 0; i < str.length; i++) {
    let c = str[i];
    if (!letters.includes(c)) {
      letters += c;
    }
  }
  return letters.split("").sort().join("");
}
function findUniq(arr) {
  let mapped = arr.map(getLetters);
  for (let i = 0; i < mapped.length; i++) {
    if (mapped.indexOf(mapped[i]) === mapped.lastIndexOf(mapped[i])) {
      return arr[i];
    }
  }
}
console.log(findUniq(["abc", "acb", "bac", "foo", "bca", "cab", "cba"]));
