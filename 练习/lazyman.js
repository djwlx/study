function Lazyman(name) {
  let quene = [];
  let first = function () {
    console.log('我是' + name);
    next();
  };
  quene.push(first);
  const next = () => {
    let a = quene.shift();
    a && a();
  };
  setTimeout(() => {
    next();
  });
  return {
    eat: function (food) {
      quene.push(function () {
        console.log('吃了' + food);
        next();
      });
      return this;
    },
    sleep: function (time) {
      quene.push(function () {
        console.log('睡了' + time + '秒');
        setTimeout(() => {
          next();
        }, time * 1000);
      });
      return this;
    },
  };
}
let a = Lazyman('小明').eat('苹果');
console.log(a);
