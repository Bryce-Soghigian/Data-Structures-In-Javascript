/**
Recursion With Memoization
 */
var topDownClimbingStairs = function(n, memo={}) {
    if(n === 1){
        return n
    }
    if(n === 2){
        return n
    }
    if(memo[n] !== undefined){
        return memo[n]
    }
    memo[n] = topDownClimbingStairs(n-1) + topDownClimbingStairs(n-2)
    return memo[n]
};
/**
 * 
 * Bottom Up dynamic programming solution
 * We use the base cases of the values 0,1,2 to calculate our end value
 */

var BottomUpForwardClimbStairs = function(n) {
    if(n === 1)return n
    if(n === 2) return n
    
    let dp = [];
        dp[0] = 0;
        dp[1] = 1;
        dp[2] = 2;
        for(let i = 3;i<= n;i++){
            dp[i] = dp[i-1]+dp[i-2]
        }
        return dp[n]
    
    };
    