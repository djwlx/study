let a = [[1, 2, 3], [4, 5, 6], [7]];
// 返回147,157,167,247,257,267,347,357,367
let arr = [];
a.forEach((item) => {
  if (arr.length === 0) {
    arr = arr.concat(item);
  } else {
    let arr2 = [];
    arr.forEach((item2) => {
      item.forEach((item3) => {
        arr2.push('' + item2 + item3);
      });
    });
    arr = arr2;
  }
});
console.log(arr);
