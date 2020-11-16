function bubbleSort(array) {
    for(let i = 0;i<array.length;i++){
        for(let j = 0;j<array.length;j++){
            if(array[j]> array[j+1]){
                let temp = array[j]//Temporary value 
                array[j] = array[j+1]
                array[j+1] = temp
            }
        }
    }
        return array
    }
    
    // Do not edit the line below.
    exports.bubbleSort = bubbleSort;
    