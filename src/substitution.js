// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  
  function substitution(input, alphabet, encode = true) {
    // your solution code here
    
   const uniqueAlphabet = new Set(alphabet)
   const unique = []
   
   uniqueAlphabet.forEach(letter => {
     unique.push(letter)
   })
    
     if(!alphabet || alphabet.length < 26 || unique.length < 26){
      return false
    }
       
    const correctAlphabet = "abcdefghijklmnopqrstuvwxyz"    
    let result = ""   
    let resultObject = {};
    
  
    // encoding a message  
    if(encode){    
      for(let i = 0 ; i < alphabet.length ; i++){
        resultObject[correctAlphabet[i]] = alphabet[i] // setting the correct alphabet as key and given as value
      }
      for(let i = 0 ; i < input.length ; i++){
        const lowercase = input[i].toLowerCase()
        if(lowercase.includes(' ')){
          result += ' '
        }else{
          result += resultObject[lowercase]
        }   
     }       
  }      
    //decoding a message
    if(!encode){
        for(let i = 0 ; i < alphabet.length ; i++){
        resultObject[alphabet[i]]= correctAlphabet[i] // setting given alphabet as key, and correct as value 
      }
       for(let i = 0 ; i < input.length ; i++){
        if(input[i].includes(' ')){
          result+=' '
        }
         else{
           result += resultObject[input[i]]
         }
    }
  }
    return result     
 }
  
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
