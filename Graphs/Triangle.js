/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    /**
    1.Turn our array into a graph
    2. Traverse all of our paths in the graph
    2a. find the summation of all paths
    2b. return the smallest sum in paths arr
    **/
class DirectedGraph{
        constructor(){
            this.adjecencyList = [];
        }


        addVertex(vertex){
            if(!this.adjecencyList.includes(vertex)){
                this.adjecencyList[vertex] = []
            }
        }
        addEdge(source,destination){
            if(!this.adjecencyList[source]){
                this.addVertex(source)
            }
            this.adjecencyList[source].push(destination);
     
        }
        removeEdge(source, destination) {
            this.adjacencyList[source] = this.adjacencyList[source].filter(vertex => vertex !== destination);
            this.adjacencyList[destination] = this.adjacencyList[destination].filter(vertex => vertex !== source);
          }
          removeVertex(vertex) {
            while (this.adjacencyList[vertex]) {
              const adjacentVertex = this.adjacencyList[vertex].pop();
              this.removeEdge(vertex, adjacentVertex);
            }
            delete this.adjacencyList[vertex];
        }
    }
    let triangleGraph = new DirectedGraph();
//===========Here we go through the graph and add nodes and edges to the graph=====
    for(let i = 0;i<triangle.length;i++){
        for(let j = 0;j<triangle[i].length;j++){
            let node = triangle[i][j]
            if(i === triangle.length-1){//We are at the final level and don't need to add edges
                if(!triangleGraph.adjecencyList[node]){
                triangleGraph.addVertex(node)
                }
            }else{
            let leftEdge = triangle[i+1][j]
            let rightEdge = triangle[i+1][j+1]
          if(!triangleGraph.adjecencyList[node]){
            triangleGraph.addVertex(node)
            if(leftEdge !== undefined){//Check if left edge is out of bounds
            triangleGraph.addEdge(node,leftEdge)
            }
            if(rightEdge !== undefined){
                triangleGraph.addEdge(node,rightEdge)
            }
          }   
            }

        }
    }
console.log(triangleGraph.adjecencyList)    //Now we want to write a depth first search and track the max dfs traversal
DirectedGraph.prototype.bfs = function(start,adjList) {
    const queue = [start];
    const result = [];
    const visited = {};
    visited[start] = true;
    let currentVertex;
    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);
      adjList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return result;
}
    console.log(triangleGraph.adjecencyList)
    console.log(triangleGraph.bfs(triangleGraph.adjecencyList[0],triangleGraph.adjecencyList))
    
    };

