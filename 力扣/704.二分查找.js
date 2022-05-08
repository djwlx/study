function search(nums, target) {
    var low = 0, high = nums.length - 1;
    while (low <= high) {
        var mid = Math.floor((low + high) / 2);
        var num = nums[mid];
        if (num === target) {
            return mid;
        }
        else if (num > target) {
            high = mid - 1;
        }
        else {
            low = mid + 1;
        }
    }
    return -1;
}
var a = search([-1, 0, 3, 5, 9, 12], 9);
console.log(a);
