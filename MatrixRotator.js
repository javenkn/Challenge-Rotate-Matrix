/*  MatrixRotator(matrix)
 *
 *  @param matrix                        a multidimensional array containing the matrix
 *
 *  @public property matrix              the matrix
 *
 *  @public method rotate(direction)     direction is either
 *                                       Direction.CW or Direction.CWW
 *        @returns the rotated matrix
 */
exports.MatrixRotator = MatrixRotator;
var Direction = require("./Direction").Direction;

function MatrixRotator(matrix){
  this.matrix = matrix;

};

//                                         |-- Must be Direction.CW
//                                         v        or Direction.CCW
MatrixRotator.prototype.rotate = function(direction) {
  // do work here
  var newMatrix = [];
  var newMatrixCCW = [];
  if(direction === Direction.CW){
    for(var i = 0; i < this.matrix.length; i++){
        newMatrix[i] = [];
      for(var j = 0; j < this.matrix[i].length; j++){
        newMatrix[i][j] = this.matrix[this.matrix.length-1-j][i];
      }
    }
    this.matrix = newMatrix;
  }else if(direction === Direction.CCW){
    for(var i1 = 0; i1 < this.matrix.length; i1++){
        newMatrixCCW[i1] = [];
      for(var j1 = 0; j1 < this.matrix[i1].length; j1++){
        newMatrixCCW[i1][j1] = this.matrix[j1][this.matrix.length-1-i1];
      }
    }
    this.matrix = newMatrixCCW;
  }

  // var length = this.matrix.length;
  // if(direction === Direction.CW){
  //     for(var i = 0; i < this.matrix.length; i++){
  //         for(var j = 0; j < this.matrix[i].length; j++){
  //             if(i >= j && i < length-1-j){  //top diagonal
  //                 this.matrix[i][j+1] = this.matrix[i][j];
  //             }else if(i < j && i <= length-1-j){ //right diagonal
  //                 this.matrix[i+1][j] = this.matrix[i][j];
  //             }else if(i >= j && i > length-1-j){ //bottom diagonal
  //                 this.matrix[i][j-1] = this.matrix[i][j];
  //             }else if(i > j && i >= length-1-j){ //left diagonal
  //                 this.matrix[i-1][j] = this.matrix[i][j];
  //             }
  //         }
  //     }
  // }else if(direction === "Direction.CCW"){

  // }
  // must be a valid Direction, see Direction.js
};
