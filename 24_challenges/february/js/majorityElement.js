/**
 * @param {number[]} nums
 * @return {number}
 */
let majorityElement = function (nums) {
  let i = 1;
  let element = nums[0];
  let count = 1;
  while (i < nums.length) {
    if (nums[i] !== element) {
      count--;
    } else {
      count++;
    }
    if (count < 0) {
      element = nums[i];
      count = 0;
    }
    i++;
  }
  return element;
};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
console.log(majorityElement([3, 2, 3]));
