function node(value) {
  this.value = value;
  this.next = null;
}
// 创建带头结点的链表
function createnode() {
  let head = new node(null);
  let p = head;
  for (let i = 0; i < 10; i++) {
    p.next = new node(i);
    p = p.next;
  }
  p.next = head;
  return head;
}

function judge(list) {
  let p = [];
  let head = list;
  let n = head.next;
  while (n) {
    if (p.includes(n)) {
      console.log('有环');
      console.log(n.value);
      return;
    }
    p.push(n);
    n = n.next;
  }
}
let list = createnode();
judge(list);
