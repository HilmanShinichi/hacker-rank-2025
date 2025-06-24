function breakingRecords(scores) {
  let high = scores[0];
  let low = scores[0];

  let highCount = 0;
  let lowCount = 0;

  for (let i = 1; i < scores.length; i++) {
    console.log(scores[i]);
    if (scores[i] > high) {
      high = scores[i];
      console.log(high);
      highCount++;
    } else if (scores[i] < low) {
      low = scores[i];
      lowCount++;
    }
  }

  return [highCount,lowCount];
}

console.log(breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]));