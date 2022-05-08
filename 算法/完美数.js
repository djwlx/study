var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let num = 0;
let result = [];
let input = [];
let len = 0;

rl.on('line', (res) => {
  num++;
  if (num === 1) {
    len = parseInt(res);
  }
  if (1 < num && num <= len + 1) {
    input.push(res);
  }
  if (num === len + 1) {
    input.forEach((item) => {
      let str = item;
      let tmp = '';
      let hehe = 0;
      if (item.includes('0')) {
        hehe = parseInt(item);
        while (hehe.toString().includes('0')) {
          hehe--;
        }
        str = hehe.toString();
      }

      for (let i = 0; i < str.length; i++) {
        let n = parseInt(str[i]);
        if (1 <= n && n <= 3) {
          tmp = tmp + n;
        } else {
          tmp = tmp + '3';
        }
      }
      console.log(tmp);
    });
    rl.close();
  }
});
