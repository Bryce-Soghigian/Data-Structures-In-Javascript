/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function(bookings, n) {
    /**
    We have n flights and they are labeled from 1 to n
    
    
    we have a list of the bookings 
    the item booking [i, j, k]
    
    **/
    let flights = []
    for(let i = 0;i<n;i++){
        flights[i] = 0
    }
    for(let i = 0;i<bookings.length;i++){
        //For each item we want to loop from i to j and add k to both their totals
        
        for(let j = bookings[i][0];j<bookings[i][1]+1;j++ ){
            
            flights[j-1] += bookings[i][2]
        }
    }
    
    return flights
};