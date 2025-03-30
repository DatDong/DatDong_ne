const str = "This is an example!";
let arr = str.split(" ");
let reversed = "";
for(let i = 0;i<arr.length;i++){
  reversed += arr[i].split("").reverse().join("");
  if(i < arr.length-1){
    reversed +=" ";
  }
}
console.log(reversed); 
