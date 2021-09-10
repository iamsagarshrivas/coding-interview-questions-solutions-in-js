
/**
 * 
 * @param {number} cents
 * @param {number[]} coins 
 * @param {number} index 
 * @returns 
 */
function waysCoins(cents, coins, index, memo = {}){
    const key = `${cents}$${index}`;

    if(cents < 0 || index < 0) {
        memo[key] = 0;
    };
    
    if(cents === 0) {
        memo[key] = 1;
    };

    if(!(key in memo)) 
    {
        memo[key] = waysCoins(cents - coins[index], coins, index, memo) + waysCoins(cents, coins, index -1, memo);
    }

    return memo[key];
}

const coins = [25,10,5,1];

for ( var i = 0; i < 2000; i++ ){
    console.time(`Ways ${i}`);
    waysCoins(i, coins, coins.length - 1)
    console.timeEnd(`Ways ${i}`);

}