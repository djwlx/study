function findKthBit(n, k) {
  let string = 'abcdefghijklmnopqrstuvwxyz';
  let s1 = 'a';
  const invert = (str) => {
    let arr = str.split('').map((item) => {
      let index = string.split('').findIndex((ele) => {
        return item == ele;
      });
      item = string[25 - index];
      return item;
    });
    return arr.join('');
  };

  const getsn = (strr, num) => {
    if (num === n) return strr;
    s = strr + string[num] + invert(strr).split('').reverse().join('');
    return getsn(s, ++num);
  };
  let aaa = getsn(s1, 1);
  return aaa[k - 1];
}

console.log(findKthBit(4, 11));
