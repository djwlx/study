// [0,1,3,4]
var lastRemaining = function (n, m) {
  // 生成数组
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(i);
  }
  let privot = 0;
  while (arr.length !== 1) {
    let index = (privot + m - 1) % arr.length;
    privot = index;
    arr.splice(index, 1);
  }
  return arr[0];
};
let result = lastRemaining(5, 3);
console.log(result);
