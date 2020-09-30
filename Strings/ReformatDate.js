/**
 * @param {string} date
 * @return {string}
 */
var reformatDate = function(date) {
    date = date.split(" ")
let YYYY, MM, DD
    YYYY = date[2]
    DD = date[0]
    MM = date[1]
    DD = DD.replace(/\D/g,'');

    let monthArray = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
    const callback = (element) => element===MM
    MM = monthArray.findIndex(callback)+1
        DD = DD.toString()
    MM = MM.toString()
    if(DD.length<2){
        DD = "0"+ DD
    }
    if(MM.length<2){
        MM = "0" + MM
    }
    
    return `${YYYY}-${MM}-${DD}`
};