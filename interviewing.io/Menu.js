const _ = require('lodash');
/*
My food delivery startup wants to give out some gift cards to loyal customers. I want to provide them 
with a combination of food to worder which adds up exactly to the gift card so they don't have to spend 
any additional money. (let's assume that delivery, taxes, etc, are free for our customers)

From the following menu, and list of gift card values, determine what they could order:

The Menu:
    'sandwich': 6.85,
    'toast': 2.20,
    'curry': 7.85,
    'egg': 3.20,
    'cheese': 1.25,
    'coffee': 1.40,
    'soup': 3.45,
    'soda': 2.05,

The Gift Card Amounts (test cases):
5, 10, 15, 20, 25, 30, 40, 50, 100, 250

Constraints/Hints:
- customers must use 100% of the gift card value
- a customer could order any quantity of any menu item
- there are combinations to be found for every gift card, none of these are trick values


Part One:

Find the first combination of food that adds up to the gift card amount, print out only one combination 
for that gift card, and move on to the next gift card amount.

Example:
the $5 gift card could have one of two combinations:
['coffee', 'coffee', 'toast']
['cheese', 'cheese', 'cheese', 'cheese']


The output format is up to you, but here are some examples:

$5, 4 items
cheese, cheese, cheese, cheese

$10, 6 items
{'cheese': 3, 'chips': 2, 'nachos': 1}



Part Two, if we have time:

Refactor your first algorithm to examine many matching combinations for each gift card to find the 
combination with the fewest total number of items purchased.

For example, the $5 gift card list should return ['coffee', 'coffee', 'toast'] instead of 
['cheese', 'cheese', 'cheese', 'cheese']

(best answers will be provided at the end for comparison)

#How do i break a problem down into subproblems
#
projecteuler.net





best answers for gift cards:

$5 gift card, 3 items: {'coffee': 2, 'toast': 1}
$10 gift card, 4 items: {'coffee': 1, 'egg': 2, 'toast': 1}
$15 gift card, 4 items: {'cheese': 1, 'sandwich': 1, 'soup': 2}
$20 gift card, 5 items: {'sandwich': 2, 'soda': 2, 'toast': 1}
$25 gift card, 4 items: {'curry': 1, 'sandwich': 2, 'soup': 1}
$30 gift card, 6 items: {'curry': 1, 'egg': 2, 'sandwich': 2, 'soda': 1}
$40 gift card, 7 items: {'curry': 3, 'egg': 3, 'sandwich': 1}
$50 gift card, 8 items: {'sandwich': 7, 'soda': 1}
$100 gift card, 15 items: {'coffee': 1, 'curry': 10, 'egg': 2, 'sandwich': 2}
$250 gift card, 33 items: {'curry': 31, 'egg': 1, 'soup': 1}



*/

/**



5.00 
menu [
**/

const menu = {
  "sandwich": 6.85,
  "toast": 2.20,
  "curry": 7.85,
  "egg": 3.20,
  "cheese": 1.25,
  "coffee": 1.40,
  "soup": 3.45,
  "soda": 2.05,
};


const calculateGiftSum = (menu=menu, giftCard) => {
  /**
  
  Example:
the $5 gift card could have one of two combinations:
['coffee', 'coffee', 'toast']
['cheese', 'cheese', 'cheese', 'cheese']

  Approaches
  1. Brute Force O(n^3) with backtracking
  2. Greedy Algorithm
  3. Dp (Top down via recursion and memoization)
  



//The first element
let list = ["toast" ,coffee, coffee]
5- menu.sandwich // false

5.00-2.20 //true
//New Total = 2.80 - 1.40

1.40-140

if(true){
add the currElement to our list
list.push(currElement)
}
else{

}




return list 
  **/
  
  let list = []
  const calculateValidMenu = (menu, total) => {
    // console.log(total,"TOTAL AT BEGIN")
    
    
    
    if(total=== 0){
    
      // console.log("baseCase")
      return true
      
    }
    //Iterate through menu and check if total - currElemenent is valid
    
    
    
    /**
const menu = {
  "sandwich": 6.85,
  "toast": 2.20,
  "curry": 7.85,
  "egg": 3.20,
  "cheese": 1.25,
  "coffee": 1.40,
  "soup": 3.45,
  "soda": 2.05,
};

    **/
    for(let currElement in menu){
      
      // console.log(menu[currElement])
      let calc = Math.round(total*100 - menu[currElement]*100)/100.0;
      if(calc >= 0){
        // console.log(total,"if")
      
        list.push(currElement) 
        // console.log(list,"list post push")
        let result = calculateValidMenu(menu,calc)
       //Check if this valid
        if(result === true){
          
          return true
        }else{
          list.pop()//If result isn't valid we want to pop the value and backtrack
        }
      }
    }
    
    
    return false
  }
    
  calculateValidMenu(menu,giftCard)
  // console.log('list',list)
  return list


}

const listGiftCardAmounts = [5.00, 10.00, 15.00, 20.00, 25.00, 30.00, 40.00, 50.00, 100.00, 250.00];


for(let i = 0;i<listGiftCardAmounts.length;i++){
  let curr = listGiftCardAmounts[i]
  console.log(curr, calculateGiftSum(menu,curr))
  
}


// console.log(calculateGiftSum(menu,5))


