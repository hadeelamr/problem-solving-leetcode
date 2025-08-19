/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let res = [[1]];

    for (let i = 1; i <= rowIndex; i++) {
        let row = new Array(i + 1).fill(1);
        for (let j = 1; j < i; j++) {
            row[j] = res[i - 1][j - 1] + res[i - 1][j];
        }
        res.push(row);
    }

    return res[rowIndex];

};