/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  /**
    Sort the two strings into alphabetical order and check if they match
    if they do return true
    else return false
    
    **/
  let sortedS = s.split("").sort().join("");
  let sortedT = t.split("").sort().join("");
  if (sortedS === sortedT) {
    return true;
  } else {
    return false;
  }
};


console.log(isAnagram("car","arc"))//True
console.log(isAnagram("car","ardc"))//False