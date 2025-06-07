function miniMaxSum(arr) {
  const num = arr.sort((a, b) => a - b)
  const min = num.slice(0, -1).reduce((a, b) => a + b)
  const max = num.slice(1).reduce((a, b) => a + b)
  console.log(`${min} ${max}`);
}

console.log(miniMaxSum([1, 3, 5, 7, 9]));