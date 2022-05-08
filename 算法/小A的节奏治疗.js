var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function getline() {
  return new Promise((resolve, reject) => {
    rl.on('line', (res) => {
      resolve(res);
    });
  });
}
getline().then((ooxx) => {
  getline().then((num) => {
    let arr = [];
    let cishu = parseInt(num);
    for (let i = 0; i < num; i++) {
      arr.push(getline);
    }
    console.log(arr);
    Promise.all(arr).then((res) => {
      console.log(res);
    });
  });
});
