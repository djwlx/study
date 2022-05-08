"use strict";
exports.__esModule = true;
var Tree_1 = require("./Tree");
function pre(root) {
    console.log(root.val);
    if (root.left) {
        pre(root.left);
    }
    if (root.right) {
        pre(root.right);
    }
}
function mid(root) {
    if (root.left) {
        pre(root.left);
    }
    console.log(root.val);
    if (root.right) {
        pre(root.right);
    }
}
// pre(Tree);
mid(Tree_1["default"]);
