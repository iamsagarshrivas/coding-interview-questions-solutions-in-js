// Pairwise Swap: Write a program to swap odd and even bits in an integer with as few instructions as 
// possible (e.g., bit 0 and bit 1 are swapped, bit 2 and bit 3 are swapped, and so on). 

const BitHelper = require("./BitHelper");

/**
 * SOLUTION:
 * i. get the even bits of the number
 *      even = num & 0xAAAAAAAA (32bit)
 * ii. get the odd bits of the number
 *      odd = num & 0x55555555 (32bit)
 * iii. shift even to right and odd to left
 *      even >> 1
 *      odd << 1
 * iv. merge even and odd by OR return (even | odd)
 * 
 */

function pairwiseSwap(num){
    const even = 0xAAAAAAAA;
    const odd = 0x55555555;

    return ((num & even) >> 1) | ((num & odd) << 1);
}

const bitHelper = new BitHelper();
const num = bitHelper.toNumber("010011011010");

console.log(bitHelper.toBinary(pairwiseSwap(num)));