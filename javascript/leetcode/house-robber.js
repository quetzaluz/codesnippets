/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = function(nums) {
  let currentMax = 0;
  let prevMax = 0;

  for (let i = 0; i < nums.length; i++) {
    const currentVal = nums[i];
    let thisMax = Math.max(prevMax + currentVal, currentMax);
    prevMax = currentMax;
    currentMax = thisMax;
  }
  return currentMax;
};