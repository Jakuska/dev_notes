// Valid Paranthese https://leetcode.com/problems/valid-parentheses/
// Check if the string has valid parentheses

// Solution 1 (Mine) Push left tokens and pop right tokens
// I'm quite happy with this solution because I think it's easy to read.

const input = "()[]{}";

var isValid = function(s) {
  if (s.length % 2 !== 0) {
      return false;
  };
  
  const left = ['(', '{', '['];
  const right = [')', '}', ']'];
  
  let array = s.split('');
  let stack = [];
  
  for (i = 0; i < array.length; i++) {
      if (left.indexOf(array[i]) >= 0) {  // index can be 0 which is a falsy value
          stack.push(array[i]);
      } else if (left.indexOf(stack[stack.length-1]) == right.indexOf(array[i])) {
          stack.pop()
      } 
  }
  
  if (stack.length === 0) {
      return true
  } else {
      return false
  }
};

console.log(isValid(input));
