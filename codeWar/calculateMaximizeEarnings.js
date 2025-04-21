function maximizeEarnings(earnings, k) {
  const memo = new Array(earnings.length).fill(undefined);

  function tryFrom(day) {
    if (day >= earnings.length) return 0;

    if (memo[day] !== undefined) return memo[day];

    let maxMoney = 0;
    let sum = 0;

    for (let d = 1; d <= k && day + d - 1 < earnings.length; d++) {
      sum += earnings[day + d - 1];
      const next = tryFrom(day + d + 1);
      maxMoney = Math.max(maxMoney, sum + next);
    }

    const skipToday = tryFrom(day + 1);
    maxMoney = Math.max(maxMoney, skipToday);

    memo[day] = maxMoney;
    return maxMoney;
  }

  return tryFrom(0);
}

console.log(maximizeEarnings([60, 70, 80, 40, 80, 90, 100, 20], 3));
