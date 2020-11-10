const search = (longstring, searchTerm) => {
let occurences = 0;
for(let i = 0;i<longstring.length;i++){
    //For each character in the long string we want to check if it matches 
    //if longstring[i] === searchTerm[0]
    // check if i+1 === searchTerm [0+1]
    if(longstring[i]=== searchTerm[0]){
        let isMatch = false;
        let count = 1;
        for(let j = 1;j<searchTerm.length;j++){
            //Check if searchTerm[j] === longstring[i+count]
            if(searchTerm[j]=== longstring[i+count]){
                isMatch = true
            }else{
                isMatch = false
                break
            }
            count++
        }
        if(isMatch===true){
            occurences++
        }
    }
}



    return occurences
}


console.log(search("wowomgwowomgomg","wow"))//2
console.log(search("wowomgwowomgomg","omg"))//3
console.log(search("wowomgwowomgomg","wo"))//4
console.log(search("wowomgwowomgomg","gw"))//1