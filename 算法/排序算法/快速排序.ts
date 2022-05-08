function quickSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;
  let index: number = Math.floor(arr.length / 2);
  let provit: number = arr.splice(index, 1)[0];
  let left: number[] = [],
    right: number[] = [];
  arr.forEach((item) => {
    if (item < provit) {
      left.push(item);
    } else {
      right.push(item);
    }
  });
  return quickSort(left).concat(provit, quickSort(right));
}

let arr: number[] = [5, 6, 8, 9, 4, 4, 6, 7];
let result: number[] = quickSort(arr);
console.log(result);
