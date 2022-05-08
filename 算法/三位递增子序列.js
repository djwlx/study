function increasingTriplet(nums) {
  let result = false;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let s = j + 1; s < nums.length; s++) {
        if (nums[i] < nums[j] && nums[j] < nums[s]) {
          result = true;
        }
      }
    }
  }
  return result;
}

let ddd = increasingTriplet([5, 4, 3, 2, 1]);
console.log(ddd);
