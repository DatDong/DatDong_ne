function howMuchCoffee(events) {
  if (!events || events.length === 0) {
    return 0;
  }
  let coffeeCount = 0;
  const validEvents = ["cw", "dog", "cat", "movie"];
  for (let i = 0; i < events.length; i++) {
    if (!validEvents.includes(events[i].toLowerCase())) {
      continue;
    }
    if (events[i] === events[i].toLowerCase()) {
      coffeeCount++;
    } else if (events[i] === events[i].toUpperCase()) {
      coffeeCount += 2;
    }
  }
  return coffeeCount > 3 ? "You need extra sleep" : coffeeCount;
}
console.log(howMuchCoffee(["CW", "cw", "other"]));