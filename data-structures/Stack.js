class Stack {

    /**
     * 
     * @param {number[]} elements 
     * @param {number} maxSize 
     */
    constructor(elements = [], maxSize = 1000)
    {
        this.maxSize = maxSize;
        this.elements = elements;
    }

    push(element)
    {
        if(this.elements.length === this.maxSize)
        {
            throw new Error("stack overflow");
        }

        this.elements.push(element);

    }

    pop()
    {
        if(this.elements.length === 0)
        {
            throw new Error("stack underflow");
        }
        return this.elements.pop();
    }

    peak()
    {
        if(this.elements.length === 0)
        {
            return undefined;
        }
        return this.elements[this.elements.length - 1];

    }

    size()
    {
        return this.elements.length;
    }

}

module.exports = Stack;