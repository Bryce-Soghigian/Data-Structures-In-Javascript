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