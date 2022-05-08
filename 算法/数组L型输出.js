var arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
// L型输出数组：例1,4,7,8,9,2,5,6,3

var line = arr.length - 1; //2
var newarr = []; //用于保存新数组
//控制每一行的开始
for (var i = 0; i < arr[0].length; i++) {
  //控制每一列
  for (var j = 0; j < line + 1; j++) {
    //加入当前列所有数
    newarr.push(arr[j][i]);
    //判断是否到达最后一行
    if (j == line) {
      for (var k = 0; k < line; k++) {
        //添加行输出
        newarr.push(arr[j][k + i + 1]);
      }
    }
  }
  line--;
}
console.log(newarr);
