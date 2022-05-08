function moveZeroes(nums) {
    var j = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[j] = nums[i];
            j++;
        }
    }
    for (var k = j; k < nums.length; k++) {
        nums[k] = 0;
    }
    // console.log(j);
}
var arr = [0, 1, 0, 3, 12];
moveZeroes(arr);
console.log(arr);
