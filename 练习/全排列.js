let arr = '123';
function getAll(arr) {
  let narr = [];
  if (arr.length > 1) {
    for (let i = 0; i < arr.length; i++) {
      let now = arr[i];
      let sur = arr.slice(0, i) + arr.slice(i + 1);
      let zzz = getAll(sur);
      for (let j = 0; j < zzz.length; j++) {
        narr.push(now + zzz[j]);
      }
    }
  } else if (arr.length === 1) {
    narr.push(arr);
  }

  return narr;
}
let iii = getAll(arr);
console.log(iii);
