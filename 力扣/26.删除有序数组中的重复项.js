/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let a = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] !== nums[i]) {
      nums[a] = nums[i];
      a++;
    }
  }
  console.log(nums, nums.length);
};
removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
