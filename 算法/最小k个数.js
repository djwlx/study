function partition(arr, left, right) {
  var pivot = left,
    index = pivot + 1;
  for (var i = index; i <= right; i++) {
    if (arr[i] < arr[pivot]) {
      [arr[i], arr[index]] = [arr[index], arr[i]];
      index++;
    }
  }
  [arr[pivot], arr[index - 1]] = [arr[index - 1], arr[pivot]];
  return index - 1;
}
function getLeastNumbers(arr, k) {
  let start = 0,
    end = arr.length - 1;

  let index = partition(arr, start, end);
  while (index !== k) {
    if (index < k) {
      start = index + 1;
      index = partition(arr, start, end);
    } else {
      end = index - 1;
      index = partition(arr, start, end);
    }
  }

  return arr.slice(0, k);
}
let arr = [3, 4, 2, 1, 2, 45, 7];
let a = getLeastNumbers(arr, 3);
console.log(a);
