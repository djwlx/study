var nextPermutation = function (nums) {
  let end = nums.length - 1;
  let index;
  for (let i = end - 1; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      index = i;
      break;
    }
  }

  if (index) {
    for (let i = end; i >= 0; i--) {
      if (nums[i] > nums[index]) {
        [nums[i], nums[index]] = [nums[index], nums[i]];
        break;
      }
    }

    // 翻转
    index = index + 1;
    nums
      .slice(index)
      .reverse()
      .forEach((item) => {
        nums[index] = item;
        index++;
      });
    // console.log(nums);
    return nums;
  } else {
    return nums.reverse();
  }
};

let a = nextPermutation([3, 2, 1]);
console.log(a);
