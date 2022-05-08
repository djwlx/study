function startLimitPool(tasks, max) {
  let alltask = [...tasks];
  let isrunning = 0;
  function next() {
    while (isrunning < max && alltask.length > 0) {
      isrunning++;
      let a = alltask.shift();
      a().then((res) => {
        console.log(res);
        isrunning--;
        next();
      });
    }
  }
  next();
}
let arr = [1, 2, 3, 4, 5].map((item, index) => {
  return function () {
    return new Promise((res) => {
      setTimeout(() => {
        res(index);
      }, index * 1000);
    });
  };
});
startLimitPool(arr, 1);
// console.log(arr);
