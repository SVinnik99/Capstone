// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here----
    if (!shift || shift > 25 || shift < -25) {
      return false;
    }
    
    if(!encode){
      shift = -shift
    }
    //const alphabet = "abcdefghijklmnopqrstuvwxyz"
    let solved = "";
    let result = ""
    const lowerCaseInput = input.toLowerCase()
    
    for (let i = 0; i < lowerCaseInput.length; i++) {
      const asciiNum = lowerCaseInput[i].charCodeAt();
      if(asciiNum >= 97 && asciiNum <= 122){
        solved += String.fromCharCode(asciiNum + shift);              
      }
       else {
        solved += lowerCaseInput[i]
      }         
    }
    
    for(let i = 0 ; i < solved.length ; i++){
      const charNum = solved[i].charCodeAt();

      if(charNum < 97 && charNum > 72){
        result += String.fromCharCode(charNum + 26)
      }
      else if(charNum > 122 && charNum < 147 ){
        result += String.fromCharCode(charNum - 26)
      }
       else {
        result += solved[i]
       }
    }
    return result 
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
