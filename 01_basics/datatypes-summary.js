// Primitive

// 7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100;
// const score:Number = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
// let userEmail;
let userEmail = undefined

const id = Symbol('123')
const anotherid = Symbol('123')

// console.log(id === anotherid);

// const bigNumber = 3456543576654356754n

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "Tara",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World")
}

console.log(typeof anotherid)
