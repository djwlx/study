/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */
function solve(m, a) {
  let arr = [];
  let p = a;
  while (p) {
    arr.push(p.val);
    p = p.next;
  }
  for (let i = 0; i < m; i++) {
    let tmp = [];
    arr.forEach((item) => {
      if (item % m === a) {
        tmp.push(item);
      }
    });
  }

  let result = [];
  arr.forEach((item) => {
    // let head = null;
    // p = head;
    let p;
    let head = p;
    if (item.length !== 0) {
      for (let i = 0; i > item.length; i++) {
        p = new ListNode(item[i]);
        p = p.next;
      }
      result.push(head);
    } else {
      result.push(new ListNode());
    }
  });
}
module.exports = {
  solve: solve,
};
