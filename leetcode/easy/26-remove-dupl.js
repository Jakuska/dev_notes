// Remove Duplicates https://leetcode.com/problems/remove-duplicates-from-sorted-array

const input = [1, 2, 3, 3, 4, 5 ]

// Solution 1 Compare and Slice (my solution)

var removeDuplicates = function(nums) {
    for (i = 0; i < nums.length; i++) {
      if (nums[i] === nums[i+1]) {
          nums.splice(i, 1)
          i--
      }
  }
  return nums
};

console.log(removeDuplicates(input))


