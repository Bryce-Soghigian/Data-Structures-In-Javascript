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
            this.adjecencyList = {};
        }
        dfsRecursive(start){
            const result = [];
            const visited = {};
            const adjacencyList = this.adjacencyList;
            (function dfs(vertex){
              if (!vertex) return null;
              visited[vertex] = true;
              result.push(vertex);
              adjacencyList[vertex].forEach(neighbor => {
                  if (!visited[neighbor]) {
                    return dfs(neighbor);
                  }
              })
            })(start);
            return result;
        }

        addVertex(vertex){
            if(!this.adjecencyList[vertex]){
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
    //Go through array and add the nodes and make the nodes relate
    
    
    //use bottom up to add all the nodes and all of the edges
    //Go though each array
    /**
    let cache = []
    level one = [0,0]
    level two = []
    
    
    **/
    for(let i = 0;i<triangle.length-1;i++){
        for(let j = 0;j<triangle[i].length;j++){
            console.log(i,j,triangleGraph.adjecencyList)
            let node = triangle[i][j]
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
     console.log(triangleGraph.adjecencyList)   
    
    };

minimumTotal([[2],[3,4],[6,5,7],[4,1,8,3]])