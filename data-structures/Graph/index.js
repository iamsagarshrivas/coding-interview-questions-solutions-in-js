const Node = require("./Node");

class Graph {
    constructor(edgeDirection = Graph.DIRECTED) {
        /**
         * @type {Map<Number, Node>}
         */
        this.nodes = new Map();
        this.edgeDirection = edgeDirection;
    }

    /**
     * 
     * @param {number} value 
     * @returns {Node}
     */
    addVertex(value) {
        // check if the node is already exists
        if(this.nodes.has(value))
        {
            return this.nodes.get(value);
        }

        const vertex = new Node(value);
        this.nodes.set(value, vertex);
        return vertex;
    }

    /**
     * 
     * @param {number} source 
     * @param {number} destination 
     * @returns {[sourceNode: Node, destinationNode: Node]}
     */
    addEdge(source, destination) {
        const sourceNode = this.addVertex(source);
        const destinationNode = this.addVertex(destination);

        sourceNode.addAdjacent(destinationNode);

        if(this.edgeDirection === Graph.UNDIRECTED)
        {
            destinationNode.addAdjacent(sourceNode);
        }

        return [sourceNode, destinationNode];

    }

    /**
     * 
     * @param {number} value 
     */
    removeVertex(value)
    {
        const current = this.nodes.get(value);
        if(current)
        {
            for(const node of this.nodes.values())
            {
                node.removeAdjacent(current);
            }
        }
        this.nodes.delete(value);
    }

    /**
     * 
     * @param {number} source 
     * @param {number} destination 
     */
    removeEdge(source, destination) {
        const sourceNode = this.nodes.get(source);
        const destinationNode = this.nodes.get(destination);

        if(sourceNode && destinationNode)
        {
            sourceNode.removeAdjacent(destinationNode);

            if(this.edgeDirection === Graph.UNDIRECTED)
            {
                destinationNode.removeAdjacent(sourceNode);
            }

        }
    }

    toString() {
        const res = [];
        
        for(const node of this.nodes.values()) {
            res.push(node.toString());
        }

        return res.join('\n');
        
    }

}

Graph.DIRECTED = Symbol("DIRECTED");
Graph.UNDIRECTED = Symbol("UNDIRECTED");

module.exports = Graph;