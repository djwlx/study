class Solution {
  /* Write Code Here */
  bigNumberAdd(number1, number2) {
    let arr1 = number1.split('');
    let arr2 = number2.split('');
    let result = [];
    let is = 0;
    while (1) {
      let a = arr1.pop();
      let b = arr2.pop();
      if (!a && !b) {
        break;
      }
      a = a ? parseInt(a) : 0;
      b = b ? parseInt(b) : 0;
      let he = a + b + is;
      is = 0;
      if (he >= 10) {
        is = 1;
        he = he - 10;
      }
      result.push(he);
    }
    if (is === 1) {
      result.push(1);
    }
    return result.reverse().join('');
  }
}
let res;

let _acmSolution = new Solution();
res = _acmSolution.bigNumberAdd('121312441', '34343442');
console.log(res);
