const {NotImplementedError} = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
    let outputMatrix = new Array(matrix.length);
    for (let i = 0; i < matrix.length; i++) outputMatrix[i] = new Array(matrix[i].length);
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            let sum = 0;
            for (let x = -1; x <= 1; x++) {
                for (let y = -1; y <= 1; y++) {
                    if(!(x===0&&y===0)) sum += procCell(matrix, i + x, j + y);
                }
            }
            outputMatrix[i][j]=sum;
        }
    }
    return outputMatrix;
}

function procCell(matrix, row, column) {
    if (row < 0 || column < 0 || row > matrix.length - 1 || column > matrix[row].length - 1) return 0;
    return matrix[row][column] ? 1 : 0;
}

module.exports = {
    minesweeper
};
