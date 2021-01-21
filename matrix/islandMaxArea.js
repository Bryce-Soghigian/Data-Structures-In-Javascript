/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
/**
1. write a recursive traversal function
1.a talley the area of the island
1.b turn the 1 to a 0
1.c move to next item

**/
    
let max = 0
let localArea = 0
const callDFS = (i, j) => {
if(i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] === '0'){
    if(localArea > max){
        max = localArea
        console.log(max,"MAX")
    }
    localArea = 0
    
    return
}
             localArea++

        grid[i][j] = '0';
        callDFS(i-1, j); // up
        callDFS(i+1, j); // down
        callDFS(i, j-1); // left
        callDFS(i, j+1); // right
}
for(let i = 0;i<grid.length;i++){
    for(let j = 0;j<grid.length;j++){
        if(grid[i][j] === 1){
            localArea = 0
            console.log(localArea,"BEFORE")
        callDFS(i,j)
        }
    }
}




return max
};

