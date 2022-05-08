var divide = function (a, b) {
  if (a == -Math.pow(2, 31) && b === -1) return Math.pow(2, 31) - 1;
  let result = 0;

  let c = Math.abs(a);
  let bc = Math.abs(b);
  while (c >= 0) {
    c = c - bc;
    result += 1;
  }
  result = result - 1;
  if ((a < 0 && b < 0) || (a > 0 && b > 0)) {
    return result;
  } else return -result;
};

let a = divide(9, -3);
console.log(a);
