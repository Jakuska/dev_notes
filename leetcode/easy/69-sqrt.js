// Implement Square Root https://leetcode.com/problems/sqrtx/

const n = 8;

// Solution 1 Binary Search

var mySqrt = function(n) {
  let left = 0;
  let right = n;
  
  while (left <= right) {
      let mid = Math.floor((left+right)/2);
      let midSquared = mid * mid;
    
      if (midSquared === n) { 
          return mid
      }
      
      if (midSquared < n && (mid+1) * (mid+1) > n) {
        return mid
      } 

      if (midSquared > n && (mid-1) * (mid-1) < n) {
        return mid - 1 
      } 

      if (midSquared > n) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
      
  }
};

console.log(mySqrt(n))


// This girl cheated with a built in function :D 
// In an interview, this is good to mention. But of course they won't allow you to do this.
// credit https://leetcode.com/problems/sqrtx/discuss/427550/Accepted-JavaScript-One-Liner-Math.floor(x**0.5)


var mySqrt = function(x) {
    return Math.floor(x**0.5);
  };
