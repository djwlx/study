//中心扩散法
var longestPalindrome = function (s) {
  if (s.length < 2) return s;
  let result = '';
  for (let i = 0; i < s.length; i++) {
    hashui(i, i);
    hashui(i, i + 1);
  }
  function hashui(begin, end) {
    while (begin >= 0 && end < s.length && s[begin] == s[end]) {
      begin--;
      end++;
    }
    if (end - begin - 1 > result.length) {
      result = s.slice(begin + 1, end);
    }
  }
  return result;
};
