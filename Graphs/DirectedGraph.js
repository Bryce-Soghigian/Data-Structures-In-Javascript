class DirectedGraph{
    constructor(){
        this.adjecencyList = {};
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