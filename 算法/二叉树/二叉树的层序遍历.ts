import Tree from "./Tree";
import { TreeNode } from "./Tree";

function getnode(tree: TreeNode) {
  let queen: TreeNode[] = [tree];
  let result: number[][] = [];
  while (queen.length > 0) {
    let arr: number[] = [];
    let len: number = queen.length;
    for (let i = 0; i < len; i++) {
      let a: TreeNode = queen.shift();
      arr.push(a.val);
      if (a.left) {
        queen.push(a.left);
      }
      if (a.right) {
        queen.push(a.right);
      }
    }
    result.push(arr);
  }
  console.log(result);
}

getnode(Tree);
