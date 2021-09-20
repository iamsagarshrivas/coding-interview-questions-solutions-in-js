class Node {
    constructor(value) {
        /** @type {number} */
        this.value = value;
        /** @type {Set<Node>} */
        this.adjacentList = new Set();
    }

    /**
     * 
     * @param {Node} node 
     */
    addAdjacent(node) {
        this.adjacentList.add(node);
    }

    /**
     * 
     * @param {Node} node 
     */
    removeAdjacent(node) {
        this.adjacentList.delete(node);
    }

    /**
     * 
     * @returns {Node[]}
     */
    listAdjacent() {
        return Array.from(this.adjacentList);
    }

    /**
     * 
     * @param {Node} node 
     * @returns {Boolean}
     */
    isAdjacent(node){
        return this.adjacentList.has(node);
    }

    toString() {
        
        const adjItems = [];
        
        for (const node of this.adjacentList.values()) {
            adjItems.push(node.value);
        }

        return `{ ${this.value} => [${adjItems.join(", ")}]}`
    }

}

module.exports = Node;