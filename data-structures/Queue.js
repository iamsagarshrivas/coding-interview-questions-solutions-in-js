class Queue{

    constructor(elements = [], maxSize = 1000){
        this.maxSize = maxSize;
        this.elements = elements;
    }

    enqueue(element)
    {        
        if(this.elements.length === this.maxSize)
        {
            throw new Error("queue overflow");
        }

        this.elements.push(element);
    }

    dequeue()
    {
        
        if(this.elements.length === 0)
        {
            throw new Error("queue underflow");
        }

        return this.elements.shift();
    }

    size()
    {
        return this.elements.length;
    }

}

module.exports = Queue;