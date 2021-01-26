/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var longestOnes = function (A, K) {
  //When transformed is equal to k we reset
  //We want to find if it contains k amount of zeros
  let start = 0;
  let end = 0;
  for (end = 0; end < A.length; end++) {
    //If we incude a zero in the window we reduce the value of k
    if (A[end] === 0) {
      K--;
    }
    //A negative k denotes we have consomed all allowd flips a window has
    if (K < 0) {
      if (A[start] === 0) {
        K++;
      }
      start++;
    }
  }
  return end - start;
};
