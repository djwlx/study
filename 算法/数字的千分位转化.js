let a = 15649482.155;

let qian = (num) => {
  if (typeof num !== 'number') {
    return num;
  }
  let arr = [];
  let str = num.toString().split('.');
  let rever = str[0].split('').reverse();
  rever.forEach((item, index) => {
    arr.push(item);
    if ((index + 1) % 3 == 0 && index !== rever.length - 1) {
      arr.push(',');
    }
  });
  return arr.reverse().join('') + '.' + str[1];
};

let result = qian(a);
console.log(result);
