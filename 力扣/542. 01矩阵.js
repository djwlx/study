var updateMatrix = function (mat) {
  let len1 = mat.length;
  let len2 = mat[0].length;
  let result = new Array(len1).fill("").map((item) => new Array(len2).fill(""));

  function getDistance(x, y, dis) {
    let arr = [[x, y]];
    let res = 0;
    while (arr.length !== 0) {
      let len = arr.length;
      for (let i = 0; i < len; i++) {
        let temp = arr.shift();
        if (mat[temp[0]][temp[1]] === 0) {
          return res;
        }
        // 上下左右
        if (x - 1 >= 0) {
          arr.push([x - 1, y]);
        }
        if (x + 1 < len1) {
          arr.push([x - 1, y]);
        }
        if (y - 1 >= 0) {
          arr.push([x, y - 1]);
        }
        if (y + 1 < len2) {
          arr.push([x, y + 1]);
        }
      }
      res++;
    }
  }

  for (let i = 0; i < len1; i++) {
    for (let j = 0; j < len2; j++) {
      let len = getDistance(i, j, 0);
      result[i][j] = len;
    }
  }
  console.log(result);
  return result;
};
let a = updateMatrix([
  [
    [0, 0, 0],
    [0, 1, 0],
    [1, 1, 1],
  ],
]);
console.log(a);
