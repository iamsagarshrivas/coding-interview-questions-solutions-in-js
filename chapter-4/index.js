const Graph = require("../data-structures/Graph");
const bfs = require("../data-structures/Graph/BFS");
const dfs = require("../data-structures/Graph/DFS");

const graph = new Graph(Graph.UNDIRECTED);

graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(1, 4);
graph.addEdge(5, 2);
graph.addEdge(6, 3);
graph.addEdge(7, 3);
graph.addEdge(7, 8);
graph.addEdge(8, 9);
graph.addEdge(10, 5);
graph.addEdge(10, 6);

console.log(graph.toString(),"\n");

console.log("DFS:",dfs(graph, 1));
console.log("BFS:",bfs(graph, 1));
