// 初步封装
var currying = function (fn) {
  // args 获取第一个方法内的全部参数
  var args = Array.prototype.slice.call(arguments, 1);
  return function () {
    // 将后面方法里的全部参数和args进行合并
    var newArgs = args.concat(Array.prototype.slice.call(arguments));
    // 把合并后的参数通过apply作为fn的参数并执行
    return fn.apply(this, newArgs);
  };
};
function add(a, b) {
  return a + b;
}
let a = currying(add, 2, 3);
let ddd = a(3);
console.log(ddd);
