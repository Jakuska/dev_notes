// Implement strStr() / Needle in haystack https://leetcode.com/problems/implement-strstr/
// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

const haystack = "0123456789";
const needle = "6"

// Solution Fail: 

// https://medium.com/@lenchen/leetcode-28-implement-strstr-64de75d9ffb1
var strStr = function(haystack, needle) {
    
  if (needle.length === 0 && haystack.length === 0) {
    return 0;
  }
  
  if (needle.length === 0 && haystack.length !== 0) {
    return 0;
  }

  for (var i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      let match = false;
      for (var j = 0; j < needle.length; j++) {
        match = haystack[i] === needle[j]; 
        i++
      }
      if (match) {
        return [i, needle.length]
      }
    }
  }
  return -1;
};

console.log(strStr(haystack, needle));
