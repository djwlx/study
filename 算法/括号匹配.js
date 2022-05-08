const kuo = (str) => {
  if (str.length % 2 !== 0) return false;
  const kmap = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] in kmap) {
      stack.push(kmap[str[i]]);
    } else {
      let tmp = stack.pop();
      if (tmp !== str[i]) {
        return false;
      }
    }
  }
  if (stack.length === 0) {
    return true;
  }
  return false;
};
console.log(kuo("([]){}"));
