// Write your tests here!
/*polybius("thinkful"); //> "4432423352125413"
polybius("Hello world"); //> '3251131343 2543241341'

polybius("3251131343 2543241341", false); //> "hello world"
polybius("4432423352125413", false); //> "th(i/j)nkful
polybius("44324233521254134", false); //> false*/

const polybiusModule = require("../src/polybius")
const { expect } = require("chai")

describe("my polybius tests", () => {
  it("should encode the message", () => {
    
    const actual = polybiusModule.polybius("thinkful")
    const expected = '4432423352125413'
    
    expect(actual).to.eql(expected)
  }) 
  
  it("should allow for spaces and ignore capital letters", () => {
    
    const actual = polybiusModule.polybius("Hello world")
    const expected = '3251131343 2543241341'
    
    expect(actual).to.eql(expected)
  }) 
  it("should decode and allow for spaces", () => {
    
    const actual = polybiusModule.polybius("3251131343 2543241341", false)
    const expected = "hello world"
    
    expect(actual).to.eql(expected)
  }) 
  
  it("should return both (i/j)", () => {
    
    const actual = polybiusModule.polybius("4432423352125413", false)
    const expected = "th(i/j)nkful"
    
    expect(actual).to.eql(expected)
  }) 
  it("should return false if input is odd length", () => {
    
    const actual = polybiusModule.polybius("44324233521254134", false)
     
    expect(actual).to.be.false
  }) 
})

