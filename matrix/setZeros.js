/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// var setZeroes = function (matrix) {
//   //basically we want to go through for each zero and set the rows and columns to 0 in the matrix
//   //Maybe use a second matrix so that when we modify the new matrix we look at the copy to see where the original zeros are

//   /**
//     [0,1,2]
//     [3,4,5]
//     [6,7,8]
//     []
    
//     **/

//   var copy = matrix.map(function (arr) {
//     return arr.slice();
//   });
//   //Loop through the matrix and transform it
//   console.log(copy);
//   for (let i = 0; i < copy.length; i++) {
//     for (let j = 0; j < copy[i].length; j++) {
//       console.log(`Current Postion ===> row:${i + 1},col${j + 1}`);
//       if (copy[i][j] === 0) {
//         //Transform the whole row
//         //Transform column
//         //Transforming row

//         // console.log(`Current Postion ===> row:${i + 1},col${j + 1}`);
//         // console.log(copy[0]);
//         // console.log(copy[1]);
//         // console.log(copy[2]);
//         // console.log("==========");
//         //Transform column
//         for (let col = 0; col < matrix.length; col++) {
//             console.log(col,"COL",`Val${matrix[col][i]}`)
//           matrix[col][i] = 0;
//         }
//         for (let row = 0; row < matrix[i].length; row++) {
//           console.log(row,"R",`Val${matrix[i][row]}`);
//           matrix[i][row] = 0;
//         }
//       }
//     }
//   }
//   console.log(copy);
//   return matrix;
// };

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const mark = (matrix, row, col, val) => {
    for(let i = 0; i < matrix[0].length; i++ ) {
        if(matrix[row][i] !== 0) {
            matrix[row][i] = val;
        }
    }
    for(let j = 0; j < matrix.length; j++ ) {
        if(matrix[j][col] !== 0) {
            matrix[j][col] = val;
        }
    }    
}

const setZeroes = (matrix) => {
    if(!matrix || matrix.length === 0 || matrix[0].length === 0) {
        return;
    }
    
    for(let i = 0 ; i < matrix.length ; i++) {
        for(let j = 0; j < matrix[0].length; j ++) {
            if(matrix[i][j] === 0) {
                mark(matrix, i, j, null);
            }
        }
    }

    for(let i = 0 ; i < matrix.length ; i++) {
        for(let j = 0; j < matrix[0].length; j ++) {
            if(matrix[i][j] === null) {
                matrix[i][j] = 0;
            }
        }
    }
};