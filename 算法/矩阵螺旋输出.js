let arr = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 0],
  [4, 4, 3, 3, 3],
];
const clgarr = (arr) => {
  let left = 0,
    right = arr[0].length - 1,
    top = 0,
    bottom = arr.length - 1;
  let result = [];
  while (left <= right && top <= bottom) {
    for (let i = left; i <= right; i++) {
      result.push(arr[top][i]);
    }
    for (let i = top + 1; i <= bottom; i++) {
      result.push(arr[i][right]);
    }
    if (left < right && top < bottom) {
      for (let i = right - 1; i >= left; i--) {
        result.push(arr[bottom][i]);
      }
      for (let i = bottom - 1; i >= top + 1; i--) {
        result.push(arr[i][left]);
      }
    }
    left++, right--, top++, bottom--;
  }
  console.log(result);
};

clgarr(arr);
