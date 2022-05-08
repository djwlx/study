function mynew(fn, ...arg) {
  let obj = {};
  obj.__proto__ = fn.prototype;
  let result = fn.apply(obj, arg);
  return typeof result === 'object' ? result : obj;
}

function Animal(name) {
  this.name = name;
  this.say = function () {
    console.log(this.name);
  };
}
Animal.prototype.haha = '555';

var a = mynew(Animal, 'dddd');
console.log(a.haha);
a.say();
// console.log(object)
