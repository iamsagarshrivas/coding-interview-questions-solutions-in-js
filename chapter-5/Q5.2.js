/**
 * Binary to String: Given a real number between O and 1 (e.g., 0.72) that is passed in as a double, print 
 * the binary representation. If the number cannot be represented accurately in binary with at most 32 
 * characters, print "ERROR:' 
 */

/**
 * Given: 
 * real number between O and 1 (e.g., 0.72)
 */

/**
 * Todo: 
 * convert to binary string
 */

/**
 * Constraints:
 * At most 32 characters
 */

/**
 * 
 * @param {Number} num
 * @return {String} 
 */
function toBinaryString(num)
{
    const max = 32;
    let binary = "0.", i;

    for (i = 0; i < max; i++) {
        num *= 2;
        const decimal = parseInt(num);
        binary += decimal;
        num -= decimal;

        if(parseFloat(num) === 0)
            break;
        

    }

    return (i === max) ? "ERROR" : binary;
}

const num = 0.53125;

console.log(toBinaryString(num));