var removeElements = function (head, val) {
  var i = 0;
  for (i; i < head.length; i++) {
    if (head[i] == val) {
      head.splice(i, 1);
      i = i - 1;
    }
  }
  return head;
};
var result = removeElements([2, 5, 6, 3, 8, 6], 6);
console.log(result);
