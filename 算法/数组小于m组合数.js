const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function getarr() {
  return new Promise((resolve, reject) => {
    rl.on('line', (str) => {
      resolve(str);
    });
  });
}
async function aa() {
  let str1 = await getarr();
  let max = await getarr();
  let arr = [];
  let num = 0;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== ' ') {
      arr.push(str1[i]);
    }
  }
  arr = str1.split(' ');
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (parseInt(arr[i]) + parseInt(arr[i]) <= parseInt(max)) {
        num += 1;
      }
    }
  }
  console.log(num);
  rl.close();
}
aa();
