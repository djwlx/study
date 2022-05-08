var maxArea = function (height) {
  let len = height.length;
  let left = 0,
    right = len - 1,
    max = 0;
  while (left < right) {
    let value = Math.min(height[left], height[right]) * (right - left);
    max = value > max ? value : max;
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return max;
};
maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
