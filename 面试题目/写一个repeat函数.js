// 手写一个repeact()函数，加上下面的代码运行，使每3秒打印一个helloword，总共执行4次

const repeact = function (fn, second, time) {
  return function (arg) {
    for (let i = 1; i <= second; i++) {
      setTimeout(() => {
        fn(arg);
      }, i * time);
    }
  };
};
const repeatFunc = repeact(console.log, 4, 3000);
repeatFunc("helloword");
