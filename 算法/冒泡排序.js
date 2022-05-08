function maopao(arry) {
  var swap;
  // 外循环控制回合
  for (var i = 0; i < arry.length - 1; i++) {
    // 内循环比较相邻两个数
    for (var j = 0; j < arry.length - i - 1; j++) {
      if (arry[j] < arry[j + 1]) {
        swap = arry[j];
        arry[j] = arry[j + 1];
        arry[j + 1] = swap;
      }
    }
    console.log(arry);
  }
  console.log(arry);
}
var list = [1, 5, 8, 9, 6, 3, 4, 8, 5, 2];
maopao(list);
console.log(list);
