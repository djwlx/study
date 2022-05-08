import Tree from "./Tree";
import { TreeNode } from "./Tree";
function maxDepth(root: TreeNode | null): number {
  return root ? Math.max(maxDepth(root.left), maxDepth(root.right)) + 1 : 0;
}
maxDepth(Tree);
