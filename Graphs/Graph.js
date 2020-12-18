class Graph {
    constructor(numOfVertices){
        this.numOfVertices = numOfVertices;
        this.AdjecentList = []
    }  

    //Methods
    addVertex(v){
        this.AdjecentList.set(v, [])
    }


    addEdge(v,w){
    // get the list for vertex v and put the 
    // vertex w denoting edge between v and w 
        this.AdjecentList.get(v).push(w)
    // Since graph is undirected, 
    // add an edge from w to v also 
        this.AdjecentList.get(w).push(v); 
    }

    printGraph(){
        let fetchKeys = this.AdjecentList.keys()//Fetching alll the vertices
        for(let i of fetchKeys){
            let fetchValues = this.AdjecentList.get(i)
            let conc = "";

            for(let j of fetchValues)
            conc += j + " ";
            console.log(i + " -> " + conc); 

        }
    }

}


// Using the above implemented graph class 
var g = new Graph(6); 
var vertices = [ 'A', 'B', 'C', 'D', 'E', 'F' ]; 
  
// adding vertices 
for (var i = 0; i < vertices.length; i++) { 
    g.addVertex(vertices[i]); 
} 
  
// adding edges 
g.addEdge('A', 'B'); 
g.addEdge('A', 'D'); 
g.addEdge('A', 'E'); 
g.addEdge('B', 'C'); 
g.addEdge('D', 'E'); 
g.addEdge('E', 'F'); 
g.addEdge('E', 'C'); 
g.addEdge('C', 'F'); 
console.log(g,"graph")


let myGraph = new Graph(4)
var verticesSocialArray = ["brycesoghigian", "example1", "example2", "example3"]

for(let i = 0;i<verticesSocialArray.length;i++){
    myGraph.addVertex(verticesSocialArray[i])
}
myGraph.addEdge("example2","brycesoghigian")
myGraph.addEdge("brycesoghigian", "example1")
myGraph.addEdge("brycesoghigian","example3");
myGraph.addEdge("brycesoghigian","example2");
myGraph.addEdge("example3","example2")

console.log(myGraph,"Social Graph")

