function tacofy(word) {
  let ingredients = {
    a: "beef",
    o: "beef",
    e: "beef",
    i: "beef",
    u: "beef",
    t: "tomato",
    l: "lettuce",
    c: "cheese",
    g: "guacamole",
    s: "salsa",
  };
  let taco =["shell"];
  let arrStr = word.toLowerCase().split("");
  for (let i = 0; i < arrStr.length; i++) {
    if(ingredients[arrStr[i]]){
       taco.push(ingredients[arrStr[i]]);
    }    
  }
  taco.push("shell");
  return taco;
}
console.log(tacofy("aeousssgg"));


