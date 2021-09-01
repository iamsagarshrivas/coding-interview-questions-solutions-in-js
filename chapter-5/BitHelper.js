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
}

module.exports = BitHelper;