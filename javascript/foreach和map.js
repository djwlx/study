var arr = [2, 5, 6, 3, 9, 8, 1];
// map会返回一个新数组，创建一个新的数组，其中每一个元素由调用数组中的每一个元素执行提供的函数得来
var b = arr.map(function (value, index, arrr) {
  return value * 2;
});
// forEach没有返回值，针对每一个元素执行特定的函数,可以更改原数组的值
arr.forEach((item, index) => {
  console.log(this);
  arr[index] = item * 2;
}, this);
console.log(b);
console.log(arr);
