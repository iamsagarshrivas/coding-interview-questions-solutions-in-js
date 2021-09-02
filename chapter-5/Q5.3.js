/**
 * Flip Bit to Win: You have an integer and you can flip exactly one bit from a 0 to a 1. Write code to 
 * find the length of the longest sequence of ls you could create. 
 * EXAMPLE 
 * Input: 1775 (or: 11011101111) 
 * Output: 8  
 */

const BitHelper = require("./BitHelper");

/**
 * SOLUTION: 
 * i. Create an array of length of consecutive 1s with 0 as separator. 
 * ii. Iterate through array and find max of of two consecutive elements,
 * iii. Add 1 for flip bit.
 */

/**
 * 
 * @param {Number} num 
 * @returns {Number[]}
 */
function toLengthArray(num){
    const arr = [];
    let current = 0, i = 0;
    
    while (num > 0)
    {
        if (num & 1)
        {
            current++;
        }
        else
        {
            arr.push(current);
            current = 0;
        }
        num = num >> 1;
    }

    arr.push(current);

    return arr;

}

function findMaxSum(arr)
{
    let max = 0;

    for(let i = 0; i < arr.length - 1; i++ )
    {
        const consecutive = arr[i] + arr[i+1];
        if(consecutive > max)
        {
            max = consecutive;
        }
    }

    return max;
}

const num = 1775;

console.time("TEST");

// step 1: Create an array of length of consecutive 1s with 0 as separator.
const arr = toLengthArray(num);

// step 2: Iterate through array and find max of of two consecutive elements
const maxSum = findMaxSum(arr);

// step 3: add 1 for flip bit;
console.log(maxSum + 1);

console.timeEnd("TEST");

// alternative solution (better)
function findMaxSumALt(num)
{
    const bitHelper = new BitHelper();
    const binary = bitHelper.toBinary(num);

    const array = binary.split("0");

    let max = 0;

    for(let i = 0; i < array.length - 1; i++)
    {
        if(array[i].length + array[i+1].length > max)
        {
            max = array[i].length + array[i+1].length;
        }
    }

    max++;

    return max;

}

console.time("TEST2");

console.log(findMaxSumALt(num));

console.timeEnd("TEST2");
