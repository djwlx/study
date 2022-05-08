// 小程最近沉迷一款游戏。这款游戏每天都会发布n个日常任务，对于第i (1<=i<=n)个任务，小程可以选择使用ai点体力来完成它，或者直接花费bi点金钱快速完成。小程今天打开游戏，发现自己的体力值还剩k点可以使用，请问他完成这n个日常任务至少需要花费多少点金钱？

// 例如，假设今天发布了3个任务，小程有6点体力，第一个任务可以花费3点体力或2点金钱完成，第二个任务可以花费6点体力或4点金钱完成，第三个任务可以花费2点体力或3点金钱完成。小程可以选择用5点体力完成第一个和第三个任务，再用4点金钱完成第二个任务；或者用6点体力完成第二个任务，再用5点金钱完成第一个和第三个任务；等等。可以发现最优方案至少需要4点金钱。

// 输入描述
// 第一行是两个空格隔开整数n，k，分别表示有n个日常任务，和小程还剩余的体力值k。

// 接下来n行，第i行两个数ai和bi，空格隔开，表示完成这个日常任务需要使用ai点体力或花费bi点金钱快速完成。

// 输出描述
// 一行一个数，表示完成n个日常任务所需花费的最少金钱。

// 样例输入
// 5 5
// 2 5
// 3 10
// 1 10
// 3 8
// 1 2
// 样例输出
// 13

// 提示
// 1<=n<=100，1<=k<=1000，1<=ai,bi<=300

// 样例解释

// 最优方式是：小程选择花费5点体力完成第2、3、5个任务，剩下的第1、4个任务用5+8=13点金钱来完成。
var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let num = 0;
let task = [];
let ci = 0;
let ti = 0;

rl.on('line', (res) => {
  num++;
  if (num === 1) {
    let ss = res.split(' ');
    ci = parseInt(ss[0]);
    ti = parseInt(ss[1]);
  }
  if (1 < num && num <= ci + 1) {
    task.push(res);
  }
  if (num === ci + 1) {
    let minmoney = 0;
    task.forEach((item) => {
      minmoney += parseInt(item.split(' ')[1]);
    });
    const f = (arr) =>
      arr.reduce(
        (prev, next) => [...prev, ...prev.map((item) => [next, ...item])],
        [[]]
      );
    // 所有可能性
    let all = f(task).slice(1);
    // 计算每次花费的体力和钱
    all.forEach((ele) => {
      // 计算每次需要花费的体力
      let he = 0;
      ele.forEach((item) => {
        he += parseInt(item.split(' ')[0]);
      });
      // 如果比体力小
      if (he <= ti) {
        // 获取剩下的任务
        let next = task.filter((item1) => {
          let istrue = true;
          ele.forEach((item) => {
            if (item1 === item) {
              istrue = false;
            }
          });
          return istrue;
        });
        // 计算剩下的任务所需要的钱
        let qian = 0;
        next.forEach((item) => {
          qian += parseInt(item.split(' ')[1]);
        });
        if (qian < minmoney) {
          minmoney = qian;
        }
      }
    });
    console.log(minmoney);
  }
});
