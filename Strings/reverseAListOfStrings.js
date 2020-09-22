/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const reverse = word =>  word.split("").reverse().join("")
    let array = s.split(" ")
    let newArray = []
    for(let i = 0;i<array.length;i++){
        newArray.push(reverse(array[i]))
    }
    console.log(newArray)
    return newArray.join(" ")
};

