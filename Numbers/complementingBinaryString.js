/**
 * @param {number} N
 * @return {number}
 */
var bitwiseComplement = function(N) {
    function dec2bin(dec){
        return (dec >>> 0).toString(2);
    }
    
    let binary = dec2bin(N).toString();
        console.log(binary)
    let newBinary = ""
    for(let i = 0;i<binary.length;i++){
        if(binary[i]=== "1"){
            newBinary += "0"
        }else{
            newBinary += "1"
        }
    }
     return parseInt(newBinary, 2)
        
    };