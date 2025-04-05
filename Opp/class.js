// const person = {
//   name: "XYZ",
// };
function changeName(x) {
  x.name = "abc";
  x = new Object();
  x.name = "ggg";
}
let person = new Object();
changeName(person)
console.log(person.name);
