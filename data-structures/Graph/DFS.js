const Graph = require(".");
const Stack = require("../Stack");

/**
 * 
 * @param {Graph} graph 
 * @param {number} start 
 * @param {number} key 
 */
function dfs(graph, start, key) 
{

    /**@type {Set<number>} */
    const visited = new Set();
    const stack = new Stack([start]);

    while (stack.size() > 0) {

        const current = stack.pop();

        if(!visited.has(current))
        {
            console.log("Current node:", current);
        }

        const adjList = graph.nodes.get(current).listAdjacent();

        for (const { value } of adjList) {
            if(!visited.has(value))
            {
                stack.push(value);            

            }
        }        

        visited.add(current);
        
    }
    return visited;
    


}

module.exports = dfs;