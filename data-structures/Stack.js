export class Stack {

    constructor(maxSize = 1000)
    {
        this.maxSize = maxSize;
        this.elements = [];
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

}