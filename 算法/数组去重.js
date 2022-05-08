var arr = [1, 5, 9, 6, 3, 2, 5, 4, 87, 9, 5, 6, 3, 0];
// 1.es6新数据结构,成员值都是唯一没有重复
// console.log([...new Set(arr)]);
// 2.利用js方法
let newarr = [];
for (let i = 0; i < arr.length; i++) {
  let item = arr[i];
  let args = arr.slice(i + 1);
  if (!args.includes(item)) {
    newarr.push(item);
  }
}
console.log(arr);
console.log(newarr);
// arr.splice(1, 1, 1);
// let a = arr.slice(1, 1);
// let b = a.split();
// console.log(b);
// let d = a.findIndex((i) => i == '3');
// console.log(d);
