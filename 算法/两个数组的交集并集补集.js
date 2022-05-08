let arr1 = [1, 2, 3, 5, 7, 8],
  arr2 = [2, 3, 6, 8, 9];
// 交集
console.log(arr1.filter((item) => arr2.includes(item)));
// 并集
console.log([...new Set([...arr1, ...arr2])]);
// 补集
console.log(
  arr1
    .concat(arr2)
    .filter((item) => !arr1.includes(item) || !arr2.includes(item))
);
