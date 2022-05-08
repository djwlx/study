// 题目
// 给定一个数n，规定它为两个数a,b的最小公倍数
// a和b的最大公因数为1，问这个样数对有多少个
// 如 30   1，30  5，6   2，15   3，10   共4对输出4
// 第一行输入为 数的个数
// 下面几行输入为每个数，每行输出为满足这样的数的对数

var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let num = 0;
let cishu = 0;
let input = [];
// 最大公约数
function gcd(a, b) {
  let result = 1;
  let min = a > b ? b : a;
  for (let i = 1; i <= min; i++) {
    if (a % i === 0 && b % i === 0) {
      result = i;
    }
  }
  return result;
}
// 最小公倍数
function lcm(a, b) {
  let result = a * b;
  let max = a > b ? a : b;
  for (let i = max; i < result; i++) {
    if (i % a === 0 && i % b === 0) {
      result = i < result ? i : result;
    }
  }
  return result;
}
let result = [];
rl.on('line', (res) => {
  num++;
  if (num === 1) {
    cishu = parseInt(res);
  }
  if (1 < num && num <= cishu + 1) {
    input.push(res);
  }
  if (num === cishu + 1) {
    input.forEach((item) => {
      let end = 0;
      let numb = parseInt(item);
      for (let i = 1; i <= numb; i++) {
        if (numb % i === 0) {
          let ano = numb / i;
          if (gcd(i, ano) === 1) {
            end++;
          }
        }
      }
      result.push(end / 2);
    });
    result.forEach((item) => {
      console.log(item);
    });
    rl.close();
  }
});
