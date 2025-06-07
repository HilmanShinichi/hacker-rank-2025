function compareTriplets(a, b) {
  let bob = 0;
  let alice = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] < b[i]) {
      bob += 1;
    } else if (a[i] === b[i]) {
      bob += 0;
    } else {
      alice += 1;
    }
  }

  return [alice, bob];
}

// console.log(compareTriplets([17, 28, 30],[99, 16, 8]));
console.log(compareTriplets([5, 6, 7], [3, 6, 10]));
