function TeamNums(height) {
  // return arr;
  let num = 0;
  height.forEach((item1, index1) => {
    height.forEach((item2, index2) => {
      height.forEach((item3, index3) => {
        if (index1 < index2 && index2 < index3) {
          {
            if (item1 < item2 && item2 < item3) {
              // console.log(item1, item2, item3);
              num++;
            }
            if (item1 > item2 && item2 > item3) {
              num++;
            }
          }
        }
      });
    });
  });
  return num;
}
let people = [1, 5, 3, 2, 4];
console.log(TeamNums(people));
