// Palindrome Number https://leetcode.com/problems/palindrome-number/
// Determine whether an integer is a palindrome

const num = 101;

// Solution 1 Method Chaining (My Solution) 

var isPalindrome = function(num) {
  return num === Number(num.toString().split('').reverse().join(''));
};

console.log(isPalindrome(num))

// Solution 2 Compare First Element with Last Element
// By this guy: https://leetcode.com/problems/palindrome-number/discuss/471810/168-ms-faster-than-97.26

// This algorithm checks if the first element of the array equals the last element of the array.
// This is faster than my solution because we don't need to use reverse and join methods. 
// The downside is that this algorithm is less concise.

// push and pop have a time complexity of O(1) and shift is bewtween O(1) and O(n) 

// I'm not sure what the time complexity of reverse and join methods are but here's my guess:
// reverse: O(n) because it's possible to implement it with O(n) time complexity in C++
// join: O(n) because to create a new string, you need to go through all the elements of the input array first

var isPalindrome = function(x) {
  const arr = String(x).split('');
  while (arr.length > 1) {
      if (arr.shift() !== arr.pop()) {
          return false;
      }
  }
  return true;
};

console.log(isPalindrome(num))
