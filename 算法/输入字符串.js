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
getline().then((name) => {
  getline()
    .then((str) => {
      let num = 0;
      let leftnum = 0;
      while (1) {
        let haveall = 1;
        let deletearr = [];
        for (let i = 0; i < name.length; i++) {
          let index = str.indexOf(name[i]);
          if (index !== -1) {
            let arr = str.split('');
            let deleteitem = arr.splice(index, 1);
            str = arr.join('');
            deletearr.push(deleteitem);
          } else {
            haveall = 0;
            leftnum = str.length;
          }
        }
        if (haveall === 0) {
          str = str + deletearr.join('');
          break;
        }
        num++;
      }
      let newarr = [];
      for (let i = 0; i < str.length; i++) {
        if (!newarr.includes(str[i])) {
          newarr.push(str[i]);
        }
      }
      console.log(num, newarr.length);
    })
    .finally(() => {
      rl.close();
    });
});
