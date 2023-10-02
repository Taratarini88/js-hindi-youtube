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


// https://262.ecma-international.org/5.1/#sec-11.4.3

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap(Non-Primitive)

let myYoutubename = "odiawebdeveloper"

let anothername = myYoutubename

anothername = "chai aur code"

// console.log(myYoutubename)
// console.log(anothername)

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "tara@gmail.com"


console.log(userOne)
console.log(userTwo)

console.log(userOne.email)
console.log(userTwo.email)