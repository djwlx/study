let obj = {
  a: 1,
  b: 'fsdf',
  c: function () {
    console.log(this.a);
  },
  d: [1, 2, 3, 34, 4],
  e: { jjj: 1 },
};
console.log(Object.values(obj));
console.log(Object.keys(obj));

for (var i in obj.d) {
  console.log(i);
}
