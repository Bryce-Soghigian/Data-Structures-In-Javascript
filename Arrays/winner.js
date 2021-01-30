/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function(moves) {
    /**
    [0,0] [2,0] [1,1] [2,1], [2,2]
    
    
    **/
    
    let grid = [["Pending", "Pending","Pending"],
                ["Pending", "Pending","Pending"], 
                ["Pending", "Pending","Pending"]
                ]
    for(let i = 0;i<moves.length;i++){
    
         if(i%2 === 0){
                grid[moves[i][0]][moves[i][1]] = "A"
            }else{
                grid[moves[i][0]][moves[i][1]] = "B"
            }
    }
        //Now i want to check all directions to see if any team wins
            // check each row
            for (let i = 0; i < 3; i++)
                if (grid[0][i] != null && grid[0][i] == grid[1][i] && grid[0][i] == grid[2][i])
                        return grid[0][i];
            
            // check each column
            for (let i = 0; i < 3; i++)
                if (grid[i][0] != null && grid[i][0] == grid[i][1] && grid[i][0] == grid[i][2])
                        return grid[i][0];
            
            // check left diagonal
            if (grid[0][0] != null && grid[0][0] == grid[1][1] && grid[0][0] == grid[2][2])
                    return grid[0][0];
            
            // check right diagonal
            if (grid[0][2] != null && grid[0][2] == grid[1][1] && grid[0][2] == grid[2][0])
                    return grid[0][2]; 
             
            return moves.length == 9 ? "Draw" : "Pending";
            
             
            
            
        }
      