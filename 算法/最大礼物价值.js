function maxValue(grid) {
  let value = new Array(grid.length).fill().map((item) => []);
  //横向第一行
  value[0][0] = grid[0][0];
  for (let i = 1; i < grid[0].length; i++) {
    value[0][i] = value[0][i - 1] + grid[0][i];
  }
  for (let i = 1; i < grid.length; i++) {
    value[i][0] = value[i - 1][0] + grid[i][0];
  }

  for (let i = 1; i < value.length; i++) {
    for (let j = 1; j < value[0].length; j++) {
      value[i][j] = grid[i][j] + Math.max(value[i - 1][j], value[i][j - 1]);
    }
  }
  return value[value.length - 1][value[0].length - 1];
}

let a = maxValue([
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1],
]);
console.log(a);
