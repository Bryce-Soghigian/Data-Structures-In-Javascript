let n = 10 /// 1010 in base 2
let i = 6 // 110



console.log(n,i)
console.log(n & i,"N and i")// 0010
let two = 2
console.log(two.toString(2))
console.log(n | i)

var singleNumber = function(nums) {
    let singles = 0;
    let doubles = 0;

    for (num of nums) {
        // Add to singles if it's not in doubles. Also remove from singles if it's in there
        singles = (~doubles) & (singles ^ num);
        // Add to doubles if it's not in singles. Also remove from doubles if it's in there
        doubles = (~singles) & (doubles ^ num);
    }

    return singles;
};