// Reverse an Integer https://leetcode.com/problems/reverse-integer/
// Given a 32-bit signed integer, reverse digits of an integer.

const input = 123;

// Solution 1 Simple Reverse (My Solution)

// This is a simple, trick free solution. We simpy convert number to array,
// reverse the array and convert the array into a number.

var reverse = function (num) {
  const maxNum = Math.pow(2, 31) - 1;
  const minNum = -1 * Math.pow(2, 31);
  const sign = num < 0 ? -1 : 1;

  const reverseNum = Number(String(Math.abs(num)).split('').reverse().join('')) * sign;

  if (reverseNum > maxNum || reverseNum < minNum) {
    return 0;
  } else {
    return reverseNum;
  }
};

console.log(reverse(input));

// Solution 2 Reverse with Modulo

// According to LeetCode denizens, using this modulo trick is faster.
// Below is one of the solutions I found that uses modulo.
// It's only about 10 ms faster but it is consistenly a faster solution. 

var reverse = function (num) {
  const isNegative = num < 0;
  num = Math.abs(num);
  let result = 0;

  while (num) {
    const digit = num % 10;
    num = Math.floor(num / 10);
    result = result * 10 + digit;
  }

  if (result > 2 ** 31) {
    return 0;
  }

  return isNegative ? - result : result;
};

console.log(reverse(input));
