function getLeastNumbers(arr: number[], k: number): number[] {
  function quickSort(arr: number[], begin: number, end: number): number {
    let l = begin,
      r = end;
    let temp = arr[begin];
    while (l < r) {
      while (l < r && arr[l] <= temp) l++;
      while (l < r && arr[r] >= temp) r--;
      [arr[l], arr[r]] = [arr[r], arr[l]];
    }
    [arr[begin], arr[l]] = [arr[l], arr[begin]];
    return begin;
  }
  let start = 0,
    end = arr.length - 1;

  let index = quickSort(arr, start, end);
  while (index !== k) {
    if (index < k) {
      start = index + 1;
      index = quickSort(arr, start, end);
    } else {
      end = index - 1;
      index = quickSort(arr, start, end);
    }
  }

  return arr.slice(0, k);
}
let a = getLeastNumbers([3, 2, 1], 2);
console.log(a);
