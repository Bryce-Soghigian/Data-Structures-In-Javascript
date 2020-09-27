const luckyNums = matrix => {
    let minimum = []
    let max = []
    let columns = []
    let length = matrix[0].length;
    for(let i =0;i<matrix.length;i++){

        minimum.push(Math.min(...matrix[i]))
        for(let j = 0;j<matrix[i].length;j++){
            
        }
    }
    // console.log(minimum,"minimum")
    console.log(columns)
}

luckyNums([[3,7,8],[9,11,13],[15,16,17]])//Should output 15
luckyNums([[1,10,4,2],[9,3,8,7],[15,16,17,12]])//Should output 12
luckyNums([[7,8],[1,2]])//Output 7