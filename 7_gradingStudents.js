function gradingStudents(grades) {
  const result = [];

  for (const num of grades) {
    if (num < 38) {
      result.push(num);
    }

    if (num >= 38) {
      const kelipatan5 = Math.ceil(num / 5) * 5;
      console.log(kelipatan5);
      if (kelipatan5 - num < 3) {
        result.push(kelipatan5);
      } else {
        result.push(num);
      }
    }
  }

  return result;
}

console.log(gradingStudents([4, 73, 67, 38, 33]));
