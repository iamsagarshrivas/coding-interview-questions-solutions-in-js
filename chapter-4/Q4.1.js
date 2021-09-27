/**
 * ROUTES BW nodes
 */

const Graph = require("../data-structures/Graph");


/**
 * 
 * @param {Graph} graph 
 * @param {number} start 
 * @param {number} end 
 * @return {{hasPath: boolean, path: number[]}}
 */
 const dfsPath = (graph, start, end) => {

    /**@type {Set<number>} */
    const visited = new Set();

    /**@type {Array<{node: number, path: number[]}>} */
    const stack = [{
            node: start, 
            path: [start]
        }]
        

    while (stack.length > 0) {

        const current = stack.pop();

        if(!visited.has(current.node))
        {
            
            if(current.node === end)
            {
                return {
                    hasPath: true,
                    path: current.path
                }
            }

            visited.add(current.node);

        }

        const adjList = graph.nodes.get(current.node).listAdjacent();

        for (const { value } of adjList) {
            if(!visited.has(value))
            {
                stack.push({
                    node: value, 
                    path: [...current.path, value]
                });            

            }
        }        
        
    }
    return {
        hasPath: false,
        path: []
    };
}

module.exports = dfsPath;