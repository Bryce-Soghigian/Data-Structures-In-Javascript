/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    
    let addressArray = address.split("");
    let defangedString = "";
    for(let i = 0;i<addressArray.length;i++){
        if(addressArray[i]==="."){
            defangedString += "[.]"
        }else{
            defangedString += addressArray[i]
        }
    }
    return defangedString
};