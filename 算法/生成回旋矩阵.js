// 矩形螺旋生成
// 1 1
// 2
// 1 2
// 3 4
// 3
// 1 2 3
// 8 9 4
// 7 6 5

function getarr(k) {
  let top = 0,
    left = 0;
  let bottom = k - 1,
    right = k - 1;
  let num = 1,
    arr = new Array(k).fill('');
  arr = arr.map((item) => new Array(k).fill(''));
  while (top <= bottom && right >= left) {
    for (let i = left; i <= right; i++) {
      arr[top][i] = num++;
    }
    for (let i = top + 1; i <= bottom; i++) {
      arr[i][right] = num++;
    }
    if (top < bottom && right > left) {
      for (let i = right - 1; i >= left; i--) {
        arr[bottom][i] = num++;
      }
      for (let i = bottom - 1; i >= top + 1; i--) {
        arr[i][left] = num++;
      }
    }

    left++, right--, top++, bottom--;
  }
  console.log(arr);
}
getarr(4);
