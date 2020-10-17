function getNumberOfIslands(binaryMatrix) {
    const visitIsland = (i,j,grid) => {
      
      grid[i][j] = 0;
      //Check positions    
      if(grid[i-1] && grid[i-1][j]===1) visitIsland(i-1,j,grid)
      if(grid[i+1] && grid[i+1][j]===1) visitIsland(i+1,j,grid);
      if(grid[i][j+1] ===1) visitIsland(i, j+1,grid);
      if(grid[i][j-1]===1) visitIsland(i, j-1, grid);
    }
    // your code goes here
    
    let count = 0;
    
    //loop through matrix
    for(let i = 0;i<binaryMatrix.length;i++){
      //Start island traversal
      for(let j = 0;j<binaryMatrix[i].length;j++){
           if(binaryMatrix[i][j] === 1){
        visitIsland(i,j,binaryMatrix)
           count++
      } 
      }
  
    }
    console.log(count)
    return count
  }