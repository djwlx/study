function reverseWords(s) {
    var arr = s.split(" ");
    return arr.map(function (item) { return item.split("").reverse().join(""); }).join(" ");
}
var result = reverseWords("Let's take LeetCode contest");
console.log(result);
