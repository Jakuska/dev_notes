// Search Insert Position https://leetcode.com/problems/search-insert-position/
// 
// Input: [1,3,5,6], 5
// Output: 2

const nums = [1,2,6]
const target =  5;


// Solution 1 Just loop through the nums array 
// O(n) time complexity
// O(1) space complexity 
var searchInsert = function(nums, target) {
  for (var i = 0; i < nums.length; i++) {
    if(target === nums[i]) {
      return i
    } else if(target < nums[i]) {
      return i
    }
  }
    return nums.length
}


console.log(searchInsert(nums, target))


// Solution 2 Use binary search 
// O(log(n)) time complexity
// O(1) space complexity 

function searchInsert(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
      const mid = left + Math.floor((right - left) / 2);
      if (nums[mid] === target) {
          return mid;
      }
      if ((nums[mid] > target) && (nums[mid-1] < target)) {
          return mid;
      }
      if (nums[mid] < target) {
          left = mid + 1;
      } else {
          right = mid - 1;
      }
  }
    return target < nums[0] ? 0 : nums.length 
}

console.log(searchInsert(nums, target))
