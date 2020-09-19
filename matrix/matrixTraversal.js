let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const matrixTraversal = (matrix) => {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      console.log("item", matrix[i][j]);
    }
  }
  return matrix;
};
const rotateStationaryMatrix = (matrix) => {
  /**
   * As we traverse the matrix we are going to want to select the values we want to add
   */
  let newMatrix = [];
  let firstArr = [];
  let secondArr = [];
  let thirdArr = [];
  for (let i = 0; i < matrix.length; i++) {
      let matrixLength = matrix[i].length;
 
    for (let j = 0; j < matrixLength; j++) {
        if(j===0){
            firstArr.push(matrix[i][j])
        }else if(j===1){
            secondArr.push(matrix[i][j])
        }else if(j===2){
            thirdArr.push(matrix[i][j])
        }
    }
  }
  newMatrix.push(firstArr,secondArr,thirdArr)
  matrix = newMatrix
  return matrix;
};

const rotateDynamicMatrix = (matrix) => {
    for(let i = 0;i<matrix.length;i++){
        for(let j = 0;matrix[i].length;j++){
            
        }
    }
};

// console.log(matrixTraversal(matrix), "traversal");
console.log(rotateStationaryMatrix(matrix),"rotated stationary array")
