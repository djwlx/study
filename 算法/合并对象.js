function hebing(obj1, obj2) {
  if (Array.isArray(obj1) && Array.isArray(obj2)) {
    return obj1.concat(obj2);
  }
  let newobj = { ...obj1 };
  let arr2 = Object.keys(obj2);
  for (let i of arr2) {
    if (!(i in newobj)) {
      newobj[i] = obj2[i];
    } else {
      if (typeof newobj[i] !== typeof obj2[i]) {
        throw new Error();
      } else if (typeof newobj[i] == 'object' && typeof obj2[i] == 'object') {
        newobj[i] = hebing(newobj[i], obj2[i]);
      } else {
        newobj[i] = [newobj[i], obj2[i]];
      }
    }
  }
  // console.log(newo   bj);    
  return newobj;
}

let o1 = {
  a: 3,
  b: [3, 4],
};
let o2 = {
  a: 4,
  n: [1, 2],
};
b = hebing(o1, o2);
console.log(b);
