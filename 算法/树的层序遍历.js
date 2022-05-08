function node(value) {
  this.val = value;
  this.left = null;
  this.right = null;
}
let root = new node(1);
root.left = new node(2);
root.right = new node(3);
root.left.left = new node(4);
root.left.right = new node(5);
root.right.right = new node(6);

function getnode(root) {
  let queen = [root];
  let result = [];
  while (queen.length > 0) {
    let arr = [];
    let len = queen.length;
    for (let i = 0; i < len; i++) {
      let tmp = queen.shift();
      arr.push(tmp.val);
      if (tmp.left) {
        queen.push(tmp.left);
      }
      if (tmp.right) {
        queen.push(tmp.right);
      }
    }
    result.push(arr);
  }
  return result;
}
console.log(getnode(root));
