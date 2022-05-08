// setTimeout(function () {
//   console.log("2");
//   process.nextTick(function () {
//     console.log("3");
//   });
//   new Promise(function (resolve) {
//     console.log("4");
//     resolve();
//   }).then(function () {
//     console.log("5");
//   });
// });
// setTimeout(function () {
//   console.log("9");
//   process.nextTick(function () {
//     console.log("10");
//   });
//   new Promise(function (resolve) {
//     console.log("11");
//     resolve();
//   }).then(function () {
//     console.log("12");
//   });
// });

console.log('hello');
setTimeout(() => {
  console.log('timeout');
});
Promise.reject('promise')
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log('err');
  })
  .finally((res) => {
    console.log('finally');
  });
