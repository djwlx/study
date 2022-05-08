var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let arr = [];
rl.on('line', function (item) {
  arr.push(item);
  if (arr.length === 2) {
    let arr1 = arr[0];
    let arr2 = arr[1];
    arr1 = arr1.split(',');
    arr2 = arr2.split(',');
    let result = [];
    arr1.concat(arr2).forEach((ele) => {
      if (!result.includes(ele)) {
        result.push(ele);
      }
    });
    result = result.map((item) => {
      return parseInt(item);
    });
    result.sort((a, b) => a - b);
    console.log(result.join(','));
    rl.close();
  }
});
