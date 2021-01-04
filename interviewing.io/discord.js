/*
banned = ['fool', 'silly', 'fork'];

MrFool
xxSillyxx
ForkU
MrFoo1

subs = {
  o: ['0'],
  l: ['1', '|'],
  i: ['1', '!'],
  s: ['$', '5'],
  r: ['4'],
};
*/

const subs = {
    o: ['0'],
    l: ['1', '|'],
    i: ['1', '!'],
    s: ['$', '5'],
    r: ['4'],
  };
  
  
  const solutionVersionOne = (bannedArray,username,subs) => {
    //Returns a boolean true or false
  /*
  o(banned + username.length+ subs[s[i]])
  1. Throguh bannedArray into a hashtable
  2. We loop thorugh the string and basically trasform it into all of the possible words
  3. Look up str in our hasshtable
  3a if exists return true
  3b else return false
  str.includes()
  
  
  f001
    */
  
  let set = new Set(bannedArray)
  console.log(set)
  
  let lookUpSub = {}
  let lus = lookUpSub
  let obj = Object.entries(subs)
  for(let i = 0;i<obj.length;i++){
    let keys = obj[i][1]
    let value = obj[i][0]
    //If the length is  < 1 in keys 
  for(let item of keys){
    if(lus[item] !== undefined){
      lus[item].push(value)
    }else{
      lus[item] = [value]
    }
  }
  }
  console.log(obj)
  console.log(lus)
  let possibilites = [];//fool fooi
  for(let i = 0;i<username.length;i++){
    //
  let key = username[i]
  if(lus[key] !== undefined){
  
  if(lus[key].length >= 2){
  
  }else{
  
  }
  }else{
    possibilites.map(x => x += key)
  }
  }
  console.log(possibilites)
  
  }
  
  /*
  s = f11
  possibilites(s) => [
    fii
    fil
    fll
    fli
  ]
  */
  
  
  let banned = ['fool', 'silliy', 'fork'];
  
  console.log(solution(banned,"f001",subs))