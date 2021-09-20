const Graph = require(".");
const Queue = require("../Queue");

/**
 * 
 * @param {Graph} graph 
 * @param {number} start 
 */
function bfs(graph, start){

    const visited = new Set();
    const queue = new Queue([start]);

    
    while(queue.size() > 0){
        const current = queue.dequeue();
        
        if(!visited.has(current))
        {
            console.log("Current node", current);
        }

        
        const adjList = graph.nodes.get(current).listAdjacent();

        for (const { value } of adjList) {
            if(!visited.has(value))
            {
                queue.enqueue(value);          

            }
        }        

        visited.add(current);

    }


    return visited;

}

module.exports = bfs;