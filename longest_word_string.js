function findLongestWordLength(str) {
    let arr = str.split(" ");
     var longestWord = arr.sort(function(a, b) { 
      return b.length - a.length;
    });
    return longestWord[0].length;
  }
  
  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));