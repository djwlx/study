var a = [1, 2, 3, 4];
var b = [3, 4, 5, 6];
// es6;
// 交集
let intersection = a.filter((v) => b.includes(v));
// 差集
let difference = a.concat(b).filter((v) => !a.includes(v) || !b.includes(v));
// 并集
let bing = [...new Set(a.concat(b))];
console.log(intersection);
console.log(difference);
console.log(bing);
