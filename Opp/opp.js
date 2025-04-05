class A {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
    let total = 0;
    let arr = [x, y, z];
    this.sum = function () {
      for (let i = 0; i < arr.length; i++) {
        total += arr[i];
      }
      return x + y + z;
    };
  }
}

const A_1 = new A(1, 2, 3);
console.log(A_1);
