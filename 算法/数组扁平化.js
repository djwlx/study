let arr = [1, 2, 3, [5, 6, 7, 8, [9]]];

function arrys(arr) {
  let arry = [];
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      arry = arry.concat(arrys(item));
    } else {
      arry.push(item);
    }
  });
  return arry;
}
function arr2(arr) {
  // let arr = [];
  console.log(arr.join(','));
}
console.log(arrys(arr));
arr2(arr);
