/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let set = new Set();
        const generateSubset = (arr) => {
            //For each character in nums we want to go through and generate the subset
    
            if(arr.length === 1){
                return
            }
            //Go through the string and recursively include or exclude the rest of the string
            for(let i = 0;i<arr.length;i++){    
                //Exclude
                if(arr.length===1){
                    
                }
                const excludeString = [...arr.slice(0,i),...arr.slice(i+1,arr.length)]
                if(set.has(excludeString)=== false ){
                    set.add(excludeString)
                    generateSubset(excludeString)
    
                }
            }
            
        }
        generateSubset(nums)
        let subset = Array.from(set)
        set = null
        subset.push(nums)
        subset.push([])
     let output = []
        let unique = new Set();
        //======Loop through subset and remove duplicate arrays
        for(let i = 0;i<subset.length;i++){
            let joined = subset[i].join()
            if(unique.has(joined) === false){
                unique.add(joined)
                output.push(subset[i])
            }
        }
        return output
        
    };