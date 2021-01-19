/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    //Time Complexity = o(paragraph.length) + o(paragraph.length) +o(newParagraph.length)
    //Replace Puncuations and convert to lowercase
    //Split into words
    //Count word freq 
    //Slelect word with max freq
    paragraph = paragraph.toLowerCase();//O(n)
    console.log(paragraph,"BEFORE REPLACE")
    paragraph = paragraph.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');//o(n)
    console.log(paragraph,"AFTER REPLACE")
    paragraph = paragraph.split(" ")//o(n)
    console.log(paragraph)
    //Count all items
    let ct = {}//Our count hashtable
    for(let i = 0;i<paragraph.length;i++){
        let key = paragraph[i]
        if(ct[key] !== undefined){
            ct[key] = ct[key] + 1
        }else{
            ct[key] = 1
        }
    }
        console.log(ct)
        let freq = Object.entries(ct)
        freq.sort((a,b) => {
            if(a[1] < b[1]){
                return -1
            }else if(a[1]> b[1]){
                return 1
            }else{
                return 0
            }
        })
        //New set from banned
    banned = new Set(banned)
        for(let i = 0;i<freq.length;i++){
            if(banned.has(freq[i][0])){
                //Remove from freq
                freq.splice(i,1)
            }
        }
            console.log(freq)
    //Result is the last word
    let last = freq.pop()
    return last[0]
    };