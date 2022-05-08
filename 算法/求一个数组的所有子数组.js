const f = (arr) =>
  arr.reduce(
    (prev, next) =>
      prev.concat(
        prev.map((item) => {
          return [next, ...item];
        })
      ),
    [[]]
  );
let a = f([1, 2, 3]);
console.log(a);
