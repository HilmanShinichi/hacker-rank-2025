function getMoneySpent(keyboards, drives, b) {
  const result = [];
  let x, y;

  for (x of keyboards) {
    for (y of drives) {
      result.push(x + y);
    }
  }

  const notEnough = result.every((v) => v > b);

  if (notEnough) {
    return "-1";
  }

  return result
    .filter((v) => v <= b)
    .sort((a, z) => a - z)
    .at(-1);
}

console.log(getMoneySpent([3, 1], [5, 2, 8], 10));
console.log(getMoneySpent([5], [1], 1));
