// function node(val) {
//   this.val = val;
//   this.next = null;
// }

const reverselist = (head) => {
  let p = head;
  let pre = null;
  while (p) {
    let next = p.next;
    p.next = pre;
    pre = p;
    p = next;
  }
  return pre;
};
