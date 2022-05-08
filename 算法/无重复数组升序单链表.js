// function ListNode(x) {
//   this.val = x;
//   this.next = null;
// }

function solve(a) {
  let numarr = [];
  a.forEach((item) => {
    let p = item;
    while (p) {
      if (!numarr.includes(p.val)) {
        numarr.push(p.val);
      }
      p = p.next;
    }
  });
  numarr.sort((a, b) => a - b);
  let result = new ListNode(null);
  let head = result;
  numarr.forEach((item) => {
    let node = new ListNode(item);
    result.next = node;
    result = result.next;
  });
  return head.next;
}
