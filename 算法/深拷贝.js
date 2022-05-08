function deepcopy(obj) {
  let newobj = Array.isArray(obj) ? [] : {};
  for (let i in obj) {
    if (typeof obj[i] === 'object') {
      newobj[i] = deepcopy(obj[i]);
    } else {
      newobj[i] = obj[i];
    }
  }
  return newobj;
}
let obj = {
  a: 10,
  b: [1, 2, 5, 3],
  c: function () {
    console.log('hello');
  },
  d: {
    a: 5,
  },
};

let obj2 = deepcopy(obj);
console.log(obj2);
// obj.d.a = 3;
// console.log(obj2);
