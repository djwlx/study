function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  newColor: number
): number[][] {
  // 记录颜色

  let temp = image[sr][sc];
  let len1 = image.length;
  let len2 = image[0].length;
  function setColor(a: number, b: number) {
    if (
      a < 0 ||
      b < 0 ||
      a >= len1 ||
      b >= len2 ||
      image[a][b] != temp ||
      newColor == temp
    ) {
      return;
    }
    image[a][b] = newColor;
    setColor(a - 1, b);
    setColor(a + 1, b);
    setColor(a, b - 1);
    setColor(a, b + 1);
  }
  setColor(sr, sc);
  console.log(image);
  return image;
}
let result = floodFill(
  [
    [1, 1, 1],
    [1, 1, 0],
    [1, 0, 1],
  ],
  1,
  1,
  2
);
