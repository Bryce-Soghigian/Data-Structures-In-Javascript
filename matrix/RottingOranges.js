// /**
//  * @param {number[][]} grid
//  * @return {number}
//  */
// var orangesRotting = function (grid) {

//     let fresh = true
//     while (fresh) {
//         for (let i = 0; i < grid.length; i++) {
//             for (let j = 0; j < grid[i].length; j++) {
//                 let currentElement = grid[i][j]
//                 if (currentElement === 2) {

//                     if (grid[i - 1][j] === 1) {
//                         grid[i - 1][j] = 2
//                         //Top adj
//                     }
//                     if (grid[i + 1][j] === 1) {
//                         //bottom adj
//                         grid[i + 1][j] = 2
//                     }

//                     if (grid[i][j - 1] === 1) {
//                         grid[i][j - 1] = 2
//                         //left
//                     }

//                     if (grid[i][j + 1] === 1) {
//                         grid[i][j + 1] = 2
//                     }



//                 }
//             }
//         }




//     };