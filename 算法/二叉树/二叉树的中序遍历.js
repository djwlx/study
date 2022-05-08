"use strict";
exports.__esModule = true;
var Tree_1 = require("./Tree");
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
function inorderTraversal(root) {
    var result = [];
    var stack = [];
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
var result = inorderTraversal(Tree_1["default"]);
console.log(result);
