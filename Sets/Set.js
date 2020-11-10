//What is a set?
//A set is an object that allows you to store unique valuses of any type

let ourSet = new Set();
ourSet.add(1)
ourSet.add(3)
ourSet.add(2342)
ourSet.add(13)
ourSet.add(17)
ourSet.add(234)
console.log(ourSet)

// you also can chain the add method

ourSet.add(123213).add(24323)
console.log(ourSet)
let iterator
for(let i = 0;i<ourSet.values().length;i++){
    console.log(ourSet[i])
}