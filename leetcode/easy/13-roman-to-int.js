// Roman to Integer https://leetcode.com/problems/roman-to-integer/
// Convert a roman number to an integer

const input = "III";

// Solution 1 Add / Subtract (My Solution) 

// This uses a simple for loop, except we traverse from end to start of array.
// then we either add or subtract the value of next number. 
// I wanted to make this easy to read.

const romanToInteger = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000
};

var romanToInt = function(s) {
  const array = s.split('');
  let total = 0;
  for (i = 0; i < array.length; i++) {
      let num = romanToInteger[array[i]];
      let nextNum = romanToInteger[array[i + 1]];
      if (num < nextNum) {
          total = total - num;
      } else {
      total = total + num;
      }

  };
  return total
};

console.log(romanToInt(input))


// Solution 2 A more clean version 

// This is just a better, more clean version of what I wrote.
// https://leetcode.com/problems/roman-to-integer/discuss/326345/Simple-JavaScript-Solution-Easy-Understanding

const symbols = {
  "I": 1,
  "V": 5,
  "X": 10,
  "L": 50,
  "C": 100,
  "D": 500,
  "M": 1000
};

var romanToInt = function(s) {
  value = 0;
  for(let i = 0; i < s.length; i+=1){
      symbols[s[i]] < symbols[s[i+1]] ? value -= symbols[s[i]]: value += symbols[s[i]]
  }
  return value
};

console.log(romanToInt(input))
