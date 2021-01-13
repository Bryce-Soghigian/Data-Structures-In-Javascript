/**
 * Leetcode 133
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    if (!node)
        return undefined;
    const cloned = new Map();
    return clone(node);
    
    function clone(navNode) {
        //Check if our cloned graph has the node
        if (!cloned.has(navNode.val)) {
            //If its not in there we create a new Node(val,[])
            //Then we set our maps val to be that
            //then we loop through the neighbor nodes of our node
            //For each node we want to push it into clonedNode.neighbors
            const clonedNode = new Node(navNode.val, []);
            cloned.set(navNode.val, clonedNode);
            for (let neighbor of navNode.neighbors) {
                clonedNode.neighbors.push(clone(neighbor));
            }
            return clonedNode;
        } else {
            
            //Else we return the nodes
            return cloned.get(navNode.val);
        }
    }
};