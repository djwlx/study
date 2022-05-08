import Tree from "./Tree";
import { TreeNode } from "./Tree";
// 递归
// function inorderTraversal(root: TreeNode | null): number[] {
//   let result: number[] = [];
//   function travel(arr: number[], root: TreeNode): void {
//     if (root == null) {
//       return;
//     }
//     travel(arr, root.left);
//     arr.push(root.val);
//     travel(arr, root.right);
//   }
//   travel(result, root);
//   return result;
// }
// 迭代
function inorderTraversal(root: TreeNode | null): number[] {
  let result: number[] = [];
  let stack: TreeNode[] = [];
  while (root != null || stack.length != 0) {
    while (root != null) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    result.push(root.val);
    root = root.right;
  }
  return result;
}

let result: number[] = inorderTraversal(Tree);
console.log(result);
