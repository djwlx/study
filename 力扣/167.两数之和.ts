function twoSum(numbers: number[], target: number): number[] {
  let i = 0,
    j = numbers.length - 1;
  while (i < j) {
    let sum = numbers[i] + numbers[j];
    if (sum === target) {
      break;
    } else if (sum < target) {
      i++;
    } else {
      j--;
    }
  }
  return [i + 1, j + 1];
}
