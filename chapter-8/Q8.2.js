
function canGoRight(grid, row, col, n) {
    if( col === n) return false;
    return grid[row][col+1] === 1;
}

function canGoDown(grid, row, col, m){
    if(row === m) return false;
    return grid[row+1][col] === 1;
}

function numWays(grid, row, col, m, n)
{
    if(row == m && col == n) return 1;
    let ways = 0;

    if(canGoRight(grid, row, col, n))
    {
        ways += numWays(grid, row, col + 1,m,n);
    }

    if(canGoDown(grid, row, col, m))
    {
        ways += numWays(grid, row + 1, col, m, n);        
    }

    return ways;
}

const findPaths = function(grid, row, col, m, n, currentPath = [], paths = []) {
    
    if(row == m && col == n) {
        return paths.push(currentPath.concat([[row, col]]));
    };

    if(canGoRight(grid, row, col, n))
    {
        findPaths(grid, row, col + 1,m,n, currentPath.concat([[row, col]]), paths);
    }

    if(canGoDown(grid, row, col, m))
    {
        findPaths(grid, row + 1, col, m, n, currentPath.concat([[row, col]]), paths);        
    }
    return paths;
};

const grid = [
    [1,1,0],
    [1,1,1]
];

const m = grid.length - 1, n = grid[0].length - 1;

console.log(findPaths(grid,0,0, m, n));