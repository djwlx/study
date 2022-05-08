function maxAreaOfIsland(grid) {
  let len1 = grid.length,
    len2 = grid[0].length;
  // 最大值
  let result = 0;
  // 创建一个相同数组保存走过的路径，用3表示

  //   深度优先遍历
  function getMax(h, z, a) {
    if (
      // 超过界限
      h < 0 ||
      z < 0 ||
      h >= len1 ||
      z >= len2 ||
      //   没有陆地
      grid[h][z] != 1 ||
      //   已经走过
      temp[h][z] == 3
    ) {
      return;
    }
    temp[h][z] = 3;
    a.len += 1;
    getMax(h - 1, z, a);
    getMax(h + 1, z, a);
    getMax(h, z - 1, a);
    getMax(h, z + 1, a);
  }

  let temp = new Array(len1).fill("0").map(() => new Array(len2).fill(0));
  for (let i = 0; i < len1; i++) {
    for (let j = 0; j < len2; j++) {
      //   如果没走过且有陆地
      if (grid[i][j] === 1 && temp[i][j] !== 3) {
        let a = { len: 0 };
        getMax(i, j, a);
        console.log(a.len);
        result = a.len > result ? a.len : result;
      }
    }
  }

  return result;
}
maxAreaOfIsland([
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
]);
