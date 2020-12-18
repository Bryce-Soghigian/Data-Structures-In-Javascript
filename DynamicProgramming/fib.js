//This function has to call every single fib num and ends up recalling a bunch of nums
const fibRecursion = n => {
    if (n === 0 | n === 1){
        return n

    }
    return fibRecursion(n - 1) + fibRecursion(n - 2)
}




/**
 * Through Dynamic Programming This function can save values of things you have already did and 
 * use those to drastically reduce time complexity
 * Dynamic programming can do so much for you in many situations
 *
 */
const fib = (n, memo={})=> {
    if(n < 2){
        return n
    }
    if(memo[n] !== undefined){
        return memo[n]
    }
    result = fib(n-1) + fib(n-2)
    memo[n] = result
    return result
}


console.log(fibRecursion(10000))
//console.log(fib(10000))

//Bottom up dp forward approach takes value we already know to find the new value in o(n)
const fibBottomUpForward = n => {
    if(n == 0)return 0
    if(n<=2) return 1
    dp = []
    dp[0] = 0
    dp[1] = 1
    for(let i = 2;i<=n;i++){
        dp[i] = dp[i-1]+dp[i-2]
    }
    return dp[n]
}

const fibBottomUpBackward = n => {
    //Base cases
    if(n == 0)return 0
    if(n<=2) return 1
    dp = []
    dp[0] = 0
    dp[1] = 1
    for(let i = 1;i<n;i++){
        dp[i+1] += dp[i]//Dp[i] is already solved so we can use it to solve other problems
        dp[i+2] += dp[i]
    }
    return n
}