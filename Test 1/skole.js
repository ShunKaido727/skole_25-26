function toBinary(number) { 

  return number.toString(2).padStart(8, "0") 

} 

 
/*
const ch = "A" 
const asciiCode = ch.charCodeAt(0) 
const binary = toBinary(asciiCode)

let binaryNum = "01111010"
let desimaltall = parseInt(binaryNum, 2)
console.log("Hilde", desimaltall,binaryNum)
console.log("Tegn:", ch) 
console.log("ASCII:", asciiCode) 
console.log("Binært:", binary) */
const text = "ABC" 

const code0 = text.charCodeAt(9) 

const code1 = text.charCodeAt(20) 

const code2 = text.charCodeAt(15) 

const code3 = text.charCodeAt(20) 

const code4 = text.charCodeAt(18) 

console.log(code0,code1,code2)