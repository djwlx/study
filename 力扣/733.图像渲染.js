function floodFill(image, sr, sc, newColor) {
    // 记录颜色
    var temp = image[sr][sc];
    var len1 = image.length;
    var len2 = image[0].length;
    function setColor(a, b) {
        if (a < 0 ||
            b < 0 ||
            a >= len1 ||
            b >= len2 ||
            image[a][b] != temp ||
            newColor == temp) {
            return;
        }
        console.log("hello");
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
var result = floodFill([
    [1, 1, 1],
    [1, 1, 0],
    [1, 0, 1],
], 1, 1, 2);
