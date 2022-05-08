let tree = [
  {
    id: 1,
    name: '小明',
    children: [
      {
        id: 11,
        name: '李好',
        children: [{ id: 111, name: '' }],
      },
      {
        id: 12,
        name: '',
      },
      {
        id: 13,
        name: '张就',
        children: [{ id: 131, name: '王小王' }],
      },
    ],
  },
  {
    id: 2,
    name: '',
    // children: [],
  },
];
// 例：删除id为12和111的节点
// 删除树型结构中名字为空且没有子节点的节点
function filterTree(data) {
  var newTree = data.filter((x) => {
    if (!x.children && x.name === '') {
      return false;
    } else {
      return true;
    }
  });
  newTree.forEach((x) => x.children && (x.children = filterTree(x.children)));
  return newTree;
}
let a = filterTree(tree);
console.log(a);
// console.log(tree.filter((e) => e.children && e.name !== ''));
