function reverseWords(s: string): string {
  let arr = s.split(" ");
  return arr.map((item) => item.split("").reverse().join("")).join(" ");
}
let result = reverseWords("Let's take LeetCode contest");
console.log(result);
