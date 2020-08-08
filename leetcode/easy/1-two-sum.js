// Two Sum https://leetcode.com/problems/two-sum/
// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

const nums = [2, 2, 5, 1, 7, 11, 15];
const target = 18;

// Solution 1 Simple Brute Force (My Solution)

// Start at index 0 and then traverse through the rest of the array and check if any combination sums to target number.
// Then do this for next indice and so on.

// O(n^2) time because of the two for loops
// O(1) space

var twoSum = function (nums, target) {
    for (i = 0; i < nums.length - 1; i++) {
        for (j = i + 1; j < nums.length; j++) { // we don't need to start from index 0 for the second loop
            if (nums[i] + nums[j] === target) {
                return [i, j]
            };
        };
    };
    return [];
};

console.log(twoSum(nums, target))

// Solution 2 Compare Value Against Hash Table

// As we go through the input array, we can store all the values in a hash table. 
// So now we need to traverse the array only once which leads to better time complexity.

// We can say that if current number + any number in hash table = target, 
// then we need to return [currentNumber, any number in hash table]
// So we can say that current number = target - any number in hash table
// In other words, we just need to check if current number exists in the hash table. 

// O(1) time because we loop through the array only once
// O(n) space because our hash table increases with the size of the input array

var twoSum = function (nums, target) {
    let hashTable = {}

    for (let i = 0; i < nums.length; i++) {
        let currentNumber = target - nums[i]
        if (hashTable[currentNumber] !== undefined) {
            return [hashTable[currentNumber], i]
        } else {
            hashTable[nums[i]] = i;
        };
    }
    return [];
};

console.log(twoSum(nums, target))
