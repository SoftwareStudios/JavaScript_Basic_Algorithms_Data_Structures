function truncateString(str, num) {
    if(str.length>num){
       str=str.substring(0,num)+"...";
      return str;
    }
    else {
      return str;
    }
  }
  
  console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));