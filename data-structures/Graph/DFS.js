const Graph = require(".");
const Stack = require("../Stack");

/**
 * 
 * @param {Graph} graph 
 * @param {number} start 
 */
function dfs(graph, start) 
{

    /**@type {Set<number>} */
    const visited = new Set();
    const stack = new Stack([start]);

    while (stack.size() > 0) {

        const current = stack.pop();

        if(!visited.has(current))
        {
            console.log("Current node:", current);
            visited.add(current);

        }

        const adjList = graph.nodes.get(current).listAdjacent();

        for (const { value } of adjList) {
            if(!visited.has(value))
            {
                stack.push(value);            

            }
        }        
        
    }
    return visited;
}


module.exports = dfs;