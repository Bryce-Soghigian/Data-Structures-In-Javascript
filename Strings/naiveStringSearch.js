const search = (longstring, searchTerm) => {
let occurences = 0;
for(let i = 0;i<longstring.length;i++){
    let count = 1;
    //For each character in the long string we want to check if it matches 
    //if longstring[i] === searchTerm[0]
    // check if i+1 === searchTerm [0+1]
    if(longstring[i]=== searchTerm[0]){
        let isMatch = false;
        for(let j = 1;j<searchTerm.length;j++){
            //Check if searchTerm[j] === longstring[i+count]
            if(searchTerm[j]=== longstring[i+count]){
                isMatch = true
            }else{
                isMatch = false
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


console.log(search("wowomgwowomgomg","wow"))
console.log(search("wowomgwowomgomg","omg"))
console.log(search("wowomgwowomgomg","wo"))
console.log(search("wowomgwowomgomg","gw"))