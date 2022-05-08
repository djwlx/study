Person.num = 0;
function Person() {
  if (this instanceof Person) {
    this.id = Person.num++;
  } else {
    return {
      id: Person.num++,
    };
  }
}

let a = new Person();
console.log(a);
let b = new Person();
console.log(b);
let c = Person();
console.log(c);
console.log(c instanceof Person);
console.log(a instanceof Person);
