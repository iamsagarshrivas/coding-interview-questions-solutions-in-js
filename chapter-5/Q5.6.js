// Conversion: Write a function to determine the number of bits you would need to flip to convert 
// integer A to integer B. 
// EXAMPLE 
// Input: 29 (or: 11101), 15 (or: 01111) 
// Output: 2 


/**
 * SOLUTION:
 * mark the bits which are different (XOR)
 * find the number of set bit in the mark
 */

const BitHelper = require("./BitHelper");

/**
 * 
 * @param {Number} a 
 * @param {Number} b 
 * @returns {Number}
 */
function numBitsToConvert(a,b)
{
    const bitHelper = new BitHelper();

    return bitHelper.countSetBits(a ^ b);
}

const a = 8, b = 7;

console.time("numBitsToConvert");
numBitsToConvert(a,b);
console.timeEnd("numBitsToConvert");
