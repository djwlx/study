var longestPalindrome = function (s) {
  let len = s.length;
  let str = "";
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len + 1; j++) {
      let tmp = s.slice(i, j);
      let retmp = tmp.split("").reverse().join("");
      if (retmp === tmp) {
        str = tmp.length > str.length ? tmp : str;
      }
    }
  }
  return str;
};

let str = "ssdfsiohnioyuioppoiuy";
let result = longestPalindrome(str);
console.log(result);
