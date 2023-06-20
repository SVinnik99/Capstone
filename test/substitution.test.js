// Write your tests here!
/*substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev"); //> 'jrufscpw'
substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev"); //> 'elp xhm xf mbymwwmfj dne'
substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false); //> 'thinkful'

substitution("message", "$wae&zrdxtfcygvuhbijnokmpl"); //> "y&ii$r&"
substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false); //> "message"

substitution("thinkful", "short"); //> false
substitution("thinkful", "abcabcabcabcabcabcabcabcyz"); //> false*/

const { expect } = require("chai")
const substitutionModule = require("../src/substitution")

describe("my substitution tests", () => {
  
  it("should encode the message with the given the substitution alphabet", () => {
     
     const actual = substitutionModule.substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev")
     const expected = 'jrufscpw'
     
     expect(actual).to.equal(expected)
     })
  it("should encode the message and ignore uppercase letter", () => {
     
     const actual = substitutionModule.substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev")
     const expected = 'elp xhm xf mbymwwmfj dne'
     
     expect(actual).to.equal(expected)
     })
  it("should decode the message with the given the substitution alphabet", () => {
     
     const actual = substitutionModule.substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false)
     const expected = 'thinkful'
     
     expect(actual).to.equal(expected)
     })
   it("should allow to encode special characters", () => {
     
     const actual = substitutionModule.substitution("message", "$wae&zrdxtfcygvuhbijnokmpl")
     const expected = "y&ii$r&"
     
     expect(actual).to.equal(expected)
     })
  it("should allow to decode special characters", () => {
     
     const actual = substitutionModule.substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false)
     const expected = "message"
     
     expect(actual).to.equal(expected)
     })
   it("should return false if alphabet is less than 26 letters", () => {
     
     const actual = substitutionModule.substitution("thinkful", "short")
         
     expect(actual).to.be.false
     })
  it("should return false if alphabet does not contain unique characters", () => {
     
     const actual = substitutionModule.substitution("thinkful", "abcabcabcabcabcabcabcabcyz")
         
     expect(actual).to.be.false
     })
  
})


