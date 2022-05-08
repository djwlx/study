function replace(a, b, c) {
  var len = b.length;
  for (var i = 0; i < a.length; i++) {
    var tamp = "";
    if (a.length - i >= len) {
      for (var j = 0; j < len; j++) {
        tamp = tamp + a[i + j];
      }
      if (tamp === b) {
        var front = "";
        var end = "";
        for (var l = 0; l < i; l++) {
          front = front + a[l];
        }
        for (var o = i + len; o < a.length; o++) {
          end = end + a[o];
        }
        a = front + c + end;
      }
    }
  }
  return a;
}
a = "bcadefgde";
b = "def";
c = "cfffff";
console.log(replace(a, b, c));
console.log(a.replace(b, c));
