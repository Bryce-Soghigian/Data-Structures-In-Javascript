/**
 * @param {number[]} nums
 * @return {boolean}
 */

var increasingTriplet = function (nums) {
    let one = Infinity;
    let two = Infinity;
  
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] <= one) {
        one = nums[i];
      } else if (nums[i] <= two) {
        two = nums[i];
      } else {
        return true;
      }
    }
  
    return false;
  };
  
  // var increasingTriplet = function(nums) {
  //     let first = null;
  //     let second = null
  //     let third = null
  //     for(let i=0;i<nums.length;i++){
  //         if(nums[i]>second && second !== null){
  //             third = nums[i]
  //             console.log(first,second,third)
  //             return true
  //         }
  //         if(nums[i]>first && first !== null){
  //             second = nums[i]
  //         }
  //         //Keep checking for new smallest as we go through
  //         if(second !==null){
  //             if(nums[i]> first){
  //                 second = Math.min(second,nums[i]) 
  
  //             }
  //         }
  //         if(first === null || second === null){
  //             if(first === null){
  //                 first = nums[i]
  //             }else{
  //              first = Math.min(first, nums[i])
  
  //             }
  //         }
    
          
  //     }
  //     return false
  // };