function isNormalizedArray(arr) {
  let temp = [...arr];
  let result = 0;
  let num = 100;
  while (num > 0) {
    temp.forEach((item) => {
      result += item * item;
    });
    if (result === 1) {
      return true;
    } else {
      temp = result
        .toString()
        .split('')
        .map((item) => parseInt(item));
    }
    result = 0;
    num--;
  }
  return false;
}
let a = isNormalizedArray([2]);
console.log(a);
