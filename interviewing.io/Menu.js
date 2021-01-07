
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

  let list = []
  const calculateValidMenu = (menu, total) => {
    // console.log(total,"TOTAL AT BEGIN")
    
    
    
    if(total=== 0){
    
      // console.log("baseCase")
      return true
      
    }
    
    

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


