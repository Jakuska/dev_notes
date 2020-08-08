// Longest Common Prefix https://leetcode.com/problems/longest-common-prefix/

// Solution 1 Horizontal Scanning (My Solution)
// Just do a simple check from left to right

const input = ["abc_abc_1233143", "abc_ab_23434", "abc_a_234234"];

var longestCommonPrefix = function(strs) {
  let word = [];
  let prefix = "";
  if (strs.length === 0) {
      return ""
  }
  for (i = 0; i < strs[0].length; i++) {
      for (j = 0; j < strs.length; j++) {
          word.push(strs[j][i]);
      }
      if (identical(word)) {
          prefix += word[0];
          word = [];
      } else {
          break;
      }
  }
  return prefix;    
  };
  
  function identical(array) {
      for(var i = 0; i < array.length - 1; i++) {
          if(array[i] !== array[i+1]) {
              return false;
          }
      }
      return true;
  }
  

console.log(longestCommonPrefix(input))

