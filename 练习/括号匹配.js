// var isValid = function (s) {
//   let obj = {
//     '(': ')',
//     '{': '}',
//     '[': ']',
//   };
//   let stack = [];
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === '(') {
//       stack.push(s[i]);
//     } else if (s[i] === '{') {
//       stack.push(s[i]);
//     } else if (s[i] === '[') {
//       stack.push(s[i]);
//     } else {
//       let a = stack.pop();
//       if (!a) {
//         return false;
//       }
//       if (obj[a] !== s[i]) {
//         return false;
//       }
//     }
//   }
//   if (stack.length === 0) {
//     return true;
//   } else {
//     return false;
//   }
// };
// let a = isValid('()]{}');
// console.log(a);
let s = 'dsfnlsjnf';
for (let i of s) {
  console.log(i);
}
