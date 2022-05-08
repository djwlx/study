var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let num = 1,
  result,
  operate;
rl.on('line', (res) => {
  if (num === 1) {
    result = res;
    num++;
  } else {
    operate = res.split(' ');
    let year = result.split(' ')[0].slice(0, 4);
    let month = result.split(' ')[0].slice(5, 7);
    let day = result.split(' ')[0].slice(-2);
    let h = result.split(' ')[1].slice(0, 2);
    let m = result.split(' ')[1].slice(3, 5);
    let s = result.split(' ')[1].slice(-2);
    let ddd=[year,month,day,h,m,s]
    function gettime(){
      let eee=ddd.reverse()
      for(let i=0;i<eee.length;i++){
        
      }
    }
    operate.forEach((item) => {
      let ope = item[0];
      let danwei = item[item.length - 1];
      let shu = parseInt(item.slice(1, -1));
      switch (danwei) {
        case 'W':
          {
            day =
              ope === '-' ? parseInt(day) - shu * 7 : parseInt(day) + shu * 7;
            if (day < 10) {
              day = '0' + day;
            }
          }
          break;
        case 'd':
          {
            day = day === '-' ? parseInt(day) - shu : parseInt(day) + shu;
            if (day < 10) {
              day = '0' + day;
            }
          }
          break;
        case 'h':
          {
            h = h === '-' ? parseInt(h) - shu : parseInt(h) + shu;
            if (h < 10 && h > 0) {
              h = '0' + h;
            }else if(h<0){
              day=(--parseInt(day))<10?'0' + day:day
              h=24+h
            }else if(h>=24){
              day=(++parseInt(day))<10?'0' + day:day
              h=h-24
            }
          }

          break;
        case 'm':
          {
            m = m === '-' ? parseInt(m) - shu : parseInt(m) + shu;
            if (m < 10) {
              m = '0' + m;
            }else if(m<0){
              h=(--parseInt(day))<10?'0' + day:day
              h=24+h
            }else if(h>=24){
              day=(++parseInt(day))<10?'0' + day:day
              h=h-24
            }
          }

          break;
        case 's':
          {
            s = s === '-' ? parseInt(s) - shu : parseInt(s) + shu;
            if (s < 10) {
              s = '0' + s;
            }
          }

          break;
      }
    });

    console.log(year + '-' + month + '-' + day + ' ' + h + ':' + m + ':' + s);
    rl.close();
  }
});
