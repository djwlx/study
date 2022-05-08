/**
 * @description 柯里化函数
 * @param {Function} fn 传入的需要运算的函数
 * @return {Function} 返回函数
 */
let curry = function (fn) {
  // args保存需要复用的参数
  let reuseArgs = Array.prototype.slice.call(arguments, 1);
  return function () {
    // selfArgs是自身参数
    let selfArgs = Array.prototype.slice.call(arguments);
    // 合并自身参数和复用的参数
    let mergeArgs = reuseArgs.concat(selfArgs);
    // 计算返回结果
    return fn.apply(null, mergeArgs);
  };
};
/**
 * @description 求和
 * @return {Number} 求和的值
 */
let add = function () {
  let args = Array.prototype.slice.call(arguments);
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
};
// 3, 4, 5是固定不变，可复用的参数
let curryAdd = curry(add);
curryAdd(6)(6); // 结果为18
curryAdd(7, 8); // 结果为27
console.log(curryAdd(6));
