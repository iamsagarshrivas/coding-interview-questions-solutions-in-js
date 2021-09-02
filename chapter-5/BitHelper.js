class BitHelper {
    /**
     * 
     * @param {Number} number 
     * @returns {String} Binary representation of number
     */
    toBinary(number)
    {
        return number.toString(2)
    }

    /**
     * 
     * @param {String} binary 
     * @returns {Number} decimal of binary string
     */
    toNumber(binary)
    {
        return parseInt(binary, 2);
    }

    /**
     * 
     * @param {Number} num 
     * @returns {Number} Number of set bits
     */
    countSetBits(num)
    {
        let count = 0;
        while (num > 0) 
        {
            num &= (num-1);
            count++;
        }
        return count;
    }
}

module.exports = BitHelper;