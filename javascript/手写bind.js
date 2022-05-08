Function.prototype.mybind = function (obj, ...arg) {
  // console.log(arguments);
  if (typeof this !== 'function') {
    return;
  }
  let that = this;
  let fn = function (...args) {
    let self = this instanceof that ? this : that;
    that.apply(obj, arg.concat(args));
  };
  if (this.prototype) {
    fnNop.prototype = this.prototype;
  }

  fnBound.prototype = new fnNop();
  return fn;
};

function a(name) {
  this.name = name;
  // console.log(this.name);
  // console.log(arg);
}
obj = {
  // name: 'hello',
};
let b = a.mybind(obj);
b('fff');
console.log(obj.name);
let c = a.mybind(obj, 'didi');
c();
console.log(obj.name);

let xiaoming = new b('小明');
console.log(xiaoming.name);
console.log(obj.name);
