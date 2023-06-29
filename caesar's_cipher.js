function rot13(str) {

    //go through string get unicode for each char, if space then ignore
    
    var result = '';
    var charcode = 0;
    
    for(let i=0; i<str.length;i++){
      if(str.charAt(i)!=" "){
        charcode = (str[i].charCodeAt()) + 13;
        if(charcode>26){
          charcode=charcode-26;
        }
        result += String.fromCharCode(charcode);
      }
      else {
        result+=' ';
      } 
    
    }
    
      return result;
    }
    
    console.log(rot13("SERR PBQR PNZC"));