const Node = require("./Node");

class Tree {

    constructor()
    {
        this.root = null;
    }

    /**
     * 
     * @param {Node} node 
     */
    set root(node){
        this.root = node;
    }

    get root(){
        return this.root;
    }

}

module.exports = Tree;

const t = new Tree();