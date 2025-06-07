function plusMinus(arr) {
  const temp = [];
  const positive = arr.filter((e) => e > 0)?.length;
  const negative = arr.filter((e) => e < 0)?.length;
  const zero = arr.filter((e) => e === 0)?.length;
  const pembagi = arr.length;

  temp.push(positive);
  temp.push(negative);
  temp.push(zero);

  let result = "";
  for (const num of temp) {
    const calculate = num / pembagi;
    result += `${calculate.toFixed(6)}\n`;
  }

  console.log(result);
}

// console.log(plusMinus([-4, 3, -9, 0, 4, 1]));
console.log(plusMinus([0, 100, 35, 0, 94, 40, 42, 87, 59, 0]));
