/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {

    for(let i = 0;i<chars.length;i++){
        /**
        Go through and count how many adjecent matches there are
        **/
        // let count = 0
        let k = i
        let totalAdjecentCharacters = 0
        while(chars[i] === chars[k]){
        totalAdjecentCharacters++
        k++
        }
    
        //If there
        if(totalAdjecentCharacters > 1){
            //Remove duplicate adjecent strings
           chars.splice(i+1,totalAdjecentCharacters-1) 
            let count = totalAdjecentCharacters
            if(count.toString().length > 1){
                let arr = count.toString().split("")
                //Handle edge case if number is multiple digits
                //Remove end of the array
                let endHalf = chars.slice(i+1)
                // //Remove end of the array
                chars.splice(i+1,chars.length)
                //Add the numbers to char
                console.log(arr,"ARRAY OF NUMS")
                arr.map(x => chars.push(Number(x)))
                endHalf.map(x => chars.push(x))
                i++
                continue
                
            }else{
                //Remove all the values that arent from 0 to index+1
                let endHalf = chars.slice(i+1)
                chars.splice(i+1,chars.length)
                chars[i+1]= count
                endHalf.map(x => chars.push(x))
             
                // let char = chars.shift();
                //Copy all the characters after current
                           
            }
            
        }else{
            continue
        }
        
    
    }
    //Convert numbers to strings
    for(let i = 0;i<chars.length;i++){
        if(typeof(chars[i])==="number"){
                chars[i]=chars[i].toString()
    
    
        }
    }
    };