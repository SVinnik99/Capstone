// Write your tests here!
/*caesar("thinkful", 3); //> 'wklqnixo'
caesar("thinkful", -3); //> 'qefkhcri'
caesar("wklqnixo", 3, false); //> 'thinkful'

caesar("This is a secret message!", 8); //> 'bpqa qa i amkzmb umaaiom!'
caesar("BPQA qa I amkzmb umaaiom!", 8, false); //> 'this is a secret message!'

caesar("thinkful"); //> false
caesar("thinkful", 99); //> false
caesar("thinkful", -26); //> false*/

const { expect } = require("chai")
const caesarModule = require("../src/caesar")

describe("my caesar tests", () => {
    it("should shift the letters 3 positions forward", () => {
        
        const actual = caesarModule.caesar("thinkful", 3)
        const expected = 'wklqnixo'

        expect(actual).to.equal(expected)
    })
    it("should shift the letters 3 positions backwards", () =>{
      
      const actual = caesarModule.caesar("thinkful", -3)
      const expected = 'qefkhcri'
      expect(actual).to.equal(expected)
    })
    
    it("should decode the message", () => {
      
      const actual = caesarModule.caesar("wklqnixo", 3, false)
      const expected = 'thinkful'
      expect(actual).to.equal(expected)
    })
  it("should ecode the message and shift by 8", () => {
      
      const actual = caesarModule.caesar("This is a secret message!", 8)
      const expected = 'bpqa qa i amkzmb umaaiom!'
      expect(actual).to.equal(expected)
    })
  it("should decode the message and shift by 8", () => {
      
      const actual = caesarModule.caesar("BPQA qa I amkzmb umaaiom!", 8, false)
      const expected = 'this is a secret message!'
      expect(actual).to.equal(expected)
    })
  
  it("should return false if no shift number is presented", () => {
      
      const actual = caesarModule.caesar("thinkful")
     
      expect(actual).to.be.false
    })
  
  it("should return false if shift is greater than 25", () => {
      
      const actual = caesarModule.caesar("thinkful" , 99)
     
      expect(actual).to.be.false
    })
  it("should return false if shift is less than -25", () => {
      
      const actual = caesarModule.caesar("thinkful" , -26)
     
      expect(actual).to.be.false
    })
})