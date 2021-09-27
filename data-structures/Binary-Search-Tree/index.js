const BSTNode = require("./BSTNode");

class BinarySearchTree {
    constructor() {
      this.root = null;
      this.size = 0;
    }
  
    /**
     * 
     * @param {number} value 
     */
    add(value) {
        const newNode = new BSTNode(value);

        if(this.root === null)
        {
            this.root = newNode;
        }
        else
        {
            let current = this.root;
            let currentParent;

            while(current)
            {
                
                if(current.value === value)
                {
                    break;
                }

                currentParent = current.parents;
                if( value < current.value)
                {
                    current = current.left
                }
                else {
                    current = current.right;
                }

            }

            // node already exists
            if(current)
            {
                current.count++;
            }
            else if(value < currentParent.value)
            {
                currentParent.left = newNode;
            }
            else
            {
                currentParent.right = newNode;
            }

        }

        this.size++;

        return newNode;

    }


    /**
     * 
     * @param {number} value 
     * @returns {BSTNode}
     */
    find(value) {
        let current = this.root;
        let foundNode = null;

        while(current)
        {
            if(current.value === value)
            { 
                foundNode = current;
                break;
            }

            current = (value < current.value) ? current.left : current.right; 
        }

        return foundNode;

    }

    /**
     * 
     * @param {number} value
     * @returns {Boolean}
     */
    remove(value) {
        const nodeToRemove = this.find(value);

        // check if node exists
        if(!nodeToRemove) return false;

        if(!node.left && !node.right)
        {
            
        }
    }
    getMax() { /* ... */ }
    getMin() { /* ... */ }
}

module.exports = BinarySearchTree;