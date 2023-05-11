/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
let fib = (function() {
  let memo = {};

  function f(x, n) {
    let value;

    memo[x] = memo[x] || {};

    if (x in memo && n in memo[x]) {
      value = memo[x][n];
    } else {
      if (n <= 1)
        value = n;
      else
        value = f(x, n - 1) + f(x, n - 2);

      memo[x][n] = value;
    }

    return value;
  }

  return f;
})();



console.log(fib(50));