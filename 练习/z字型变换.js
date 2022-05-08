// var convert = function (s, numRows) {
//   if (numRows === 1) return s;
//   // 创建二维数组用于保存
//   let arr = new Array(numRows);
//   arr = arr.fill(1).map(() => {
//     return [];
//   });
//   // 确定几个一组
//   let zu = numRows + numRows - 2;
//   for (let i = 0; i < s.length; i = i + zu) {
//     let tmp = s.slice(i, i + zu);
//     for (let j = 0; j < tmp.length; j++) {
//       let index = j % numRows;
//       if (j / numRows < 1) {
//         arr[index].push(tmp[j]);
//       } else {
//         arr[numRows - 2 - index].push(tmp[j]);
//       }
//     }
//   }
//   let result = '';
//   arr.forEach((item) => {
//     result += item.join('');
//   });
//   return result;
// };

// console.log(3 / 4);
var convert = function (s, numRows) {
  if (numRows === 1) return s;
  let arr = new Array(numRows).fill('');
  // 控制行
  let num = 0;
  // 控制正负
  let is = true;
  for (let i = 0; i < s.length; i++) {
    arr[num] += s[i];
    if (is) {
      num++;
      if (num === numRows - 1) {
        is = false;
      }
    } else {
      num--;
      if (num === 0) is = true;
    }
  }
  return arr.join('');
};
convert('PAYPALISHIRING', 3);
