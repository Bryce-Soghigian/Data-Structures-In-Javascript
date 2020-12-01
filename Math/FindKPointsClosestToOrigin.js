/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function(points, K) {
    /**
// Go through each pair of coords and calulate the ones closest to 0,0
return the top k closest points=
dist((x, y), (a, b)) = √(x - a)² + (y - b)²
**/
    let arr = []
    
    for(let i = 0;i<points.length;i++){
        //Calculate distance for current pair of coordinates and push it into an array with that val
        let formula = (0-points[i][0])**2 + (0-points[i][1])**2
        let distance = Math.sqrt(formula)
        
        //Calculate Distance
        
        
        //push values into arr
        arr.push({distance: distance, points:points[i]})
    }
    console.log(arr)
    //Sort array by lowest distance and return the last k elements
arr.sort((a,b) =>{
    if(a.distance< b.distance){
        return -1
    }else if(a.distance > b.distance){
        return 1
    }else{
        return 0
    }
})
let returnArray = []
    console.log(arr,"AFTER SORT")
    for(let i = 0;i<=K-1;i++){
        returnArray.push(arr[i].points)
    }
    return returnArray
}
