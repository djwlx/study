function selectSort(arr: number[]) {
  for (let i = 0; i < arr.length - 1; i++) {
    // 当前最小值的索引
    let min: number = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    [arr[i], arr[min]] = [arr[min], arr[i]];
  }
  return arr;
}
let a = selectSort([1, 2, 3, 7, 8, 0, 5]);
console.log(a);
