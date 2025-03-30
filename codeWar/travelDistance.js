function travelDistance(avgSpeed, travelTime) {
  const KM_PER_MILE = 1.852;
  if (travelTime == 0) return 0;
  const travelHours = travelTime / 60;
  const travelMiles = avgSpeed / travelHours;
  const travelKms = avgSpeed * KM_PER_MILE * travelHours;

  return travelKms;
}
console.log(travelDistance(800, 60));
