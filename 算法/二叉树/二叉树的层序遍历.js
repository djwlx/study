"use strict";
exports.__esModule = true;
var Tree_1 = require("./Tree");
function getnode(tree) {
    var queen = [tree];
    var result = [];
    while (queen.length > 0) {
        var arr = [];
        var len = queen.length;
        for (var i = 0; i < len; i++) {
            var a = queen.shift();
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
getnode(Tree_1["default"]);
