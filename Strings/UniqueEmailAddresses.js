/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    let unique = new Set();
    for(let i = 0;i<emails.length;i++){
        let currString = emails[i].split("@")
        let local = currString[0]
        local = local.split("").filter(char => char !== ".")
        let newStr = ""
        for(let j = 0;j<local.length;j++){
            if(local[j]=== "+"){
                break
            }else{
                newStr += local[j]
            }
        }
                console.log(newStr,currString[1])
        let transformedString = newStr+"@" +currString[1]
        unique.add(transformedString)

        }
    return Array.from(unique).length
};