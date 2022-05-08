let num = 0;
let arr = [];
let ci = 0;
let res;
while ((res = read_line())) {
  num++;
  if (num === 1) {
    ci = parseInt(res);
  }
  if (1 < num && num <= ci + 1) {
    arr.push(res);
  }
  if (num === ci + 1) {
    let result = [];
    arr.forEach((item) => {
      if (item.length !== 14) {
        result.push('Wrong');
      } else {
        let time = 'Wrong';
        let year = item.slice(0, 4);
        let month = item.slice(4, 6);
        let day = item.slice(6, 8);
        let h = item.slice(8, 10);
        let m = item.slice(10, 12);
        let s = item.slice(12);
        if (2000 <= parseInt(year) && parseInt(year) <= 2021) {
          if (1 <= parseInt(month) && parseInt(month) <= 12) {
            if (1 <= parseInt(day) && parseInt(day) <= 20) {
              if (0 <= parseInt(h) && parseInt(h) <= 23) {
                if (0 <= parseInt(m) && parseInt(m) <= 59) {
                  if (0 <= parseInt(s) && parseInt(s) <= 59) {
                    time =
                      year +
                      '.' +
                      month +
                      '.' +
                      day +
                      ' ' +
                      h +
                      ':' +
                      m +
                      ':' +
                      s;
                  }
                }
              }
            }
          }
        }
        result.push(time);
      }
    });
    result.forEach((item) => {
      console.log(item);
    });
    break;
  }
}
