let tree = {
  value: 3,
  left: {
    value: 9,
    left: { value: 15, left: null, right: null },
    right: { value: 7, left: null, right: null },
  },
  right: {
    value: 9,
    left: { value: 15, left: null, right: null },
    right: { value: 7, left: null, right: null },
  },
};

function travel(tree, obj) {
  if (tree.left) {
    travel(tree.left, obj);
  }
  if (tree.right) {
    travel(tree.right, obj);
  }
  if (!tree.left && !tree.right) {
    obj.num++;
  }
}
let obj = { num: 0 };
travel(tree, obj);
console.log(obj);
