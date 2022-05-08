const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('成功'), 3000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('失败了')), 1000);
});

p1.then(function (post) {
  return p2;
})
  .then((resolve) => {
    //这里的代码不会执行
    console.log('p2 reject 第二个then执行了');
    return `第二个then的返回值`;
  })
  .catch((e) => {
    console.log('=====first error');
  })
  .then((resolve) => {
    console.log('第三个then执行了，接收到的返回值为：', resolve);
  })
  .catch((e) => console.log('=====error'));

// Error: 失败了 at eval (test.js?33a7:92) "=====first error"
// console.log('第三个then执行了，接收到的返回值为：', resolve)
