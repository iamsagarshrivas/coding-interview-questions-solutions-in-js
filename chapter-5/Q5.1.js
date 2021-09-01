
/**
 * Insertion: You are given two 32-bit numbers, N and M, and two bit positions, i and
 * j. Write a method to insert M into N such that M starts at bit j and ends at bit i. You
 * can assume that the bits j through i have enough space to fit all of M. That is, if
 * M = 10011, you can assume that there are at least 5 bits between j and i. You would not, for
 * example, have j = 3 and i = 2, because M could not fully fit between bit 3 and bit 2.
 */


/**
 * Given: 
 * i. Two 32 bit numbers N and M
 * ii. two bit positions i & j
 */

/**
 * TODO:
 * Insert M into N such that M starts at j and ends at i.
 */

/**
 * Additional Info:
 * There is enough space between j and i to fit M
 */

/**
 * Solutions:
 * i. Reset the bits in N from i to j.
 * i.i. create a mask m1 where bits are set from most significant bit to j+1 (1111...11000000)
 *      m1 = (-1 << j+1)
 * i.ii. create a mask m2 where bits are set from 0th bit to i-1 bit (000...00011111)
 *      m2 = (1 << 1) - 1
 * i.iii. create a final mask by OR of m1 and m2 (1111...11000000111..11)
 *      mask = m1 | m2
 * i.iv. reset the required bits of N
 *      N & mask
 * ii. Shift M right by i times
 *      M << i
 * iii. return (N & mask) | (M << i)
 */
const BitHelper = require("./BitHelper");

function numberInsertion(N,M,i,j)
{
    const m1 = (-1 << j+1);
    const m2 = (1 << i) - 1;

    const mask = m1 | m2;

    return (N & mask) | (M << i);
}

const bitHelper = new BitHelper();
const N = "11001101000", M =  "10011", i = 2, j = 6;

const N_num = bitHelper.toNumber(N);
const M_num = bitHelper.toNumber(M);

const result = numberInsertion(N_num,M_num,i,j);

console.log(bitHelper.toBinary(result));