const LEFT = 0;
const RIGHT = 1;

class BSTNode {

    constructor(value) {
        /** @type {number} */
        this.value = value;
        this.descendants = {
        /** @type {BSTNode} */
            [LEFT]: null,
        /** @type {BSTNode} */
            [RIGHT]: null
        };
        /** @type {BSTNode} */
        this.parents = null;
        this.count = 1;
    }

    // #private method

    /**
     * 
     * @param {(LEFT|RIGHT)} direction LEFT|RIGHT
     * @returns {BSTNode}
     */
    #getNode(direction)
    {
        return this.descendants[direction];
    }

    /**
     * 
     * @param {(LEFT|RIGHT)} direction LEFT|RIGHT
     */
    #setNode(direction, node)
    {        
        this.descendants[direction] = node;
        if(node)
        {
            node.parents = this;
        }
    }

    /** @type {BSTNode} */
    get left() { 
        return this.#getNode(LEFT);
    }

    /**
     * @param {BSTNode} node
     */
    set left(node) {
        this.#setNode(LEFT, node)
    }

    /** @type {BSTNode} */
    get right() { 
        return this.#getNode(RIGHT);
    }

    /**
     * @param {BSTNode} node
     */
    set right(node) {
        this.#setNode(RIGHT, node)
    }

}

module.exports = BSTNode;