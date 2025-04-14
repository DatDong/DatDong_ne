const maximumThrill = (arr) => {
  let maxWithSame = 0;
  let max1 = -Infinity;
  let max2 = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    maxWithSame = Math.max(maxWithSame, 2 * arr[i]);
    max1 = Math.max(max1, arr[i] - i);
    max2 = Math.max(max2, arr[i] + i);
  }

  return Math.max(maxWithSame, max1 + max2);
};

const atms = [2, 3, 4, 5];
console.log(maximumThrill(atms));
