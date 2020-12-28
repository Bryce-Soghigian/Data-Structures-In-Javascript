//79. Word Search

const exist = (board,word) => {
    const isOutOfBound = (board, row, col) => row < 0 || row >= board.length || col < 0 || col >= board[0].length;

    const helper = (row,col,pt) => {
        let searchTerm = word[pt]
        let sT = searchTerm
        let curr = board[row][col]
         console.log(curr)

        if(pt == word.length){//base case
            console.log("WORD FOUND")
            return true
        }
        //Check adj values
        
        
        if(!isOutOfBound(board,row-1,col) && board[row-1][col] === sT ){
        //Adj becomes our new start point and we increment our pointer
        console.log("TOP")
        helper(row-1,col,pt++)
        }
         if(!isOutOfBound(board,row+1,col) && board[row+1][col] === sT){
            helper(row+1,col,pt++)
         }
         if(isOutOfBound(board,row,col-1) && board[row][col-1]===sT){
               helper(row,col-1,pt++)
         }
           
         if(!isOutOfBound(board,row,col+1) && board[row][col+1]===sT){
             helper(row,col+1,pt++)
         }
          
        
    }
    let isWord = false
    for(let row = 0;row<board.length;row++){
        for(let col = 0;col<board[row].length;col++){
            let curr = board[row][col]
            if(curr == word[0]){
                
                isWord = helper(row,col,1 )
            }
        }
    }
    if(isWord === true){
        return true
    }else{
        return false
    }
}


