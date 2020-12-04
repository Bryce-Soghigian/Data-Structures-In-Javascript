/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthFactor = function(n, k) {
    /**
    Given two positive integers n and k.

A factor of an integer n is defined as an integer i where n % i == 0.

Consider a list of all factors of n sorted in ascending order, return the kth factor in this list or return -1 if n has less than k factors.

Explanation: Factors list is [1, 2, 3, 4, 6, 12], the 3rd factor is 3.


So to solve this problem we want to go through and make a list of all of the factors and sort them all. There are a couple ways to do this one is using a min max heap and heapify our resulting factors array
then we just wnat to return heap[heap.heap.length - k];
    **/
let factors = []
for(let i = 0;i<n+1;i++){
    if(n % i === 0){
        factors.push(i)
    }
}
let returnValue = 0
for(let i = 0;i<k;i++){
    if(i+1 === k){
        returnValue = factors[i]
    }
}
    if(returnValue === undefined) return -1
    return returnValue
    //Actually no need to use a heap or sort because the results are inserting in asc order
};