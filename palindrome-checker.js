function palindrome(str) {
  console.log("----------------------");
  console.log("Before Split: " + str);
  console.log("----------------------");
  str = str.replace(/[^\w\s]/g, "").toLowerCase();  // to remove special characters, punctuations, comma,..
  str = str.replace(/\s/g, "");  // to remove spaces
  str = str.replace(/_/g, "");  // to remove underscore
  console.log("TEST after Removing PUNC, UPPERCASE and SPACE: "+str);
  let arr = str.split('');
  console.log("After converting to ARRAY: " + arr);
  let rev = arr.reverse();
  console.log("Reversed array: "+rev);
  rev = rev.join("");
  console.log("Back to STRING: "+rev);
  if(str === rev){
    console.log("TRUE");
    return true;
  }
  else {
    console.log("FALSE");
    return false;
  }
}

palindrome("eye");
palindrome("0_0 (: /-\ :) 0-0");
palindrome("Hello");
palindrome("A man, a plan, a canal. Panama");
palindrome("Joking, Ha ha ha..!");
console.log("======================");
console.log("Javascript is Running!");


// ************* SIMPLIFIED ***************** //
function palindrome(str) {
  str = str.replace(/[^\w\s]/g, "").toLowerCase();
  str = str.replace(/\s/g, "");
  str = str.replace(/_/g, "");
  let arr = str.split('');
  let rev = arr.reverse();
  rev = rev.join("");
  if(str === rev){
    return true;
  }
  else {
    return false;
  }
}

palindrome("eye");
