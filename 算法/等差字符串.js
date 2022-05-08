var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let num = 0;
let ci = 0;
let arr = [];

rl.on('line', (res) => {
  num++;
  if (num === 1) {
    ci = parseInt(res);
  }
  if (num > 1 && num <= ci + 1) {
    arr.push(res);
  }
  if (num === ci + 1) {
    let result = [];
    arr.forEach((item) => {
      let obj = {};
      for (let i = 0; i < item.length; i++) {
        if (item[i] in obj) {
          obj[item[i]]++;
        } else {
          obj[item[i]] = 1;
        }
      }
      let numarr = [];
      for (let i in obj) {
        numarr.push(obj[i]);
      }
      numarr.sort((a, b) => a - b);
      let cha = numarr[1] - numarr[0];
      let isdeng = true;
      numarr.forEach((item, index) => {
        if (index < numarr.length - 1) {
          if (numarr[index + 1] - item !== cha) {
            isdeng = false;
          }
        }
      });
      result.push(isdeng ? 'Yes' : 'No');
    });
    result.forEach((item) => {
      console.log(item);
    });
  }
});
