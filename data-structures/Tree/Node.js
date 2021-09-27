class Node
{
    constructor(value)
    {
        this.value = value;
        this.children = new Set();
    }

    /**
     * 
     * @param  {...Node} children 
     */
    addChildren(...children)
    {
        children.forEach(child => this.children.add(child));        
    }

    /**
     * 
     * @param {Node} node 
     */
    removeChild(node)
    {
        this.children.delete(node);
    }
}

module.exports = Node;