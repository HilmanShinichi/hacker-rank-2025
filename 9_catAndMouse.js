function catAndMouse(x, y, z) {
  const catA = z - x > 0 ? z - x : x - z;
  const catB = z - y > 0 ? z - y : y - z;

  if (catA < catB) {
    return "Cat A";
  } else if (catB < catA) {
    return "Cat B";
  } else {
    return "Mouse C";
  }
}

console.log(catAndMouse(1, 2, 3));
console.log(catAndMouse(1, 3, 2));
console.log(catAndMouse(33, 86, 59));
