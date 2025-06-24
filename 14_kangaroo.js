function kangaroo(x1, v1, x2, v2) {
  const X1 = [];
  const X2 = [];

  for (let i = 0; i < 10000; i++) {
    X1.push(x1 + v1 * i);
    X2.push(x2 + v2 * i);
  }

  const check = X1.map((v, i) => v === X2[i]).includes(true);
 
  return check ? "YES" : "NO";
}

console.log(kangaroo(0, 3, 4, 2)); // YES
console.log(kangaroo(0, 2, 5, 3)); // NO


// best pratice
function kangaroo2(x1, v1, x2, v2) {
  if (v1 === v2) return x1 === x2 ? "YES" : "NO";

  const t = (x2 - x1) / (v1 - v2);

  return t >= 0 && Number.isInteger(t) ? "YES" : "NO";
}
