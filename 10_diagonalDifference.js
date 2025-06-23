function diagonalDifference(arr) {
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length; i++) {
    left.push(arr[i][i]);
    right.push(arr[i][arr.length - 1 - i]);
  }

  const sum = Math.abs(
    left.reduce((a, b) => a + b, 0) - right.reduce((a, b) => a + b, 0)
  );

  return sum;
}

console.log(
  diagonalDifference([
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12],
  ])
);
