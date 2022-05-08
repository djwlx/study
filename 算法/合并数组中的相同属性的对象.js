var arr = [
  { display_name: "aaa", options: [5] },
  { display_name: "bbb", options: [1, 2, 3] },
  { display_name: "aaa", options: [4] },
];
var arr2 = [];

arr.forEach(function (item) {
  var result = arr2.findIndex(function (item2) {
    return item.display_name == item2.display_name;
  });
  if (result === -1) {
    arr2.push(item);
  } else {
    arr2[result]["options"] = arr2[result]["options"].concat(item.options);
  }
});
console.log(arr2);
