/**
Took a bottom up approach
 */
var tribonacci = function(n) {
    if(n === 0) return 0
    if(n === 1) return 1
    if(n === 2) return 1
    
    let cache = [0,1,1]
    for(let i = 3;i<=n;i++){
        cache[i] = cache[i-3]+ cache[i-2]+ cache[i-1]
    }
    return cache.pop()
    };