// alert("你也不是我的救赎");
// let a = (arg) => arg;
// console.log(a("hello world"));
let arr = [1, 2, 3, 4, 5, 6];
let arr2 = arr.map((item, index) => {
  // console.log(index);
  return item * 2;
});
console.log(arr2);
console.log(arr);
