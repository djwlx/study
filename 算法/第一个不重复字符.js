var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (res) => {
  let arr = res.split('');
  let isnull = -1;
  for (let i = 0; i < arr.length; i++) {
    let tmp = [...arr];
    tmp.splice(i, 1);
    if (!tmp.includes(arr[i])) {
      console.log(i);
      isnull = 0;
      break;
    }
  }
  if (isnull === -1) {
    console.log(isnull);
  }
  rl.close();
});
