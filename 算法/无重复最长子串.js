var lengthOfLongestSubstring = function (s) {
  let right = 0,
    result = 0,
    arr = [];
  for (let i = 0; i < s.length; i++) {
    if (i !== 0) {
      arr.shift();
    }
    while (right < s.length && !arr.includes(s[right])) {
      arr.push(s[right]);
      right++;
    }
    result = result < arr.length ? arr.length : result;
  }
  return result;
};
lengthOfLongestSubstring('');
