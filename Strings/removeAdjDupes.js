while (!allDuplicatesAreRemoved) {
  for (let i = 0; i < s.length; i++) {
    //Find adjecent duplicates that are of length k
    //Loop through substring of s[i] s[i+1] s[i+2] s[k]
    dupe = 0;
    let j = i;

    while (s[i] === s[j]) {
      if (dupe === k) {
        //Remove the string
      } else {
        dupe++;
        j++;
      }
    }
  }
}
