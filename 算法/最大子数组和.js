function maxSubArray(nums) {
    var max = nums[0];
    var sum = nums[0];
    nums.slice(1).forEach(function (item) {
        sum += item;
        if (item > sum) {
            sum = item;
        }
        if (sum > max) {
            max = sum;
        }
    });
    return max;
}
var result = maxSubArray([5]);
console.log(result);
