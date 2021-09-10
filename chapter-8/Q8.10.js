// paint fill

/**
 * 
 * @param {Number[][]} grid 
 * @param {number} row 
 * @param {number} col 
 * @param {number} currentC 
 * @param {number} newC 
 */
function paintFill(grid, row, col, currentC, newC){

    // boundary check
    if(row < 0 || col < 0 || row >= grid.length || col >= grid[0].length)
    {
        return
    }

    // different color check
    if(grid[row][col] !== currentC) return;

    grid[row][col] = newC;

    [[row-1, col],[row+1, col],[row, col-1],[row, col+1]].forEach(([r,c]) => paintFill(grid, r, c, currentC, newC));

}

const grid = [
    [1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1],
    [1,1,2,2,1,1,1,1],
    [1,1,1,2,2,1,1,1],
    [1,1,1,2,2,2,1,1],
    [1,1,1,1,2,2,2,1],
    [1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1],
];

const [row, col] = [0,0];
const currentC = grid[row][col];

// grid.forEach(row => console.log(row.join(", ")));

console.time("Grid");
paintFill(grid, row, col, currentC, 3);
console.timeEnd("Grid");

console.log("\n");

// grid.forEach(row => console.log(row.join(", ")));

