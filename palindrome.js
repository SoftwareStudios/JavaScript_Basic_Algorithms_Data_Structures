function palindrome(str) {
 
    //remove all non-alphanumeric characters (punctuation, spaces and symbols)
    let replacedString = str.replace(/[^a-z0-9]/gi, '');
  
    //to uppercase
    replacedString=replacedString.toUpperCase();
  
    //put each char into array to reverse the string using built in function reverse array.
    let arr = replacedString.split("");
  
    //reverse the array of chars
    arr = arr.reverse();
  
    //convert array back to string
    let reverseString= arr.join('');
  
    //if reversed string and forwards string are the same, they are palindromes.
    if(reverseString==replacedString){
      return true;
    }
    else
    return false;
  }
  
  palindrome("not a palindrome");