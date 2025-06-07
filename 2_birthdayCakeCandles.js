function birthdayCakeCandles(candles) {
  const manyCandle = candles.sort((a, b) => a - b).at(-1)
  const countSame = candles.filter((e) => e === manyCandle)?.length


  return countSame
}


console.log(birthdayCakeCandles([3, 2, 1, 3]));