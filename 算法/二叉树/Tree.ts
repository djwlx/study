// 树结构
//     0
//   /  \
//  1    2
// /\   /\
// 3 4 5  6
export type TreeNode = {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
};
const Tree: TreeNode = {
  val: 0,
  left: {
    val: 1,
    left: {
      val: 3,
      left: null,
      right: null,
    },
    right: {
      val: 4,
      left: null,
      right: null,
    },
  },
  right: {
    val: 2,
    left: {
      val: 5,
      left: null,
      right: null,
    },
    right: {
      val: 6,
      left: null,
      right: null,
    },
  },
};

export default Tree;
