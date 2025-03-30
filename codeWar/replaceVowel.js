function replace(s) {
  let arr = s.split("");
  for (let i = 0; i < arr.length; i++) {
    if ("aeiouAEIOU".includes(arr[i])) {
      arr[i] = "!";
    }
  }
  return arr.join("");
}
console.log(replace("Hi!"));
