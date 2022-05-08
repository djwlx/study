function Stack(arr) {
  this.value = arr;
  Object.defineProperty(this, 'length', {
    get: function () {
      return this.value.length;
    },
  });
}
Stack.prototype.add = function (val) {
  this.value.push(val);
};
Stack.prototype.delete = function () {
  return this.value.pop();
};
let a = new Stack([1, 2, 3]);
a.add(4);
a.delete();
console.log(a.length);
// let obj = {};
// var count = 1;
// Object.defineProperty(obj, 'name', {
//   value: count,
//   // enumerable: true,
//   // writable: true,
//   get: function () {
//     return value + 1;
//   },
// });
// console.log(obj.name);
// console.log(obj.name);
