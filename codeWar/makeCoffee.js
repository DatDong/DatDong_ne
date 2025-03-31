function howMuchCoffee(events) {
  if (!events || events.length === 0) {
    return 0;
  }
  let countCoffee = 0;
  const validEvents = ["cw", "dog", "cat", "movie"];
    for (let i = 0; i < events.length; i++) {
        if(!validEvents.includes(events[i].toLowerCase())){
            continue;
        }
        if(events[i] === events[i].toLowerCase()){
            countCoffee ++;
        }
        else if(events[i] === events[i].toUpperCase()){
            countCoffee +=2;
        }
    }
    return countCoffee > 3 ? "You need extra sleep" : countCoffee;
}


// howMuchCoffee(["CW", "cw", "other"]);
console.log(howMuchCoffee(["CW", "cw", "other"])); //3 
// console.log(howMuchCoffee([]));
