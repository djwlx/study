function Animal(name) {
  this.name = name;
}
Animal.prototype = {
  say: function () {
    console.log(this.name);
  },
};
function Dog(name, lei) {
  Animal.call(this, name);
  this.lei = lei;
}
Dog.prototype = new Animal();
Dog.prototype.constructor = Dog;
var obj = new Dog("小明", "狗");
obj.say();
