var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let num = 0;
let square = 0;
let bei = 0;
let initarr = [];
let resultarr = [];

rl.on('line', (res) => {
  num++;
  if (num === 1) {
    square = parseInt(res.split(' ')[0]);
    bei = parseInt(res.split(' ')[1]);
  }
  if (1 < num && num <= square + 1) {
    initarr.push(res);
  }
  if (num === square + 1) {
    initarr.forEach((item) => {
      let arr = item.split(' ');
      let rowarr = [];
      arr.forEach((item2) => {
        for (let i = 0; i < bei; i++) {
          rowarr.push(item2);
        }
      });
      for (let i = 0; i < bei; i++) {
        resultarr.push(rowarr);
      }
    });
    for (let i = 0; i < resultarr.length; i++) {
      console.log(resultarr[i].join(' '));
    }

    rl.close();
  }
});
