// for (var i = 0; i < 10; i++) {
//   let a = i;
//   setTimeout(() => {
//     console.log(a);
//   }, 1000);
// }
// console.log(null instanceof Number);
// let a = 3 || 5;
// let b = 3 & 5;
// let c = 3 && 5;
// console.log(a);
// console.log(b);
// console.log(c);
for (let i = 0; i < 2; i++) {
  setTimeout(function () {
    console.log(i);
  }, 100);
}
for (var i = 0; i < 2; i++) {
  setTimeout(function () {
    console.log(i);
  }, 100);
}
