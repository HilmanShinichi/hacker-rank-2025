function staircase(n) {
 let result = '';

    for (let i = n; i > 0; i--) {
      result += ' '.repeat(i-1)
        for (let j = n; j >= i; j--) {
            result += '#';
        }
       if (i !== 1) result += '\n';
    }

    console.log(result);
}


// console.log(staircase(6));

staircase(6)