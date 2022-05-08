import Tree from "./Tree";
import { TreeNode } from "./Tree";

function pre(root: TreeNode) {
  console.log(root.val);
  if (root.left) {
    pre(root.left);
  }
  if (root.right) {
    pre(root.right);
  }
}
function mid(root: TreeNode) {
  if (root.left) {
    pre(root.left);
  }
  console.log(root.val);
  if (root.right) {
    pre(root.right);
  }
}
// pre(Tree);
mid(Tree);
