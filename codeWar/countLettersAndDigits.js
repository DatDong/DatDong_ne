function countLettersAndDigits(input) {
  let count = 0;
  let arrSplit = input.split("");
  for (let i = 0; i < arrSplit.length; i++) {
    let char = arrSplit[i];
    if (
      (char >= "a" && char <= "z") ||
      (char >= "A" && char <= "Z") ||
      (char >= "0" && char <= "9")
    ) {
      count++;
    }
  }
  return count;
}
console.log(countLettersAndDigits("%.dAM&~ !B#TS"));
