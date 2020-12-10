var ProductOfNumbers = class {
    constructor(){
        this.array = [];
    }
    add(num){
        this.array.push(num)
    }
    getProduct(k){
        let subarray = []
        //Grab the kth last elements
        for(let i = 0;i<this.array.length;i++){
            if(i>= this.array.length - k){
                subarray.push(this.array[i])
            }
        }
        const reducer = (a,b) => a *= b;
        let kthproduct = subarray.reduce(reducer);
        return kthproduct
    }
}

/** 
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */