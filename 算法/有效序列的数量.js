var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let index = 0;
let num = 0;
let str;

rl.on('line', (res) => {
  index++;
  if (index === 1) {
    num = parseInt(res);
  }
  if (index === 2) {
    let resultnum = 0;
    str = res;
    let arr = str.split(' ');
    arr = arr.map((item) => parseInt(item));
    // 截取长度
    for (let i = 2; i <= num; i++) {
      let begin = 0;
      let end = begin + i;
      while (end <= num) {
        let temp = arr.slice(begin, end);
        if (temp.length === 2) {
          resultnum++;
        } else {
          let is = 1;
          let temp2 = temp.slice(1, temp.length - 1);
          temp2.forEach((item) => {
            if (item >= temp[0] && item >= temp[temp.length - 1]) {
            } else {
              is = 0;
            }
          });
          if (is === 1) {
            resultnum++;
          }
        }
        begin += 1;
        end += 1;
      }
    }
    console.log(resultnum);
    rl.close();
  }
});
